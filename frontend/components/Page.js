import { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';

function Page(props) {
	return (
		<ThemeProvider theme={pokemonThemeValue}>
			<PageStyled>
				<GlobalStylePourTouteLaPage />
				<Meta />
				<Header />
				<MainStyled>{props.children}</MainStyled>
				<Footer/>
			</PageStyled>
		</ThemeProvider>
	);
}

// GlobalTheme : c'est comme si tu importer un fichier CSS avec tout le style global dedans et
// partout où tu le positionnes dans le body, c'est bon tu as le style partout.
const GlobalStylePourTouteLaPage = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        background: pink;
    }
`;

// LocalTheme : je n'ai le droit qu'à un seul 'theme value' par Styled Component
const pokemonThemeValue = {
	colorTheme           : '#393939',
	backgroundColorTheme : '#008a83',
	maxWidthTheme        : '1000px',
	boxShadowTheme       : '',
	linkColorTheme       : 'lightblue'
};

const PageStyled = styled.div`
	background: white;
	color: ${(props) => props.theme.colorTheme};
`;

// Ci-dessous 'theme' est un mot clé reconnu par le package 'styled-components', donc ne pas changer.
const MainStyled = styled.main`
	background: ${(props) => props.theme.backgroundColorTheme};
	margin: 0 auto;
	padding: 2rem;
	max-width: ${(props) => props.theme.maxWidthTheme};
`;

export default Page;
