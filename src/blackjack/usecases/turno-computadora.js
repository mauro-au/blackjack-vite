import { askForCard, valorCarta, crearCartaHtml } from "./";

/**
 * Turno de la computadora
 * @param {Number} minimumPoints Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elementos HTML para los puntos
 * @param {HTMLElement} divCartaComputadora Elementos HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  minimumPoints,
  puntosHTML,
  divCartaComputadora,
  deck = []) => {

  if (!minimumPoints) throw new Error("Puntos mínimos son necesarios");
  if (!puntosHTML) throw new Error("Argumentos puntosHTML son necesarios");

  let puntosComputadora = 0;

  do {
    const carta = askForCard(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHtml(carta);
    divCartaComputadora.append(imgCarta);

    if (minimumPoints > 21) {
      break;
    }
  } while (puntosComputadora < minimumPoints && minimumPoints <= 21);

  setTimeout(() => {
    if (puntosComputadora === minimumPoints) {
      alert("❌ Nadie gana :(");
    } else if (minimumPoints > 21) {
      alert("💻 Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("🙋🏻‍♂️ Jugador gana");
    } else {
      alert("💻 Computadora gana");
    }
  }, 50);
};
