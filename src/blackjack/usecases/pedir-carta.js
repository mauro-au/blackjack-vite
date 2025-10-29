//Esta función me permite tomar una carta

/**
 *
 * @param {Array<String>} Deck es un arreglo de string
 * @returns {String} Retorna un arreglo de string
 */
export const askForCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop();
};
