// model

// // OrderDetailModel
// productId : ObjectId
// quantity: float
// unit : string
// cost : float

// // OrderModel
// folderId : ObjectId
// projectId : ObjectId
// supplierId : ObjectId
// listOfOrder : [OrderDetail]
// totalCost : float
// status : float
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

const mongoose = require('mongoose');

// OrderDetailSchema
const OrderDetailSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  }
});

// OrderSchema
const OrderSchema = new mongoose.Schema({
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Folder'
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Supplier'
  },
  listOfOrder: {
    type: [OrderDetailSchema],
    default: []
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'ordered', 'delivered', 'paid'],
    default: 'pending'
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

// Update the updatedAt field on save for OrderSchema
OrderSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

// Create models
const OrderDetailModel = mongoose.model('OrderDetail', OrderDetailSchema);
const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = {
  OrderDetailModel,
  OrderModel
};