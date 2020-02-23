import Header from './Header';
import Meta from './Meta';

function Page(props) {
	return (
		<div style={{ background: 'lightgreen' }}>
			<Meta />
			<Header />
			{props.children}
		</div>
	);
}

export default Page;
