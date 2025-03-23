import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, ease: "easeOut" }}
            className='h-[80vh] bg-[#fff] rounded-sm shadow-2xl flex flex-col p-6 text-sm font-serif mt-80'>
            <strong>Frontend Developer Intern</strong>
            <a className='text-blue-400 hover:underline' href="https://softairtechnology.com/">SoftAir Technology</a>
            <div>
                <p>This was an oppurtunity to develop more skills and valueable Knowledge and Experience to work in a team, where I work on different major websites.</p>
                <h2 className='mt-3 font-bold'>01/07/2024 - 24/09/2024</h2>
            </div>
        </motion.div>
    )
}

export default Experience