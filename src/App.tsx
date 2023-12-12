import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Pet from './data/pet';
import { catData, catEndPoint, catNames } from './data/cat_data';
import PetCard from './components/pet_card';
import {dogEndPoint, dogNames} from './data/dog-data';
import { PetContainer } from './components/custom-fetch/pet-container';

	function App(): JSX.Element {

	const [cats, setCats] = useState<Array<Pet>>(catData);
	const catCount = cats.length + catNames.length;
	const dogCount = dogNames.length;

	return (
		<>
			<Navbar />
			<Header noOfCats = {catCount} noOfDogs = {dogCount}/>

			<main>
				
				<div className='cards__wrapper'>
					{cats.map((cat: Pet, index:number) => 
					<PetCard
						name = {cat.name} 
						species = {cat.species}
						favFoods = {cat.favFoods}
						birthYear = {cat.birthYear}
						petIndex={index}
						key = {cat.id}
					/>)}
					</div>

					<PetContainer petType = "Dog" endPoint = {dogEndPoint} names = {dogNames}/>
					<PetContainer petType = "Cat" endPoint = {catEndPoint} names = {catNames}/>

			</main>

			<Footer />
		</>
	);
}

export default App;
