# Laboratorio N-7.1

### Descripcion

- El codigo fue desarrollado en ***C++***
- No nesecita instalaciones de librerias o dependencias de terceros, dado que todo fue realizado utilizando librerias nativas en algunos  casos
- Los retos son los objetivos esperados a alcanzar

## Retos

- [x]  ¿Cómo se calcularía Fibonacci(2^30) % 2^20 ?
- [x]  Discuta sobre qué pasaría si intentáramos encontrar la respuesta en C++ y de forma recursiva?
- [x]  Qué pasaría si lo hiciéramos de forma iterativa?
- [x]  ¿Qué pasaría si tratásemos con doubles?

### **Antes de comenzar ...**

Esto es el archivo `main.cpp`

**Recordemos**

Que el informe data con mas detalle de este proceso

```cpp
int main(int argc, char const *argv[])
{
  cout << "2^20 => " << powll(2, 20) << endl;
  long long int result  = fibonacci_iterative(powll(2, 20));
  cout << "fib(2^20) => " << result << endl;
  cout << "fib(2^20) % 2^10=> " << result % powll(2,10) << endl;
  return 0;
}
```

1. Compilacion de nuestro programa

    ```bash
    g++ main.cpp
    ```

2. Ejecucion de nuestro binario

    ```bash
    ./a.out 
    ```

3. Resultado esperado

    ```bash
    2^20 => 1048576
    fib(2^20) => 540471213769224763
    fib(2^20) % 2^10=> 571
    ```