import React from 'react'
import CircularProgress from './CurcleProgress';
import { IoSettingsOutline } from "react-icons/io5";
import SkillsIcons from './SkillsIcon';
import SocialMedia from './SocialMedia';
import StatusBar from './StatusBar';
import Projects from './Projects';


const Portfolio = () => {
    return (
        <>
            <main className='flex flex-col justify-center items-center md:bg-[#DBBFDB] lg:bg-[#DBBFDB] h-screen w-screen'>
                <div className='text-2xl bg-[#fff] rounded-full h-8 w-8 flex justify-center items-center cursor-pointer mt-[-20px] md:ml-190 mb-2 lg:ml-410 shadow-[0_6px_6px_rgba(0,0,0,0.2)] '>
                    <IoSettingsOutline />
                </div>
                <div className='md:px-5 md:flex md:justify-center md:items-center h-[90vh] w-[95vw] md:bg-slate-100 md:rounded-sm md:shadow-md shadow-[#6e6e6e]'>

                    {/* left */}
                    <div className='h-[10%] w-[10%] mx-2 md:w-[25%] md:h-[91%]  md:bg-slate-200 md:shadow-md'>
                        <div className='flex p-7'>
                            <img
                                className='shadow-[0_4px_6px_rgba(0,0,0,0.2)] lg:ml-9 rounded-sm md:h-25 md:w-27 lg:h-50 lg:w-52 '
                                src="https://img.freepik.com/free-vector/cartoon-businesswoman-working-with-laptop-gesture-pose-clip-art_40876-3410.jpg" alt="profile" />

                            {/* icons - Social media */}
                            <SocialMedia />

                        </div>

                        {/* Name and about */}
                        <h2 className='font-serif text-gray-700 text-2xl font-bold text-gray-750 mt-[-110px] md:mt-[-21px] ml-4 md:ml-17 lg:ml-41 md:text-xl'>Renu</h2>
                        <p className='text-sm hidden md:block text-wrap font-serif ml-3 mt-5 text-slate-800'>
                            Hey there! I am Renu, developing intuitive websites to master my web development skills.
                        </p>

                        {/* education */}
                        <div className='px-3'>
                            <div className='px-3 mt-5 text-xs flex justify-between items-center bg-slate-300/50 font-serif inset-shadow-sm inset-shadow-purple-300 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.2)]'>
                                <div>
                                    <h2 className='font-bold'>B.Tech</h2>
                                    <h3>JMS Institute,</h3>
                                    <h4>Ghaziabad</h4>
                                </div>
                                <CircularProgress value={7.05} type="sgpa" />
                            </div>
                            <div className=' px-3 mt-5 text-xs flex justify-between items-center bg-slate-300/50 font-serif inset-shadow-sm inset-shadow-purple-300 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.2)]'>
                                <div >
                                    <h2 className='font-semibold'>Higher Secondary Education</h2>
                                    <h3>GGIC,</h3>
                                    <h4>Ghaziabad</h4>
                                </div>
                                <CircularProgress value={70} type="percentage" />
                            </div>
                        </div>
                    </div>

                    {/* centre */}
                    <div className='hidden md:flex flex-col items-center mx-2 md:w-[60%] md:h-[91%] md:bg-slate-200 shadow-md overflow-y-auto overflow-x-auto p-5'>

                        {/* Nav Status Bar */}
                        <div className='fixed z-2 bg-[#fff] h-10 w-3/9 rounded-3xl flex  items-center justify-center inset-shadow-sm inset-shadow-purple-300
                         text-green-400 font-bold font-serif shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:bg-green-300 hover:text-[#fff] cursor-pointer flex-shrink-0'>
                            <StatusBar />
                        </div>

                        {/*logo About*/}
                        <div className='flex mt-30 lg:mt-40 ml-[-90px] lg:ml-[-590px] '>
                            <div className='h-12.5 w-12.5 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.2)]'>
                                <img src="src\assets\MyLogo.svg" alt="" />
                            </div>
                            <h2 className='m-3 text-xl font-serif'>Frontend Developer</h2>
                        </div>
                        <p className='md:text-sm font-serif mt-5 ml-5  text-gray-700'>
                            I am a Frontend developer getting in React.js and javaScript, specializing in building responsive and interactive applications. Passionate about modern web technologies, I focus on clean code and continuously adapt to industry trends.
                        </p>
                        <p className='font-serif font-bold text-gray-800 text-sm ml-[-100px] lg:ml-[-600px] mt-5 '>Bringing ideas to life with code!</p>

                        {/* Skills */}
                        <SkillsIcons />
                        <div>
                            <Projects />
                        </div>

                        {/* Skill set */}
                        <div className='mt-80 '>
                            <img src="src\assets\skillTree.svg" alt="" />
                        </div>

                        {/* Experience */}
                        <div className='bg-[#fff] rounded-sm shadow-2xl flex flex-col p-6 text-sm font-serif mt-80'>
                            <strong>Frontend Developer Intern</strong>
                            <a className='text-blue-400 hover:underline' href="https://softairtechnology.com/">SoftAir Technology</a>
                            <div>
                                <p>This was an oppurtunity to develop more skills and valueable Knowledge and Experience to work in a team, where I work on different major websites.</p>
                                <h2 className='mt-3 font-bold'>01/07/2024 - 24/09/2024</h2>
                            </div>
                        </div>
                        {/* footr */}
                        <div className='mt-80 font-serif text-xs font-bold text-gray-600'>
                            <p>Thank's for reaching the bottom of this page. If you like what you see, let's connect and build something together.</p>
                            <a className='text-blue-400 hover:underline' href="public\RESUMEYADAV (1).pdf">resume</a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='hidden md:block mx-2 md:w-[15%] md:h-[91%] md:bg-slate-200 shadow-md  '>
                        right
                    </div>
                </div>
            </main>
        </>
    )
}

export default Portfolio