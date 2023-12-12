import {images} from '../data/cat_data';
import PetImage from './pet_image';

interface PetCardProps {
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
   petIndex: number;
}

const PetCard: React.FC<PetCardProps> = ({name, species, favFoods, birthYear, petIndex}) => {
    /*
    console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);
    */
    return <>
        <div className="card">
        <h3 className="card__text card__header">{name}</h3>
        {petIndex < images.length && (
        <PetImage 
			image={images[petIndex].image}
			altText={images[petIndex].altText}
			licenceType={images[petIndex].licenceType}
			licenceUrl={images[petIndex].licenceUrl}
			attributionName={images[petIndex].attributionName}
			attributionUrl={images[petIndex].attributionUrl}
        />
        )}
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
        </div>;
    </>
    }

export default PetCard;
