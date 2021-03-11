const { mongoose, options } = require('../../database')

const UserStructure = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}

const UserSchema = mongoose.Schema(UserStructure, options)
const User = mongoose.model('User', UserSchema)

module.exports = { UserSchema, User }