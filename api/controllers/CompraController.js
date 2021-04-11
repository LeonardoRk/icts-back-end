const database = require('../models')

class CompraController {
    static async findAll(req, res) {
        try{
            const allBoughts = await database.Compra.findAll()
            return res.status(200).json(allBoughts)
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPurchase(req, res) {
        //const newPurchase = {total:55.0, tipo_pagamento:"debito", status:"aprovado"}}
        console.log("\n\n\n\n\nem aqui\n\n\n\n\n\n")
        
        const newPurchase = req.body
        delete newPurchase['produtosId'];
        console.log(newPurchase)
        try{
            return res.status(200).send({})
            const purchase = await database.Compra.create(newPurchase)
            const { produtosId } = newPurchase
            console.log(produtosId)
            //purchase = await purchase.setProdutos(produtosId)

            console.log("depois")
            return res.status(200).json({})
        } catch (error) {
            console.log("\n\n\nno erro\n\n\n")
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CompraController;