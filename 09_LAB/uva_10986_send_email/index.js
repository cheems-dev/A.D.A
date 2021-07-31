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
  const cases = array[index];
  console.log("-----------------------------");
  console.log("Floy Wharshall");
  console.log("-----------------------------");
  console.log(cases);

  for (let i = 0; i < cases; i++) {
    const [n, m, S, T] = [
      array[++index][0],
      array[index][1],
      array[index][2],
      array[index][3],
    ];
    console.log(`${n} ${m} ${S} ${T}`);

    const graph = Array.from({ length: m }, () => []);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++)
        graph[i][j] = i == j ? 0 : Number.MAX_SAFE_INTEGER;
    }
    for (let j = 0; j < m; j++) {
      const [from, to, cost] = [
        array[++index][0],
        array[index][1],
        array[index].slice(2, array[index].length),
      ];

      console.log(`${from} ${to} ${cost}`);
      if (m > 1) {
        graph[from][to] = +cost;
        graph[to][from] = +cost;
      } else graph[from][to] = +cost;
    }
    const distance = floydWarshall(graph);

    console.log(`Case ${i + 1} ${distance[T] ? distance[T] : "unreachable"}  `);
  }

  index = 0;
  console.log("-----------------------------");
  console.log("Djistra");
  console.log("-----------------------------");
  console.log(cases);

  for (let i = 0; i < cases; i++) {
    const [n, m, S, T] = [
      array[++index][0],
      array[index][1],
      array[index][2],
      array[index][3],
    ];
    console.log(`${n} ${m} ${S} ${T}`);

    const graph = Array.from({ length: m }, () => []);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++)
        graph[i][j] = i == j ? 0 : Number.MAX_SAFE_INTEGER;
    }
    for (let j = 0; j < m; j++) {
      const [from, to, cost] = [
        array[++index][0],
        array[index][1],
        array[index].slice(2, array[index].length),
      ];

      console.log(`${from} ${to} ${cost}`);
      if (m > 1) {
        graph[from][to] = +cost;
        graph[to][from] = +cost;
      } else graph[from][to] = +cost;
    }
    const distance = dijkstra(graph, S);

    console.log(`Case ${i + 1} ${distance[T] ? distance[T] : "unreachable"}  `);
  }
}

main();
