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

/* TO STYLE WITH CSS GRID */

const ProductCardsDiv = styled.div`
    padding-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export default ProductCards