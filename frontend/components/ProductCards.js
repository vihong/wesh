import styled from "styled-components";
import Card from "./Card";

function ProductCards() {
  // pokemons to be update with graphql;
  const POKEDEX_API =
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

  const pokemons = [
    {
      id: "001",
      name: "Bulbizarre",
      price: "1,90",
      stock: 50
    },
    {
      id: "002",
      name: "Herbizarre",
      price: "3,90",
      stock: 5
    },
    {
      id: "003",
      name: "Florizarre",
      price: "9,90",
      stock: 2
    },
    {
      id: "004",
      name: "Salamèche",
      price: "2,90",
      stock: 2
    },
    {
      id: "005",
      name: "Reptincel",
      price: "19,90",
      stock: 2
    },
    {
      id: "006",
      name: "Dracaufeu",
      price: "119,90",
      stock: 1
    },
    {
      id: "007",
      name: "Carapuce",
      price: "0,90",
      stock: 100
    },
    {
      id: "008",
      name: "Carabaffe",
      price: "5,90",
      stock: 35
    },
    {
      id: "009",
      name: "Tortank",
      price: "9,90",
      stock: 2
    },
    {
      id: "150",
      name: "Mewtwo",
      price: "109,90",
      stock: 1
    }
  ];

  console.log(pokemons);

  return (
    <ProductCardsDiv>
      {pokemons.map(pokemon => {
        return <Card pokemon={pokemon} />;
      })}
    </ProductCardsDiv>
  );
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
`;

export default ProductCards;
