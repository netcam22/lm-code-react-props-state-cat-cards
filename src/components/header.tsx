interface HeaderProps {
	noOfCats: number;
	noOfDogs: number;
}

const Header: React.FC<HeaderProps> = (props) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {props.noOfCats} Cats and {props.noOfDogs} Dogs in this Pet App
		</h2>
	</header>
);

export default Header;
