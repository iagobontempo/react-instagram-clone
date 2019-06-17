const express = require('express') // Importando o pacote para uso do Express.
const mongoose = require('mongoose') // Importando o pacote para conecão com mongoDB
const path = require('path')
const cors = require('cors') // Permite que backend seja acessivel pelo frontend pelo react mesmo estando em dominios diferentes

const app = express(); //Funcao cria um 'servidor' protocolo http (Neste caso o express seria um contrutor)

const server = require('http').Server(app) //vai importar http do node
const io = require('socket.io')(server) // com isso ele aceita protocolo websocket (realtime)

// Conecta com mongoDB
mongoose.connect('mongodb+srv://semana:semana@cluster0-hogk8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

// \/ Criou seu proprio middleware Semana OmniStack 7.0 - Aula #2 52:00 rever
app.use((req,res, next) => {
    req.io = io

    next()
})

app.use(cors()) // Sem parametros quer dizer que é acessivel por qualquer aplicacao

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // Toda vez que acessar a rota /files, irá ser como estiver acessando a minha pasta resized

app.use(require('./routes')) // Esta importando de routes.js na mesma pagina

server.listen(3333); //Listagem de porta > Para acessar aplicacao atravez de uma porta

