/**
 * Suma maximo de un subarreglo usando "Divide and Conquer"
 * @param {Array} A - Arreglo de costos, enteros positivos o negativos
 * @param {Number} p - parte izquierda del arreglo
 * @param {Number} r - parte derecha del arreglo
 * @returns {Number} Retornar la suma maxima en el arreglo
 */

function seg_max_dv(A, p, r) {
  if (r - p <= 1) return Math.max(0, A[p]);
  const q = Math.floor((p + r) / 2);
  const maxizq = seg_max_dv(A, p, q);
  const maxder = seg_max_dv(A, q, r);
  let max2izq = 0;
  let max2der = 0;
  let sum = 0;
  for (let i = q; i >= p; i -= 1) {
    if (sum + A[i] >= max2izq) max2izq = sum + A[i];
    sum += A[i];
  }
  sum = 0;
  for (let i = q + 1; i < r; i += 1) {
    if (sum + A[i] >= max2der) max2der = sum + A[i];
    sum += A[i];
  }
  const crossSum = max2izq + max2der;
  return Math.max(maxizq, crossSum, maxder);
}

/**
 *
 * @param {Array} array - un arreglo de enteros aleatorios
 * @returns Retonar la maxima suma de la funcion recursiva `seg_max_dv`
 */
export default function seg_max(array = []) {
  return seg_max_dv(array, 0, array.length);
}
