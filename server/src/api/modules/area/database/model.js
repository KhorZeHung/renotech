// model

// folderId: ObjectId
// name: string
// length: float
// width: float
// height: float
// description : string
// listOfMedia : [string]
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()

const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Folder'
  },
  name: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true,
    min: 0
  },
  width: {
    type: Number,
    required: true,
    min: 0
  },
  height: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    default: ''
  },
  listOfMedia: {
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
  timestamps: false
});

AreaSchema.pre('save', function(next) {
  this.updatedAt = new Date().toISOString();
  next();
});

const AreaModel = mongoose.model('Area', AreaSchema);

module.exports = AreaModel;