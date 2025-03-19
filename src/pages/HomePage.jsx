import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Ensure motion is used for animations

import { FaArrowRight } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1.8 }}
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl hover:text-blue-600">
            Welcome to Communion App
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connecting people of all faiths through events and community support
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl hover:text-blue-600">
                  Connecting People Across Faiths & Interests
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Join our vibrant community and discover meaningful connections through shared experiences
                  and cultural exchange.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <Link
                    to="/events"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    Explore Events <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Section Added */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        > {/* New Section for "Why Communion Rocks!" */}



          <h2 className="text-4xl font-extrabold text-center text-gray-900 hover:text-blue-600">Why Communion Rocks!</h2> {/* Title for the new section */}

          <p className="mt-4 text-lg leading-6 text-gray-500 text-center"> {/* Description for the new section */}

            Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"> {/* Grid layout for the cards */}

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Unifying Communities</h3>
              <p className="mt-2">Communion bridges diverse religious communities, becoming the social...</p>
              <Link to="/events" className="mt-4 inline-block text-blue-600">Learn More →</Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Innovative and Fun</h3>
              <p className="mt-2">Experience faith in a fresh way through our interactive features, engaging events, and modern approach to...</p>
              <Link to="/events" className="mt-4 inline-block text-blue-600">Learn More →</Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Promoting Unity</h3>
              <p className="mt-2">We foster understanding and harmony between different faith communities through...</p>
              <Link to="/events" className="mt-4 inline-block text-blue-600">Learn More →</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
