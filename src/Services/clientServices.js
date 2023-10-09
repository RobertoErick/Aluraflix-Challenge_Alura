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


export const clientServices = {
  agregarVideo,
  agregarCategoria
} 