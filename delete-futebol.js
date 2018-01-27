const knex = require("./config").knex

const idjogador = 16

knex("jogador").del().where({idjogador}).then(ret => {
  console.log(ret)
  process.exit(0)
})