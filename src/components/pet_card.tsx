import PetImage from './pet_image';

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

    const favFoods = props.favFoods.reduce((acc: string, food: string) => 
    `${acc}, ${food}` , "").replace(",", "");
    const len = props.favFoods.length;
    const favFoodsTitle = len === 0 ? "": len === 1? "Favourite Food" : "Favourite Foods";

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
        <p className="card__text">{favFoodsTitle}: {favFoods}</p>
        <p className="card__text">Birth Year: {props.birthYear}</p>
        </div>
    </>
    }

export default PetCard;
