export default function RoomList({ rooms, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Room Listings</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {rooms.length === 0 ? (
          <p className="text-center py-8 text-gray-500">No rooms added yet.</p>
        ) : (
          rooms.map((room) => (
            <div key={room._id} className="p-6 hover:bg-gray-50 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{room.title}</h3>
                  <p className="text-gray-600">{room.location} • NPR {room.price}/month</p>
                  <p className="text-sm text-gray-500 mt-1">{room.address}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {room.features.slice(0, 3).map((feat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {feat}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{room.features.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 space-y-2 sm:flex sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => onEdit(room)}
                    className="w-full sm:w-auto px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(room._id)}
                    className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}