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
			</ul>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	ul {
		display: flex;
		list-style: none;
		padding-right: 16px;
	}
	li a {
			font-size: 16px;
			font-weight: 500;
			height: 100%;
			letter-spacing: 0.03em;
			color: white;
			text-transform: uppercase;
			text-decoration: none;
			&:hover {
				color: gold;
			}
		}
	}
	li:nth-child(n) {
		padding-right: 16px;
	}
`;

export default Nav;
