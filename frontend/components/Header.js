import Link from 'next/link';
import Nav from './Nav';

function Header(props) {
	return (
		<div>
			<div className="bar">
				<Link href="/">
					<a>PokeXchange</a>
				</Link>
			</div>
			<Nav />
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<div>Cart</div>
		</div>
	);
}

export default Header;
