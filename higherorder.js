// let muppets = [
//   {name: 'Doc', type: 'bear'},
//   {name: 'Fozzie', type: 'bear'},
//   {name: 'Kermit', type: 'frog'},
//   {name: 'Scooter', type: 'human'}
// ]
//
// let isABear = (muppet) => {
//   return muppet.type === 'bear'
// }
// let bears = muppets.filter(isABear)
// console.log(bears);
// console.log(muppets);

// let isABear = (muppet) => {
//   muppet.type === 'bear'
// }
// let bears = muppets.filter(isABear)

let contracts = [
  {name: "rental agreement", signed: true},
  {name: "car loan", signed: false},
  {name: "health insurance", signed: false},
  {name: "employment", signed: true}
]

//imperative - signed
// function getSigned(contracts){
//   let signed = []
//   for(var i=0; i<contracts.length; i++){
//     if(contracts[i].signed){
//       signed.push(contracts[i])
//     }
//   }
//   return signed
// }

//declarative - signed
let isSigned = (contract) => {
  return contract.signed === true;
}
let signedContracts = contracts.filter(isSigned);
console.log(signedContracts);

//imperative - unsigned
// function getUnSigned(contracts){
//   let signed = []
//   for(var i=0; i<contracts.length; i++){
//     if(!contracts[i].signed){
//       signed.push(contracts[i])
//     }
//   }
//   return signed
// }

//declarative - unsigned
let notSigned = (contract) => {
  return contract.signed === false;
}
let unsignedContracts = contracts.filter(notSigned);
console.log(unsignedContracts);
