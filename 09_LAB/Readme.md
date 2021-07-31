# Laboratorio N-9

## Dijkstra y Floyd-Warshall

1. **¿Por qué conviene utilizar un algoritmo más que el otro?**

    El algoritmo de dijkstra  convendria usar para ambos problemas, los datos de entrada para cada problema lo podríamos utilizar como un nodo de partida dado que el algoritmo de dijkstra recibe por parametro el grafo o matriz de distancias y finalmente el punto de partida.

2. **¿Por qué convendría utilizar Floyd-Warshall a pesar que su complejidad es peor que la de Dijskstra bajo cualquier análisis asintótico?**

    Convendria usar Floyd Wharsall en caso queramos calcular todas las distancias y obtener un  mejor resultado posible ...me explico, en caso de que algunas distancias en Djistrak serian ignoradas por tener un peso o costo mas alto que otros nodos pero pudiera ser que los sucesores nodos ignorados tengan menor coste que los que fueron escogidos y resultando tal vez un mejor resultado que lo que se obtuvo en Djistrak, por esa razon convendria Floy Wharsall.