exports.knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./futebol.db"
    },
    useNullAsDefault: true
})

exports.knex_contatos = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./contatos.db"
    },
    useNullAsDefault: true
})

//module.exports = { knex }