let obtenerRazas = 'https://api.thedogapi.com/v1/breeds';

(async function conectarAPI() {
  try {
    // Mostrar el indicador de carga
    const indicadorCarga = document.getElementById('cargando');
    const progressBar = document.getElementById('progressBar');
    indicadorCarga.style.display = 'block';

    // Realizar la solicitud asincrónica
    const respuesta = await (await fetch(obtenerRazas, {
      headers: {
        'x-api-key': 'YOUR_API_KEY' // Reemplaza con tu clave de API
      }
    })).json();

    // Mostrar progreso de carga (simulación de barra de carga)
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        progressBar.value = progress;
      } else {
        clearInterval(interval); // Detener la barra cuando termine la carga
      }
    }, 100); // Aumento de 10% cada 100ms (puedes ajustar esto según el tiempo de la solicitud)

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
    console.log(error);
  }
})();
