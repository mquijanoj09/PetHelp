const data = {
  Perros: {
    titulo: "Emergencias caninas",
    descripcion:
      "¿Qué le está ocurriendo a tu perro? Selecciona la emergencia para recibir ayuda inmediata.",
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
  },
  Gatos: {
    titulo: "Emergencias felinas",
    descripcion:
      "¿Qué le está ocurriendo a tu gato? Selecciona la emergencia para recibir ayuda inmediata.",
    tarjetas: [
      {
        titulo: "Intoxicaciones",
        descripcion:
          "Cuando un gato ingiere sustancias tóxicas (como plantas, alimentos o productos químicos)",
        personas: ["Veterinario"],
      },
      {
        titulo: "Caídas",
        descripcion:
          "Caídas desde alturas que pueden causar fracturas o lesiones internas.",
        personas: ["Veterinario", "Usuario"],
      },
    ],
  },
  Roedores: {
    titulo: "Emergencias para roedores",
    descripcion:
      "¿Qué le está ocurriendo a tu roedor? Selecciona la emergencia para recibir ayuda inmediata.",
    tarjetas: [
      {
        titulo: "Obstrucción intestinal",
        descripcion:
          "Cuando un roedor tiene problemas para digerir alimentos o materiales no comestibles.",
        personas: ["Veterinario"],
      },
      {
        titulo: "Fracturas",
        descripcion: "Lesiones causadas por caídas o golpes.",
        personas: ["Veterinario", "Usuario"],
      },
    ],
  },
};

function getTipoMascota() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("tipo");
}

function crearTarjetas() {
  const tipoMascota = getTipoMascota();
  if (!tipoMascota || !data[tipoMascota]) {
    console.error("Tipo de mascota no encontrado.");
    return;
  }

  const { titulo, descripcion, tarjetas } = data[tipoMascota];

  document.querySelector(".header h1").textContent = titulo;
  document.querySelector(".header p").textContent = descripcion;

  const section = document.getElementById("tarjetas-sintomas");
  section.innerHTML = "";

  tarjetas.forEach((item) => {
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
