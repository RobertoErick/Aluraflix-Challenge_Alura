import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Box, Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import { validarTitulo, validarLink, validarImagen, validarDescripcion, validarCodigo } from "./validaciones";
import styled from "styled-components";
import Fondo from "../Fondo";

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
    justify-content: space-between;
`

function NuevoVideo () {

    const [titulo, setTitulo] = useState({
        value: localStorage.getItem('titulo') || "",
        valid: null,
      });
    const [link, setLink] = useState({ 
        value: localStorage.getItem(`link`) || "", 
        valid: null 
      });
    const [imagen, setImagen] = useState({ 
        value: localStorage.getItem(`imagen`) || "", 
        valid: null 
      });
    const [descripcion, setDescripcion] = useState({ 
        value: localStorage.getItem(`descripcion`) || "", 
        valid: null 
      });
    const [codigo, setCodigo] = useState({ 
        value: localStorage.getItem(`codigo`) || "", 
        valid: null 
    });

    const [categoria, setCategoria] = React.useState('');

    const handleChange = (event) => {
        setCategoria(event.target.value);
        };
    
    useEffect(() => {
        setTitulo((prevTitulo) => ({
          ...prevTitulo,
          valid: validarTitulo(prevTitulo.value),
        }));
        setLink((prevLink) => ({
          ...prevLink,
          valid: validarLink(prevLink.value),
        }));
        setImagen((prevImagen) => ({
            ...prevImagen,
            valid: validarImagen(prevImagen.value),
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
            <Titulo>Nuevo Video</Titulo>
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
                    if (titulo.valid && link.valid && imagen.valid && descripcion.valid && codigo.value) {
                    console.log("Siguiente formulario");
                    localStorage.setItem('titulo', titulo.value);
                    localStorage.setItem('link', link.value);
                    localStorage.setItem('imagen', imagen.value);
                    localStorage.setItem('descripcion', descripcion.value);
                    localStorage.setItem('codigo', codigo.value);
                    } else {

                    }
                }}
                >
                <TextField
                    required
                    label="Titulo"
                    variant="filled"
                    sx={TextFieldStyle}
                    fullWidth
                    margin="dense"
                    type="text"
                    error={titulo.valid === false}
                    helperText={
                    titulo.valid === false && "Ingresa un correo electrónico válido."
                    }
                    value={titulo.value}
                    onChange={(input) => {
                    const titulo = input.target.value;
                    const valido = validarTitulo(titulo);
                    setTitulo({ value: titulo, valid: valido });
                    }}
                />
                <TextField
                    required
                    label="Link del video"
                    variant="filled"
                    sx={TextFieldStyle}
                    fullWidth
                    margin="dense"
                    type="url"
                    error={link.valid === false}
                    helperText={
                    link.valid === false &&
                    "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
                    }
                    value={link.value}
                    onChange={(input) => {
                    const link = input.target.value;
                    setLink({ value: link, valid: validarLink(link) });
                    }}
                />
                <TextField
                    required
                    label="Link imagen del video"
                    variant="filled"
                    sx={TextFieldStyle}
                    fullWidth
                    margin="dense"
                    type="url"
                    error={imagen.valid === false}
                    helperText={
                    imagen.valid === false &&
                    "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
                    }
                    value={imagen.value}
                    onChange={(input) => {
                    const imagen = input.target.value;
                    setImagen({ value: imagen, valid: validarImagen(imagen) });
                    }}
                />
                <FormControl variant="filled" sx={{margin: "25px 0 25px 0"}}>
                <InputLabel htmlFor="categoria" style={{ color: '#C2C2C2' }}>Escoja una categoria</InputLabel>
                    <Select
                        required
                        value={categoria}
                        onChange={handleChange}
                        autoWidth
                        id="categoria"
                        sx={{
                        color: "white",
                        background: "#53585D"
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Front End</MenuItem>
                        <MenuItem value={21}>Back End</MenuItem>
                        <MenuItem value={22}>Innovacion y Gestión</MenuItem>
                    </Select>
                </FormControl>
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
                    <div>
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
                                setTitulo({ value: '', valid: null });
                                setLink({ value: '', valid: null });
                                setImagen({ value: '', valid: null });
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
                    </div>
                    <Link to="/NuevaCategoria">
                        <Button 
                            variant="contained"
                            sx={{
                                fontSize: "21px",
                                fontWeight: "600"
                            }}>
                                Nueva Categoria
                        </Button>
                    </Link>
                </ContenedorBotones>
            </Box>
        </Fondo>
      );
};

export default NuevoVideo;
