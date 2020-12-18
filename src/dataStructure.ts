import {
    atom,
    RecoilState,
} from 'recoil';

export interface Recipe {
    label: string,
    ingredients: Ingredient[]
}


export interface Ingredient {
    label: string
}

export function mealsState():RecoilState<Recipe[]> {
    return atom<Recipe[]>({ key: 'meals', default: [] });
}

export function sidelinesStates():RecoilState<Recipe>[] {
    const newRecipe = (key:string, label:string):RecoilState<Recipe> => {
        const defaultR:Recipe = {
            label,
            ingredients:[]
        };
        return atom({ key, default: defaultR });
    }
    return [
        newRecipe('sideline_breakfast',         'Petit déjeuner'),
        newRecipe('sideline_snack',             'Goutter'),
        newRecipe('sideline_aperitif',          'Apéro'),
        newRecipe('sideline_householdProducts', 'Entretien'),
        newRecipe('sideline_others',            'Autres'),
    ];
}

