/**
 *Obtener el valor de la carta
 * @param {String} carta
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {
  const value = carta.substring(0, carta.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
};
