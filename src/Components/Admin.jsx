// src/App.jsx
import { useState, useEffect } from 'react';
import RoomList from './RoomList';
import RoomForm from './RoomForm';
import axios from 'axios';

export default function Admin() {
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  const API_URL = 'http://localhost:3000/api/rooms'; 


  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get(API_URL);
      setRooms(res.data);
    } catch (err) {
      alert('Failed to load rooms');
    }
  };

  // Handle create/edit
  const handleSave = async (roomData) => {
    try {
      if (editingRoom) {
        await axios.put(`${API_URL}/${editingRoom._id}`, roomData);
      } else {
        await axios.post(API_URL, roomData);
      }
      fetchRooms();
      setEditingRoom(null);
    } catch (err) {
      alert(`Failed to ${editingRoom ? 'update' : 'add'} room`);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this room?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchRooms();
    } catch (err) {
      alert('Failed to delete room');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Room Rental Admin Panel</h1>
          <p className="mt-1 text-sm text-gray-500">Manage rental listings efficiently</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add/Edit Room Form */}
          <div className="lg:col-span-1">
            <RoomForm
              initialData={editingRoom}
              onSave={handleSave}
              onCancel={() => setEditingRoom(null)}
            />
          </div>

          {/* Room List */}
          <div className="lg:col-span-2">
            <RoomList
              rooms={rooms}
              onEdit={setEditingRoom}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}