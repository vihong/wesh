import styled from "styled-components";
import SearchBarFilter from "./SearchBarFilter";
import SortByFilter from "./SortByFilter";
import PriceFilter from "./PriceFilter";
import DropdownFilter from "./DropdownFilter";

function LabelBar() {
  return (
    <LabelBarDiv>
      <h1>Tous les pokémons</h1>
      <Filters>
        <SearchBarFilter />
        <DropdownFilter>Trier</DropdownFilter>
        <DropdownFilter>Prix</DropdownFilter>
        <DropdownFilter>Afficher</DropdownFilter>
      </Filters>
    </LabelBarDiv>
  );
}

const LabelBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1204px;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    color: #000;
    font-weight: 400;
  }
  margin-top: 32px;
  border-bottom: 2px solid #ebebeb;
  padding-bottom: 18px;

  @media (max-width: 1204px) {
    margin: 0;
    margin-top: 32px;

    h1 {
      margin-left: 24px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 12px 16px 0;
    align-items: flex-start;

    h1 {
      margin-left: 8px;
    }
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 24px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 8px 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default LabelBar;
