import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Notification({ message, type = 'success', show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className={`rounded-lg shadow-lg p-4 ${
            type === 'success' ? 'bg-green-100' : 'bg-red-100'
          } flex items-center`}>
            {type === 'success' ? (
              <FaCheckCircle className="text-green-500 mr-2" />
            ) : (
              <FaTimesCircle className="text-red-500 mr-2" />
            )}
            <span className={`${
              type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {message}
            </span>
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;