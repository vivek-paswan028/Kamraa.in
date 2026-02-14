// src/SearchPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import api from "../utils/api";

const SearchPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get initial city from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cityFromUrl = urlParams.get('city');
    if (cityFromUrl) {
      setSelectedCity(cityFromUrl);
      handleSearch(cityFromUrl);
    }
  }, []);

  // Fetch rooms from backend filtered by location
  const fetchRoomsByLocation = async (city) => {
    setLoading(true);
    setError("");
    try {
      // Make API call with query parameter
      const res = await api.get('/rooms', {
        params: { location: city }
      });

      setSearchResults(res.data);
    } catch (err) {
      console.error("API Error:", err);
      setError('Failed to load lodges. Please try again later.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (city = selectedCity) => {
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    // Update URL
    const newUrl = `${window.location.pathname}?city=${encodeURIComponent(trimmedCity)}`;
    window.history.pushState({}, '', newUrl);

    // Fetch from backend
    fetchRoomsByLocation(trimmedCity);
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLodgeClick = (lodgeId) => {
    window.open(`/lodge/${lodgeId}`, '_blank'); // Or use React Router: navigate(`/lodge/${lodgeId}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Navbar />

      {/* Search Bar */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your city"
              className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-l-full sm:rounded-l-full rounded-r-full sm:rounded-r-none outline-none focus:border-orange-500 bg-white shadow-sm"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-r-full sm:rounded-l-none rounded-l-full sm:rounded-r-full font-semibold hover:bg-orange-600 transition shadow-sm text-lg disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          {selectedCity ? `Lodges in ${selectedCity}` : 'Search for Lodges'}
        </h1>
        {searchResults.length > 0 && (
          <p className="text-gray-600 mt-2">
            Found {searchResults.length} lodge{searchResults.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching for lodges...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-12 px-4">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && selectedCity && searchResults.length === 0 && (
        <div className="text-center py-12 px-4">
          <p className="text-gray-500 text-lg mb-2">No lodges found in "{selectedCity}"</p>
          <p className="text-gray-600">Try a different city or check back later.</p>
        </div>
      )}

      {/* Lodge Listings */}
      {!loading && !error && searchResults.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="space-y-6">
            {searchResults.map((lodge) => (
              <div
                key={lodge._id}
                onClick={() => handleLodgeClick(lodge._id)}
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img
                      src={lodge.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                      alt={lodge.title}
                      className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                    />
                  </div>

                  {/* Details */}
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-bold text-orange-500 mb-2">{lodge.title}</h2>

                    <div className="mb-4">
                      <p className="text-lg font-semibold text-black">
                        Rent NPR {lodge.price}/month
                      </p>
                      <p className="text-gray-600">{lodge.distance || lodge.location}</p>
                    </div>

                    <div className="mb-4">
                      <ul className="space-y-1">
                        {lodge.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="text-gray-700">• {feat}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;