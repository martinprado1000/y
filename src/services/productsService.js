const ProductsDaoMongo = require("../DAO/productsDao/productsDaoMongo")

class ProductsService{
    constructor(){
        this.productsDaoMongo = new ProductsDaoMongo;
    }

    async getProductsService(){
        const result = await this.productsDaoMongo.getProductsDaoMongo()
        return result
    }

    async getIdProductsService(){
        const result = await this.productsDaoMongo.getIdProductsDaoMongo()
        return result
    }

    async postProductsService(){
        const result = await this.productsDaoMongo.postProductsDaoMongo()
        return result
    }

    async putProductsService(){
        const result = await this.productsDaoMongo.putProductsDaoMongo()
        return result
    }

    async deleteProductsService(){
        const result = await this.productsDaoMongo.deleteProductsDaoMongo()
        return result
    }    
}

module.exports = ProductsService;