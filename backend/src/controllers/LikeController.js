const Post = require('../models/Post')

module.exports = {
    async store(req, res){
        const post = await Post.findById(req.params.id) //Todos parametros que enviamos atravez da url, vem no PARAMS
        post.likes += 1

        await post.save()

        req.io.emit('like', post) // permite uso do IO

        return res.json(post)
    }
}