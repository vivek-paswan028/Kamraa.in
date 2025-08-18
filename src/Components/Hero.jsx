import React, { useState } from "react";

const Hero = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = () => {
    if (searchCity.trim()) {
      // Open search results in a new window/tab
      const searchUrl = `/search?city=${encodeURIComponent(searchCity.trim())}`;
      window.open(searchUrl, '_blank');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden bg-white">
      {/* Background glow effects */}
      <div className="absolute w-[800px] h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 blur-3xl -top-20 -left-20 z-0"></div>
      <div className="absolute w-[600px] h-[500px] bg-gradient-to-tl from-orange-100 to-orange-200 rounded-full opacity-15 blur-3xl -bottom-20 -right-20 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 w-full max-w-4xl mx-auto">
        {/* Headline */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
            Find Affordable Rental
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-orange-500 leading-tight mt-2">
            Lodge For Students
            
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto">
            <div className="text-black relative w-full sm:w-auto sm:flex-1">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter Your City"
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-l-full sm:rounded-l-full rounded-r-full sm:rounded-r-none outline-none focus:border-orange-500 transition-colors duration-200 bg-white shadow-sm"
              />
            </div>
            <button 
              onClick={handleSearch}
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-semibold rounded-r-full sm:rounded-l-none rounded-l-full sm:rounded-r-full hover:bg-orange-600 transition-colors duration-200 shadow-sm mt-4 sm:mt-0 text-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-sm md:text-base text-gray-600 font-medium">
          Trusted by Many Students
        </p>
      </div>
    </div>
  );
};

export default Hero;
