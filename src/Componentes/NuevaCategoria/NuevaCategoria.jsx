import React from 'react';
import { TextField, Button} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Fondo from '../Fondo';
import styled from "styled-components";
import { clientServices } from '../../Services/clientServices';

const agregarCategoria = clientServices.agregarCategoria;

const Titulo = styled.h1`
    color: #F5F5F5;
    font-size: 60px;
    font-weight: 400;
    padding: 5% 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
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

function NuevaCategoria (){
  const formik = useFormik({
    initialValues: {
      nombre: '',
      descripcion: '',
      color: '#00000',
      codigo: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'El nombre solo puede contener letras y espacios')
        .required('Nombre requerido'),
      descripcion: Yup.string()
        .required('Descripcion requerida'),
      color: Yup.string()
        .required('Color requerido'),
      codigo: Yup.string()
        .max(7, 'Son maximo 7 numero')
        .required('Codigo de seguridad requerido'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      agregarCategoria(values);
    },
  });

  const handleLimpiar = () => {
    formik.resetForm(); // Restablecerá los valores iniciales definidos en initialValues
  };

  return (
  <Fondo>
    <Titulo>Nueva Categoria</Titulo>
      <ContenedorForm>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.nombre && formik.errors.nombre}
            helperText={
              formik.touched.nombre && formik.errors.nombre && formik.errors.nombre
            }
          />
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
            id="color"
            name="color"
            label="Color"
            type="color"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.color}
            variant="filled"
            sx={TextFieldStyle}
            fullWidth
            margin="dense"
            error={formik.touched.color && formik.errors.color}
            helperText={
              formik.touched.color && formik.errors.color && formik.errors.color
            }
          />
          <TextField
            required
            id="codigo"
            name="codigo"
            label="Codigo"
            type="codigo"
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
        </form>
      </ContenedorForm>
  </Fondo>
  );
}

export default NuevaCategoria