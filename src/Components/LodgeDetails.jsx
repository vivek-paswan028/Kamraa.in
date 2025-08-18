import React, { useState, useEffect } from "react";

const LodgeDetails = ({ lodgeId, onBackToSearch }) => {
  const [lodge, setLodge] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching lodge data based on lodgeId prop
    const lodgesData = {
      1: {
        id: 1,
        name: "Shivam Lodge",
        rent: 40,
        distance: "1 Km from College",
        features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        owner: "Mr. Shivam Kumar",
        phone: "+91 98765 43210",
        email: "shivam.kumar@email.com",
        address: "123 College Road, Hazaribagh, Jharkhand 825301",
        description: "A comfortable single room with modern amenities, perfect for students. Located close to the college campus with easy access to public transport. The room is well-maintained and provides a peaceful environment for studying.",
        amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "24/7 Water Supply", "Security", "Parking", "Study Table", "Wardrobe", "Fan", "Lighting"],
        rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 6 AM", "No overnight guests", "Keep room clean"],
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ]
      },
      2: {
        id: 2,
        name: "Student Haven",
        rent: 45,
        distance: "1.2 Km from College",
        features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        owner: "Mrs. Priya Sharma",
        phone: "+91 98765 43211",
        email: "priya.sharma@email.com",
        address: "456 University Street, Hazaribagh, Jharkhand 825301",
        description: "A cozy room with excellent facilities and a peaceful environment. Ideal for focused study with minimal distractions. The room comes with modern amenities and is located in a safe neighborhood.",
        amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "Study Table", "Wardrobe", "Kitchen Access", "24/7 Water Supply", "Security", "Parking"],
        rules: ["No smoking", "No pets allowed", "Quiet hours: 11 PM - 6 AM", "No overnight guests", "Keep room clean", "Kitchen usage allowed"],
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ]
      },
      3: {
        id: 3,
        name: "Green Valley Lodge",
        rent: 35,
        distance: "0.8 Km from College",
        features: ["Single Room", "Wi-Fi", "Attached Bathroom"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        owner: "Mr. Rajesh Verma",
        phone: "+91 98765 43212",
        email: "rajesh.verma@email.com",
        address: "789 Campus Road, Hazaribagh, Jharkhand 825301",
        description: "Affordable accommodation with basic amenities. Perfect for budget-conscious students who want a clean and safe place to stay. The room is simple but well-maintained.",
        amenities: ["Single Room", "Wi-Fi", "Attached Bathroom", "Basic Furniture", "Security", "24/7 Water Supply"],
        rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 6 AM", "No overnight guests", "Keep room clean"],
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ]
      }
    };
    
    const lodgeData = lodgesData[lodgeId];
    setLodge(lodgeData);
    setLoading(false);
  }, [lodgeId]);

  const handleContactOwner = () => {
    // In a real app, this would open a contact form or initiate a call
    window.open(`tel:${lodge.phone}`);
  };

  const handleBookNow = () => {
    // In a real app, this would redirect to booking page
    alert("Redirecting to booking page...");
  };

  const handleBackToSearch = () => {
    onBackToSearch();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading lodge details...</p>
        </div>
      </div>
    );
  }

  if (!lodge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Lodge Not Found</h2>
          <p className="text-gray-600">The lodge you're looking for doesn't exist.</p>
          <button 
            onClick={handleBackToSearch}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Back to Search Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="pt-20 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={handleBackToSearch}
            className="flex items-center text-orange-500 hover:text-orange-600 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search Results
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Lodge Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Image */}
            <div className="lg:w-1/2">
              <img
                src={lodge.image}
                alt={lodge.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Lodge Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-orange-500 mb-4">
                {lodge.name}
              </h1>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-black">
                    ${lodge.rent}/month
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {lodge.distance}
                </div>

                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {lodge.address}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactOwner}
                  className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
                >
                  Contact Owner
                </button>
                <button
                  onClick={handleBookNow}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {lodge.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {lodge.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">House Rules</h2>
              <ul className="space-y-2">
                {lodge.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Owner Info */}
          <div className="space-y-8">
            {/* Owner Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Room Owner</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-black">{lodge.owner}</h3>
                  <p className="text-gray-600">Property Owner</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{lodge.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">{lodge.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleContactOwner}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Contact Owner
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={handleBookNow}
                  className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Book This Room
                </button>
                <button className="w-full px-4 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">
                  Schedule Visit
                </button>
                <button className="w-full px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Save to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodgeDetails;
