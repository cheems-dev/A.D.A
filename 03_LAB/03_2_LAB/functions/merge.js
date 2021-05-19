import { performance } from "perf_hooks";

/**
 * Algoritmo Merge de Geek for Geeks
 * @param {Array} arr - Arreglo de numeros enteros -> A
 * @param {Number} l - Posicion inicial de A
 * @param {Number} m - Posicion medio de A
 * @param {Number} r - Posicion final de A
 * @returns Retorna el tiempo de complejidad y costo total
 */
export default function merge(arr = [], l = 0, m = 0, r = 0) {
  let start = performance.now();
  let cost_total = 0;
  let n1 = m - l + 1;
  cost_total += 8;
  let n2 = r - m;
  cost_total += 8;

  // Create temp arrays
  let L = new Array(n1);
  cost_total += 50 + n1 + 10;
  let R = new Array(n2);
  cost_total += 50 + n1 + 10;

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
    cost_total += 8;
  }
  for (let j = 0; j < n2; j++) {
    cost_total += 8;
    R[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let i = 0;
  cost_total += 8;
  // Initial index of second subarray
  let j = 0;
  cost_total += 8;
  // Initial index of merged subarray
  let k = l;
  cost_total += 8;

  while (i < n1 && j < n2) {
    cost_total += 2;

    if (L[i] <= R[j]) {
      cost_total += 2;

      arr[k] = L[i];
      cost_total += 8;
      i++;
    } else {
      arr[k] = R[j];
      cost_total += 8;
      j++;
    }
    k++;
  }
  let end = performance.now();
  return {
    Time_Complexity: +(end - start).toFixed(4),
    Cost_Total: cost_total,
  };
}
