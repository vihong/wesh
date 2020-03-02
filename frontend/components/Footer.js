import styled from 'styled-components';

const Footer = () => {
    return (
        <Foot>
            <p>PokéXchange, made by <a href="http://github.com/tonykhaov" target="_blank">Tony KHAOV</a></p>
        </Foot>
    );
}

const Foot = styled.footer`
    padding-top: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: grey;
    font-size: 12px;
`

export default Footer;
