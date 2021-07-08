// Helpers
const esPar = (number) => {
  return (number % 2 === 0);
}

const calculateMiddleArithmetic = (list) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  const sumList = list.reduce(reducer);
  
  const averageList1 = sumList / list.length;
  return averageList1;
}

//

// Calculadora de Mediana
const medianaSalarios = (list) => {
  const mitad = parseInt(list.length / 2);

  if (esPar(list.length)) {
    const personMitad1 = list[mitad - 1];
    const personMitad2 = list[mitad];

    const mediana = calculateMiddleArithmetic([personMitad1, personMitad2]);
    return mediana;

  } else {
    const personMitad = list[mitad];
    return personMitad;
  }
}
//

// Mediana General

const salarysVen = venezuela.map(
  function (person) {
    return person.salary;
  }
);


const salarysVenSorted = salarysVen.sort(
  function (a, b) {
    return a - b;
  }
);

// console.log(salarysVenSorted);



const medianaGeneralVen = medianaSalarios(salarysVenSorted);

// Mediana Top 10%
const spliceStart = (salarysVenSorted.length * 90 / 100);
const spliceCount = salarysVenSorted.length - spliceStart;

const salarios10Ven = salarysVenSorted.splice(
  spliceStart,
  spliceCount
);

const medianaTop10Ven = medianaSalarios(salarios10Ven);


console.log({
  medianaGeneralVen,
  medianaTop10Ven
})