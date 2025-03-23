const SlideInButton = () => {
    return (
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Slide In
      </motion.button>
    );
  };
  
  export default SlideInButton;
  