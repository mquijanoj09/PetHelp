import {tipoMascotas} from './tipo-mascotas.js';

window.onload = function () {

    // Referencia del elemento base donde se generan las tarjetas
    const container = document.getElementById('guia-primeros-auxilios');

    for (const Key in tipoMascotas) {

        const newCard = document.createElement('div');
        newCard.className = 'tarjeta-tipo-mascota Elevation2';

        // Contenido de la tarjeta
        newCard.innerHTML = `
        <img src="${tipoMascotas[Key]['imagen']}" alt="${tipoMascotas[Key]['nombre']}">
        <div class="descripcion">
            <div class="textos">
                <h2>${tipoMascotas[Key]['nombre']}</h2>
                <h5 class="tag">${tipoMascotas[Key]['numero-emergencias']} Situaciones de emergencia</h5>
                <h5 class="tag">${tipoMascotas[Key]['numero-soluciones']} Soluciones rápidas</h5>
            </div>
            <div class="box-boton">
                <button class="boton-c-emergencia">Emergencias</button>
            </div>
        </div>`;

        // Añadimos la tarjeta como hija del contenedor
        container.appendChild(newCard);
    }
}