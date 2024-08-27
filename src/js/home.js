import { tipoMascotas } from "./tipo-mascotas.js";
import { consejos } from "./consejos";

window.onload = function () {
  // Referencia del elemento base donde se generan las tarjetas
  const container = document.getElementById("guia-primeros-auxilios");
  const consejosColumna1 = document.getElementById("columna-1");
  const consejosColumna2 = document.getElementById("columna-2");

  for (const Key in tipoMascotas) {
    const newCard = document.createElement("div");
    newCard.className = "tarjeta-tipo-mascota Elevation2";

    // Contenido de la tarjeta
    newCard.innerHTML = `
        <img src="${tipoMascotas[Key]["imagen"]}" alt="${tipoMascotas[Key]["nombre"]}">
        <div class="descripcion">
            <div class="textos">
                <h2>${tipoMascotas[Key]["nombre"]}</h2>
                <h5 class="tag">${tipoMascotas[Key]["numero-emergencias"]} Situaciones de emergencia</h5>
                <h5 class="tag">${tipoMascotas[Key]["numero-soluciones"]} Soluciones rápidas</h5>
            </div>
            <div class="box-boton">
                <a class="boton-c-emergencia" href="emergencias.html?tipo=${tipoMascotas[Key]["nombre"]}">Emergencias ${tipoMascotas[Key]["nombre"]}</a>
            </div>
        </div>`;

    // Añadimos la tarjeta como hija del contenedor
    container.appendChild(newCard);
  }

  for (const Key in consejos) {
    const newCard = document.createElement("div");

    let opciones = [
      "tarjeta-consejo-c-primary",
      "tarjeta-consejo-c-secondary",
      "tarjeta-consejo-c-onsurface",
    ];
    newCard.className = opciones[Math.floor(Math.random() * opciones.length)];

    // Contenido de la tarjeta
    newCard.innerHTML = `
            <h3>${consejos[Key]["nombre"]}</h3>
            <p style="font-style: italic">${consejos[Key]["consejo"]}</p>`;

    let imagen = `<div>`;
    for (const Key2 in consejos[Key]["tipo_mascota"]) {
      imagen += `<img class="imagen-tipo-consejo" src="${consejos[Key]["tipo_mascota"][Key2]}" alt="Perro">`;
    }

    newCard.innerHTML += imagen + "</div>";

    // Añadimos la tarjeta como hija del contenedor
    if (Key < consejos.length / 2) {
      consejosColumna1.appendChild(newCard);
    } else {
      consejosColumna2.appendChild(newCard);
    }
  }
};
