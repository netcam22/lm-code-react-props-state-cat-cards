export interface Pet {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
}

export interface PetInfo extends Pet{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    id:string;
    image: string,
    altText: string,
    licenceType: string,
	licenceUrl: string,
	attributionName: string,
	attributionUrl: string;
}
