import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FallingFlowers = ({ theme }) => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Generate random flowers
    const newFlowers = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      duration: Math.random() * 5 + 3, // Random fall duration
      size: Math.random() * 30 + 20, // Random size
    }));
    setFlowers(newFlowers);
  }, [theme]); // Regenerate flowers when theme changes

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {flowers.map(({ id, left, duration, size }) => (
        <motion.img
          key={id}
          src={`/flowers/${theme}-flower.png`} // Flower image based on theme
          alt="Flower"
          initial={{ y: "-10%", opacity: 1 }}
          animate={{ y: "110%", opacity: 0.8 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingFlowers;
