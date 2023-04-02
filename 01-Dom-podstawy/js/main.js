// Za pomoca kodu JS wykonaj następujące zadania.
// Pamietaj, aby elementom HTML dodawac ID.

// 1. W konsoli wypisz obecny tekst przycisku
// 2. dodaj formularzowi klase my-form
// 3. Za pomoca JS dodaj do inputow jakis tekst
// 4. do elementu ul dodaj element li
    {/* <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li> */}

// 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

 const messages = [
   {
     author: 'Pawel',
     message: 'Ale dzisiaj super dzien'
   },
   {
     author: "Magda",
     message: "Zimno jest"
   }
 ]
const button = document.querySelector('button')
console.log(button.innerText)
const form = document.querySelector('form')
form.id = 'my-form'
const input = document.querySelectorAll('input')
input[0].value = 'jakiś tekst'
input[1].value = 'jakiś inny tekst'
const list = document.querySelector('#id1')

messages.forEach(item => {list.innerHTML += '<li><strong>'+item.author+'</strong> napisala<p>'+item.message+'</p></li>'})
