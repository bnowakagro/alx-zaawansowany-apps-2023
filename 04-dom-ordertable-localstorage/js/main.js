const tableBody = document.querySelector('#orderTableBody')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const removeOrdersButton = document.querySelector('#removeOrdersButton');
const calculatebutton = document.querySelector('#wylicz');
const sumawynik = document.querySelector('#suma');
const sredniawynik = document.querySelector('#srednia');

// Struktura danych: tablica obiektów
// 1. Obiekty muszą mieć takie same pola
// 2. Kolejność zamówień ma znaczenie pod kątem dodania do HTML

let orders = [
  {
    id: 1,
    name: "Banan",
    price: 9.99
  },
  {
    id: 2,
    name: "Wiśnie",
    price: 19.99
  }
]

const renderOrders = () => {
  // for of
  tableBody.innerHTML = '';

  for(let order of orders) {
    tableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.price}zł</td>
      </tr>
    `
  }

  // forEach
  // orders.forEach(order => {
  //   table.innerHTML += `
  //     <tr>
  //       <td>${order.id}</td>
  //       <td>${order.name}</td>
  //       <td>${order.price}zł</td>
  //     </tr>
  //   `
  // })
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newOrder = {
    id: parseInt(orderId.value),
    name: orderName.value,
    price: parseFloat(orderPrice.value)
  }

  orders.push(newOrder);

  renderOrders();

  orderId.value = "";
  orderName.value = "";
  orderPrice.value = "";
}

const removeOrders = () => {
  orders = [];
  renderOrders();
}

const calculate = () =>{
    let suma = 0 
    let srednia = 0
    let cnt =0
    orders.forEach(order => {
        suma += order.price
        cnt +=1
        

    })
    sumawynik.innerHTML= suma.toFixed(2)
    sredniawynik.innerHTML = (suma/cnt).toFixed(2)
    console.log(suma)
}

renderOrders();
orderForm.addEventListener("submit", handleSubmit);
removeOrdersButton.addEventListener('click', removeOrders);
calculatebutton.addEventListener('click', calculate);