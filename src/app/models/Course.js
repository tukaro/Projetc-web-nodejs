const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_itemSchema = new Schema({
  name: { type: String },
  image: { type: String },
  image1: { type: String },
  image2: { type: String },
  price: { type: String },
  description: { type: String },
  shipping: { type: String },
  customer: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ProductItem', product_itemSchema, 'product_item');
