const knex = require('./config').knex_contatos

if(process.argv.length < 3){
    console.log('usage: node index.js [operation] [optional complement]')
    return
}
let id_contato, nome_contato, telefone_contato
let contato
switch (process.argv[2]) {
    case 'insert':
        console.log('Caiu no insert.')
        if(process.argv.length < 4){
            console.log('usage: node index.js insert name,telephone')
            return
        }

        [nome_contato,telefone_contato] = process.argv[3].split(',')
        contato = {nome_contato,telefone_contato}
        console.log(contato)

        knex("contato").insert(contato).then(ret => {
            console.log(ret)
            process.exit(0)
        })
        break;
    
    case 'update':
        console.log('Caiu no update.')    
        if(process.argv.length < 4){
            console.log('usage: node index.js update id,name,telephone')
            return
        }

        [id_contato,nome_contato,telefone_contato] = process.argv[3].split(',')
        contato = {nome_contato,telefone_contato}
        console.log(contato)
        
        knex("contato").update(contato).where({id_contato}).then(ret => {
            console.log(ret)
            process.exit(0)
        })

        break;
        
    case 'delete':
        console.log('Caiu no delete.')
        if(process.argv.length < 4){
            console.log('usage: node index.js delete id')
            return
        }
        id_contato = process.argv[3]

        knex("contato").del().where({id_contato}).then(ret => {
            console.log(ret)
            process.exit(0)
        })
        break;

    case 'list':
        console.log('Caiu no list.')
        knex("contato").select().then(ret => {
            console.log(ret)
            process.exit(0)
        
        })
        break;

    default:
        console.log('Caiu no default e não fez nenhuma das operações.')
        break;
}