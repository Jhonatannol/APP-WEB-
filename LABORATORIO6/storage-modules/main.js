import { guardarNombre, obtenerNombre } from './storage.js';

const nombreInput = document.getElementById('nombreInput');
const guardarBtn = document.getElementById('guardarBtn');
const saludo = document.getElementById('saludo');

// Mostrar el nombre guardado si existe
const nombreGuardado = obtenerNombre();
console.log("Nombre Guardado:", nombreGuardado); // Verifica si el nombre está en localStorage

if (nombreGuardado) {
  saludo.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;
} else {
  saludo.textContent = '¡Hola! Ingresa tu nombre.';
}

// Evento para guardar nombre
guardarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    guardarNombre(nombre);  // Guarda el nombre en localStorage
    saludo.textContent = `¡Hola, ${nombre}! (nombre guardado)`;
  } else {
    console.log("El campo de nombre está vacío");
  }
});

