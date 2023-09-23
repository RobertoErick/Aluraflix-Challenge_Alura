import styled from "styled-components";
import Logo from "../img/aluraflix.png";

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid blue;
    padding: 20px 10px 50px 10px;
    background: rgba(0, 0, 0, 0.90);
    width: 100%;
`

const StyledImg = styled.img`
    width: 252.5px;
    height: 60px;
`

function Footer(){
    return(
        <StyledFooter>
         <StyledImg src={Logo} alt="Logo de la pagina" />
        </ StyledFooter>
    );
};

export default Footer