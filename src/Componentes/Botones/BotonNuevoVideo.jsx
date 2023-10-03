import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    width: 180px;
    font-size: 21px;
    font-weight: 600px;
    line-height: 24px;
    color: white; 
    border-color: white;
    background-color: black;
    height: 54px;
    width: 180.125px;
    cursor: pointer;
`

function Boton(){
    return(
        <Button>
            Nuevo video
        </Button>
    );
};

export default Boton