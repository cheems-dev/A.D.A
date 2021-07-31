export default function dijkstra(graph = [], src) {
  let dist = new Array(graph.length);

  if (graph.length === 1) return graph[0];
  if (graph.length === 0) return graph;

  let sptSet = new Array(graph.length);

  for (let i = 0; i < graph.length; i++) {
    dist[i] = Number.POSITIVE_INFINITY;
    sptSet[i] = false;
  }

  dist[src] = 0;

  for (let count = 0; count < graph.length - 1; count++) {
    let u = minDistance(dist, sptSet);
    sptSet[u] = true;
    for (let v = 0; v < graph.length; v++) {
      if (
        !sptSet[v] &&
        graph[u][v] != 0 &&
        dist[u] != Number.POSITIVE_INFINITY &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  return dist;
}

function minDistance(dist = [], sptSet = []) {
  let min = Number.POSITIVE_INFINITY;
  let min_index = -1;

  for (let v = 0; v < dist.length; v++) {
    if (sptSet[v] == false && dist[v] <= min) {
      min = dist[v];
      min_index = v;
    }
  }
  return min_index;
}
