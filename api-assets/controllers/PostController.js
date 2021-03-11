const { Post } = require('../models/Post')
const Controller = require('./Controller')

class PostController extends Controller {
    constructor() {
        super({
            model: Post,
            description: 'Publicação'
        })
    }
}

module.exports = PostController