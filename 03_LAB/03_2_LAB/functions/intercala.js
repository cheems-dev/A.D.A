import { performance } from "perf_hooks";

/**
 * Algoritmo Intercala visto en clase
 * @param {Array} A - Arreglo de numeros enteros -> A
 * @param {Number} p - Posicion inicial de A
 * @param {Number} q - Posicion medio de A
 * @param {Number} r - Posicion final de A
 * @returns Retorna el tiempo de complejidad y costo total
 */
export default function intercala(A, p, q, r) {
  /**
   * Para hallar el costo total se tomara en cuenta lo siguiente
      x2 comparaciones
      x8 asignaciones
      x200 creación de un objeto
      x50 + n x 10 separa memoria para un arreglo o lista de tamanho 'n'
  */
  let cost_total = 0;
  let start = performance.now();
  let B = new Array();
  cost_total += 200;
  let i = 0;
  cost_total += 8;
  let j = 0;
  cost_total += 8;
  for (i = p; i <= q; i++) {
    B[i] = A[i];
    cost_total += 8;
  }

  for (j = q + 1; j <= r; j++) {
    B[r + q + 1 - j] = A[j];
    cost_total += 8;
  }
  i = p;
  cost_total += 8;
  j = r;
  cost_total += 8;
  for (let k = p; k <= r; k++) {
    if (B[i] <= B[j]) {
      cost_total += 2;
      A[k] = B[i];
      cost_total += 8;
      i += 1;
      cost_total += 8;
    } else {
      A[k] = B[j];
      cost_total += 8;
      j -= 1;
      cost_total += 8;
    }
  }

  let end = performance.now();

  return {
    Time_Complexity: +(end - start).toFixed(4),
    Cost_Total: cost_total,
  };
}
