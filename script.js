// MISIÓN: CIUDADANÍA DIGITAL
// Este archivo utiliza variables, arrays, objetos, funciones, condicionales,
// ciclos, eventos, manipulación del DOM.

const misiones = [
  {
    id: 1,
    titulo: "¿Qué es la ciudadanía digital?",
    contenido: `
      <p>La <strong>ciudadanía digital</strong> es la forma en que participamos en Internet y usamos la tecnología de manera segura, responsable y respetuosa.</p>
      <p>Ser un buen ciudadano digital implica conocer nuestros derechos y responsabilidades, cuidar a otras personas y pensar antes de publicar.</p>
      <ul>
        <li>Participar de forma responsable.</li>
        <li>Respetar opiniones y diferencias.</li>
        <li>Verificar la información antes de compartirla.</li>
        <li>Proteger nuestra privacidad y la de los demás.</li>
      </ul>`,
    dato: "IDEA CLAVE: lo que hacemos en Internet también tiene consecuencias en la vida real.",
    pregunta: "En un grupo de clase alguien comparte una noticia sorprendente. ¿Qué conducta demuestra ciudadanía digital?",
    opciones: [
      "Compartirla inmediatamente para que todos la vean.",
      "Verificar si la información es confiable antes de compartirla.",
      "Modificar el título para que parezca más interesante."
    ],
    correcta: 1,
    explicacion: "¡Correcto! Verificar la información ayuda a evitar la difusión de noticias falsas."
  },
  {
    id: 2,
    titulo: "Cuidamos nuestra información personal",
    contenido: `
      <p>La información personal permite identificarte o conocer detalles de tu vida. Algunos ejemplos son tu dirección, teléfono, contraseñas, ubicación, documentos y datos familiares.</p>
      <p>Las contraseñas deben ser difíciles de adivinar, diferentes para cada servicio y nunca deben compartirse con otras personas.</p>
      <ul>
        <li>Usá contraseñas largas y seguras.</li>
        <li>Activá la verificación en dos pasos cuando esté disponible.</li>
        <li>Configurá la privacidad de tus cuentas.</li>
        <li>No publiques datos personales ni tu ubicación en tiempo real.</li>
      </ul>`,
    dato: "RECORDÁ: una contraseña es personal. No la compartas por mensajes ni aunque alguien diga que es del servicio técnico.",
    pregunta: "Una persona que no conocés por Internet te pide tu dirección y el nombre de tu liceo. ¿Qué deberías hacer?",
    opciones: [
      "Darle los datos para demostrar que confiás en esa persona.",
      "Enviar solamente la dirección.",
      "No compartirlos, interrumpir el contacto y hablar con un adulto de confianza."
    ],
    correcta: 2,
    explicacion: "¡Muy bien! No compartas información personal con desconocidos. Si algo te genera dudas, pedí ayuda a un adulto de confianza."
  },
  {
    id: 3,
    titulo: "Nos relacionamos con respeto en Internet",
    contenido: `
      <p>Detrás de cada pantalla hay personas. Por eso, las reglas de respeto y convivencia también se aplican en chats, redes sociales, videojuegos y plataformas educativas.</p>
      <ul>
        <li>Escribí con respeto, incluso cuando no estés de acuerdo.</li>
        <li>No difundas fotos, audios o mensajes de otras personas sin permiso.</li>
        <li>No participes en burlas, insultos ni humillaciones.</li>
        <li>Pensá cómo puede sentirse la otra persona antes de publicar.</li>
      </ul>
      <p>La empatía digital consiste en considerar los sentimientos y derechos de los demás al comunicarnos en línea.</p>`,
    dato: "ANTES DE PUBLICAR: ¿es respetuoso?, ¿es necesario?, ¿tengo permiso para compartirlo?",
    pregunta: "En el chat del grupo se burlan de una compañera y comparten una foto suya sin permiso. ¿Qué acción es la más responsable?",
    opciones: [
      "Reenviar la foto para no quedar afuera del grupo.",
      "No compartirla, apoyar a la compañera y comunicar la situación a alguien de confianza.",
      "Agregar otro comentario para que la broma sea más divertida."
    ],
    correcta: 1,
    explicacion: "¡Excelente! No difundir el contenido y apoyar a quien está siendo agredido ayuda a frenar el daño."
  },
  {
    id: 4,
    titulo: "Riesgos en Internet: grooming y ciberbullying",
    contenido: `
      <p><strong>Ciberbullying</strong> es el acoso realizado mediante medios digitales: mensajes ofensivos, amenazas, humillaciones o difusión de contenido para dañar a alguien.</p>
      <p><strong>Grooming</strong> es una forma de abuso en la que una persona adulta establece contacto con un menor por medios digitales con fines de explotación o abuso. Puede intentar ganarse su confianza, pedir secretos, fotos o encuentros.</p>
      <ul>
        <li>No respondas ni aceptes pedidos que te incomoden.</li>
        <li>No te encuentres con alguien conocido solamente por Internet.</li>
        <li>Guardá evidencias cuando sea seguro hacerlo; no las difundas.</li>
        <li>Bloqueá y reportá la cuenta si corresponde.</li>
        <li>Contale cuanto antes a un adulto de confianza.</li>
      </ul>`,
    dato: "IMPORTANTE: nunca es culpa de quien recibe el acoso o el contacto inapropiado. Pedir ayuda es una decisión valiente.",
    pregunta: "Una cuenta desconocida se gana tu confianza, te pide que mantengas la conversación en secreto y solicita fotos privadas. ¿Qué hacés?",
    opciones: [
      "Acepto porque parece una persona amable.",
      "Envío una foto y después decido si sigo hablando.",
      "No envío nada, corto el contacto, bloqueo o reporto y se lo cuento a un adulto de confianza."
    ],
    correcta: 2,
    explicacion: "¡Correcto! Esas señales pueden indicar una situación de riesgo. No continúes el contacto y buscá ayuda de un adulto de confianza."
  },
  {
    id: 5,
    titulo: "Consejos para navegar de forma segura",
    contenido: `
      <p>Navegar de forma segura significa tomar decisiones para proteger nuestros dispositivos, datos y bienestar.</p>
      <ul>
        <li>Comprobá que los sitios sean confiables antes de ingresar datos.</li>
        <li>No abras enlaces ni archivos inesperados.</li>
        <li>Mantené actualizados el sistema y las aplicaciones.</li>
        <li>Usá redes Wi-Fi públicas con precaución y evitá realizar operaciones sensibles.</li>
        <li>Consultá a una persona adulta ante mensajes, pedidos o contenidos sospechosos.</li>
        <li>Recordá que no todo lo que aparece en Internet es verdadero.</li>
      </ul>`,
    dato: "TU REGLA DE ORO: si algo parece sospechoso, frená, no hagas clic y consultá.",
    pregunta: "Recibís un mensaje inesperado que dice que ganaste un premio y te pide ingresar tu contraseña en un enlace. ¿Qué hacés?",
    opciones: [
      "Hago clic rápido para no perder el premio.",
      "No abro el enlace, no ingreso datos y verifico el mensaje por un canal oficial.",
      "Reenvío el mensaje a mis compañeros."
    ],
    correcta: 1,
    explicacion: "¡Muy bien! Los mensajes que prometen premios y piden contraseñas pueden ser intentos de engaño. Verificá siempre por canales oficiales."
  }
];

const desafioFinal = [
  {
    pregunta: "¿Cuál de estos datos debe mantenerse privado?",
    opciones: ["El nombre de una película que te gusta", "Tu contraseña", "El color de tu equipo favorito"],
    correcta: 1
  },
  {
    pregunta: "¿Qué hacés si presenciás ciberbullying?",
    opciones: ["Compartís el contenido", "Te sumás a las burlas", "No lo difundís, apoyás a la persona y buscás ayuda"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es una buena práctica antes de compartir una noticia?",
    opciones: ["Verificar la fuente", "Cambiar el título", "Compartirla sin leer"],
    correcta: 0
  }
];

let puntaje = 0;
let misionesCompletadas = [];
let misionActual = null;
let respuestaFinal = 0;
let respuestasFinalesCorrectas = 0;

const elementoPuntaje = document.querySelector("#puntaje");
const contadorMisiones = document.querySelector("#misiones-contador");
const porcentaje = document.querySelector("#porcentaje");
const barraRelleno = document.querySelector("#barra-relleno");
const barraProgreso = document.querySelector("#barra-progreso");
const zonaMision = document.querySelector("#zona-mision");
const botonComprobar = document.querySelector("#comprobar");
const botonContinuar = document.querySelector("#continuar");

function actualizarInterfaz() {
  elementoPuntaje.textContent = puntaje;
  const cantidad = misionesCompletadas.length;
  const avance = Math.round((cantidad / misiones.length) * 100);
  contadorMisiones.textContent = `${cantidad} de ${misiones.length} misiones completadas`;
  porcentaje.textContent = `${avance}%`;
  barraRelleno.style.width = `${avance}%`;
  barraProgreso.setAttribute("aria-valuenow", avance);

  // Recorremos las tarjetas para actualizar su estado.
  for (let i = 1; i <= misiones.length; i++) {
    const tarjeta = document.querySelector(`[data-mision-card="${i}"]`);
    const boton = tarjeta.querySelector("button");
    const estado = tarjeta.querySelector(".estado-mision");

    if (misionesCompletadas.includes(i)) {
      tarjeta.classList.remove("bloqueada", "disponible");
      tarjeta.classList.add("completada");
      estado.textContent = "✓ COMPLETADA";
      boton.textContent = "Volver a consultar";
      boton.disabled = false;
    } else if (i === 1 || misionesCompletadas.includes(i - 1)) {
      tarjeta.classList.remove("bloqueada", "completada");
      tarjeta.classList.add("disponible");
      estado.textContent = "DISPONIBLE";
      boton.textContent = "Entrar a la misión";
      boton.disabled = false;
    } else {
      tarjeta.classList.remove("disponible", "completada");
      tarjeta.classList.add("bloqueada");
      estado.textContent = "🔒 BLOQUEADA";
      boton.textContent = "Completa la misión anterior";
      boton.disabled = true;
    }
  }

  // Desbloquea las insignias según las misiones completadas.
  const insignias = document.querySelectorAll(".insignia");
  insignias.forEach(function(insignia) {
    const numero = Number(insignia.dataset.insignia);
    insignia.classList.toggle("desbloqueada", misionesCompletadas.includes(numero));
    insignia.classList.toggle("pendiente", !misionesCompletadas.includes(numero));
  });

  if (cantidad === misiones.length) {
    document.querySelector("#desafio-final").classList.remove("oculto");
  }
}

function abrirMision(numero) {
  if (numero > 1 && !misionesCompletadas.includes(numero - 1)) return;

  misionActual = misiones[numero - 1];
  document.querySelector("#mision-etiqueta").textContent = `MISIÓN 0${numero}`;
  document.querySelector("#mision-titulo").textContent = misionActual.titulo;
  document.querySelector("#mision-contenido").innerHTML = misionActual.contenido;
  document.querySelector("#dato-clave").textContent = misionActual.dato;
  document.querySelector("#desafio-pregunta").textContent = misionActual.pregunta;

  const contenedorOpciones = document.querySelector("#desafio-opciones");
  contenedorOpciones.innerHTML = "";

  misionActual.opciones.forEach(function(opcion, indice) {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion";
    etiqueta.innerHTML = `
      <input type="radio" name="respuesta-mision" value="${indice}">
      <span>${opcion}</span>
    `;
    contenedorOpciones.appendChild(etiqueta);
  });

  document.querySelectorAll('input[name="respuesta-mision"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
      document.querySelectorAll(".opcion").forEach(opcion => opcion.classList.remove("seleccionada"));
      radio.closest(".opcion").classList.add("seleccionada");
      botonComprobar.disabled = false;
    });
  });

  document.querySelector("#retroalimentacion").textContent = "";
  document.querySelector("#retroalimentacion").className = "retroalimentacion";
  botonComprobar.classList.remove("oculto");
  botonComprobar.disabled = false; // Permite avisar si se intenta comprobar sin elegir.
  botonContinuar.classList.add("oculto");
  zonaMision.classList.remove("oculto");
  zonaMision.scrollIntoView({ behavior: "smooth", block: "start" });
}

function comprobarRespuesta() {
  const seleccion = document.querySelector('input[name="respuesta-mision"]:checked');
  if (!seleccion) {
    const retroalimentacion = document.querySelector("#retroalimentacion");
    retroalimentacion.textContent = "Seleccioná una respuesta antes de continuar.";
    retroalimentacion.classList.remove("exito");
    retroalimentacion.classList.add("error");
    return;
  }

  const respuesta = Number(seleccion.value);
  const esCorrecta = respuesta === misionActual.correcta;
  const retroalimentacion = document.querySelector("#retroalimentacion");

  document.querySelectorAll('input[name="respuesta-mision"]').forEach(function(radio) {
    radio.disabled = true;
    const opcion = radio.closest(".opcion");
    if (Number(radio.value) === misionActual.correcta) opcion.classList.add("correcta");
    if (radio.checked && !esCorrecta) opcion.classList.add("incorrecta");
  });

  if (esCorrecta) {
    retroalimentacion.textContent = `¡Correcto! ${misionActual.explicacion}`;
    retroalimentacion.className = "retroalimentacion exito";
    if (!misionesCompletadas.includes(misionActual.id)) {
      puntaje += 100;
      misionesCompletadas.push(misionActual.id);
      misionesCompletadas.sort((a, b) => a - b);
      actualizarInterfaz();
    }
  } else {
    retroalimentacion.textContent = `Todavía no. Repasá el contenido y volvé a intentarlo. ${misionActual.explicacion}`;
    retroalimentacion.className = "retroalimentacion error";
  }

  botonComprobar.classList.add("oculto");
  botonContinuar.classList.remove("oculto");
}

function continuarMision() {
  zonaMision.classList.add("oculto");
  actualizarInterfaz();
  if (misionesCompletadas.length === misiones.length) {
    document.querySelector("#desafio-final").scrollIntoView({ behavior: "smooth" });
    mostrarPreguntaFinal();
  } else {
    document.querySelector("#mapa").scrollIntoView({ behavior: "smooth" });
  }
}

function mostrarPreguntaFinal() {
  const contenedor = document.querySelector("#final-pregunta");
  if (respuestaFinal >= desafioFinal.length) {
    finalizarDesafio();
    return;
  }

  const pregunta = desafioFinal[respuestaFinal];
  contenedor.innerHTML = `<h3>${respuestaFinal + 1}. ${pregunta.pregunta}</h3><div class="final-opciones"></div><button class="boton boton-principal" id="comprobar-final">Comprobar</button>`;
  const opciones = contenedor.querySelector(".final-opciones");

  pregunta.opciones.forEach(function(opcion, indice) {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion";
    etiqueta.innerHTML = `<input type="radio" name="respuesta-final" value="${indice}"><span>${opcion}</span>`;
    opciones.appendChild(etiqueta);
  });

  contenedor.querySelectorAll('input[name="respuesta-final"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
      contenedor.querySelector("#comprobar-final").disabled = false;
    });
  });

  contenedor.querySelector("#comprobar-final").addEventListener("click", comprobarFinal);
}

function comprobarFinal() {
  const seleccion = document.querySelector('input[name="respuesta-final"]:checked');
  if (!seleccion) {
    const resultado = document.querySelector("#final-resultado");
    resultado.textContent = "Seleccioná una respuesta antes de continuar.";
    resultado.classList.remove("exito");
    resultado.classList.add("error");
    return;
  }

  const pregunta = desafioFinal[respuestaFinal];
  const esCorrecta = Number(seleccion.value) === pregunta.correcta;
  const resultado = document.querySelector("#final-resultado");

  if (esCorrecta) {
    respuestasFinalesCorrectas++;
    resultado.textContent = "¡Respuesta correcta! Sumaste 50 XP.";
    resultado.className = "retroalimentacion exito";
    puntaje += 50;
  } else {
    resultado.textContent = "No es la respuesta más segura. Repasá las misiones y recordá las recomendaciones.";
    resultado.className = "retroalimentacion error";
  }

  actualizarInterfaz();
  respuestaFinal++;

  const botonAnterior = document.querySelector("#comprobar-final");
  const boton = botonAnterior.cloneNode(true); // Quita el evento de comprobar la respuesta anterior.
  botonAnterior.replaceWith(boton);
  boton.textContent = "Siguiente pregunta";
  boton.disabled = false;
  boton.addEventListener("click", function() {
    resultado.textContent = "";
    if (respuestaFinal < desafioFinal.length) {
      mostrarPreguntaFinal();
    } else {
      finalizarDesafio();
    }
  });
}

function finalizarDesafio() {
  document.querySelector("#final-pregunta").innerHTML = "";
  document.querySelector("#final-resultado").textContent =
    `Desafío final terminado: ${respuestasFinalesCorrectas} de ${desafioFinal.length} respuestas correctas.`;
  document.querySelector("#puntaje-final").textContent = `${puntaje} XP`;
  document.querySelector("#certificado").classList.remove("oculto");
  document.querySelector("#certificado").scrollIntoView({ behavior: "smooth" });
}

function reiniciarAventura() {
  const confirmar = window.confirm("¿Querés reiniciar la aventura desde cero?");
  if (!confirmar) return;

  puntaje = 0;
  misionesCompletadas = [];
  respuestaFinal = 0;
  respuestasFinalesCorrectas = 0;
  document.querySelector("#certificado").classList.add("oculto");
  document.querySelector("#desafio-final").classList.add("oculto");
  document.querySelector("#final-resultado").textContent = "";
  actualizarInterfaz();
  document.querySelector("#inicio").scrollIntoView({ behavior: "smooth" });
}

// Eventos: botones para abrir las misiones.
document.querySelectorAll(".abrir-mision").forEach(function(boton) {
  boton.addEventListener("click", function() {
    abrirMision(Number(boton.dataset.abrir));
  });
});

botonComprobar.addEventListener("click", comprobarRespuesta);
botonContinuar.addEventListener("click", continuarMision);
document.querySelector("#cerrar-mision").addEventListener("click", function() {
  zonaMision.classList.add("oculto");
});
document.querySelector("#reiniciar").addEventListener("click", reiniciarAventura);

// Inicio de la aplicación.
actualizarInterfaz();
