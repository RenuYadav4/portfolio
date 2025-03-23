import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

const Animation = () => {
    const list = { hidden: { opacity: 0 }, visible: { 
        opacity: 1,            // When visible, the list appears
        transition: { staggerChildren: 0.3 } // Adds delay between each child animation
      } }
    const item = { hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }  
    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
      )
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                initial={{ x: 0, opacity: 0 }}
                animate={{ x:100,y:100, opacity:1 }}
                dragConstraints={{ left: -50, right: 100 }}
                // initial={{opacity: 0}}
                // whileInView={{opacity:1}}
                className='h-60 w-90 border-4 border-amber-900 bg-teal-400'>
                <p className='text-2xl text-red-500'>My name is renu</p>
                <p className='text-3xl border-y-indigo-900'>I have done b.tech</p>
            </motion.div>

            {/* not visible */}
            <motion.ul initial="hidden" animate="visible" variants={list}>
                <motion.li variants={item} />
                <motion.li variants={item} />
                <motion.li variants={item} />
            </motion.ul>

            <motion.div
                drag="x" style={{ x, opacity,background }}
                onClick={() => animate(".boxes", { opacity: 0 })}
            >
                renu
            </motion.div>

            
        </>

    )
}

export default Animation