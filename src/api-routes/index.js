const routes = require('express').Router();
const UserRoutes = require('./user.routes')
const ItemRoutes = require('./item.routes')
const path = require('path')

routes.get('/', (req, res) => {
    res.send({msg: "Hello Express!"})
})

routes.use('/users', UserRoutes)
routes.use('/items', ItemRoutes)

routes.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, '../../public/pagenotfound.html'))
})

module.exports = routes;