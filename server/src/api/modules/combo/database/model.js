// model 

// // MaterialDetailModel 
// id : objectId
// quantity: int
// unit : string
// description : [string]

// // ComboModel
// name: string
// contractorId : objectId
// listOfProducts: [MaterialDetailModel]
// listOfServices: [MaterialDetailModel]
// costPerSQFT : float
// pricePerSQFT : float
// description : [string]
// category: [string]

const mongoose = require('mongoose');

// MaterialDetailSchema
const MaterialDetailSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  description: {
    type: [String],
    default: []
  }
});

// ComboSchema
const ComboSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  listOfProducts: {
    type: [MaterialDetailSchema],
    default: []
  },
  listOfServices: {
    type: [MaterialDetailSchema],
    default: []
  },
  costPerSQFT: {
    type: Number,
    required: true,
    min: 0
  },
  pricePerSQFT: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: [String],
    default: []
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

// Update the updatedAt field on save for ComboSchema
ComboSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

// Create models
const MaterialDetailModel = mongoose.model('MaterialDetail', MaterialDetailSchema);
const ComboModel = mongoose.model('Combo', ComboSchema);

module.exports = {
  MaterialDetailModel,
  ComboModel
};