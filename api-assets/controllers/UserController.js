const { User } = require('../models/User')
const Controller = require('./Controller')

class UserController extends Controller {
    constructor() {
        super({
            model: User,
            description: 'Usuário'
        })
    }

    exists(payload) {
        const { user } = payload;
        return false;
    }
    testPassword(payload) {
        const { user, password } = payload;
        return false;
    }
}

module.exports = UserController