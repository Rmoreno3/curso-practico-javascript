
//Función que calcula el promedio de una array (suma todos sus valores y luego los divide entre su numero de valores.)
const calculateMiddleArithmetic = (list) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  const sumList = list.reduce(reducer);
  
  const averageList1 = sumList / list.length;
  console.log(averageList1);
}







// let sumList1 = 0;

// for (let i = 0; i < lista.length; i++) {
  //   sumList1 += lista[i];
  // };
  // console.log(sumList1);