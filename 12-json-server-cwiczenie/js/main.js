const trainList = document.querySelector('#trainList');
const addTrainForm = document.querySelector('#addTrainForm');

const state = {
  trains: []
}

const renderTrains = (trains) => {
  trainList.innerHTML = "";

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

const saveTrain = (train) => {
  fetch('http://localhost:8000/trains', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(train)
  })
}

const handleSubmit = event => {
  event.preventDefault();

  const newTrainRoute = {
    from: addTrainForm.elements.from.value,
    to: addTrainForm.elements.to.value,
    name: addTrainForm.elements.name.value,
    date: addTrainForm.elements.date.value,
    time: addTrainForm.elements.time.value,
  }

  // Dodanie polaczenia do DB
  saveTrain(newTrainRoute)

  // Dorzucenie elementu do listy
  state.trains.push(newTrainRoute);
  renderTrains(state.trains)

  // Reset formularza
  addTrainForm.reset()
}

loadTrains().then((data) => {
  state.trains = data; // Zapisanie zmiennej do stanu
  renderTrains(data);
})

addTrainForm.addEventListener('submit', handleSubmit);