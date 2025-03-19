import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loading;