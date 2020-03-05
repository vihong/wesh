import styled from 'styled-components';
import SearchBar from './styles/SearchBar';

function LabelBar() {
    return (
        <LabelBarDiv>
            <h1>Tous les pokémons</h1>
            <Filters>
                <SearchBar/>
                <h1>trier</h1>
                <h1>prix</h1>
                <h1>view (par 10, 50, 100)</h1>
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
        margin: 12px 24px 0;
    }
`

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    *{
        margin: 0 50px;
        display: flex;
        flex-direction: column;
        border:1px solid;
    }

    /* TO DELETE */

    @media (max-width: 1024px) {
        * {
            margin: 0;
        }
    }
`

export default LabelBar;