const database = require('../models')

class ProdutoController {
    static async findAll(req, res) {
        console.log("procurando")
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
        console.log("criando")
        try{
            const newProduct = req.body
            const product = await database.Produto.create(newProduct)
            return res.status(200).send(product)
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async editProduct(req, res) {
        console.log("editando")
        try{
            const { id } = req.params
            const newInfos = req.body
            await database.Produto.update(newInfos, {where :{id: Number(id)}})
            const updatedProduct = await database.Produto.findOne({where: {id: Number(id)}});
            return res.status(200).send(updatedProduct)
        }catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutoController;