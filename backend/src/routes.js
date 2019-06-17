const express = require('express')
const multer = require('multer') // Faz o processamento da requisiçao que vem no BODY (acredito que seja um bodyparser)
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router() // Criando rota ?? DUVIDAS AINDA
const upload = multer(uploadConfig)

//Toda vez que acessar rota.post(via metodo post) ele vai chamar o metodo store dentro de controllers
// PostController.store é o nome do metodo que irá ser chamado lá em ./controllers/PostController
routes.post('/posts', upload.single('image'), PostController.store)
routes.get('/posts', PostController.index)
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes // Permitindo routes ser exportado como 'routes'