const c = console.log;

const particion = (arrayInteger, lower, higher) => {
  let i, pivot, accountA, accountB;
  i = lower - 1;
  pivot = arrayInteger[higher];

  for (let j = lower; j < higher; j++) {
    if (arrayInteger[j] <= pivot) {
      i = i + 1;
      accountA = arrayInteger[i];
      arrayInteger[i] = arrayInteger[j];
      arrayInteger[j] = accountA;
    }
  }
  accountB = arrayInteger[i + 1];
  arrayInteger[i + 1] = arrayInteger[higher];
  arrayInteger[higher] = accountB;

  return i + 1;
};

const quickSort = (arrayInteger, lower, higher) => {
  let pi;
  if (lower < higher) {
    pi = particion(arrayInteger, lower, higher);
    quickSort(arrayInteger, lower, pi - 1);
    quickSort(arrayInteger, pi + 1, higher);
  }
  return array;
};

const arr = [1998, 1990, 10, 5, 6, 0, 1, -10, 3];
const n = arr.length;
quickSort(arr, 0, n - 1);
c("Arreglo Ordenado: ");
arr.forEach((element) => {
  c(`${element}`);
});
