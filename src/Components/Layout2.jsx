import React from 'react'

import Head from './Head'
import Projects from './Projects'
import About from './About'
import SkillsIcons from './SkillsIcon'
import Experience from './Experience'
import Skilltree from './Skilltree'

const Layout2 = () => {
  return (
    <div className='p-3'>
        <Head/>
        <About />
        <SkillsIcons/>
        <Projects />
        <Skilltree/>
        <Experience/> 
    </div>
  )
}

export default Layout2