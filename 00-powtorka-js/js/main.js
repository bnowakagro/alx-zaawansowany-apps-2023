console.log('Hello');

// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
  {
    name: "Michał",
    age: 12
  },
  {
    name: "Damian",
    age: 10
  },
  {
    name: "Wiktoria",
    age: 14
  },
  {
    name: "Agata",
    age: 8
  }
]

let wiek = 0
let imie

for (let i = 0;i<people.length;i++){
    if (people[i].age > wiek){
        wiek = people[i].age
        imie = people[i].name

    }
}


console.log(imie)