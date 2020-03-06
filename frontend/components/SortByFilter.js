import styled from 'styled-components';

function SortByFilter() {
    return (
        <>
            <SortByFilterBtn>
                Trier par
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5"><path id="cheveron-down" d="M8.718,11.086l.625.5,5-4-1.25-1-3.75,3-3.75-3-1.25,1Z" transform="translate(-4.343 -6.586)"/></svg>
            </SortByFilterBtn>
        </>
    )
}

const SortByFilterBtn = styled.button`
    & {
        background-color: white;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid #E0E0E0;
        border-radius: 18px;
        color: #8D8D8D;
        outline: none;
        display: flex;
        align-items: center;
        padding: 8px 10px 8px 12px;
    }
    &:hover {
        background-color: #E0E0E0;
    }
    &:focus {
        border: 1px solid #E0E0E0;
        border-radius: 18px;
    }

    svg {
        fill: #8D8D8D;
        margin: 4px 0 0 8px;
    }
`

export default SortByFilter;