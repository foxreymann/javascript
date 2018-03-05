const fs = require('fs')

const printFile = (err, data) => {
  if (err) throw err;
  console.log(data);
}

fs.readFile('/etc/passwd', 'utf8', printFile)
