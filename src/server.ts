import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path' //para criar uma pasta publica para colocar imagens
import mainRouter from './routes/index'

dotenv.config() //OBS: DEVEMOS CRIAR UM ARQUIVO .env no projeto e dentro dele colocar PORT: numero que quiser

const server = express() // cria o servidor 

server.set('view engine', 'mustache') //informa ao express que o mecanismo de renderização de views é o mustache

server.set('views', path.join(__dirname, 'views'))//define o diretório onde estão os arquivos de views (templates).
//OBS: DEVEMOS CRIAR UMA PASTA views dentro da pasta src

server.engine('mustache', mustache()) // Essa linha está registrando a engine de template Mustache com o Express.

server.use(express.static(path.join(__dirname,'../public'))) // setamos nossa pasta onde vão ficar os arquivos staticos o ../ é para voltar uma pasta pois a pasta original do projeto esta na src 

//OBS: DEVEMOS CRIAR UMA PASTA public fora da pasta src



//ROTAS

  server.use(mainRouter) // adiciona a rota principal

  server.use((req, res) => {
    res.render('pages/404')
  })

//

server.listen(process.env.PORT, () => {
    console.log('servidor rodando na porta http://localhost:4000')
}) //rodando o servidor usando a porta configurada no env