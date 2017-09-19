// function sorted(array){
//   let sortedArray = array.slice()
//   sortedArray.sort()
//   return sortedArray
// }
//
// let values = [4,2,19,2,33]
// console.log(sorted(values))

let values = [
  "apples",
  "pears",
  "bananas",
  "oranges"
]

function addToBegin(array, fruit){
  let newArray = array.slice();
  newArray.unshift(fruit);
  return newArray;
}

function addToEnd(array, fruit){
  let newArray = array.slice();
  newArray.push(fruit);
  return newArray;
}

function reverseIt(array){
  let newArray = array.slice();
  newArray.reverse();
  return newArray;
}

function sortIt(array){
let newArray = array.slice();
newArray.sort();
return newArray;
}

console.log(addToBegin(values, "mangos"));
console.log(addToEnd(values, "pineapples"));
console.log(reverseIt(values));
console.log(sortIt(values));

//check to make sure the original array values hasn't been changed
console.log(values);
