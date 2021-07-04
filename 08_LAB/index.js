function createMap(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function createSquad(array, size, rows, cols) {
  for (let i = 0; i < size; i++) 
    for (let j = 0; j < size; j++) 
      array[rows+i][cols+j] = 1
}

function countSquare(array,size,rows, cols,count){
  let account = 0
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      if (array[rows+i][cols+j] === 1)
        account +=1
  
  return (account/ count > 0) ?  account/ count : 0
}

function print(array = []) {
  let data = "   "
  for (let i = 1; i <= array.length; i++) data+= `${i} `
  data += "\n"
  for (let i = 0; i < array.length; i++){
    data += `${i+1}  `
    for (let j = 0; j < array.length; j++)
      data += (j>=8) ? `${array[i][j]}  ` :`${array[i][j]} `;      
    data += "\n"
  }
  console.log(data)
}

function main() {
  const i = 9;
  const array = createMap(i, i);
  print(array);
  createSquad(array, 3, 2,2)
  print(array);
  let size_square = 9;
  console.log(`Tamanio ${size_square}:${countSquare(array,3, 2,2,size_square)}`)
  size_square = 1;
  console.log(`Tamanio ${size_square}:${countSquare(array,3, 2,2,size_square)}`)
}

main();

