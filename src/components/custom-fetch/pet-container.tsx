import {useFetch} from "./fetch-data";
import { PetDisplay } from "./pet-display";
import { PetBreed } from "./pet-text";

export interface PetResponse {
	id: string;
	url: string;
	breeds: Array<PetBreed>
}

interface APICallProps {
    petType: string;
    endPoint: string;
    names: Array<string>;
}

export const PetContainer: React.FC<APICallProps> = ({petType, endPoint, names}) => {

    const petData = useFetch<Array<PetResponse>>(endPoint);
    return (<>
		{petData.isFetching ? 
		<h2 className='header__title'>Fetching...</h2> 
		: <h2 className='header__title'>Some {petType}s and their breeds:</h2>}
        <div className='cards__wrapper'>
		{petData.data &&
        petData.data.map((pet, index) => {
        return <div key={index} className="card">
            <h3 className="card__text card__header">{names[index]}</h3>
            <PetDisplay key={`${pet.id}${index}`} id={`${pet.id}${index}`} url = {pet.url} breeds = {pet.breeds}/>
            </div>
        })} 
        </div>
		</>)
    }
