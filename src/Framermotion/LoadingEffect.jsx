import { useState } from "react";
import { motion } from 'framer-motion';

const LoadingEffect = () => {
  const [loading, setLoading] = useState(false);

  return (
    <motion.button
      onClick={() => setLoading(true)}
      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
    >
      {loading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
        />
      )}
      {loading ? "Loading..." : "Click Me"}
    </motion.button>
    
  );
};

export default LoadingEffect;
