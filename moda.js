const list1 = [
  1,
  2,
  3,
  3,
  2,
  4,
  5,
  2,
  2,
  2,
  5,
  4,
  4,
  4
]

const list1Count = {};

//Recorremos nuestro objeto para saber cuantas veces se repite cada valor.
list1.map(
  function (element) {
    if (list1Count[element]) {
      list1Count[element] += 1;
    } else {
    list1Count[element] = 1; 
    }
  }
);

//Convertimos nuestro objeto list1Count en una array, para ordenarlo de menor a mayor.
const list1Array = Object.entries(list1Count).sort(
  function (valueAcumulated, newValue) {
    return valueAcumulated[1] - newValue[1];
  }
);

const moda = list1Array[list1Array.length - 1];


//Otra forma mas corta
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
  return arr.sort((a,b) =>
    arr.filter(v => v===a).length - arr.filter(v => v===b).length)
    .pop();
}


console.log(mode(NUMBERS));