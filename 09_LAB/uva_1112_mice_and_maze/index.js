import dijkstra from "./functions/dijkstra.js";
import floydWarshall from "./functions/floydWarshall.js";
import readFile from "./functions/readFile.js";

function processData(filename) {
  const arr = readFile(filename);
  let array = [];
  for (let i = 0; i < arr.length; i++)
    array[i] = arr[i].length > 1 ? arr[i].split(" ").join("") : arr[i];
  return array;
}

function main() {
  const array = processData("input.txt");
  let index = 0;
  let cases = array[index];
  console.log("-----------------------------");
  console.log("Floy Wharshall");
  console.log("-----------------------------");
  console.log(cases);

  for (let i = 0; i < cases; i++) {
    const [N, E, T, M] = [
      array[++index][0],
      array[++index][0],
      array[++index][0],
      array[++index][0],
    ];
    console.log(`${N} ${E} ${T} ${M}`);

    const graph = Array.from({ length: N }, () => []);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++)
        graph[i][j] = i === j ? 0 : Number.POSITIVE_INFINITY;
    }
    for (let j = 0; j < M; j++) {
      let [from, to, cost] = [
        +array[++index][0],
        +array[index][1],
        +array[index].slice(2, array[index].length),
      ];

      console.log(`${from} ${to} ${cost}`);
      --from;
      --to;
      graph[from][to] = cost;
      graph[to][from] = cost;
    }

    // for (let i = 0; i < graph.length; i++) console.log(graph[i]);

    const distance = floydWarshall(graph);
    console.log(`Distancias: ${distance}`);
    let account = 0;
    for (let i = 0; i < distance.length; i++) {
      if (distance[i] <= T) account++;
    }
    console.log(account);
  }

  index = 0;
  cases = array[index];
  console.log("-----------------------------");
  console.log("Djikstra");
  console.log("-----------------------------");
  console.log(cases);

  for (let i = 0; i < cases; i++) {
    const [N, E, T, M] = [
      array[++index][0],
      array[++index][0],
      array[++index][0],
      array[++index][0],
    ];
    console.log(`${N} ${E} ${T} ${M}`);

    const graph = Array.from({ length: N }, () => []);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++)
        graph[i][j] = i === j ? 0 : Number.POSITIVE_INFINITY;
    }
    for (let j = 0; j < M; j++) {
      let [from, to, cost] = [
        +array[++index][0],
        +array[index][1],
        +array[index].slice(2, array[index].length),
      ];

      console.log(`${from} ${to} ${cost}`);
      // Nota -> from, to son contados desde 1 pero restamos -1 para que se acople al valor de nuestra matriz
      --from;
      --to;
      graph[from][to] = cost;
      graph[to][from] = cost;
    }

    // for (let i = 0; i < graph.length; i++) console.log(graph[i]);

    // Nota -> nuestra posicion deberia ser 1 pero como los arreglos son contados de 0
    const distance = dijkstra(graph, 0);
    console.log(`Distancias: ${distance}`);
    let account = 0;
    for (let i = 0; i < distance.length; i++) {
      if (distance[i] <= T) account++;
    }
    console.log(account);
  }
}

main();
