import React from "react";
import {motion} from "framer-motion";

const GlowButton = () => {
    return (
      <motion.button
        animate={{ boxShadow: ["0px 0px 5px #ff5722", "0px 0px 20px #ff5722"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Glowing
      </motion.button>
    );
  };
  
  export default GlowButton;
  