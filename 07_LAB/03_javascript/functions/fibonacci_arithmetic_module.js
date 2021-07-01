function fibonacci_arithmetic_module(n, modulo) {
  if (n == 0) return 0;
  let anterior = 0,
    actual = 1,
    proximo = 0;
  for (let i = 1; i < n; i++) {
    proximo = ((actual % modulo) + (anterior % modulo)) % modulo;
    anterior = actual;
    actual = proximo;
  }
  return actual;
}
// #print(fibonacci_arithmetic_module(256,1048576))
console.log(fibonacci_arithmetic_module(2, 3));
