long long int fibonacci_iterative(long long int n)
{
  long long int n_2{0}, n_1{1};
  if (n < 1)
    return 0;
  for (long long int i = 2; i <= n; i++)
  {
    long long int add = n_1 + n_2;
    n_2 = n_1;
    n_1 = add;
  }
  return n_1;
}