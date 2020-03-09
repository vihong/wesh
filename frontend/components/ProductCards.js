import styled from "styled-components";
import Card from "./Card";
import pokemons from "../static/pokemonsList.js";

function ProductCards() {
  return (
    <ProductCardsDiv>
      {pokemons.map(pokemon => {
        return <Card pokemon={pokemon} />;
      })}
    </ProductCardsDiv>
  );
}

const ProductCardsDiv = styled.div`
  max-width: 1204px;
  margin: 0 auto;
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 192px);
  grid-gap: 3rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-gap: 2rem;
  }
`;

export default ProductCards;
