const apartmentInfo = document.querySelector('#apartmentInfo');

const getIdFromSearchParams = (searchParams) => {
  const params = new URLSearchParams(searchParams)
  return params.get('id');
}

const apartmentId = getIdFromSearchParams(window.location.search)

const loadApartment = () => {
  return fetch(`http://localhost:8000/apartments/${apartmentId}`)
    .then(res => res.json())
}

const renderApartment = (apartment) => {
  apartmentInfo.innerHTML += `
    <h2> ${apartment.title} </h2>
    <p> ${apartment.description} </p>
    <p> ${apartment.price} </p>
    <p> ${apartment.publication_date} </p>
  `
}

loadApartment()
  .then(apartment => {
    renderApartment(apartment)
  })

