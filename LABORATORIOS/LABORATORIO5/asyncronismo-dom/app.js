// URL de la API de The Dog API (reemplaza 'YOUR_API_KEY' con tu clave real)
let obtenerRazas = 'https://api.thedogapi.com/v1/breeds';

// Función asincrónica para obtener los datos
(async function conectarAPI() {
  try {
    // Mostrar el indicador de carga
    const indicadorCarga = document.getElementById('cargando');
    indicadorCarga.style.display = 'block';

    // Realizar la solicitud asincrónica
    const respuesta = await (await fetch(obtenerRazas, {
      headers: {
        'x-api-key': 'YOUR_API_KEY' // Reemplaza con tu clave de API
      }
    })).json();

    // Manipular el DOM para mostrar las razas de perros
    const resultadosDiv = document.getElementById('resultados');
    respuesta.forEach(perro => {
      const perroElemento = document.createElement('div');
      perroElemento.classList.add('perro');
      perroElemento.innerHTML = `
        <h3>${perro.name}</h3>
        <p>Temperamento: ${perro.temperament}</p>
        <p>Origen: ${perro.origin}</p>
        <img src="${perro.image ? perro.image.url : ''}" alt="${perro.name}" width="200">
      `;
      resultadosDiv.appendChild(perroElemento);
    });

    // Ocultar el indicador de carga
    indicadorCarga.style.display = 'none';

  } catch (error) {
    // Mostrar error en consola si no se puede obtener la respuesta
    console.log(error);
  }
})();
