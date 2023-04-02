// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

const sources = ['https://shorturl.at/eHJW0','https://shorturl.at/fguHW','https://shorturl.at/iyI05',];
const img = document.querySelector('#img')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let counter = 0
img.src = sources[counter]
const nastepny = () => {counter++;if(counter>sources.length-1){counter=0};img.src = sources[counter]} 
const poprzedni = () => {console.log('dziala');counter--;if(counter<0){counter=sources.length-1};img.src = sources[counter]} 
next.addEventListener('click',nastepny)
prev.addEventListener('click',poprzedni)
