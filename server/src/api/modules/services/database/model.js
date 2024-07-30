// model

// name : string
// code : string
// personInCharge: string
// contact : string
// unit : string
// cost : float
// price : float
// contractorId : ObjectId
// categoryList : [string]
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  personInCharge: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  unit: {
    type: String,
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
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  categoryList: {
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
ServicesSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const ServicesModel = mongoose.model('Services', ServicesSchema);

module.exports = ServicesModel;