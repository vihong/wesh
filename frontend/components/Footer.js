import styled from 'styled-components';

const Footer = () => {
    return (
        <Foot>
            <p>made by Tony KHAOV</p>            
        </Foot>
    );
}

const Foot = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    color: grey;
    font-size: 12px;
`

export default Footer;
