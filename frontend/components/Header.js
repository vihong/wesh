import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

function Header(props) {
	return (
		<HeaderStyled>
			<Link href="/">
				<LogoStyled>
					<img width="32px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" alt="Pokeball icon"/>
					<a>PokéXchange</a>
				</LogoStyled>
			</Link>
			<Menu>
				<Nav />
				<svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
			</Menu>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	font-family: Poppins, Nunito;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	background: #07215C;
	padding: 0 24px;

	@media (max-width: 1024px) {
		padding: 0 8px;
	}
	@media (max-width: 768px) {
		height: 64px;
	}
`;

const LogoStyled = styled.h1`
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	color: hsl(50, 100%, 50%);
	cursor: pointer;
	a {
		margin-left: 2px;
		text-decoration: none;
		letter-spacing: 0.03em;
	}
`;

const Menu = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	
	svg {
		padding: 0 16px;
		fill: white;
    	cursor: pointer;
	}
	
	svg:hover{
		fill: gold;
	}

	@media (max-width: 768px) {
		svg {
			height: 24px;
			width: 24px;
			padding: 0 8px;
		}	
	}
`

export default Header;
