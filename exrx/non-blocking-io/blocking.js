const request = require('superagent')
const fs = require('fs')

let urls = [...Array(100).keys()]

console.log(urls)

let download = async () => {
  for(const url of urls) {
    try {
      const res = await request.get(`https://www.a${url}.com`)
      fs.writeFileSync(`/tmp/${url}.html`, res.text)
    } catch (e) {
      console.log(e)
    }
  }
}

download()
