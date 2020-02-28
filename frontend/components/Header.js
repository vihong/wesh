import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

function Header(props) {
	return (
		<HeaderStyled>
			<Link href="/">
				<LogoStyled>
					<a>PokéXchange</a>
				</LogoStyled>
			</Link>
			<Nav />
			<label>&#128722;</label>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	font-family: Poppins, Nunito;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	background: #07215C;
	input {
		padding: 8px 25px;
		margin: 0 15px;
		border-radius: 5px;
		border: none;
		width: 150px;
		&[type=text] {
			background-color: green;
			color: red;
			padding: 0;
			font-size: 5rem;
		}
	}
	label {
		cursor: pointer;
		font-size: 20px;
	}
`;

const LogoStyled = styled.h1`
	font-size: 20px;
	font-weight: 300;
	color: hsl(50, 100%, 50%);
	cursor: pointer;
	a {
		text-decoration: none;
		margin-left: 24px;
		letter-spacing: 0.05rem;
	}
	@media (max-width: 1300px) {
		margin: 0 auto 0 0;
		/* text-align: center; */
	}
`;

export default Header;
