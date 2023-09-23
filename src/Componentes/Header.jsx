import styled from "styled-components";
import Boton from "./Boton";
import { Link } from "react-router-dom";
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
            <Link to="/"> <LogoStyled src={Logo} alt="logo"/> </Link>
            <Link to="/NuevoVideo"> <Boton /> </Link>
        </HeaderStyled>
    );
};

export default Header