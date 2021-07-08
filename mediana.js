const calculateMiddleArithmetic = (list) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  const sumList = list.reduce(reducer);
  
  const averageList1 = sumList / list.length;
  return averageList1;
}



const list1 = [
  100,
  300,
  11,
  40000,
  500,
  10000
];

list1.sort(function(a, b) {
  return a - b;
});

const isPar = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let middle;

const middleList1 = parseInt(list1.length / 2);

if (isPar(list1.length)) {
  const element1 = list1[middleList1 - 1];
  const element2 = list1[middleList1];

  const element1_2 = calculateMiddleArithmetic([
    element1,
    element2
  ]);


  middle = element1_2;
  
} else {
  middle = list1[middleList1];
}
