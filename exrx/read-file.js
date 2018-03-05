const fs = require('fs')

const filePath = process.argv[2];

const printFile = (err, text) => {
  if (err) {
    console.warn('ERROR:', err);
    return
  }
  console.log('CONTENT:', text);
}

fs.readFile(filePath, 'utf8', printFile)
