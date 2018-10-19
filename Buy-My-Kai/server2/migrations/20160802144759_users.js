exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('password')
    table.string('age')
    table.string('bio')
    table.string('photo')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
