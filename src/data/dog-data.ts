import { v4 as uuidv4 } from 'uuid';
import {Pet, PetInfo} from './pet';
import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';

const dogs: Array<Pet> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2022,
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2022,
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2018,
	},
];

const dogImages = [
	{
		image: dog1,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 3.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
		attributionName: 'Filip B',
		attributionUrl: 'https://commons.wikimedia.org/wiki/File:Dog_In_The_Grass.jpg'
	},
	{
		image: dog2,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'leisergu',
		attributionUrl: 'https://www.flickr.com/photos/leisergu/2873249326'
	},
	{
		image: dog3,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 3.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
		attributionName: 'Sp..andreea        ',
		attributionUrl: 'https://commons.wikimedia.org/wiki/File:My_dog.jpg'
	},
];

export const dogData = dogs.map((dog: Pet, index: number): PetInfo => {
    return {...dog,
		id: uuidv4(),
		image: dogImages[index].image,
		altText: dogImages[index].altText,
		licenceType: dogImages[index].licenceType,
		licenceUrl: dogImages[index].licenceUrl,
		attributionName: dogImages[index].attributionName,
		attributionUrl: dogImages[index].attributionUrl};
});

export const dogEndPoint = "https://api.thedogapi.com/v1/images/search?limit=6&has_breeds=1&api_key=live_SGCOCUSRlMPtuUyfbvJYyO3b54YDIH50fQWGPwY8yySWMudUobwONZkbMBiWUzBZ";
export const dogNames = ["Milo", "Charlie", "Teddy", "Luna", "Coco", "Bella"];