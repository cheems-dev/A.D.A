#include <iostream>
#include "./functions/fibonacci_recursive.cpp"
#include "./functions/fibonacci_iterative.cpp"
#include "./functions/fibonacci_iterative_answer.cpp"

using namespace std;

int main(int argc, char const *argv[])
{
  // cout << "2^20 => " << powll(2, 20) << endl;
  // long long int result = fibonacci_iterative(powll(2, 20));
  // cout << "fib(2^20) => " << result << endl;
  // cout << "fib(2^20) % 2^10=> " << result % powll(2, 10) << endl;
  for (long long i = 0; i < 1000; i++)
  {
    cout << "fib( " << i << ")"
         << " =>" << fibonacci_iterative(i) << endl;
  }

  return 0;
}
