const publicRoutes = require('./publicRoutes')

const isRoutePublic = (url) => {
    return publicRoutes
        .map((route) => new RegExp(route + '($|\\?)'))
        .some((regex) => regex.test(url))
}

module.exports = {
    publicRoutes,
    isRoutePublic
}