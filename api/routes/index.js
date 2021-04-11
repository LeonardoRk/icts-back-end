const cors = require('cors')

const bodyParser = require('body-parser')
const produtos = require('./produtosRoute')
const compras = require('./comprasRoute')

const corsOptions = {
    origin: 'http://localhost:3000'
  }

module.exports = app => {
    app.use(cors(corsOptions))
    app.use(bodyParser.json())
    app.use(produtos)
    app.use(compras)
}