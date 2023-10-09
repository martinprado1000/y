const ProductsService = require("../services/productsService")

class ProductsController{
    constructor(io){
        this.io = io
        this.productsService = new ProductsService;
    }
    
    async getProductsController(req,res){
        const result = await this.productsService.getProductsService()
        console.log(io)
        res.send(result)
    }

    async getIdProductsController(req,res){
        const result = await this.productsService.getIdProductsService()
        res.send(result)
    }

    async postProductsController(req,res){
        const result = await this.productsService.postProductsService()
        res.send(result)
    }

    async putProductsController(req,res){
        const result = await this.productsService.putProductsService()
        res.send(result)
    }

    async deleteProductsController(req,res){
        const result = await this.productsService.deleteProductsService()
        res.send(result)
    }
}

module.exports = ProductsController;