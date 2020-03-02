import { useEffect } from 'react'
import styled from 'styled-components'

const Showcase = () => {
    return (
            <div>
                <ShowcaseImageDesktop src="../static/showcase-pikachu.jpg" alt="Showcase-Pikachu"/>
                <ShowcaseImageMobile src="../static/showcase-pikachu-mobile.jpg" alt="Showcase-Pikachu"/>
            </div>
    );
}

const ShowcaseImageDesktop = styled.img`
    object-fit: cover;
    height: 340px;
    width:100%;
    @media (max-width: 1024px) {
        height: 280px;
        display: none;
    }
`

const ShowcaseImageMobile = styled.img`
    display: none;
    height: 340px;
    width:100%;
    object-fit: cover;
    
    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        height: 280px;
    }
`


export default Showcase;
