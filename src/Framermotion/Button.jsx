import React from "react";
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <div className="flex justify-center h-screen bg-linear-to-l from-[#2e2e2f] to-[#9e3568]">
            <motion.button
                // // animate={{ x: ["0%", "100%", "0%"] }} // Moves left to right and back
                // // transition={{ duration: 4, repeat: Infinity, ease: "linear" }} // Constant speed
                // // initial={{ y: -100, x: -100, opacity: 0 }}
                // // animate={{ x: 10, y: 10, opacity: 1 }}
                // initial={{ scale: 0.5 }}
                // animate={{ scale: 1 }}
                // // whileHover={{scale:1.1}}
                // whileTap={{ rotateY: 360}}
                // // transition={{duration:0.2, ease: "easeOut"}}
                // whileHover={{ scale: 1.2,rotateY: 180 }}
                // transition={{
                //     scale: { duration: 0.4, ease: "easeOut" },
                //     rotateY: { duration: 0.5, ease: "easeInOut" }, 
                //     // rotate: { duration: 0.6, ease: "easeInOut" },
                //     x: { duration: 0.3, ease: "easeOut" },
                //     y: { duration: 0.3, ease: "easeOut" }
                // }}
                initial={{ scale: 0.5, x: -50, y: -50, rotate: 0, rotateY: 0 }}
                animate={{ scale: 1, x: 0, y: 0, rotate: 0, rotateY: 0 }}
                whileHover={{ scale: 1.2, rotate: 15, rotateY: 180, x: 10, y: -10  }} // 3D diagonal flip
                whileTap={{ rotate: 50, rotateY: 360, x: -10, y: 10 }} // Full 3D spin
                dragConstraints={{ left: -50, right: 100 }}
                transition={{ 
                    scale: { duration: 0.6, ease: "easeOut" }, 
                    rotate: { duration: 0.5, ease: "easeInOut" }, 
                    rotateY: { duration: 0.5, ease: "easeInOut" }, 
                    x: { duration: 0.3, ease: "easeOut" },
                    y: { duration: 0.3, ease: "easeOut" }
                }}
                drag="x"
                className="hover:bg-transparent hover:border-1 hover:border-gray-200 hover:text-gray-200 font-serif font-bold text-gray-800 bg-gray-300 mt-100 h-15 w-30 rounded-xl cursor-pointer shadow-2xl hover:shadow-2xl hover:shadow-amber-200"

            >
                click me
            </motion.button>
        </div>
    );
};

export default Button;
