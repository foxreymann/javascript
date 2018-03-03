const request = require('superagent')
const fs = require('fs')

const numberOfDownloads = 20
const urls = [...Array(numberOfDownloads).keys()]

let downloadBlocking = async () => {
  console.time('download')
  for(const url of urls) {
    try {
      const res = await request.get(`https://www.a${url}.com`)
      fs.writeFileSync(`/tmp/${url}.html`, res.text)
    } catch (e) {
      console.log(e)
    }
  }
  console.timeEnd('download')
}


downloadBlocking()
