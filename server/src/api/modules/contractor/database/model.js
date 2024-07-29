const mongoose = require('mongoose');

const PaymentTermSchema = new mongoose.Schema({
  percent: {
    type: Number,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  detail: {
    type: [String],
    required: true
  }
});

const ContractorSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true
  },
  telegramId: {
    type: String,
    sparse: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    required: true
  },
  termAndCondition: {
    type: [String],
    default: undefined
  },
  paymentTerm: {
    type: [PaymentTermSchema],
    default: undefined
  },
  paymentInfo: {
    type: mongoose.Schema.Types.Mixed,
    default: undefined
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Custom validation for googleId and telegramId
ContractorSchema.pre('validate', function(next) {
  if (this.googleId && this.telegramId) {
    next(new Error('Only one of googleId or telegramId can be filled'));
  } else {
    next();
  }
});


// Update the updatedAt field on save
ContractorSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Contractor = mongoose.model('Contractor', ContractorSchema);

module.exports = Contractor;