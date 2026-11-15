/* Guardianes de la Red
   Este archivo hace tres cosas:
   1) Lee la respuesta del estudiante.
   2) Decide si es correcta.
   3) Muestra un mensaje en la página y cambia los puntos. */


/* ---------- VARIABLE ---------- */
let puntos = 0;


/* ---------- FUNCIONES AYUDANTES ---------- */

/* Muestra los puntos y el rango en la página */
function actualizarPuntos() {
  let rango = "Aprendiz";
  if (puntos >= 30) {
    rango = "Guardián de la Red";
  } else if (puntos >= 10) {
    rango = "Explorador";
  }
  document.getElementById("puntaje").textContent = puntos;
  document.getElementById("rango").textContent = rango;
}

function sumarPuntos(cantidad) {
  puntos = puntos + cantidad;
  actualizarPuntos();
}

/* Resta puntos, pero nunca baja de cero */
function restarPuntos(cantidad) {
  puntos = puntos - cantidad;
  if (puntos < 0) {
    puntos = 0;
  }
  actualizarPuntos();
}

/* Muestra un mensaje en la página. tipo puede ser "ok", "mal" o "aviso" */
function mostrarMensaje(id, texto, tipo) {
  let caja = document.getElementById(id);
  caja.textContent = texto;
  caja.className = tipo;
}


/* ---------- PRUEBA 1: OPCIÓN MÚLTIPLE ---------- */
function corregirActividad1(evento) {
  evento.preventDefault();   // evita que la página se recargue

  let opcionA = document.getElementById("a1-a").checked;
  let opcionB = document.getElementById("a1-b").checked;
  let opcionC = document.getElementById("a1-c").checked;
  let opcionD = document.getElementById("a1-d").checked;

  // Si no marcó ninguna, avisamos
  if (opcionA === false && opcionB === false && opcionC === false && opcionD === false) {
    mostrarMensaje("msg-act1", "Elegí una opción antes de comprobar.", "aviso");
    return;
  }

  // La respuesta correcta es la B
  if (opcionB === true) {
    sumarPuntos(10);
    mostrarMensaje("msg-act1", "¡Correcto! Ser ciudadano digital es usar la tecnología con responsabilidad y respeto. (+10 puntos)", "ok");
    document.getElementById("boton-act1").disabled = true;
  } else {
    restarPuntos(5);
    mostrarMensaje("msg-act1", "No es correcto. Releé la Lección 1 e intentá de nuevo. (-5 puntos)", "mal");
  }
}


/* ---------- PRUEBA 2: COMPLETAR CON UN COMBO ---------- */
function corregirActividad2(evento) {
  evento.preventDefault();

  let respuesta = document.getElementById("a2-combo").value;

  // Si no eligió nada, avisamos
  if (respuesta === "") {
    mostrarMensaje("msg-act2", "Elegí una opción del menú antes de comprobar.", "aviso");
    return;
  }

  // La respuesta correcta es "pensar"
  if (respuesta === "pensar") {
    sumarPuntos(10);
    mostrarMensaje("msg-act2", "¡Muy bien! Pensar antes de compartir datos te ayuda a estar más seguro. (+10 puntos)", "ok");
    document.getElementById("boton-act2").disabled = true;
  } else {
    restarPuntos(5);
    mostrarMensaje("msg-act2", "No es correcto. Releé la Lección 3 e intentá de nuevo. (-5 puntos)", "mal");
  }
}


/* ---------- PRUEBA 3: VERDADERO O FALSO ---------- */
function corregirActividad3(evento) {
  evento.preventDefault();

  let verdadero = document.getElementById("vf-v").checked;
  let falso = document.getElementById("vf-f").checked;

  // Si no marcó ninguna, avisamos
  if (verdadero === false && falso === false) {
    mostrarMensaje("msg-act3", "Elegí Verdadero o Falso antes de comprobar.", "aviso");
    return;
  }

  // La respuesta correcta es "Falso"
  if (falso === true) {
    sumarPuntos(10);
    mostrarMensaje("msg-act3", "¡Correcto! La contraseña es personal. No se comparte con nadie, ni con amigos. (+10 puntos)", "ok");
    document.getElementById("boton-act3").disabled = true;
  } else {
    restarPuntos(5);
    mostrarMensaje("msg-act3", "No es correcto. Releé la Lección 3 e intentá de nuevo. (-5 puntos)", "mal");
  }
}


/* ---------- CONECTAR CADA FORMULARIO CON SU FUNCIÓN ---------- */
/* "submit" es cuando el estudiante toca el botón Comprobar */
document.getElementById("form-act1").addEventListener("submit", corregirActividad1);
document.getElementById("form-act2").addEventListener("submit", corregirActividad2);
document.getElementById("form-act3").addEventListener("submit", corregirActividad3);
