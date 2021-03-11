const { Category } = require('../models/Category')
const Controller = require('./Controller')

class CategoryController extends Controller {
    constructor() {
        super({
            model: Category,
            description: 'Categoria'
        })
    }
}

module.exports = CategoryController