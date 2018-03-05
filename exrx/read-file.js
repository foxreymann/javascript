const fs = require('fs')

const filePath = process.argv[2];

const printFile = (err, data) => {
  if (err) throw err;
  console.log(data);
}

fs.readFile(filePath, 'utf8', printFile)
