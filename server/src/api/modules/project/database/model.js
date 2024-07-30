// model

// contractorId : objectId
// folderId : objectId
// status : float
// price : float
// cost : float
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()
// estimatedTimeComplete : date

// estimatedTimeComplete can be change, but not automatically

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
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
  status: {
    type: Number,
    required: true,
    min: 0,
    max: 100 // Assuming status is a percentage
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
  },
  estimatedTimeComplete: {
    type: Date,
    required: true
  }
}, {
  timestamps: false 
});

// Update the updatedAt field on save
ProjectSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;