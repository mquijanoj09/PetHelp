const data = {
  tarjetas: [
    {
      titulo: "Intoxicaciones",
      descripcion:
        "Cuando un perro ingiere sustancias tóxicas (como plantas, alimentos o productos químicos)",
      personas: ["Veterinario"],
    },
    {
      titulo: "Traumatismos",
      descripcion:
        "Lesiones causadas por golpes, caídas o accidentes, que pueden resultar en fracturas, heridas o daño interno.",
      personas: ["Veterinario", "Usuario"],
    },
  ],
};

function crearTarjetas() {
  const section = document.getElementById("tarjetas-sintomas");

  data.tarjetas.forEach((item) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-tipo-emergencia Elevation2";

    const titulo = document.createElement("h2");
    titulo.textContent = item.titulo;
    tarjeta.appendChild(titulo);

    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.textContent = item.descripcion;
    tarjeta.appendChild(descripcion);

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-botones";

    const contenedorPersonas = document.createElement("div");
    contenedorPersonas.className = "contenedor-personas";

    item.personas.forEach((personaText) => {
      const persona = document.createElement("div");
      persona.className = "personas-tarjetas";
      persona.textContent = personaText;
      contenedorPersonas.appendChild(persona);
    });
    contenedor.appendChild(contenedorPersonas);

    const boton = document.createElement("button");
    boton.className = "boton-sintomas";
    boton.textContent = "Indicaciones";
    contenedor.appendChild(boton);

    tarjeta.appendChild(contenedor);
    section.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", crearTarjetas);
