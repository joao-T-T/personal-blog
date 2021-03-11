const {
    endpoint,
    configEndpoint
    
} = require('../api-assets/endpoint')

module.exports = endpoint((req, res, auth) => configEndpoint(req, res, auth))