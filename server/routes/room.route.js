// routes/room.routes.js

const express = require('express');
const router = express.Router();

// Import controllers
const {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/room.controller');

// @route   GET /api/rooms
// @desc    Get all rooms
router.get('/', getAllRooms);

// @route   GET /api/rooms/:id
// @desc    Get room by ID
router.get('/:id', getRoomById);

// @route   POST /api/rooms
// @desc    Create a new room
router.post('/', createRoom);

// @route   PUT /api/rooms/:id
// @desc    Update room by ID
router.put('/:id', updateRoom);

// @route   DELETE /api/rooms/:id
// @desc    Delete room by ID
router.delete('/:id', deleteRoom);

module.exports = router;