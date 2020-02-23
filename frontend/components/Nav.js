import React from 'react';
import Link from 'next/link';

function Nav(props) {
	return (
		<>
		    <Link href="/">
    				<a>To HomePage</a>
    			</Link>
            <Link href="/sell">
    			<a>To SellPage</a>
    		</Link>
		</>
	);
}

export default Nav;
