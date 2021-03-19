const jwt = require('jsonwebtoken')

module.exports = class AuthService {
    static createToken(payload) {
        return jwt.sign(payload, process.env.APP_SECRET, {
            expiresIn: 432000
        })
    }
    static decodeToken(token) {
        return jwt.verify(token, process.env.APP_SECRET)
    }
    static verifyToken(token) {
        return jwt.verify(token, process.env.APP_SECRET, (error, decoded) => !error && decoded)
    }
}