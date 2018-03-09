const fs = require('fs')

let total

const processOperandOne = (err, text) => {
  if (err) {
    throw err
  }

  total = +text
  fs.readFile('./operand_two', 'utf8', processOperandTwo)
}

const processOperandTwo = (err, text) => {
  if (err) {
    throw err
  }

  total += +text
  fs.readFile('./operand_three', 'utf8', processOperandThree)
}

const processOperandThree = (err, text) => {
  if (err) {
    throw err
  }

  total -= +text
  fs.writeFile('./.total', total, done)
}

const done = err => {
  if (err) {
    throw err
  }
}

fs.readFile('./operand_one', 'utf8', processOperandOne)
