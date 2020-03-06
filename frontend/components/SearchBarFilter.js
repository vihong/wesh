import styled from 'styled-components';

function SearchBar() {
    return (
        
        <SearchBarDiv>
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
            <SearchBarInput type="text" placeholder="Rechercher..."/>
        </SearchBarDiv>
    )
}

const SearchBarDiv = styled.div`
    position: relative;
    border: 1px solid #E0E0E0 !important;
    border-radius: 18px;
    padding: 8px 0 8px 12px;
    width: calc(154px - 12px);
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        fill: #8D8D8D;
    }
`

const SearchBarInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    border-radius: 0 18px 18px 0;
    font-size: 14px;
    height: 100%;
    margin-left: 12px;
`

const SearchBarInpute = styled.input`
    position: absolute;
    top: 0;
    outline: none;
`


export default SearchBar;