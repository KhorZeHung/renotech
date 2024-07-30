// model

// name : string
// contractorId : objectId
// personInCharge : string
// contact : string
// address : string
// cateogory : [string]
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  personInCharge: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  category: {
    type: [String],
    default: []
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
SupplierSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const SupplierModel = mongoose.model('Supplier', SupplierSchema);

module.exports = SupplierModel;