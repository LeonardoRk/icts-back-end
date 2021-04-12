const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router();

router.get('/produtos', ProdutoController.findAll)
router.delete("/produtos/:id", ProdutoController.deleteProduct)
router.post("/produtos", ProdutoController.createProduct)
router.put("/produtos/:id", ProdutoController.editProduct)

module.exports = router