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
}

module.exports = CompraController;