import styled from "styled-components";

const Button = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 180px;
    font-size: 19px;
    border-color: white;
`

function Boton(){
    return(
        <Button>
            Nuevo video
        </Button>
    );
};

export default Boton