import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['J', 'Q', 'K', 'A']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const createCards = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0) throw new Error("TipoDeCarta es obligatorio como un arreglo de string");

  if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error("tiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const type of tiposDeCartas) {
      deck.push([i] + type);
      console.log(tiposDeCartas)
    }
  }
  for (const special of tiposEspeciales) {
    for (const type of tiposDeCartas) {
      deck.push(special + type);
    }
  }

  return _.shuffle(deck);
};
