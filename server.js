const http = require('http')
const assert = require('assert')

const mongo = require('mongodb')


const addr = process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost'
const port = process.env.MONGODB_PORT_27017_TCP_PORT || 27017
const url = `mongodb://${addr}:${port}/myproject`
// Use connect method to connect to the Server
mongo.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected correctly to server")
  http.createServer((request, response)=>{
    console.log('URL: ', request.url)
    response.write('hello')
    response.end()
  }).listen(3000)

  db.close()
})
