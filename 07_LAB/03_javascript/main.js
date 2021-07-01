function power(a, b)
{
  if (b == 0) return 1;
  const pivot = Math.floor(b / 2); // Retorna el entero menor: Math.floor(1.98) -> 1 

  return b % 2 == 0
  ? power(a, pivot) * power(a, pivot) 
  : a * power(a, pivot) * power(a, pivot);
}

console.log(power(2, 4));
 