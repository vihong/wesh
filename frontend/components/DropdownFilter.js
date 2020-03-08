import styled from "styled-components";

function DropdownFilter(props) {
  return (
    <DropdownFilterButton>
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="5"
        viewBox="0 0 10 5"
      >
        <path
          id="cheveron-down"
          d="M8.718,11.086l.625.5,5-4-1.25-1-3.75,3-3.75-3-1.25,1Z"
          transform="translate(-4.343 -6.586)"
        />
      </svg>
    </DropdownFilterButton>
  );
}

const DropdownFilterButton = styled.button`
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

export default DropdownFilter;
