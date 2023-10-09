//const productsModel = require("../../models/productsModel");

class ProductsDaoMongo {
  constructor() {

  }
  
  async getProductsDaoMongo(){
    return {"status":"holla"}
    //return await productsModel.find();
  }
  async getIdProductsDaoMongo(id){
    //return await productsModel.findOne(id);
  }

  async postProductsDaoMongo(){
    //return await productsModel.create();
  }

  async putProductsDaoMongo(){
    //return await productsModel.updateOne();
  }

  async deleteProductsDaoMongo(){
    //return await productsModel.delete();
  }
}

module.exports = ProductsDaoMongo;
