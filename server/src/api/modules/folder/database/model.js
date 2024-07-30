// model

// // FolderModel
// name : string
// contractorId : objectId
// clientName : string
// clientContact : string
// budget : float
// projectAddress : string
// propertyType : string
// listOfMedia : [string]
// listOfArea: [Area]
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

// for area, how to record it if it is not in square or 

const mongoose = require('mongoose');

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contractorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Contractor'
  },
  clientName: {
    type: String,
    required: true
  },
  clientContact: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true,
    min: 0
  },
  projectAddress: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  listOfMedia: {
    type: [String],
    default: []
  },
  listOfArea: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area'
  }],
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
  timestamps: false
});

FolderSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const FolderModel = mongoose.model('Folder', FolderSchema);

module.exports = FolderModel;