import styled from "styled-components";

const CategoriaStyled = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 92px;
    font-size: 60px;
    font-weight: 400;
    color: white;
    background-color: #6BD1FF;
`

function TituloCategoria (prop1, prop2){
    return(
        <CategoriaStyled>{prop1.children}{prop2.children}</CategoriaStyled>
    );
};

export default TituloCategoria