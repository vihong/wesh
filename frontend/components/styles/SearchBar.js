import styled from 'styled-components';

function SearchBar() {
    return (
        <SearchBarInput type="text" placeholder="Rechercher..."/>
    )
}

const SearchBarInput = styled.input`
    border: 1px solid #E0E0E0;
    border-radius: 18px;
    outline: none;
    font-size: 14px;
    text-align: center;
    padding: 8px 28px 8px 12px;
`

export default SearchBar;