const {promisify} = require('util')
const fs = require('fs')
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

readFileAsync('./operand_one', 'utf8')
 .then(text => {
    let total = +text
    return Promise.all([readFileAsync('./operand_two', 'utf8'), total])
  })
  .then(([text, total]) => {
    total += +text
    return Promise.all([readFileAsync('./operand_three', 'utf8'), total])
  })
  .then(([text, total]) => {
    total -= +text
    return writeFileAsync('./.total', total)
  })
  .then(() => {
      console.log('done')
  })
  .catch(err => {
    throw err
  });
