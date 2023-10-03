import { React, useEffect, useState } from "react";
import { TextField, Button, Box} from "@mui/material";
import { validarNombre, validarDescripcion, validarCodigo } from "./validaciones";
import Fondo from "../Fondo";
import styled from "styled-components";


const Titulo = styled.h1`
    color: #F5F5F5;
    font-size: 60px;
    font-weight: 400;
    padding: 5% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: flex-start;
`

function NuevaCategoria (){

    const [nombre, setNombre] = useState({
        value: localStorage.getItem('nombre') || "",
        valid: null,
      });
    const [descripcion, setDescripcion] = useState({ 
        value: localStorage.getItem(`descripcion`) || "", 
        valid: null 
      });
    const [codigo, setCodigo] = useState({ 
        value: localStorage.getItem(`codigo`) || "", 
        valid: null 
    });
    
    useEffect(() => {
        setNombre((prevNombre) => ({
          ...prevNombre,
          valid: validarNombre(prevNombre.value),
        }));
        setDescripcion((prevDescripcion) => ({
            ...prevDescripcion,
            valid: validarDescripcion(prevDescripcion.value),
          }));
        setCodigo((prevCodigo) => ({
            ...prevCodigo,
            valid: validarCodigo(prevCodigo.value),
          }));
      }, []);

      const TextFieldStyle = {
        input: {
            color: "white",
            background: "#53585D"
          }, 
        label: {
              color:  "#C2C2C2"
          },
        margin: "25px 0 25px 0"
      }

    return (
        <Fondo>
            <Titulo>Nueva Categoria</Titulo>
            <Box
                component="form"
                autocomplete="off"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "5%"
                }}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (nombre.valid && descripcion.valid && codigo.value) {
                    console.log("Siguiente formulario");
                    localStorage.setItem('nombre', nombre.value);
                    localStorage.setItem('descripcion', descripcion.value);
                    localStorage.setItem('codigo', codigo.value);
                    } else {

                    }
                }}
                >
                <TextField
                    required
                    label="Nombre"
                    variant="filled"
                    sx={TextFieldStyle}
                    fullWidth
                    margin="dense"
                    type="text"
                    error={nombre.valid === false}
                    helperText={
                    nombre.valid === false && "Ingresa un correo electrónico válido."
                    }
                    value={nombre.value}
                    onChange={(input) => {
                    const nombre = input.target.value;
                    const valido = validarNombre(nombre);
                    setNombre({ value: nombre, valid: valido });
                    }}
                />
                <TextField
                    required
                    label="Descripción"
                    variant="filled"
                    sx={TextFieldStyle}
                    margin="dense"
                    type="text"
                    error={descripcion.valid === false}
                    helperText={
                    descripcion.valid === false &&
                    "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
                    }
                    value={descripcion.value}
                    onChange={(input) => {
                    const descripcion = input.target.value;
                    setDescripcion({ value: descripcion, valid: validarDescripcion(descripcion) });
                    }}
                />
                <TextField
                    required
                    label="Color" 
                    sx={TextFieldStyle}
                    type="color"
                />
                <TextField
                    required
                    label="Codigo de seguridad"
                    variant="filled"
                    sx={TextFieldStyle}
                    fullWidth
                    margin="dense"
                    type="number"
                    error={codigo.valid === false}
                    helperText={
                    codigo.valid === false &&
                    "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
                    }
                    value={codigo.value}
                    onChange={(input) => {
                    const codigo = input.target.value;
                    setCodigo({ value: codigo, valid: validarCodigo(codigo) });
                    }}
                />
                <ContenedorBotones>
                        <Button 
                            variant="contained" 
                            type="submit"
                            sx={{
                                fontSize: "21px",
                                fontWeight: "600"
                            }}>
                            Guardar
                        </Button>
                        <Button 
                            variant="filled"
                            onClick={() => {
                                setNombre({ value: '', valid: null });
                                setDescripcion({ value: '', valid: null });
                                setCodigo({ value: '', valid: null });
                              }}
                            sx={{
                                background: "#9E9E9E",
                                marginLeft: "40px",
                                fontSize: "21px",
                                fontWeight: "600" 
                            }}>
                            Limpiar
                        </Button>
                </ContenedorBotones>
            </Box>
        </Fondo>
      );
};

export default NuevaCategoria