
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
