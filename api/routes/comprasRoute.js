const { Router } = require('express')
const CompraController = require('../controllers/CompraController')

const router = Router();

router.get('/compras', CompraController.findAll)

module.exports = router