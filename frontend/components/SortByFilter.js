import styled from 'styled-components';

function SortByFilter() {
    return (
        <>
            <SortByFilterBtn>
                Trier par
                <svg xmlns="http://www.w3.org/2000/svg" width="5px" height="10px" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </SortByFilterBtn>
        </>
    )
}

const SortByFilterBtn = styled.button`
    background-color: white;
    font-size: 14px;
    border: 1px solid #E0E0E0;
    border-radius: 18px;
    color: #8D8D8D;
`

export default SortByFilter;