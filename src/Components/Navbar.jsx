import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center">
      <div className="sticky top-0 z-50 w-5xl flex items-center justify-between md:justify-around py-4 rounded-full bg-white/40 backdrop-blur-md shadow-[0_0_25px_rgba(255,111,61,0.15)] m-5 font-poppins-medium border border-white/20 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/" onClick={closeMenu}>Kamraa<span className="text-orange-400">.In</span></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-black font-poppins-medium">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-orange-400 transition-colors duration-200">About Us</a>
          <a href="#policy" className="hover:text-orange-400 transition-colors duration-200">Policy</a>

          {/* Auth Controls */}
          <SignedOut>
            <Link to="/login" className="text-black hover:text-orange-500 transition-colors duration-200">Log in</Link>
            <Link to="/signup">
              <button className="ml-2 px-5 py-2 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors duration-200 shadow-lg">
                Sign Up
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'w-9 h-9' } }} />
          </SignedIn>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-black/80 hover:text-black hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          {!menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden fixed top-[76px] left-0 right-0 mx-5 z-40">
          <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-white/30 shadow-xl p-4 space-y-3">
            <a href="#home" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-orange-50 text-black">Home</a>
            <a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-orange-50 text-black">About Us</a>
            <a href="#policy" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-orange-50 text-black">Policy</a>

            <SignedOut>
              <Link to="/login" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-orange-50 text-black">Log in</Link>
              <Link to="/signup" onClick={closeMenu} className="block">
                <button className="w-full mt-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">Sign Up</button>
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-black font-medium">Account</span>
                <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
