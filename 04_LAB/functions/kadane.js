/**
 * Algoritmo de Kadane => O(n)
 * @param {Array} arr - Arreglo de costos "+" y"-"
 * @param {Number} iter - Representa el numero de rutas dada un matriz
 * @returns Costo optimo en nuestro arreglo "arreglo"
 */
export default function kadane(arr = [0], iter = 0) {
  let maxLocal = arr[0];
  let maxGlobal = 0;
  let routes = []; // Arreglo para añadir la relacion de calles mas optimas de nuestro arreglo R "arr"
  /**
   * Por propiedad de la unicidad nuestro arreglo iterara sobre n <= 2
   */
  for (let i = 1; i < arr.length; i++) {
    maxLocal = Math.max(arr[i], maxLocal + arr[i]); // Encontramos el valor maximo en un subarreglo

    /**
     * (1) Si el valor LOCAL es mayor a GLOBAL entonces se actualizara GLOBAL
     * (2) Apartir de eso añadimos nuestras rutas "i" al arreglo routes
     */
    if (maxLocal > maxGlobal) {
      maxGlobal = maxLocal;
      routes.push([i + 1, i + 2]);
    }

    /**
     * Este if aplica a un caso en especial cuando A[i - 1] + A[i] = 0, cuando un coste de nuestro arreglo no presenta ni perdida ni ganancia
     * Ejemplo: 
                               A[i]
                                *
      A = [4, -5, 4, -3, 4, 4, -4, 4, -5]
      (1) Si -4 + 4 = 0  => Se añaden las rutas[7,8]
      (2) Si + 4 - 4 = 0  => Se añaden las rutas[8,9]
     */
    if (arr[i - 1] + arr[i] === 0) {
      routes.push([i + 1, i + 2]);
    }
  }
  /**
   * Verificamos si nuestro arreglo de routas tiene valores los cuales indica que encontramos unos coste positivos y una ruta viable
   */
  routes.length
    ? console.log(
        `La mejor parte de la ruta ${iter} es entre las calles ${
          routes[0][0]
        } y ${routes[routes.length - 1][1]}`
      )
    : console.log(`La ruta ${iter} no tiene calles interesantes`);

  return maxGlobal;
}
