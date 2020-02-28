import styled from 'styled-components'

const Showcase = () => {
    return (
        <div>
            <ShowcaseImage src="../static/showcase-pikachu.jpg" alt="Showcase-Pikachu"/>
        </div>
    );
}

const ShowcaseImage = styled.img`
    object-fit: cover;
    width:100%;
    height: 300px;

    @media (max-width: 1048px) {
        object-position: 10% 50%;
        height: 200px; 
    }

    @media (max-width: 700px) {
        object-position: 20% 50%;
    }
`

export default Showcase;
