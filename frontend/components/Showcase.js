import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Showcase = () => {

    const [ImgSrc, setImgSrc] = useState('')

    const handleResize = event => {
        if(event.currentTarget.innerWidth <= 1024) setImgSrc("../static/showcase-pikachu-mobile.jpg");
        else setImgSrc("../static/showcase-pikachu.jpg")
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
    }, [])

    return (
            <div>
                <ShowcaseImage src={ImgSrc} alt="Showcase-Pikachu"/>
            </div>
    );
}

const ShowcaseImage = styled.img`
    object-fit: cover;
    height: 340px;
    width:100%;
    @media (max-width: 1024px) {
        height: 280px;
    }
`


export default Showcase;
