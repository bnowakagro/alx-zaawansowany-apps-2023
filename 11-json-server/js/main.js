const trainList = document.querySelector('#p');

const renderTrains = (trains) => {
  trains.forEach(train => {
    trainList.innerHTML += `
      <li>
        <p>Pociąg ${train.name} z ${train.from} do ${train.to}</p>
        <p>dnia ${train.date} o ${train.time}</p>
      </li>
    `
  })
}

const loadTrains = () => {
  return fetch('http://localhost:8000/trains')
    .then(response => {
      return response.json()
    })
}

loadTrains().then((data) => {
  renderTrains(data);
})