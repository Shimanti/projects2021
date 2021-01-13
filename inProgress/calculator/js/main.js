// pseudo Code
// Get number1 from input
  // Array = Get elements into an array
  // Loop = Loop through elements
  // Function = What happens when you loop through elements
// Get +-/* from input
// Get number2 from input
// Do calculation
// Return result on screen

let textResult = ''
const numbers = document.querySelectorAll(".number")
function getTextNumber() {
  textResult += this.innerHTML
  document.querySelector("#result").innerHTML = textResult
}
for (const number of numbers) {
  number.addEventListener('click', getTextNumber)
}

// document.querySelector('#add').addEventListener('click', add)
// function add() {
//   total += Number(textResult)
// }

// function getAction() {
//   let textResult = ''
//   function calculate() {
//     textResult = this.innerHTML
//     if textResult === "+" {total += getNumber()}
//     if textResult === "-" {total -= getNumber()}
//   }
//   const actions = document.querySelectorAll(".action")
//   for (const action of actions) {
//     action.addEventListener('click', calculate)
//   }
// }

// getNumber()
// getAction()
