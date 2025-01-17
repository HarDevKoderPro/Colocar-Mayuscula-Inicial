"use strict";
// Referenciado de los elementos del DOM
const getEL = (selector) => document.getElementById(selector);
const inputPalabra = getEL("inputPalabra");
const botonCapitalizar = getEL("botonCapitalizar");
const spanResultado = getEL("spanResultado");

// Funcion capitalizadora
const mayusculaInicial = (texto) => {

  // Capitalizo letra inicial de cada palabra del texto
  let resultado = "";
  texto.split(" ").forEach((palabra) => {
    resultado += `${palabra.charAt(0).toUpperCase()}${palabra
      .substring(1)
      .toLowerCase()} `;
  });

  return resultado;
};

// Llamado de la funcion.
botonCapitalizar.addEventListener("click", () => {
  spanResultado.innerText = mayusculaInicial(inputPalabra.value);
});
