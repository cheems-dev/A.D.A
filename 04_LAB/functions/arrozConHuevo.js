/**
 * Profesor me equivoque :'v
 * pero como ya lo hice no lo quiero borrar me costo mucho poder cumplir con la salida
 * Funcion Kadane O(n)
 * @param {Array} R - Arreglo de rutas "costo de rutas"
 * @param {Number} rute - Numero de ruta
 * @returns costo total por cada arreglo de rutas
 */
export default function maxSubArrays(R = [], rute = 0) {
  /**
   *  C => Arreglo para añadir la relacion de calles mas optimas de nuestro arreglo R
   */
  let curr = 0,
    cost_total = 0,
    C = [],
    curr_tmp = 0,
    account = 0;

  for (let i = 0; i < R.length; i++) {
    curr = Math.max(0, curr + R[i]);
    cost_total = Math.max(curr, cost_total);
    /**
     * (*) ¿Que pasaria si un solo costo es mas optimo que tomando costos de 2 en 2?
     * (1) sera un valor que constantemente sera actualizado en busca de un numero optimo en nuestro arreglo
     *      (1.1) Si en un arreglo [-1, 6] || [-10, -20, -50, -100, 10] nuestro curr solo se actualizara al menos una vez, ejemplo cuando sea A[i] = 6 por lo cual 6 seria el mayor
     *      (1.2) Si en un arreglo  [4, -5, 4, -3, 4, 4, -4, 4, -5] nuestro curr solo se actualizara mas de 1 vez
     * (2) el uso de la variable "account" se justifica en (1.1) y (1.2)
     */
    if (curr_tmp !== curr) {
      curr_tmp = curr;
      ++account;
    }
    if (account === 1) {
      C.push([i + 1, i + 2]);
    }
    /**
     * Cuando curr se modifica mas de 2 veces entonces podemos decir que nuestro coste pudiera variar
     */
    if (account === 2) {
      C = [];
    }

    if (account > 2) {
      /*
        (1) Dado un arreglo A[0...n - 1 ] => A[i] y A[i+1] son enteros
        (2) Pero al antes del final de la iteracion A[i + 1] = A[n] lo que sera un "undefined"
        (3) Por eso para evitar un problema en la logica del code verificamos que sea de type "number"
      */
      if (typeof R[i] === "number" && typeof R[i + 1] === "number") {
        /** 
          * (1) Si A[i] es menor a 0
          * (2) Si A[i] +  A[i] >= 0
            Ejemplo: A = [4, -5, 4, [-3], 4, 4, -4, 4, -5]
              A[i] = -3 < 0 (True) && A[i] + A[i + 1] => -3 + 4 >=0 (True)
            
        */
        if (R[i] < 0 && R[i] + R[i + 1] >= 0) {
          /**
           * C.indexOf(A[i]) => Si encuentra el valor retorna i "indice" (True)
           * C.indexOf(A[i]) => No Si encuentra el valor retorna - 1 (False)
           */
          !C.indexOf(i + 1) && R[i] < 0
            ? console.log("Calle encontrada")
            : /**
               * (1) Agregamos las calles al arreglo C, "calle" => c = 1 hasta c = n
               * (2) i = 0 hasta i < n
               * (3) Tomamos valores de A[i] y A[i+1] por lo cual (4) y (5)
               * (4) A[i] => [i + 1 => c, i +2 => c + 1 ]
               * (5) A[i] => [i + 2 => c + 1, i +2 => c + 3 ]
               */
              C.push([i + 1, i + 2], [i + 2, i + 3]);
        }
        if (R[i] > 0 && R[i] + R[i + 1] >= 0) {
          !C.indexOf(i + 1) && R[i] > 0
            ? console.log("Calle encontrada")
            : C.push([i + 1, i + 2], [i + 2, i + 3]);
        }
      }
    }
  }
  // console.log(C) // Imprime las calles mas optimas en un arreglo
  C.length
    ? console.log(
        `La mejor parte de la ruta ${rute} es entre las calles ${C[0][0]} y ${
          C[C.length - 1][1]
        }`
      )
    : console.log(`La ruta ${rute} no tiene calles interesantes`);

  return cost_total;
}
