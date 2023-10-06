import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import { TextField, Button, Box, Select, MenuItem, InputLabel, FormControl} from "@mui/material";
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

const NuevoVideo = () => {
    const [categoria, setCategoria] = useState('');
    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };
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
                >
                <Formik
                    initialValues={{
                        titulo: '',
                        video: '',
                        categoria: '',
                        imagen: '',
                        descripcion: '',
                        seguridad: ''
                    }}
                    validate={(valores) => {
                        let errores = {};

                        // Validacion nombre
                        if(!valores.titulo){
                            errores.titulo = 'Por favor ingresa un titulo'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.titulo)){
                            errores.titulo = 'El titulo solo puede contener letras y espacios'
                        }

                        // Validación de URL Video
                        if (!valores.video) {
                            errores.video = 'Por favor, ingresa una URL';
                        } else if (!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/.test(valores.video)) 
                        {
                            errores.video = 'La URL ingresada no es válida';
                        }

                        // Validación de URL imagen
                        if (!valores.imagen) {
                            errores.imagen = 'Por favor, ingresa una URL';
                        } else if (!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/.test(valores.video)) 
                        {
                            errores.imagen = 'La URL ingresada no es válida';
                        }

                        // Validacion de Descripcion
                        if(!valores.descripcion){
                            errores.descripcion = 'Por favor ingresa una descripcion';
                        }

                        // Validacion de Codigo de Seguridad
                        if (!valores.seguridad) {
                            errores.seguridad = 'Por favor, ingresa un código de seguridad';
                        } else if (!/^\d{1,6}$/.test(valores.seguridad)) {
                            errores.seguridad = 'Ingrese hasta 6 números como código de seguridad';
                        }

                        return errores;
                    }}
                    onSubmit={({resetForm}) => {
                        resetForm();
                    }}
                >
                    {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                label="Titulo"
                                id="titulo"
                                name="titulo" 
                                variant="filled"
                                sx={TextFieldStyle}
                                fullWidth
                                margin="dense"
                                type="text"
                                value={values.titulo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.titulo && errors.titulo}
                                helperText={
                                    touched.titulo && errors.titulo && "El titulo solo puede contener letras y espacios"
                                }
                            />
                            <TextField
                                required
                                label="Link de video"
                                id="video"
                                name="video" 
                                variant="filled"
                                sx={TextFieldStyle}
                                fullWidth
                                margin="dense"
                                type="text"
                                value={values.video}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.video && errors.video}
                                helperText={
                                    touched.video && errors.video && "La URL ingresada no es válida"
                                }
                            />
                            <TextField
                                required
                                label="Link imagen del video"
                                id="imagen"
                                name="imagen" 
                                variant="filled"
                                sx={TextFieldStyle}
                                fullWidth
                                margin="dense"
                                type="text"
                                value={values.imagen}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.imagen && errors.imagen}
                                helperText={
                                    touched.imagen && errors.imagen && "La URL ingresada no es válida"
                                }
                            />
                            <FormControl variant="filled" sx={{margin: "25px 0 25px 0", width: "100%"}}>
                                <InputLabel htmlFor="categoria" style={{ color: '#C2C2C2' }}>Escoja una categoria</InputLabel>
                                    <Select
                                        required
                                        value={categoria}
                                        onChange={handleChangeCategoria}
                                        fullWidth
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
                                label="Descripcion"
                                id="descripcion"
                                name="descripcion" 
                                variant="filled"
                                sx={TextFieldStyle}
                                fullWidth
                                margin="dense"
                                type="text"
                                value={values.descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.descripcion && errors.descripcion}
                                helperText={
                                    touched.descripcion && errors.descripcion && "Por favor ingresa una descripcion"
                                }
                            />
                            <TextField
                                required
                                label="Codigo de seguridad"
                                id="seguridad"
                                name="seguridad" 
                                variant="filled"
                                sx={TextFieldStyle}
                                fullWidth
                                margin="dense"
                                type="number"
                                value={values.seguridad}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.seguridad && errors.seguridad}
                                helperText={
                                    touched.seguridad && errors.seguridad && "Ingrese hasta 6 números como código de seguridad"
                                }
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
                                            window.location.reload()
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
                        </form>
                    )}
                </Formik>
            </Box>
		</Fondo>
	);
}
 
export default NuevoVideo;