const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  imgUrl: String,
  name: String,
  price: Number,
});


const product = model("product", productSchema);
module.exports = product;
