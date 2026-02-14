import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error('Missing MONGO_URI environment variable');
}

const cached = globalThis._mongoose || (globalThis._mongoose = { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerPhone: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  totalRooms: {
    type: Number,
    required: true,
    min: 1,
  },
  availableRooms: {
    type: Number,
    required: true,
    min: 0,
  },
  features: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);
