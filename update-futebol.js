// index3.js
const knex = require("./config").knex

const idjogador = 8
const numerojogador = 10

knex("jogador").update({numerojogador}).where({idjogador}).then(ret => {
  console.log(ret)
  process.exit(0)
})