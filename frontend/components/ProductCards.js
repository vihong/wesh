import styled from 'styled-components';
import Card from './Card';

function ProductCards() {
    // pokemons to be update with graphql;
    const pokemons = ['test','test','test','test','test','test','test','test','test','test','test','test','test',];
    console.log(pokemons)

    return (
        <ProductCardsDiv>
            {pokemons.map(() => {
                return <Card/>
            })}
        </ProductCardsDiv>
    )
}

const ProductCardsDiv = styled.div`
    max-width: 1004px;    
    margin: 0 auto;
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 192px);
    grid-gap: 3rem;
    justify-content: center;

    @media (max-width: 768px) {
        grid-gap: 2rem;
    }
`

export default ProductCards