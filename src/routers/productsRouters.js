const {Router} = require('express')

const ProductsController = require("../controllers/productsController")

const productsRoutersFn = (io)=>{

const productsRouters = new Router()

const productsController = new ProductsController(io);

productsRouters.get("/products",productsController.getProductsController.bind(productsController))
productsRouters.get("/products/:pid",productsController.getIdProductsController.bind(productsController))
productsRouters.post("/products",productsController.postProductsController.bind(productsController))
productsRouters.put("/products/:pid",productsController.putProductsController.bind(productsController))
productsRouters.delete("/products/:pid",productsController.deleteProductsController.bind(productsController))

return productsRouters

}

module.exports = productsRoutersFn;