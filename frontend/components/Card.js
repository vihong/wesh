import styled from 'styled-components';

function Card() {
    return (
        <Carddiv>
            <VignetteImage height="160px" width="160px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png">
            </VignetteImage>
            <DescriptionCard>
                <Pokemon>Mewtwo</Pokemon>
                <Price>10,00€</Price>
                <Stock><strong>2</strong> en stock</Stock>
            </DescriptionCard>
            <BuyButton>
                Acheter
            </BuyButton>
        </Carddiv>
    )
}

const Carddiv = styled.div`
    display: flex;
    flex-direction: column;
`

const VignetteImage = styled.img`
    padding: 12px 16px 32px 16px;
    background-color: #DEDEDE;
    border-radius: 4px;
`

const DescriptionCard = styled.div`
`

const Pokemon = styled.h1`
    font-size: 22px;
    font-weight: 400;
`

const Price = styled.h2`
    font-size: 20px;
    font-weight: 300;
`

const Stock = styled.p`
    color: red;
    font-size: 14px;
`

const BuyButton = styled.button`
    text-transform: uppercase
`

export default Card;