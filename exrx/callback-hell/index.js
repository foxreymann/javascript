const fs = require('fs')

const processFile1 = (err, data) => {
  if (err) throw err;
  const fileName = `./${+data}`
  fs.readFile(fileName, 'utf8', processFile2)
}

const processFile2 = (err, data) => {
  if (err) throw err;
console.log(data)
  //fs.readFile(data, 'utf8', processFile2)
}

fs.readFile('./1', 'utf8', processFile1)
