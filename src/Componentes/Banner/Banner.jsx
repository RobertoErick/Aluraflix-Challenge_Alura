import styled from "styled-components";
import BannerImg from "./BannerImg";
import FrontEnd from "../../img/FrontEnd.png"
import Descripcion from "../Descripciones";
import TituloCategoria from "../TitulosCategorias/CategoriaFronEnd";

const ContenidoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10% 5% 0 5%;
    width: auto;
`

const TituloStyled = styled.h3`
    position: relative;
    margin-top: 40px;
    font-size: 46px;
    font-weight: 400;
    color: white;
`

const FrontEndContenedor = styled.div`
    width: 40%;
`

const ImgStyled = styled.img`
    width: auto;
    height: auto;
`

function Banner () {
    return(
        <BannerImg>
            <ContenidoHeader>
                <FrontEndContenedor>
                    <TituloCategoria>Front End</TituloCategoria>
                    <TituloStyled>Challenge React</TituloStyled>
                    <Descripcion>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás 
                        comprometerte en la resolución de un problema para poder aplicar todos los 
                        conocimientos adquiridos en la formación React.
                    </Descripcion>
                </FrontEndContenedor>
                <ImgStyled src={FrontEnd} alt="Miniatura de video sobre Front End"></ImgStyled>
            </ContenidoHeader>
        </BannerImg>  
    ); 
};

export default Banner