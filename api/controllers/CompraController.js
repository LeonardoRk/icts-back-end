const database = require('../models')
const { Op } = require("sequelize");

class CompraController {
    static async findAll(req, res) {
        try{
            const allBoughts = await database.Compra.findAll({ include: database.Produto })
            return res.status(200).json(allBoughts)
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPurchase(req, res) {        
        
        try{
            let newPurchase = req.body

            const purchase = await database.Compra.create(newPurchase)
            const { Produtos } = newPurchase
            await purchase.setProdutos(Produtos)

            let founds = await database.Compra.findOne(
                {
                    where: {
                        id: purchase.id
                    },
                    include: { model: database.Produto }
                }
            )   
        
            return res.status(200).json(founds)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json(error.message);
        }
    }

    static async deletePurchase(req, res) {
        const { id } = req.params
        try{
            await database.Compra.destroy(
                {where: { id: Number(id)}}
            )
           
            return res.status(200).json({message: id})
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CompraController;