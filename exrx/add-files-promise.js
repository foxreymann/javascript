const {promisify} = require('util')
const fs = require('fs')
const readFileAsync = promisify(fs.readFile)

readFileAsync('./operand_one', 'utf8')
 .then(text => {
    let total = +text
    return Promise.all([readFileAsync('./operand_two', 'utf8'), total])
  })
  .then(([text, total]) => {
console.log(text,total)
  })
  .catch(err => {
      console.log('ERROR:', err);
  });
