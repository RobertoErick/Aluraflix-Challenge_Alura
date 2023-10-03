import styled from "styled-components";

const PStyled = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: white;
`

function Descripcion (props){
    return(
        <PStyled>{props.children}</PStyled>
    );
};

export default Descripcion