import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Centered title with flexible space around it to center it when there's an element on either side */}
      <div className="flex-1 text-center">
        <h1 className="text-xl font-semibold">Smart Waste Dashboard</h1>
      </div>

      {/* User icon */}
      <div className="relative flex-end">
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
