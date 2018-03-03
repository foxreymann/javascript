const request = require('superagent')
const fs = require('fs')

const numberOfDownloads = 20
const urls = [...Array(numberOfDownloads).keys()]

let downloadBlocking = async () => {
  console.time('download')
  for(const url of urls) {
    await downloadFile(url)
  }
  console.timeEnd('download')
}

let downloadNonBlocking = async () => {

}

let downloadFile = async(url) => {
  try {
    const res = await request.get(`https://www.a${url}.com`)
    fs.writeFileSync(`/tmp/${url}.html`, res.text)
    console.log(`downloaded ${url}\n`)
  } catch (e) {
    console.log(`failed on ${url}\n`)
  }
}

downloadBlocking()
