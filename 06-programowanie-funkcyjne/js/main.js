let imie = 'błażej'
const tablica = [
    {name:'aaa', price:10},
    {name:'bbb', price:5},
    {name:'ccc', price:20},
]

imiona = ['ala','izaura','błażej','bonifacy']

function greating(imie) {
    console.log(`czesć ${imie}`)
}

function sumElements(tablica){
    let suma = 0
    tablica.forEach(element => {
        suma = suma + element.price
    });
    console.log(`suma równa się: ${suma}`)
}

function getLeters(imiona){
    let dlugosci = []
    imiona.forEach(imie =>{
        dlugosci.push(imie.length)
    })

    console.log(`Tablica długości imion: ${dlugosci}`)


}

function getMostExpensive(tablica){
    let najdrozszy = {}
    let cena = 0
    tablica.forEach(element =>{
        if (element.price > cena){
            najdrozszy = element
            cena = element.price 
        }
    })
    console.log(`nadroższy element: ${JSON.stringify(najdrozszy)}`,)
}

function findName(imiona,imie){
    let cnt = 0
    imiona.forEach(element =>{
       // console.log(`imie: ${imie} Element: ${element}`)
        if(element == imie){
            console.log(`szukane imie ma index: ${cnt}`)
        }
        cnt += 1
    })
}


greating(imie)
sumElements(tablica)
getLeters(imiona)
getMostExpensive(tablica)
findName(imiona,imie)

const products3 =[
    {
        name:"jablko",
        category:"fruits",
        price:12.99,
    }
    {
        name:"banan",
        category:"fruits",
        price:4.99,
    }
    {
        name:"banan",
        category:"fruits",
        price:4.99,
    }
]