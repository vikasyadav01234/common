import React from 'react';
import { FaHeart, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 hover:shadow-xl transition duration-300">
      <div className="max-w-8xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-600">Made with</span>
            <FaHeart className="text-red-500 h-4 w-4" />
            <span className="text-gray-600">by</span>
            <span className="text-blue-600 font-medium">Vikas Yadav</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/vikasyadav01234" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/Vikas_Yadav_0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikas-yadav2/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Communion App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;