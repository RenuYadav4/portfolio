import React from 'react'
import { motion } from "framer-motion";

import Head from './Head'
import Projects from './Projects'
import About from './About'
import SkillsIcons from './SkillsIcon'
import Experience from './Experience'
import Skilltree from './Skilltree'

const Layout2 = () => {
  return (
    <div className='p-3'>
      <Head />
      <About />
      <SkillsIcons />
      <Projects />
      <Skilltree />
      <Experience />
      {/* footer */}
      <motion.div
        className='mt-80 font-serif text-xs font-bold text-gray-600'
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: -100, opacity: 1 }}
        transition={{ type: "tween", duration: 1, ease: "easeOut" }}
      >

        <p>Thank's for reaching the bottom of this page. If you like what you see, let's connect and build something together.</p>
        <a className='text-blue-400 hover:underline' href="public\RESUMEYADAV (1).pdf">resume</a>
      </motion.div>
    </div>
  )
}

export default Layout2