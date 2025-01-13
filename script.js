"use strict";
// Referenciado de los elementos del DOM
const getEL = (selector) => document.getElementById(selector);
const inputPalabra = getEL("inputPalabra");
const botonCapitalizar = getEL("botonCapitalizar");
const spanResultado = getEL("spanResultado");

// Funcion capitalizadora
function mayusculaInicial(texto) {
  let textoCapitalizado = "";

  // Validación para manejar texto vacío
  if (!texto) return "";

  // Capitalizo letra inicial de cada palabra del texto
  texto = texto.split(" ").forEach((palabra) => {
    textoCapitalizado += `${palabra.charAt(0).toUpperCase()}${palabra
      .substring(1)
      .toLowerCase()} `;
  });

  return textoCapitalizado;
}

// Llamado de la funcion.
botonCapitalizar.addEventListener("click", () => {
  spanResultado.innerText = mayusculaInicial(inputPalabra.value);
});
