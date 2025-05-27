const ProductModel= require('../models/productModel');

//Get products API-/api/v1/products

exports.getProducts=async(req,res,next)=>{
  const query= req.query.keyword?{
      name:{
         $regex: req.query.keyword,
         $options:'i'
      }}: {}

   const products = await ProductModel.find(query);
   res.json({
    success: true,
    products
   })
}
//Get products API-/api/v1/products/id
exports.getSingleProducts=async(req,res,next)=>{
   try{
   const Product = await ProductModel.findById(req.params.id);
    res.json({
     success: true,
     Product 
    })
   } catch(error){
      res.status(404).json({
         Success: false,
         message: "Unable to find the product"
      })
   }
 }