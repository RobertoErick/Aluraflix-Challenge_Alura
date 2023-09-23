import styled from "styled-components";
import Boton from "./Boton";
import Logo from '../img/aluraflix.png';

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: black;
    align-items: center;
`
const LogoStyled = styled.img`
    width: 168.45px;
    height: 40px;
`

function Header () {
    return(
        <HeaderStyled>
            <LogoStyled src={Logo} alt="logo" onClick={() => {window.location.href = '../App'}}/>
            <Boton />
        </HeaderStyled>
    );
};

export default Header