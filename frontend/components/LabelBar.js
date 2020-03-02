import styled from 'styled-components';

function LabelBar() {
    return (
        <LabelBarDiv>
            <h1>Tous les pokémons</h1>
            <Filters>
                <h1>search bar</h1>
                <h1>trier</h1>
                <h1>types</h1>
                <h1>price</h1>
            </Filters>
        </LabelBarDiv>
    )
}

const LabelBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        font-size: 20px;
        color: #000;
        font-weight: 400;
    };
    margin-top: calc(-7px + 32px);
    border-bottom: 1px solid #EBEBEB;
    padding-bottom: 18px;
`

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 50px;
    *{
        margin: 0 50px;
        display: flex;
        flex-direction: column;
        border:1px solid;
    }
    *:after {
        content: 'transform it to input';
        font-size: 12px;
        color: grey
    }
`

export default LabelBar;