import { React } from "react";
import { TextField, Button, Box} from "@mui/material";
import { Formik } from 'formik';
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

function NuevaCategoria (){
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
                >
                <Formik
                    initialValues={{
                        nombre: '',
                        descripcion: '',
                        seguridad: ''
                    }}
                    validate={(valores) => {
                        let errores = {};

                        // Validacion nombre
                        if(!valores.nombre){
                            errores.nombre = 'Por favor ingresa un nombre'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                            errores.nombre = 'El nombre solo puede contener letras y espacios'
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
                    onSubmit={(valores, {resetForm}) => {
                        console.log(valores);
                        resetForm();
                    }}
                >
                    {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        label="Nombre"
                        id="nombre"
                        name="nombre"
                        variant="filled"
                        sx={TextFieldStyle}
                        fullWidth
                        margin="dense"
                        type="text"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.nombre && errors.nombre}
                        helperText={
                            touched.nombre && errors.nombre && "El nombre solo puede contener letras y espacios"
                        }
                    />
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
                            touched.descripcion && errors.descripcion && "La descripcion solo puede contener letras y espacios"
                        }
                    />
                    <TextField
                        required
                        label="Color"
                        fullWidth 
                        sx={TextFieldStyle}
                        type="color"
                    />
                    <TextField
                        required
                        label="Seguridad"
                        id="seguridad"
                        name="seguridad"
                        variant="filled"
                        sx={TextFieldStyle}
                        fullWidth
                        margin="dense"
                        type="text"
                        value={values.seguridad}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.seguridad && errors.seguridad}
                        helperText={
                            touched.seguridad && errors.seguridad && "Ingrese hasta 6 números como código de seguridad"
                        }
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
                                    window.location.reload();
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
                    </form>
                    )}
                </Formik>
            </Box>
        </Fondo>
      );
};

export default NuevaCategoria