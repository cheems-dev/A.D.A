#include <iostream>
#include "./functions/fibonacci_recursive.cpp"
#include "./functions/fibonacci_iterative.cpp"
#include "./functions/powll.cpp"

using namespace std;

int main(int argc, char const *argv[])
{
  cout << "2^30 => " << powll(2, 30) << endl;
  cout << "2^20 => " << powll(2, 20) << endl;
  long long int result = fibonacci_iterative(powll(2, 30));
  cout << "fib(2^30) => " << result << endl;
  cout << "fib(2^30) % 2^20=> " << result % powll(2, 20) << endl;
  // for (long long i = 0; i < 1000; i++)
  // {
  //   cout << "fib( " << i << ")"
  //        << " =>" << fibonacci_iterative(i) << endl;
  // }

  return 0;
}
