import styled from 'styled-components';
import SearchBarFilter from './SearchBarFilter';
import PriceFilter from './PriceFilter';

function LabelBar() {
    return (
        <LabelBarDiv>
            <h1>Tous les pokémons</h1>
            <Filters>
                <SearchBarFilter/>
                <PriceFilter/>
                {
                /*
                <h1>trier</h1>
                <h1>prix</h1>
                <h1>afficher</h1>
                */
                }
            </Filters>
        </LabelBarDiv>
    )
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
    };
    margin-top: 32px;
    border-bottom: 2px solid #EBEBEB;
    padding-bottom: 18px;
    
    @media (max-width: 1204px) {
        margin: 32px 24px 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 12px 24px 0;
        align-items: flex-start;
    }
`

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    *{
        margin: 0 24px;
        display: flex;
        flex-direction: column;
    }

    /* TO DELETE */

    @media (max-width: 1024px) {
        * {
            margin: 0;
        }
    }
`

export default LabelBar;