import fibonacci_arithmetic_module from "./functions/fibonacci_arithmetic_module";

function main() {
  console.log("Fibonacci con teorema aritmetica modular");
  console.log(fibonacci_arithmetic_module(2 ** 20, 2 ** 10)); // 571
  console.log(fibonacci_arithmetic_module(2 ** 30, 2 ** 20));
}

main();
