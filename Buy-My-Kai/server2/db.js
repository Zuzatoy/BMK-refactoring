const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser
}

function getUsers (testDb) {
  const db = testDb || connection
  console.log('getting all users')
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  console.log('getting user ', id)
  return db('users').where('id', id).first()
}

function addUser (userData, testDb) {
  const db = testDb || connection
  console.log('inserting new user: ', userData)
  return db('users').insert(userData)
}
