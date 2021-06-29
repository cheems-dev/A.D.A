#include <iostream>
#include <math.h>
#include "./functions/fibonacci_recursive.cpp"
#include "./functions/fibonacci_iterative.cpp"
using namespace std;

long long int powll(long long int a, int b)
{
  long long int aux = a;
  for (int i = 1; i < b; i++)
    a *= aux;
  return a;
}

int main(int argc, char const *argv[])
{
  cout << "2^20 => " << powll(2, 20) << endl;
  long long int result  = fibonacci_iterative(powll(2, 20));
  cout << "fib(2^20) => " << result << endl;
  cout << "fib(2^20) % 2^10=> " << result % powll(2,10) << endl;
  return 0;
}
