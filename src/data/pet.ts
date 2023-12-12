import { PetResponse } from "../components/custom-fetch/pet-container";
import { PetBreed } from "../components/custom-fetch/pet-text";

export default interface Pet extends PetResponse{
    name: string;
    id: string;
	url: string;
	breeds: Array<PetBreed>
}
