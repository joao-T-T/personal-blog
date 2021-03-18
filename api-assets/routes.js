const publicPaths = [
    'api/.*'
]

const isPathPublic = () => publicPaths.some((regex) => new RegExp(regex).test(req.url))

module.exports = {
    publicPaths,
    isPathPublic
}