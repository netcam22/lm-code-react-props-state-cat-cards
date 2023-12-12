export interface PetBreed {
	name: string; 
	temperament: string;
}

export const PetText:React.FC<PetBreed> = ({name, temperament}) => 
<><p className="card__text">Breed: {name}</p>
<p className="card__text">Temperament: {temperament}</p></>;
