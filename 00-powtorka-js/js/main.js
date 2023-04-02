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

//for (let i = 0;i<people.length;i++){
//   if (people[i].age > wiek){
//        wiek = people[i].age
//        imie = people[i].name
//    }
//}

people.forEach( person => {if(person.age>wiek){
    wiek = person.age
    imie = person.name}})
console.log(imie)


// kolejne zadanie


const names20 = ["damian","paweł","michał"]
names20.push("Blazej")
console.log(names20[names20.length-1])


const shoe50 = {brand:"nike",color:"white",size:40}

if (shoe50.size >42){
    console.log("to duży but")
}
else 
{console.log("male stopy")}

const products = [
    {
      name: 'jablko',
      category: 'fruits',
      price: 2.00
    },
    {
      name: 'kawa',
      category: 'other',
      price: 7.25
    },
    {
      name: 'banan',
      category: 'fruits',
      price: 4.99
    }
  ]
let suma = 0
  products.forEach(product => 
    {
        if(product.category == 'fruits')
        {
            suma = suma +product.price
        }})

  console.log("cena owcow:" + suma)
let suma2 = 0
  function sumproducts (x)
  {
    x.forEach(y => {suma2 = suma2 + y.price})
  }

  sumproducts(products)
  console.log("Suma wszystkich produktow: "+ suma2)
suma2 = 0
  const result = products.filter(product => product.category == 'fruits')
  sumproducts(result)

  console.log("Suma filtrowanych  produktow: "+ suma2)
