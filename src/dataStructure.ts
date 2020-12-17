
export interface Recipe {
    label: string,
    ingredients: Ingredient[]
}


export interface Ingredient {
    label: string
}

export interface Sideline {
    breakfast:Recipe,
    snack:Recipe,
    aperitif:Recipe,
    householdProducts:Recipe,
    others:Recipe,
}

export function defaultSidelines():Sideline {
    const newRecipe = (label:string):Recipe => ({ label, ingredients:[] });
    return {
        breakfast:         newRecipe('Petit déjeuner'),
        snack:             newRecipe('Goutter'),
        aperitif:          newRecipe('Apéro'),
        householdProducts: newRecipe('Entretien'),
        others:            newRecipe('Autres'),
    };
}

