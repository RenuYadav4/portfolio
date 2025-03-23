import React, { useState } from "react";
import { motion } from 'framer-motion';
import Button from "./Button";

const Ripple = () => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const x = e.nativeEvent.offsetX;   //position relative to the target event
        const y = e.nativeEvent.offsetY;
        setRipples([...ripples, { x, y, id: Date.now() }]);
        setTimeout(() => setRipples((prev) => prev.slice(1)), 600);
      };
    return (
        <button
        onClick={handleClick}
            className="relative overflow-hidden active:scale-90 bg-blue-500 text-white px-4 py-2 rounded"
        >
            click me
            {ripples.map((ripple) => (
                <motion.span
                // key={ripple.id}
                    initial={{ opacity: 0.5, scale: 0 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bg-pink-500 rounded-full"
                    style={{
                        width: "40px",
                        height: "40px",
                        top: ripple.y - 20 + "px",
                        left: ripple.x - 20 + "px",
                    }}
                />
            ))}

        </button>
    );
};

export default Ripple;
