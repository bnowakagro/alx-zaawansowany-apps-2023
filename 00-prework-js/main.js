const products = [
  {
    name: 'banan',
    price: 4.99
  },
  {
    name: "chleb",
    price: 3.25
  },
  {
    name: 'ser',
    price: 7.00
  },
  {
    name: 'baton',
    price: 1.99
  }
]

let sum = 0

let ilosc = products.lenght;

	
	products.forEach(function(product) {
    sum = sum + product.price;
});
console.log("Suma: " + sum);
console.log("ilosc: " + ilosc);
