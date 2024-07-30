// model

// name : string
// code : string
// brand : string (optional)
// unit : [string]
// cost : float
// price : float
// supplierId : ObjectId
// contractorId : ObjectId
// categoryList : [string]
// productPic : string (optional)
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

// please help to implement code to handle history of product price
// think of a logic to create a product code that is easy for contractor to remember, mix of alphabet and number

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String
  },
  unit: {
    type: [String],
    required: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Supplier' // Assuming you have a Supplier model
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  categoryList: {
    type: [String],
    default: []
  },
  productPic: {
    type: String
  },
  createdAt: {
    type: String,
    default: () => new Date().toISOString(),
    immutable: true
  },
  updatedAt: {
    type: String,
    default: () => new Date().toISOString()
  }
}, {
  timestamps: false // Disable automatic timestamps
});

// Update the updatedAt field on save
ProductSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;