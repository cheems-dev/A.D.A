# Laboratorio N-4

### **Antes de comenzar ...**

1. Instalar dependecias de desarrollo y creacion del `package.lock.json`

    ```bash
    npm i 
    ```

2. El codigo fue separado en carpetas `functions`  su funcion tiene una relacion directa con el nombre respectivo.
3. Ejecuta el codigo con el siguiente comando

    ```bash
    node index.js
    ```

### Kadane

1. La ubicacion del archivo se encuentra en `functions/kadane.js`
2. La complejidad del algoritmo es de $O(n)$
3. Se cumplio con la salida requerida, puede visualizarlo compilando el programa o mirar el resultado en el archivo `kadane.js`

### Divide and Conquer

![Laboratorio%20N-4%201cab9e310cb44259bbb3b78856714595/Captura_de_pantalla_2021-05-17_17-38-53.png](Laboratorio%20N-4%201cab9e310cb44259bbb3b78856714595/Captura_de_pantalla_2021-05-17_17-38-53.png)

1. La ubicacion del archivo se encuentra en `functions/divideAndConquer.js`
2. La complejidad del algoritmo es de $Theta(n*log(n))$

    ***Observaciones***

    - Al ser un algoritmo que ejecuta recursividad se tiene mucha dicultad para tener la salida requerida con respecto a las rutas, pero en si cumple su proposito de obtener la maxima suma.

        ***Profesor considerelo plis 😢***

        ***Ejemplo:***

        ```
        La ruta 1 tiene un costo optimo de 6
        La ruta 2 tiene un costo optimo de 9
        La ruta 3 tiene un costo optimo de 0
        La ruta 4 tiene un costo optimo de 10
        ```