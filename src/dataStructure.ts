
export enum LocalStorageKey {
  APP_STATE = 'provisions-app-state',
}

export interface Provision {
    quantity: number,
    unit: string,
    label: string,
}

export interface ProvisionList {
    provisions: Provision[],
    label: string,
    note: string,
}

export interface ShoppingSession {
    menus: ProvisionList[],
    sidelines: {
        breakfast: ProvisionList,
        snack: ProvisionList,
        aperitif: ProvisionList,
        householdProducts: ProvisionList,
    },
    finalList: ProvisionList,
}

export interface AppState {
    activeStep: number,
    shoppingSession: ShoppingSession,
}

export function defaultState() {
    return {
        activeStep: 0,
        shoppingSession: {
            menus: [],
            sidelines: {
                breakfast: {
                    provisions: [],
                    label: "Petit-Déjeuner",
                    note: "",
                },
                snack: {
                    provisions: [],
                    label: "Goutter",
                    note: "",
                },
                aperitif: {
                    provisions: [],
                    label: "Apéritif",
                    note: "",
                },
                householdProducts: {
                    provisions: [],
                    label: "Entretien",
                    note: "",
                },
            },
            finalList: {
                provisions: [],
                label: "Liste des courses",
                note: ""
            },
        },
    };
}

