import styled from "styled-components";

const FondoStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.90);
    min-height: 100vh;
`

const Fondo = (prop) =>{
    return(
        <FondoStyled>{prop.children}</FondoStyled>
    );
};

export default Fondo;