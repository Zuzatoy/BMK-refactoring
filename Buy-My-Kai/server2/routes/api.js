const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/getAllUsers', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/getUser/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addUser', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(user => {
      res.status(200).send('Added ' + newUser.name)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/register', (req, res) => {
  const newUser = req.body
  newUser.photo = 'https://workbea.com/wp-content/uploads/2017/03/lipstick-on-a-pig-225x300.jpg'
  db.addUser(newUser)
    .then(user => {
      res.redirect('http://localhost:4000')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

