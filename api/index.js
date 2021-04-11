const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3001

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app


// const http = require('http');
// const { Sequelize, Model, DataTypes } = require('sequelize');

// const hostname = '127.0.0.1';
// const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });