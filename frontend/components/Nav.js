import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Nav(props) {
	return (
		<NavStyled>
			<ul>
				<li>
					<Link href="/">
						<a>Acheter</a>
					</Link>
				</li>
				<li>
					<Link href="/vendre">
						<a>Vendre</a>
					</Link>
				</li>
				<li>
					<Link href="/connexion">
						<a>Se connecter</a>
					</Link>
				</li>
			</ul>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	list-style: none;
	ul li {
		display: inline;
		padding: 0 16px;
		a {
			font-size: 14px;
			font-weight: 700;
			letter-spacing: 0.05rem;
			transition: all 0.3s ease 0s;
			color: white;
			text-transform: uppercase;
			text-decoration: none;
			position: relative;
			&:hover {
				color: gold;
			}
		}
	}
`;

export default Nav;
