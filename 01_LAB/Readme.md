# Laboratorio N-1

### Descripcion

- El codigo fue desarrollado en Javascript
- No nesecita instalaciones de librerias o dependencias de terceros, dado que todo fue realizado utilizando librerias nativas en algunos  casos

## RETOS

- [x]  Crear un generador de arreglos aleatorio en el que podamos ingresar como parámetros la cantidad de números y la cantidad de arreglos
- [x]  Los valores aleatorios van desde -MAX hasta +MAX, donde MAX es el tamaño del arreglo
- [x]  Buscar los algoritmos de inserción o de burbuja. También pueden ser sus propias implementaciones
- [x]  Utilizar las herramientas de su propio compilador para medir tiempos de ejecución. Si está trabajando en Linux, el comando time es permtidio
- [x]  Hacer las gráficas de los tiempos para n=1000, 2000, 3000 ... 10000. Para cada n, generar 10 arreglos, tomar el tiempo y tomar el promedio de todos ellos.

### **Antes de comenzar ...**

1. Inconvenientes al tratar de compilar

    ```bash
    node index.js < input.txt
    ```

    - Solo lee los dos primeros valores de un file ***.txt*** y no los restantes que habrian en el archivo
2. El codigo fue separado en carpetas `functions`  y `clases` , las cuales su funcion tiene una relacion directa con el nombre respectivo.
3. Para medir los tiempos de ejecucion se uso una libreria nativa de JavaScript

### Empezando

La manera correcta de compilar el codigo seria de la siguiente manera:

```bash
node index.js
```

Al momento de compilar y poner las entradas de usuario, estas mismas se guardan en un `ìnput.txt` , el resultado final se guarda en un `output.txt` .

### Grafico

[Grafico Laboratorio N-1](https://docs.google.com/spreadsheets/d/1INyMja84PTfA32pZ9VpaKFl1iWoX_-VMOP8m1ADmWxk/edit?usp=drivesdk)