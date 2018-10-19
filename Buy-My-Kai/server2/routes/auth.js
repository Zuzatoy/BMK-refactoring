// server/routes/auth.js
const express = require('express')

const router = express.Router()

router.post('/register', register)

function register (req, res) {
  const {username, password} = req.body
  // TODO: make sure username doesn't already exist
  // TODO: if not, hash the password and add the user to the database
}

module.exports = router