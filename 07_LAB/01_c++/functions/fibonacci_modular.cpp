#include <vector>
#include <iostream>
using namespace std;

long long fibonacci_module(long long n, long long mod)
{
  std::vector<long long> memoization;
  memoization.push_back(0);
  memoization.push_back(1);
  if (n < 1)
    return 0;
  for (long long index = 2; index <= n; index++)
    memoization.push_back((memoization[index - 2] % mod + memoization[index - 1] % mod) % mod);
  return memoization.back();
}

long long int powll(long long int a, int b)
{
  long long int aux = a;
  for (int i = 1; i < b; i++)
    a *= aux;
  return a;
}

int main(int argc, char const *argv[])
{
  cout << fibonacci_module(powll(2, 30), powll(2, 20)) << endl;
  return 0;
}
