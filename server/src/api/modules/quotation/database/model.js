// model

// version: int
// name : string
// contractorId : objectId
// folderId : objectId
// price : float
// cost : float
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
  version: {
    type: Number,
    required: true,
    min: 1
  },
  name: {
    type: String,
    required: true
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Folder'
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  cost: {
    type: Number,
    required: true,
    min: 0
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
QuotationSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const QuotationModel = mongoose.model('Quotation', QuotationSchema);

module.exports = QuotationModel;