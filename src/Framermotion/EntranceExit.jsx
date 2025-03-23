import { motion } from "framer-motion";

const FadeInButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Fade In
    </motion.button>
  );
};

export default FadeInButton;
