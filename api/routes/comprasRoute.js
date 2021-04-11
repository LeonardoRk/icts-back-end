const { Router } = require('express')
const CompraController = require('../controllers/CompraController')

const router = Router();

router.get('/compras', CompraController.findAll)
router.post('/compras', CompraController.createPurchase)
router.delete('/compras/:id', CompraController.deletePurchase)

module.exports = router