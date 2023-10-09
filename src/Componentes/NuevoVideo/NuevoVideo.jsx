import React from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Fondo from '../Fondo';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { clientServices } from '../../Services/clientServices';

const agregarVideo = clientServices.agregarVideo;

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

const ContenedorForm = styled.div`
  display: flex;
  justify-content: center;
  flex-Direction: column;
  padding: 5%;
`

function NuevoVideo(){
    const formik = useFormik({
        initialValues: {
          titulo: '',
          video: '',
          imagen: '',
          categoria: '',
          descripcion: '',
          codigo: ''
        },
        validationSchema: Yup.object({
          titulo: Yup.string()
            .matches(/^[A-Za-z\s]+$/, 'El titulo solo puede contener letras y espacios')
            .required('titulo requerido'),
          video: Yup.string()
            .required('video requerido'),
          imagen: Yup.string()
            .required('imagen requerido'),
          categoria: Yup.string()
            .required('categria requerido'),
          descripcion: Yup.string()
            .required('Descripcion requerida'),
          codigo: Yup.string()
            .max(7, 'Son maximo 7 numero')
            .required('Codigo de seguridad requerido'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          agregarVideo(values);
        },
    });
    
    const handleLimpiar = () => {
        formik.resetForm(); // Restablecerá los valores iniciales definidos en initialValues
    };
	return (
	<Fondo>
    <Titulo>Nuevo Video</Titulo>
      <ContenedorForm>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            id="titulo"
            name="titulo"
            label="Titulo"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.titulo}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.titulo && formik.errors.titulo}
            helperText={
              formik.touched.titulo && formik.errors.titulo && formik.errors.titulo
            }
          />
          <TextField
            required
            id="video"
            name="video"
            label="Video"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.video}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.video && formik.errors.video}
            helperText={
              formik.touched.video && formik.errors.video && formik.errors.video
            }
          />
          <TextField
            required
            id="imagen"
            name="imagen"
            label="Imagen"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imagen}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.imagen && formik.errors.imagen}
            helperText={
              formik.touched.imagen && formik.errors.imagen && formik.errors.imagen
            }
          />
          <FormControl variant="filled" sx={{margin: "25px 0 25px 0", width: "100%"}}>
          <InputLabel htmlFor="categoria" style={{ color: '#C2C2C2' }}>Escoja una categoria</InputLabel>
            <Select
                required
                fullWidth
                id="categoria"
                name="categoria"
                sx={{
                    color: "white",
                    background: "#53585D"
                    }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.categoria}
            >
                <MenuItem value="">Seleccione una Categoria</MenuItem>
                <MenuItem value="Front-End">Front End</MenuItem>
                <MenuItem value="Back">Back End</MenuItem>
                <MenuItem value="Innovacion">Innovacion y Gestion</MenuItem>
            </Select>
            </FormControl>
           <TextField
            required
            id="descripcion"
            name="descripcion"
            label="Descripcion"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.descripcion}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.descripcion && formik.errors.descripcion}
            helperText={
              formik.touched.descripcion && formik.errors.descripcion && formik.errors.descripcion
            }
          />
          <TextField
            required
            id="codigo"
            name="codigo"
            label="Codigo"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.codigo}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.codigo && formik.errors.codigo}
            helperText={
              formik.touched.codigo && formik.errors.codigo && formik.errors.codigo
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
                    handleLimpiar();
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
      </ContenedorForm>
    </Fondo>
	);
}
 
export default NuevoVideo;