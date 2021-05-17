/**
 * Author: Luis Ccalluchi Lopez <Daprimovaria@gmail.com>
 * Metas alcanzadas:
 *  [x] Kadane
 *  [x] Pseudo-codigo en divide y venceras
 */

import seg_max from "./functions/divideAndConquer.js";
import kadane from "./functions/kadane.js";

function main() {
  /**
   * R - Matriz de costes
   */
  const R = [
    [-1, 6],
    [4, -5, 4, -3, 4, 4, -4, 4, -5],
    [-3, -4, -5],
    [-10, -20, -50, -100, 10],
  ];

  /**
   * Kadane
   * Si el algoritmo fue aplicado correctamente tendra como valores maximos:
   * Ejecutando la siguiente linea codigo => console.log(kadane(R[i], i + 1))
   * Salida: 
        [-1, 6],                           => 6
        [4, -5, 4, -3, 4, 4, -4, 4, -5],   => 9
        [-3, -4, -5],                      => 0
        [-10, -20, -50, -100, 10],         => 10
   */
  console.log("Kadane");
  for (let i = 0; i < R.length; i++)
    // console.log(kadane(R[i], i + 1));
    kadane(R[i], i + 1);

  /**
   * Divide and conquer
   * Si el algoritmo fue aplicado correctamente tendra como valores maximos:
   * Ejecutando la siguiente linea codigo => console.log())
   * Salida: 
        [-1, 6],                           => 6
        [4, -5, 4, -3, 4, 4, -4, 4, -5],   => 9
        [-3, -4, -5],                      => 0
        [-10, -20, -50, -100, 10],         => 10
   */
  console.log("Divide and conquer");
  for (let i = 0; i < R.length; i++)
    console.log(`La ruta ${i + 1} tiene un costo optimo de ${seg_max(R[i])}`);
}

main();
