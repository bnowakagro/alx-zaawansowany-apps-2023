// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

const table = document.querySelector('#orderTable')
const orderForm = document.querySelector('#orderForm')
const orderId = document.querySelector('#id')
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const button = document.querySelector('#delete')
var listaid = []


const handleSubmit = (event) => {
    event.preventDefault();


    table.innerHTML += `
        <tr class= "elementy">
            <td>${orderId.value}</th>
            <td>${orderName.value}</th>
            <td>${orderPrice.value}</th>
        </tr>`
    orderId.value = ""
    orderName.value = ""
    orderPrice.value = ""
}

const kasuj = () => {
    var elementy = document.querySelectorAll('.elementy')
    elementy.forEach(element => { element.remove()});
    }

orderForm.addEventListener('submit', handleSubmit)
button.addEventListener('click',kasuj) 
