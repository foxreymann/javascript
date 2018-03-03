const request = require('superagent')
const fs = require('fs')

const numberOfDownloads = 20
const urls = [...Array(numberOfDownloads).keys()]

let downloadBlocking = async () => {
  console.time('download blocking')
  for(const url of urls) {
    try {
      await downloadFile(url)
    } catch (e) {
      console.log(`failed on ${url}\n`)
    }
  }
  console.timeEnd('download blocking')
  return
}

let downloadNonBlocking = async () => {
  console.time('download non blocking')
  Promise.all(urls.map(downloadFile))
    .then(() => {
      console.timeEnd('download non blocking')
      return
    })
    .catch(console.log)
}

let downloadFile = async(url) => {
  try {
    const res = await request
      .get(`https://www.a${url}.com`)
      .timeout({
        response: 5000,  // Wait 5 seconds for the server to start sending,
      })
    fs.writeFileSync(`/tmp/${url}.html`, res.text)
    console.log(`downloaded ${url}\n`)
    return
  } catch (e) {
    console.log(`failed on ${url}\n`)
    return
  }
}

let start = async() => {
  await downloadBlocking()
  console.log(`\n\n`)
  await downloadNonBlocking()
}

start()
