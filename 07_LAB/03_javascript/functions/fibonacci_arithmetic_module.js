export default function fibonacci_arithmetic_module(fib_nth, mod) {
  let n_1 = 1,
    n_2 = 0;
  if (fib_nth == 0) return 0;
  for (let i = 1; i < fib_nth; i++) {
    [([n_1, n_2] = [((n_1 % mod) + (n_2 % mod)) % mod, n_1])]; //hacemos un swap
  }
  return n_1;
}
// console.log(fibonacci_arithmetic_module(2 ** 20, 2 ** 10)); // 571
// console.log(fibonacci_arithmetic_module(2 ** 30, 2 ** 20));
