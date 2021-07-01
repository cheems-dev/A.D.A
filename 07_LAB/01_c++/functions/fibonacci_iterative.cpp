#include <vector>
#include <iostream>
using namespace std;

long long fibonacci_iterative(long long n)
{
  std::vector<long long> memoization;
  memoization.push_back(0);
  memoization.push_back(1);
  if (n < 1)
    return 0;
  for (long long index = 2; index <= n; index++)
    memoization.push_back(memoization[index - 2] + memoization[index - 1]);
  return memoization.back();
}