const { mongoose, options } = require('../../database')

const CategoryStructure = {
    slug: {
        type: String,
        slug: 'title',
        slugPaddingSize: 4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    }
}

const CategorySchema = mongoose.Schema(CategoryStructure, options)
const Category = mongoose.model('Category', CategorySchema)

module.exports = { CategorySchema, Category }