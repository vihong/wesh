import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<p>HomePage</p>
			<Link href="/sell">
				<a>To SellPage</a>
			</Link>
		</div>
	);
};

export default Home;
