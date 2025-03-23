import React from 'react'
import { motion } from "framer-motion";

const Skilltree = () => {
    return (
        <motion.div
            className='mt-80 md:h-[80vh]'
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, ease: "easeOut" }}
        >
            <img src="src\assets\skillTree.svg" alt="" />
        </motion.div>
    )
}

export default Skilltree