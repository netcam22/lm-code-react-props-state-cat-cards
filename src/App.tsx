import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import {PetInfo} from './data/pet';
import { catData, catEndPoint, catNames } from './data/cat_data';
import PetCard from './components/pet_card';
import {dogData, dogEndPoint, dogNames} from './data/dog-data';
import { PetContainer } from './components/custom-fetch/pet-container';

	function App(): JSX.Element {

	const [cats, setCats] = useState<Array<PetInfo>>(catData);
	const [dogs, setDogs] = useState<Array<PetInfo>>(dogData);
	const catCount = cats.length + catNames.length;
	const dogCount = dogs.length + dogNames.length;

	return (
		<>
			<Navbar />
			<Header noOfCats = {catCount} noOfDogs = {dogCount}/>

			<main>
				
				<div className='cards__wrapper'>
					{cats.map((cat: PetInfo, index:number) => 
					<PetCard
						name = {cat.name} 
						species = {cat.species}
						favFoods = {cat.favFoods}
						birthYear = {cat.birthYear}
						petIndex={index}
						key = {cat.id}
						image={cat.image}
						altText={cat.altText}
						licenceType={cat.licenceType}
						licenceUrl={cat.licenceUrl}
						attributionName={cat.attributionName}
						attributionUrl={cat.attributionUrl}
						petCount = {catCount}
					/>)}
					</div>

					<div className='cards__wrapper'>
					{dogs.map((dog: PetInfo, index:number) => 
					<PetCard
						name = {dog.name} 
						species = {dog.species}
						favFoods = {dog.favFoods}
						birthYear = {dog.birthYear}
						petIndex={index}
						key = {dog.id}
						image={dog.image}
						altText={dog.altText}
						licenceType={dog.licenceType}
						licenceUrl={dog.licenceUrl}
						attributionName={dog.attributionName}
						attributionUrl={dog.attributionUrl}
						petCount = {dogCount}
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
