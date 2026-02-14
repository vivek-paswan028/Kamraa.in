import { connectDB, Room } from '../_db.js';

const setCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

const parseBody = (req) => {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
};

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();
    const { id } = req.query;

    if (req.method === 'GET') {
      const room = await Room.findById(id);
      if (!room) return res.status(404).json({ message: 'Room not found' });
      return res.status(200).json(room);
    }

    if (req.method === 'PUT') {
      const data = parseBody(req);
      const updatedRoom = await Room.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
      return res.status(200).json(updatedRoom);
    }

    if (req.method === 'DELETE') {
      const deletedRoom = await Room.findByIdAndDelete(id);
      if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
      return res.status(200).json({ message: 'Room deleted successfully' });
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
