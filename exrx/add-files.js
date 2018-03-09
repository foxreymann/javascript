const fs = require('fs')

let total

const processOperandOne = (err, text) => {
  if (err) {
    console.warn('ERROR:', err)
    throw err
  }
  total = +text
  fs.readFile('./operand_two', 'utf8', processOperandTwo)
}

const processOperandTwo = (err, text) => {
  if (err) {
    console.warn('ERROR:', err)
    throw err
  }
  total += +text
console.log(total)
  fs.readFile('./operand_three', 'utf8', processOperandThree)
}

fs.readFile('./operand_one', 'utf8', processOperandOne)
