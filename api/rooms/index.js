import { connectDB, Room } from '../_db.js';

const setCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
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

    if (req.method === 'GET') {
      const filter = {};
      if (req.query?.location) {
        filter.location = { $regex: String(req.query.location).trim(), $options: 'i' };
      }
      const rooms = await Room.find(filter);
      return res.status(200).json(rooms);
    }

    if (req.method === 'POST') {
      const data = parseBody(req);
      const savedRoom = await Room.create(data);
      return res.status(201).json(savedRoom);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
