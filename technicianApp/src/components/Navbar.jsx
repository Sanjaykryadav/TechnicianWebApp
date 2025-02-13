import { useState } from "react";
import { FaShoppingCart, FaUser, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center bg-blue-600 p-4 text-white">
        {/* Left: Company Logo & Name */}
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10" />
          <h1 className="text-lg font-semibold">TechCorp</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <IoLocationSharp className="text-lg" /> <span>Location</span> ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md">
                <li className="p-2 hover:bg-gray-200"><a href="#">New York</a></li>
                <li className="p-2 hover:bg-gray-200"><a href="#">Los Angeles</a></li>
                <li className="p-2 hover:bg-gray-200"><a href="#">Chicago</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* Right: Search Bar, Cart, and Account */}
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md text-black"
            />
            <BiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-300" />
          <FaUser className="text-xl cursor-pointer hover:text-gray-300" />
        </div>
      </nav>

      {/* Mobile View: Search Bar & Location Dropdown (Outside Navbar) */}
      <div className="md:hidden flex flex-col items-center bg-blue-600 p-3">
        {/* Search Bar */}
        <div className="w-full max-w-xs flex items-center bg-white px-3 py-2 rounded-md">
          <BiSearch className="text-gray-600" />
          <input type="text" placeholder="Search..." className="ml-2 flex-1 text-black" />
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full max-w-xs mt-2">
          <button
            className="w-full bg-white text-black px-4 py-2 rounded-md flex justify-between items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <IoLocationSharp className="text-lg" /> Select Location ▼
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-white text-black shadow-md rounded-md">
              <li className="p-2 hover:bg-gray-200"><a href="#">New York</a></li>
              <li className="p-2 hover:bg-gray-200"><a href="#">Los Angeles</a></li>
              <li className="p-2 hover:bg-gray-200"><a href="#">Chicago</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-blue-600 p-3 flex justify-around items-center text-white shadow-lg">
        {/* Company Logo & Name (Now Inside the Navbar) */}
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/30" alt="Logo" className="w-8 h-8" />
          <span className="text-sm font-semibold">TechCorp</span>
        </div>

        <a href="#" className="flex flex-col items-center">
          <FaHome className="text-xl" />
          <span className="text-sm">Home</span>
        </a>

        <a href="#" className="flex flex-col items-center">
          <FaInfoCircle className="text-xl" />
          <span className="text-sm">About</span>
        </a>

        <a href="#" className="flex flex-col items-center">
          <FaShoppingCart className="text-xl" />
          <span className="text-sm">Cart</span>
        </a>

        <a href="#" className="flex flex-col items-center">
          <FaUser className="text-xl" />
          <span className="text-sm">Account</span>
        </a>
      </nav>
    </div>
  );
}
