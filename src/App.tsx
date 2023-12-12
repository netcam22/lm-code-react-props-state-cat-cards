import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import { catData } from './data/cat_data';
import CatCard from './components/cat_card';
import Dog from './data/dog';
import {dogData} from './data/dog-data';

	function App(): JSX.Element {

	const [cats, setCats] = useState<Array<Cat>>(catData);
	const catCount = cats.length;

	return (
		<>
			<Navbar />
			<Header noOfCats = {catCount}/>

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat: Cat, index:number) => 
					<CatCard 
						name = {cat.name} 
						species = {cat.species}
						favFoods = {cat.favFoods}
						birthYear = {cat.birthYear}
						catIndex={index}
						key = {cat.id}
					/>)}
					</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
