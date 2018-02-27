const request = require('superagent')

let url

(async () => {
  for (i=1; i<=100; i++) {
    url = 'a' + i + '.com'
    const res = await request.get(url)
console.log(res)
  }
})()
