import {
    atom,
    RecoilState,
} from 'recoil';

export interface Recipe {
    label: string,
    ingredients: RecoilState<Ingredient>[]
}


export interface Ingredient {
    label: string
}

export const mealsState:RecoilState<Recipe[]> = atom<Recipe[]>({ key: 'meals', default: [] });

const newRecipe = (key:string, label:string):RecoilState<Recipe> => {
    const defaultR:Recipe = {
        label,
        ingredients:[]
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

