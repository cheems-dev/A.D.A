long long int powll(long long int a, int b)
{
  long long int aux = a;
  for (int i = 1; i < b; i++)
    a *= aux;
  return a;
}