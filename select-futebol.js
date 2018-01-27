const knex = require('./config').knex

knex("jogador").select().then(ret => {
    console.log(ret)
    process.exit(0)

})

