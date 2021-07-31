export default function floydWarshall(graph = []) {
  const dist = graph;
  const size = dist.length;

  for (let k = 0; k < size; k++) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist.length > 0 ? dist[dist.length - 1] : dist;
}
