import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-deep-sky-blue z-50">
      <motion.div
        className="w-24 h-24 rounded-full bg-comet-pink-peach flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-comet-white text-xl font-bold">AI</span>
      </motion.div>
    </div>
  );
};

export default Loader;
