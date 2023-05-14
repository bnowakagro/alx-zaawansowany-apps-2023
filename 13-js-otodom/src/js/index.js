
const apartments = document.querySelector('#p');

const render = (data) => {
  data.forEach(x => {
    apartments.innerHTML += `
      <li>
        <p>id: ${x.id} </p>
        <p>id: ${x.title} </p>
        <p>cena: ${x.price}</p>
        <p>opis: ${x.description}</p>
        <a href="./detail.html?id=${x.id}">Szczegóły</a>
      </li>
    `
  })
}

const load = () => {
  return fetch('http://localhost:8000/apartments')
    .then(response => {
      return response.json()
    })
}

load().then((data) => {
  render(data);
})