export default class MapCoordinate {
  /**
   * Creacion de un mapa de coordenadas
   * @param {number} _rows - cantidad de filas
   * @param {number} _cols - cantidad de columnas
   */
  constructor(_rows, _cols) {
    this.rows = _rows;
    this.cols = _cols;
    this.array = this.init();
  }

  init() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  /**
   * Creacion de un cuadrado dado una coordenada (x,y)
   * @param {number} n - tamanio de nuestro cuadrado
   * @param {number} x - coordenada en el eje x
   * @param {number} y - coordenada en el eje y
   */
  createSquare(n, x, y) {
    // Recordemos que para los programadores todo se cuenta desde 0
    x -= 1;
    y -= 1;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) this.array[x + i][y + j] = 1;
  }

  print() {
    let data = "   ";
    for (let i = 1; i <= this.array.length; i++) data += `${i} `;
    data += "\n";
    for (let i = 0; i < this.array.length; i++) {
      data += `${i + 1}  `;
      for (let j = 0; j < this.array.length; j++)
        data += j >= 8 ? `${this.array[i][j]}  ` : `${this.array[i][j]} `;
      data += "\n";
    }
    console.log(data);
  }
}
