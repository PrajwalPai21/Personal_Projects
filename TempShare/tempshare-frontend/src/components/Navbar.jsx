import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-3 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link to="/" className="text-xl font-semibold text-blue-600">
        PaiShare
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/signup" className="hover:text-blue-600">
          Sign Up
        </Link>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
