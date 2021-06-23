/**
 * Funcion flecha "Arrow Function" que  genera un numero entero positivo o negativo
 * @param {number} limit - numero natural
 * @returns Retorna un numero aleatorio
 */
export const random = (limit) =>
  Math.random() * 1 < 0.5
    ? -Math.floor(Math.random() * limit)
    : Math.floor(Math.random() * limit);
