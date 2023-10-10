import axios from "axios";
function agregarVideo(data) {
  axios.post('http://localhost:4000/NuevoVideo', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function agregarCategoria(data) {
    axios.post(`http://localhost:4000/NuevaCategoria`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function obtenerCategorias() {
  try {
    const response = await axios.get("http://localhost:4000/NuevaCategoria");
    if (response.data.length > 0) {
      const categorias = response.data.map((categoria) => categoria.nombre);
      return categorias;
    } else {
      console.log("No se encontraron categorías en la respuesta.");
      return []; // Devuelve un arreglo vacío en caso de que no haya categorías
    }
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    return []; // Devuelve un arreglo vacío en caso de error
  }
}

export const clientServices = {
  agregarVideo,
  agregarCategoria,
  obtenerCategorias
} 