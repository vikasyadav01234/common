import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import DateTime from './DateTime';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center px-4 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <Link to="/" className='flex items-center space-x-2'>
            <FaCalendarAlt className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Communion</span>
          </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-150"
            >
              <FaHome className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/events" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-150"
            >
              <FaCalendarAlt className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition duration-150"
            >
              <FaInfoCircle className="h-5 w-5" />
              <span>About</span>
            </Link>
          </nav>

          {/* DateTime Component */}
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/events"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <FaCalendarAlt className="h-5 w-5" />
                <span>Events</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <FaInfoCircle className="h-5 w-5" />
                <span>About</span>
              </Link>
            </div>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;