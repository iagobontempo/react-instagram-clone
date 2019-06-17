//Este arquivo seria uma classe Post.
//Esta sendo importado o moongoose, biblioteca de acesso ao MongoDB.
//Foi criado um Schema para o database.
//Esta enviando o model tipo Post, com postSchema na ultima linha

const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }   
}, {
    timestamps:true,
})

module.exports = mongoose.model('Post', PostSchema)