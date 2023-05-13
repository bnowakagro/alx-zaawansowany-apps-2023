const catFactsList = document.querySelector('#catFactsList')
// fetch
// Domyslna akcja w fetch jest GET
// fetch zwraca Promise

const renderCats = (data) => {
    catFactsList.innerHTML += `
      <li> ${data.title} </li>
    `
  }


const loadCats = () => {
  return fetch('https://openlibrary.org/works/OL45804W.json')
    .then((response) => {
      return response.json()
    })
}

// tzw. laczenie Promisow
// po wywolaniu loadCats(), Promise i .then jest kontynuowane
loadCats().then(data => {
  renderCats(data)
  console.log(data)
})