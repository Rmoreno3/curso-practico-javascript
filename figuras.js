//Codigo del cuadrado
console.group("Cuadrado")

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = (lado) => lado * 4;

// console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado}cm`);

const areaCuadrado = (lado) => Math.pow(lado, 2);

// Math.pow(ladoCuadrado, 2);
// console.log(`El area del cuadrado es de: ${areaCuadrado}cm2`);

console.groupEnd();
//Codigo del triangulo
console.group("Triangulo");

// const ladoTriangulo1= 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;


// ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perimetro del cuadrado mide: ${perimetroTriangulo}cm`);

const areaTriangulo = (base, altura) => (base * altura) / 2;


// (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El area del triangulo es de: ${areaTriangulo}cm2`);

console.groupEnd();

//Codio del circulo
console.group("Circulo");

//Area
// const radioCirculo = 4;
// console.log(`El radio del circulo es de: ${radioCirculo}cm`);

//Diametro
const diametroCirculo = (radio) => radio * 2;


// radioCirculo * 2;
// console.log(`El diametro del circulo es de: ${diametroCirculo}cm`);


//PI
const PI = Math.PI;
// console.log(`El valor de PI es: ${PI}`);


//Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;


// diametroCirculo * PI;
// console.log(`El perimetro del circulo es de: ${perimetroCirculo}cm`);


//Area
const areaCirculo = (radio) => Math.pow(radio, 2) * PI;


// Math.pow(radioCirculo, 2) * PI;
// console.log(`El area del circulo es de: ${areaCirculo}cm2`);

console.groupEnd();

const alturaTriangulito = (lado1, lado2, base) => {
  if (lado1 === lado2 && lado1 !== base) {
    const altura = Math.sqrt(Math.pow(lado1, 2) - ((Math.pow(base, 2) / 4)));
    return altura;
  }
  else {
    console.log("error");
  }

}



//Aqui interactuamos con HTML

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};



const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = parseInt(input.value);

  const area = areaCuadrado(value);
  alert(area);
};


const calcularPerimetroTriangulo = () => {
  const input1 = document.getElementById("triangulo1")
  const lado1 = parseInt(input1.value);

  const input2 = document.getElementById("triangulo2");
  const lado2 = parseInt(input2.value);

  const input3 = document.getElementById("baseTriangulo");
  const base = parseInt(input3.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

const calcularAreaTriangulo = () => {
  const input1 = document.getElementById("triangulo1")
  const lado1 = parseInt(input1.value);

  const input2 = document.getElementById("triangulo2");
  const lado2 = parseInt(input2.value);

  const input3 = document.getElementById("baseTriangulo");
  const base = parseInt(input3.value);

  const area = areaTriangulo(base, alturaTriangulito(lado1, lado2, base));
  alert(area);
};

const calcularPerimetroCirculo = () => {
  const inputCirculo = document.getElementById("radioCirculo");
  const radio = parseInt(inputCirculo.value);

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

const calcularAreaCirculo = () => {
  const inputCirculo = document.getElementById("radioCirculo");
  const radio = parseInt(inputCirculo.value);

  const area = areaCirculo(radio);
  alert(area);
}














