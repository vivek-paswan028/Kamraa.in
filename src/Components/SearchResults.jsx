import React, { useState } from "react";

const SearchResults = ({ city, onLodgeClick, onBackToHome }) => {
  const [selectedCity, setSelectedCity] = useState(city || "Hazaribagh");

  // Sample lodge data
  const lodges = [
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
    }
  ];

  const handleSearch = () => {
    // Update the search results based on the new city
    // In a real app, this would fetch data from an API
    console.log("Searching for:", selectedCity);
  };

  const handleLodgeClick = (lodgeId) => {
    onLodgeClick(lodgeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Search Bar */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              placeholder="Enter your city"
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full outline-none focus:border-orange-500"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-2 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black">
          Lodges in {selectedCity}
        </h1>
      </div>

      {/* Lodge Listings */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-6">
          {lodges.map((lodge) => (
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
    </div>
  );
};

export default SearchResults;
