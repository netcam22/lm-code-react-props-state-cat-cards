import { PetText} from "./pet-text";
import { PetResponse } from "./pet-container";

export const PetDisplay:React.FC<PetResponse> = ({url, breeds}) => 
<><img alt = "" className = "card__image" src = {url}/>
{breeds.map((breed, index) => {
        return <PetText key={index.toString()} name = {breed.name} temperament= {breed.temperament} />
        })} 
</>;
