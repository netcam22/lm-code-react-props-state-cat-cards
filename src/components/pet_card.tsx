import PetImage from './pet_image';
import PetFood from './pet_food';

interface PetCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    petIndex: number;
    image: string,
    altText: string,
    licenceType: string,
	licenceUrl: string,
	attributionName: string,
	attributionUrl: string;
    petCount: number;
}

const PetCard: React.FC<PetCardProps> = (props) => {
    /*
    console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);
    */
    return <>
        <div className="card">
        <h3 className="card__text card__header">{props.name}</h3>
        {props.petIndex < props.petCount && (
        <PetImage 
            key = {props.petIndex.toString()}
			image={props.image}
			altText={props.altText}
			licenceType={props.licenceType}
			licenceUrl={props.licenceUrl}
			attributionName={props.attributionName}
			attributionUrl={props.attributionUrl}
        />
        )}
        <p className="card__text">Species: {props.species}</p>
        <p className="card__text">Favourite Food(s): {props.favFoods}</p>
        {props.favFoods.map((food: string, index: number) => 
        <PetFood key = {index.toString()} foodItem = {food}/>)};
        <p className="card__text">Birth Year: {props.birthYear}</p>
        </div>;
    </>
    }

export default PetCard;
