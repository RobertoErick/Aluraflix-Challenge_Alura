import styled from "styled-components";
import Carrusel from "./Home_carrusel/Carrusel";
import Banner from "../Banner/Banner";
import Descripcion from "../Descripciones";
import Fondo from "../Fondo";

const ContenidoStyled = styled.div`
    padding: 0% 5% 5% 5%;
`
const TituloStyled = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 60px;
    font-size: 35px;
    padding: 1%;
    background-color: #00C86F;
`
const TituloStyled2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 60px;
    font-size: 35px;
    padding: 1%;
    background-color: #FE8C2A;
`
const TituloContenedor = styled.p`
    display: flex;
    align-items: center;
`

const ContenedorCarrusel = styled.div`
    position: relative;
    padding: 688px 5% 0 5%;
`

function Contenido(){
    return(
        <Fondo>
            <Banner />
            <ContenedorCarrusel>
                <Carrusel />
            </ContenedorCarrusel>
            <ContenidoStyled >
                <TituloContenedor>
                    <TituloStyled>Back-End </TituloStyled><Descripcion>Formación Back End de Alura Latam</Descripcion>
                </TituloContenedor>
                <Carrusel />
                <TituloContenedor>
                    <TituloStyled2>Innovación y Gestión </TituloStyled2><Descripcion>Formación Innovación y Gestión de Alura Latam</Descripcion>
                </TituloContenedor>
                <Carrusel />
            </ ContenidoStyled >
        </Fondo>
    );
};

export default Contenido