import bannerImg from "../img/banner.png"
import styled from "styled-components";

const FiltroStyled = styled.div`
    background: linear-gradient(to bottom, rgb(0, 18, 51), rgb(20, 20, 20)); /* Gradiente lineal de color a negro */
    width: 100%;
    height: auto;
`

const BannerStyled = styled.img`
    height: 707px;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
`

function Banner () {
    return(
        <>
        <FiltroStyled> 
            <BannerStyled src={bannerImg} alt="Banner de la pagina"/>
        </ FiltroStyled>
        </>    
    ); 
};

export default Banner