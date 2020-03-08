import styled from "styled-components";

function SortByFilter() {
  return (
    <>
      <SortByFilterBtn>Trier par</SortByFilterBtn>
    </>
  );
}

const SortByFilterBtn = styled.button`
  & {
    background-color: white;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
    color: #8d8d8d;
    outline: none;
    display: flex;
    align-items: center;
    padding: 8px 10px 8px 12px;
  }
  &:hover {
    background-color: #e0e0e0;
  }
  &:focus  {
    border: 1px solid #e0e0e0;
    border-radius: 18px;
  }

  svg {
    fill: #8d8d8d;
    margin: 4px 0 0 8px;
  }
`;

export default SortByFilter;
