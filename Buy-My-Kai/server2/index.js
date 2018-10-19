const server = require('./server')

const port = 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

require('dotenv').config()
var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})