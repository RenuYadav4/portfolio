import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    link: "https://dashboard-rho-six-64.vercel.app/",
    description:
      "An Admin Dashboard provides functionality of tracking data records with various Graph types using @Syncfusion",
    skills: ["React", "Tailwind", "Syncfusion"]
  },
  {
    id: 3,
    name: "3D Portfolio",
    link: "https://3d-portfolio-mu-kohl.vercel.app/",
    description:
      "I have built a portfolio with 3D functionality and full responsiveness.",
    skills: ["React", "Three.js", "Tailwind", "framer motion"]
  },
  {
    id: 3,
    name: "Tiptap Editor",
    link: "https://tiptap-black.vercel.app/",
    description:
      "Here's a small but powerful Tiptap extension using React and Tailwind CSS, featuring essential formatting tools along with a highlight feature.",
    skills: ["React", "Tailwind"]
  },
 
];

const Projects = () => {

  

  return (
    <div className="mt-[170px] h-200 flex flex-col items-center flex-wrap">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative w-full px-4 pt-4 pb-12 mt-[70px] text-xs bg-white font-serif 
                      rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.3)] 
                     transform transition duration-300 hover:scale-105"
        >
           <div className='flex flex-wrap'>
           <p className="text-gray-700">{project.description}</p>
           </div>

          {/* skills used */}
          <div className='flex mt-7 '>
            {project.skills.map((skill, index) => (
              <div key={index} className='p-1 m-2 bg-slate-200 rounded-sm'>{skill}</div>
            ))}
          </div>

         {/* Bottom Navbar */}
         <div className="absolute bottom-0 left-0 w-full bg-gray-500 text-white p-2 rounded-b-lg flex justify-between items-center">
            <p className="text-sm font-semibold">{project.name}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">
              Visit
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects