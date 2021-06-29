double fibonacci_recursive(double n)
{
  if (n <= 1)
    return n;
  return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}