import React, { useState, useEffect } from "react";
import Navbar from './Navbar';

const SearchPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample lodge data
  const allLodges = [
    {
      id: 1,
      name: "Shivam Lodge",
      rent: 40,
      distance: "1 Km from College",
      features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      owner: "Mr. Shivam Kumar",
      phone: "+91 98765 43210",
      address: "123 College Road, Hazaribagh",
      description: "A comfortable single room with modern amenities, perfect for students. Located close to the college campus with easy access to public transport.",
      amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "24/7 Water Supply", "Security", "Parking"]
    },
    {
      id: 2,
      name: "Student Haven",
      rent: 45,
      distance: "1.2 Km from College",
      features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      owner: "Mrs. Priya Sharma",
      phone: "+91 98765 43211",
      address: "456 University Street, Hazaribagh",
      description: "A cozy room with excellent facilities and a peaceful environment. Ideal for focused study with minimal distractions.",
      amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "Study Table", "Wardrobe", "Kitchen Access"]
    },
    {
      id: 3,
      name: "Green Valley Lodge",
      rent: 35,
      distance: "0.8 Km from College",
      features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      owner: "Mr. Rajesh Verma",
      phone: "+91 98765 43212",
      address: "789 Campus Road, Hazaribagh",
      description: "Affordable accommodation with basic amenities. Perfect for budget-conscious students who want a clean and safe place to stay.",
      amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "Basic Furniture", "Security"]
    },
    {
      id: 4,
      name: "Campus Comfort",
      rent: 50,
      distance: "0.5 Km from College",
      features: ["Single Room", "Wi-Fi", "Attached Bathroom", "AC"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      owner: "Mr. Amit Singh",
      phone: "+91 98765 43213",
      address: "321 College Lane, Hazaribagh",
      description: "Premium accommodation with air conditioning and modern amenities. Perfect for students who want comfort and convenience.",
      amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "AC", "Study Table", "Wardrobe", "Security"]
    }
  ];

  useEffect(() => {
    // Get city from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const cityFromUrl = urlParams.get('city');
    
    if (cityFromUrl) {
      setSelectedCity(cityFromUrl);
      performSearch(cityFromUrl);
    }
  }, []);

  const performSearch = (city) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Filter lodges based on city (in a real app, this would be an API call)
      const filteredLodges = allLodges.filter(lodge => 
        lodge.address.toLowerCase().includes(city.toLowerCase()) ||
        city.toLowerCase().includes('hazaribagh') // For demo purposes
      );
      
      setSearchResults(filteredLodges);
      setLoading(false);
    }, 500);
  };

  const handleSearch = () => {
    if (selectedCity.trim()) {
      performSearch(selectedCity.trim());
      // Update URL without page reload
      const newUrl = `${window.location.pathname}?city=${encodeURIComponent(selectedCity.trim())}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLodgeClick = (lodgeId) => {
    // Open lodge details in a new window
    window.open(`/lodge/${lodgeId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Navbar />
      
      {/* Search Bar */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-auto sm:flex-1">
              <input
                type="text"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your city"
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-l-full sm:rounded-l-full rounded-r-full sm:rounded-r-none outline-none focus:border-orange-500 transition-colors duration-200 bg-white shadow-sm"
              />
            </div>
            <button 
              onClick={handleSearch}
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-r-full sm:rounded-l-none rounded-l-full sm:rounded-r-full font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-sm text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching for lodges...</p>
        </div>
      )}

      {/* No Results */}
      {!loading && selectedCity && searchResults.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">
            No lodges found in {selectedCity}
          </div>
          <p className="text-gray-600">
            Try searching for a different city or check back later for new listings.
          </p>
        </div>
      )}

      {/* Lodge Listings */}
      {!loading && searchResults.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="space-y-6">
            {searchResults.map((lodge) => (
              <div
                key={lodge.id}
                onClick={() => handleLodgeClick(lodge.id)}
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Lodge Image */}
                  <div className="md:w-1/3">
                    <img
                      src={lodge.image}
                      alt={lodge.name}
                      className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                    />
                  </div>

                  {/* Lodge Details */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      {/* Lodge Name */}
                      <h2 className="text-2xl font-bold text-orange-500 mb-2">
                        {lodge.name}
                      </h2>

                      {/* Price and Distance */}
                      <div className="mb-4">
                        <p className="text-lg font-semibold text-black">
                          Rent ${lodge.rent}/month
                        </p>
                        <p className="text-gray-600">
                          {lodge.distance}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {lodge.features.map((feature, index) => (
                            <li key={index} className="text-gray-700">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-4">
                      <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                        View Details
                      </button>
                    </div>
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
