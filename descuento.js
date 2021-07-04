//Funcion para calcular el descuento de un producto
const calcular = (precio, descuento) => {
  let porDescuento = 100 - descuento;
  let pagar = (precio * porDescuento) / 100;
  return pagar;
}

const coupons = [
  "rmoreno31",
  "javascript6",
  "platzi01",
];


//Enlaze con el HTML
const buttonPriceDiscount = () => {
  const inputPrice = document.getElementById("inputPrice");
  const price = parseInt(inputPrice.value);
  
  
  // const inputDiscount = document.getElementById("inputDiscount");
  // const discount = parseInt(inputDiscount.value);
  
  const inputCoupon = document.getElementById("inputCoupon");
  const coupon = inputCoupon.value;
  
  let discount;
  
  switch (coupon) {
    case "rmoreno31":
      discount = 15;
      break;
    case "javascript6":
      discount = 30
      break;
    case "platzi01":
      discount = 40;
      break;
    default: console.log("Cupon invalido");
      break;
  }

  const priceResult = document.getElementById("priceResult")

  
  const pagar = calcular(price, discount);

  priceResult.innerText = `El precio original es de $${price} y con el cupo de nombre ${coupon} de ${discount}% su precio queda en $${pagar}`
}
