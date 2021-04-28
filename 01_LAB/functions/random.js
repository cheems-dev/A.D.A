/**
 * Funcion para generar numeros aleatorios
 * @param {integer} limit Limite
 * @returns Retorna un numero aleatorio desde 0 a n
 */
export const random = (limit) =>
  Math.random()*1 < 0.5
    ? -Math.floor(Math.random() * limit)
    : Math.floor(Math.random() * limit);
