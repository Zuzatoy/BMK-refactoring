const express = require('express')
const path = require('path')

const server = express()

// Server route imports.
const users = require('./routes/users')
const products = require('./routes/products')

if (process.env.NODE_ENV === 'production') {
  // Check this path depending on where you want to serve from.
  server.use(express.static(path.join(__dirname, '..', 'public')))
}

server.use(express.json())
server.use('/users', users)
server.use('/products', products)

// In production, serve any request not covered by the above as the built index
// from CRA's `yarn build` (for BrowserRouter)
if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'))
  })
}

module.exports = server
