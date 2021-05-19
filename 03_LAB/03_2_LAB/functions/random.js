/**
 * Funcion para generar numeros aleatorios
 * @param {integer} limit Limite
 * @returns Retorna un numero aleatorio desde 0 a n
 */
export function random(limit) {
  return Math.floor(Math.random() * (limit + 1));
}
