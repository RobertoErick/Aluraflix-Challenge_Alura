import styled from "styled-components";
import Boton from "../Botones/BotonNuevoVideo";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../img/aluraflix.png';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    height: 100px;
    background-color: black;
`
const LogoStyled = styled.img`
    width: 168.45px;
    height: 40px;
`

function Header () {
    const location = useLocation();
    // Verifica si la ruta actual es la página de inicio ("/")
    const isHomePage = location.pathname === '/';
    return(
        <HeaderStyled>
            <Link to="/"> <LogoStyled src={Logo} alt="logo"/> </Link>

            {isHomePage && <Link to="/NuevoVideo"> <Boton /> </Link>}
        </HeaderStyled>
    );
};

export default Header