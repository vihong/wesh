import Head from 'next/head';

const Meta = (props) => {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta charSet="utf-8" />
			<link
				rel="shortcut icon"
				href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="/static/nprogress.css"
			/>
			<title>PokeXchange : trouvez vos articles Pokémon préférés</title>
		</Head>
	);
};

export default Meta;
