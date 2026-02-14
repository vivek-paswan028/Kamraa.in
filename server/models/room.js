const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  location: {
    type: String,
    required: true,
    index: true 
  },
  address: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerPhone: {
    type: String,
    required: true
  },
  ownerEmail: {
    type: String,
    required: true
  },
  totalRooms: {
    type: Number,
    required: true,
    min: 1
  },
  availableRooms: {
    type: Number,
    required: true,
    min: 0
  },
  features: {
    type: [String],
    default: []
  },
  images: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Room', roomSchema);