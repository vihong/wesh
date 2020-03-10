import styled from "styled-components";
import DropdownFilter from "./DropdownFilter";
import { useState } from "react";

const PriceFilter = () => {
  return (
    <Filter>
      <DropdownFilter>Prix</DropdownFilter>
      <DropDownMenu>Drop</DropDownMenu>
    </Filter>
  );
};

const Filter = styled.div`
  & {
    position: relative;
  }

  &::hover > DropDownMenu {
    display: flex;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  transform: translateX(25%);
  border: 2px solid red;
`;

export default PriceFilter;
