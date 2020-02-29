import { useEffect } from 'react'
import styled from 'styled-components'

const Showcase = () => {
    return (
            <ShowcaseImage src="../static/showcase-pikachu.jpg" alt="Showcase-Pikachu"/>
    );
}

const ShowcaseImage = styled.img`
    object-fit: cover;
    height: 336px;
    width:100%;

    @media (max-width: 768px) {
        height: 300px;
    }
`


export default Showcase;
