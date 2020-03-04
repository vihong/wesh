import styled from 'styled-components';

function Card({name, price, id, stock}) {
    const IMG_URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    return (
        <Carddiv>
            <VignetteImage height="160px" width="160px" src={IMG_URL}>
            </VignetteImage>
            <DescriptionCard>
    <Pokemon>{name}</Pokemon>
    <Price>{price}€</Price>
    <Stock><strong>{stock}</strong> en stock !</Stock>
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
    max-width: 192px;
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
    margin-top: 6px;
`

const Price = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin-top: 2px;
    letter-spacing: 0.03em;
`

const Stock = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 4px;
`

const BuyButton = styled.button`
    text-transform: uppercase;
    display: block;
    padding: 8px 59px;
    margin-top: 10px;
    background-color: #375FCC;
    border-radius: 6px;
    color: #FFF;
    font-family: Poppins, Helvetica Neue;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.02em;
    cursor: pointer;
    &:hover {
        background-color: #2552ce;
    }
`

export default Card;