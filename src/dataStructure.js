import {
    atom,
    selector,
    RecoilState,
	AtomEffect,
    RecoilValueReadOnly,
} from 'recoil';

export interface Recipe {
    label: string,
    ingredients: RecoilState<Ingredient[]>,
}

export interface Ingredient {
    id: string,
    label: string,
    quantity: string,
}

class DefaultValue {}

const localStorageEffect:AtomEffect<Recipe[]> = key => ({setSelf, onSet}) => {
	const savedValue = localStorage.getItem(key)
	if (savedValue != null)
		setSelf(JSON.parse(savedValue));

	onSet(newValue => {
		if (newValue instanceof DefaultValue)
			localStorage.removeItem(key);
		else
			localStorage.setItem(key, JSON.stringify(newValue));
	});
};

export const getIngredientsFromKey = (key) => {
	return atom({
		key,
		default: [],
		effects_UNSTABLE: [
			({ setSelf, onSet, trigger }) => {
				// For initialization
				if(trigger === 'get') {
					const savedString = localStorage.getItem(key);
					if (savedString != null) {
						let savedArray = JSON.parse(savedString);
						setSelf(savedArray);
					}
				}
				// Updates made on the atom
				onSet(ingredientArray => {
					localStorage.setItem(key, JSON.stringify(ingredientArray));
				});
			}
		]
	});
};

/**
 * An atom of Recipe[]
 * It is used only in the meal tab
 */
export const mealsState:RecoilState = atom({
	key: 'meals',
	default: [],
	effects_UNSTABLE: [
		({setSelf, onSet, trigger}) => {
			// Initialization
			if(trigger === 'get') {
				const savedString = localStorage.getItem('meals')
				if (savedString != null) {
					const savedArray = JSON.parse(savedString)
					let atomized = savedArray.map(meal => {
						const ingredientsKey = meal.ingredients;
						meal.ingredients = getIngredientsFromKey(ingredientsKey);
						return meal;
					});
					setSelf(atomized);
				}
			}
			
			// Modification done in the atom
			onSet(newMeals => {
				localStorage.setItem('meals', JSON.stringify(newMeals));
			});
		},
		//localStorageEffect('userMeals')
	]
});

const newRecipe = (key:string, label:string):RecoilState<Recipe> => {
    const defaultR:Recipe = {
        label,
		/// An atom of Ingredient[]
        ingredients: getIngredientsFromKey(key+'-ingredients')
    };
    return atom({ key, default: defaultR });
}

export const sidelinesStates:RecoilState<Recipe>[] = [
    newRecipe('sideline_breakfast',         'Petit déjeuner'),
    newRecipe('sideline_snack',             'Goutter'),
    newRecipe('sideline_aperitif',          'Apéro'),
    newRecipe('sideline_householdProducts', 'Entretien'),
    newRecipe('sideline_others',            'Autres'),
];

/// A selector of Ingredient[]
export const allIngredientsSelector:RecoilValueReadOnly<Ingredient[]> = selector({
    key: "allIngredientsSelector",
    get: ({get}) => {
        const slIngredients:Ingredient[] = sidelinesStates.reduce(
            (acc:Ingredient[], slState:RecoilState<Recipe>) => {
                const sl:Recipe = get(slState);
                return [...acc, ...get(sl.ingredients)];
            }, []);
        const mIngredients:Ingredient[] = get(mealsState).reduce(
            (acc:Ingredient[], m:Recipe) => { return [...acc, ...get(m.ingredients)]}, []);
        return [...mIngredients, ...slIngredients];
    }
});

/**
 * A selector that regroups all the ingredients of all meals. It contains Ingredient[][]
 * \return A Ingredient[][] where the first level groups the same ingredients togethers
 *         and the second level groups the ingredients themeselves, one per meal.
 */
export const uniqueIngredientsSelector:RecoilValueReadOnly<Ingredient[][]> = selector({
    key: "uniqueIngredientsSelector",
    get: ({get}) => {
        let obj:any = {};
        const all:Ingredient[] = get(allIngredientsSelector);
        all.forEach((ing:Ingredient) => {
            if(obj[ing.id] === undefined)
                obj[ing.id] = [];
            obj[ing.id].push(ing);
        });

        return Object.entries(obj).map(
            (pair:any[]) => {
                const value:Ingredient[] = pair[1];
                return (value)
            });
    }
});

