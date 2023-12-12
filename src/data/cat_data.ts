import { v4 as uuidv4 } from 'uuid';
import Cat from './cat';

const catStaticData = 
		[
			{
					 name: 'Little Miss Purrfect',
					 species: 'Cat',
					 favFoods: ['wet food', 'dry food'],
					 birthYear: 2016,
				 },
				 {
					 name: 'Mr Gwumpy',
					 species: 'Cat',
					 favFoods: ['caviar'],
					 birthYear: 2016,
				 },
				 {
					 name: 'Dopey',
					 species: 'Cat',
					 favFoods: ['bugs'],
					 birthYear: 2018,
				 },
				 {
					 name: 'Jumpy',
					 species: 'Scaredy Cat',
					 favFoods: ['not cucumbers!'],
					 birthYear: 2008,
				 },
				 {
					 name: 'Meowsalot',
					 species: 'Cat',
					 favFoods: ['tuna', 'catnip', 'celery'],
					 birthYear: 2012,
				 },
				 {
					 name: 'Cindy Clawford',
					 species: 'Cat',
					 favFoods: ['mice'],
					 birthYear: 2012,
				 },
				 {
					 name: 'Katy Purry',
					 species: 'Cat',
					 favFoods: ['cigarettes', 'coffee'],
					 birthYear: 2015,
				 },
				 {
					 name: 'Dr. Von Belly-Rub',
					 species: 'Cat',
					 favFoods: ['salt'],
					 birthYear: 2020,
				 },
				 {
					 name: 'Blobby',
					 species: 'Bird?',
					 favFoods: ['your soul'],
					 birthYear: 2020,
				 },
				 {
					 name: 'El Taco',
					 species: 'Cat',
					 favFoods: ['tequila', 'bar snax'],
					 birthYear: 1995,
				 },
				 {
					 name: 'Nibbles',
					 species: 'Hungry Cat',
					 favFoods: ['blankets', 'feet', 'tinsel'],
					 birthYear: 2003,
				 },
				 {
					 name: 'BoopySnoot',
					 species: 'Tiny Cat',
					 favFoods: ['milk'],
					 birthYear: 2021,
				 }
		 ];

export const catData = catStaticData.map((cat: Cat) => {
    return {...cat, id: uuidv4()};
});

export const catEndPoint = "https://api.thecatapi.com/v1/images/search?limit=6&has_breeds=1&api_key=live_7z9YrvTvX0vWxVWX3X4YlwaaLlPMavr2XgxFb9TuucYnRVzsORry3ScJo6W33Uft";
export const catNames = ["Oscar", "Felix", "Freddie", "Cleo", "Roxy", "Rosie"];