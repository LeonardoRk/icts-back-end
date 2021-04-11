const database = require('../models')

class ProdutoController {
    static async findAll(req, res) {
        try{
            const allProducts = await database.Produto.findAll()
           
            return res.status(200).json(allProducts)
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params
        try{
            await database.Produto.destroy(
                {where: { id: Number(id)}}
            )
           
            return res.status(200).json({message: id})
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async createProduct(req, res) {
        const newProduct = req.body
        try{
            const product = await database.Produto.create(newProduct)
            return RegExp.status(200).json(product)
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutoController;