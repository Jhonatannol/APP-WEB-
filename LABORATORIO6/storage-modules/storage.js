// Función para guardar el nombre en el localStorage

export function guardarNombre(nombre) {
  // Asegúrate de que localStorage.setItem esté configurado correctamente

  localStorage.setItem('nombreUsuario', nombre);
}

// Función para obtener el nombre almacenado desde el localStorage

export function obtenerNombre() {
  
  // Obtiene el valor guardado del localStorage
  return localStorage.getItem('nombreUsuario');
}

  