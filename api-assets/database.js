const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')

const { MONGODB_URI } = process.env

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

mongoose.Promise = global.Promise
mongoose.plugin(slug)

const options = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}

module.exports = {
    options,
    mongoose
}