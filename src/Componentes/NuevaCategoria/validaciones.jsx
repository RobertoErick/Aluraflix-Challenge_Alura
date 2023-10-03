export const validarNombre = (nombre) => {
    if (nombre.value === null){
        return true
    }
    const length = nombre.length;
    if (length > 8 && length < 20 ) {
      return true;
    } else {
      return false;
    }
};
  
export function validarDescripcion(descripcion) {
    const length = descripcion.length;
    if (length >= 20 && length < 50) {
      return true;
    } else {
      return false;
    }
}

export function validarCodigo(codigo) {
    const length = codigo.length;
    if (length >= 20 && length < 100) {
      return true;
    } else {
      return false;
    }
}