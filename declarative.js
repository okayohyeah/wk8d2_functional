// let fruits = [
//   {name: "oranges", preference: "like"},
//   {name: "pears", preference: "don't like"},
//   {name: "apples", preference: "don't like"},
//   {name: "bananas", preference: "like"}
// ]
//
// function describe(array){
//   for(var i=0; i<array.length; i++){
//     console.log(`I ${array[i].preference} ${array[i].name}`)
//   }
// }

// let animals = [
//   {name: 'bear', population: 10000},
//   {name: 'gecko', population: 3400},
//   {name: 'cat', population: 21000000}
// ]
// function listPopulations(animals){
//   for(let i=0; i < animals.length; i++){
//     console.log(`There are ${animals[i].population} ${animals[i].name}s`)
//   }
// function describeAnimalPopulation(data){
//   console.log(`There are ${data.population} ${data.name}s`)
// }
// function listPopulations(animals){
//   animals.forEach( describeAnimalPopulation )
// }
// listPopulations(animals)

let fruits = [
  {name: "oranges", preference: "like"},
  {name: "pears", preference: "don't like"},
  {name: "apples", preference: "don't like"},
  {name: "bananas", preference: "like"}
]
function describeFruits(data){
  console.log(`I ${data.preference} ${data.name}`)
}
function listFruits(fruits){
  fruits.forEach( describeFruits )
}
listFruits(fruits)
// function describe(array){
//   for(var i=0; i<array.length; i++){
//     console.log(`I ${array[i].preference} ${array[i].name}`)
//   }
// }
