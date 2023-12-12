import {images} from '../data/cat_data';
import CatImage from './cat_image';

interface CatCardProps {
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
   catIndex: number;
}

const CatCard: React.FC<CatCardProps> = ({name, species, favFoods, birthYear, catIndex}) => {
    /*
    console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);
    */
    return <>
        <div className="card">
        <h3 className="card__text card__header">{name}</h3>
        {catIndex < images.length && (
        <CatImage 
			image={images[catIndex].image}
			altText={images[catIndex].altText}
			licenceType={images[catIndex].licenceType}
			licenceUrl={images[catIndex].licenceUrl}
			attributionName={images[catIndex].attributionName}
			attributionUrl={images[catIndex].attributionUrl}
        />
        )}
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
        </div>;
    </>
    }

export default CatCard;
