/**
 * Funcion para generar numeros aleatorios
 * @param {integer} limit Limite
 * @returns Retorna un numero aleatorio desde 0 a n
 */
export function random(limit, option = true) {
  const result =
    Math.random() * 1 < 0.5 && option
      ? -Math.floor(Math.random() * (limit + 1))
      : Math.floor(Math.random() * (limit + 1));
  return result === 0 ? 0 : result;
}
