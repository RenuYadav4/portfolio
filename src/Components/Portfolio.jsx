import React, { useEffect, useRef, useState } from 'react'
import CircularProgress from './CurcleProgress';
import { IoSettingsOutline } from "react-icons/io5";
import SkillsIcons from './SkillsIcon';
import SocialMedia from './SocialMedia';
import StatusBar from './StatusBar';
import Projects from './Projects';
import About from './About';
import Experience from './Experience';
import { motion } from "framer-motion";
import Skilltree from './Skilltree';
import RightStatus from './RightStatus';





const Portfolio = () => {
    const [showSeason, setShowSeason] = useState(false);
    const [bgColor, setBgColor] = useState("#DBBFDB");
    const [lightColor, setLightColor] = useState("#DAB1DA")
    const [status, setStatus] = useState("About");
    const [rightBg, setRightBg] = useState("bg-white");
    const [rightBg1, setRightBg1] = useState("bg-white");
    const [rightBg2, setRightBg2] = useState("bg-white");
    const [rightBg3, setRightBg3] = useState("bg-white");

    
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    // working on status bar
    useEffect(() => {
        const scrollContainer = document.getElementById('centre');
        const handleScroll = () => {
            if (!scrollContainer) return;
            const scrollY = scrollContainer.scrollTop;
            const aboutHeight = window.innerHeight * 0.6;
            const projectHeight = window.innerHeight * 1;
            const skillsHeight = window.innerHeight * 0.8;
            const experienceHeight = window.innerHeight * 0.8;

            if (scrollY < aboutHeight) {
                setStatus("About");
                setRightBg("#E2E8F0");
                setRightBg1("bg-white");
                setRightBg2("bg-white");
                setRightBg3("bg-white");
            }
            else if (scrollY >= aboutHeight && scrollY < aboutHeight + projectHeight) {
                setStatus("Project");
                setRightBg1("#E2E8F0");
                setRightBg("bg-white");
                setRightBg2("bg-white");
                setRightBg3("bg-white");
            }
            else if (scrollY >= aboutHeight + projectHeight && scrollY < aboutHeight + projectHeight + skillsHeight) {
                setStatus("Skills");
                setRightBg2("#E2E8F0");
                setRightBg("bg-white");
                setRightBg1("bg-white");
                setRightBg3("bg-white");

            }
            else {
                setStatus("Experience");
                setRightBg3("#E2E8F0");
                setRightBg2("bg-white");
                setRightBg1("bg-white");
                setRightBg("bg-white");

            }
        }
        const handleResize = () => {
            handleScroll(); // Recalculate on resize
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    const handleClick = (season) => {
        setBgColor(season.color);
        setLightColor(season.light);
    }
    return (

        <main className='flex flex-col justify-center items-center md:bg-[#DBBFDB] lg:bg-[#DBBFDB] h-screen w-screen' style={{ background: bgColor }}>
            <div className=' text-2xl bg-[#fff] rounded-full h-8 w-8 flex justify-center items-center  mt-[-20px] md:ml-190 mb-2 lg:ml-410 shadow-[0_6px_6px_rgba(0,0,0,0.2)] '>
                <button className='cursor-pointer'
                    onClick={() => { setShowSeason(!showSeason) }}>
                    <IoSettingsOutline />
                </button>
            </div>
            <div className='md:px-5 md:flex md:justify-center md:items-center h-[90vh] w-[95vw] md:bg-slate-100 md:rounded-sm md:shadow-md shadow-[#6e6e6e]'>

                {/* left */}
                <div className='h-[10%] w-[10%] mx-5 md:w-[25%] md:h-[91%]  md:bg-slate-200 md:shadow-md'>
                    <div className='flex p-7'>
                        <img
                            className='shadow-[0_4px_6px_rgba(0,0,0,0.2)] lg:ml-9 rounded-sm md:h-25 md:w-27 lg:h-50 lg:w-52 '
                            src="https://img.freepik.com/free-vector/cartoon-businesswoman-working-with-laptop-gesture-pose-clip-art_40876-3410.jpg" alt="profile" />

                        {/* icons - Social media */}
                        <SocialMedia color={lightColor} />
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
                            <CircularProgress value={7.05} type="sgpa" color={lightColor} />
                        </div>
                        <div className=' px-3 mt-5 text-xs flex justify-between items-center bg-slate-300/50 font-serif inset-shadow-sm inset-shadow-purple-300 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.2)]'>
                            <div >
                                <h2 className='font-semibold'>Higher Secondary Education</h2>
                                <h3>GGIC,</h3>
                                <h4>Ghaziabad</h4>
                            </div>
                            <CircularProgress value={70} type="percentage" color={lightColor} />
                        </div>
                    </div>
                </div>

                {/* centre */}
                <div
                    id='centre'
                    className='hidden md:flex flex-col items-center mx-2 md:w-[70%] lg:w-[55%] md:h-[91%] md:bg-slate-200 shadow-md overflow-y-auto overflow-x-auto p-5'>

                    {/* Nav Status Bar */}
                    <StatusBar status={status} color={lightColor}/>

                    {/*logo About*/}
                        <About ref={aboutRef}/>


                    {/* Skills */}
                    <SkillsIcons color={lightColor}/>

                    {/* projects */}
                    <Projects ref={projectRef}/>

                    {/* Skill set */}
                    <Skilltree ref={skillsRef}/>

                    {/* Experience */}
                    <Experience ref={experienceRef}/>

                    {/* footer */}
                    <div className='mt-80 font-serif text-xs font-bold text-gray-600'>
                        <p>Thank's for reaching the bottom of this page. If you like what you see, let's connect and build something together.</p>
                        <a className='text-blue-400 hover:underline' href="public\RESUMEYADAV (1).pdf">resume</a>
                    </div>
                </div>

                {/* Right */}
                <RightStatus rightBg={rightBg} rightBg1={rightBg1} rightBg2={rightBg2} rightBg3={rightBg3}/>
            </div>

            {/* modal season */}
            {showSeason &&
                (
                    <div
                        onClick={() => { setShowSeason(!showSeason) }}
                        className='fixed inset-0 min-h-screen bg-opacity-1 backdrop-blur-[1px] z-40 '>

                    </div>
                )
            }
            {showSeason &&
                (
                    <div className='fixed top-15 right-[42px]  bg-transparent  z-50 overflow-hidden'>
                        <ul className='space-y-2'>
                            {[
                                { name: "Spring", color: "#F94994", light: "#FCBEAC" },
                                { name: "Winter", color: "#5C4FC0", light: "#90D5FF" },
                                { name: "Summer", color: "#97EC79", light: "#88E788" },
                                { name: "Autumn", color: "#FFC266", light: "#FFEE8C" },
                            ].map((season, index) => (
                                <li key={season.name}
                                    className='p-2 rounded-md cursor-pointer flex items-center gap-2'
                                    // onClick={() => { setBgColor(season.color) }}
                                    onClick={() => handleClick(season)}
                                >
                                    {season.name}
                                    <span className="w-6 h-6 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                                        <span
                                            className="w-4 h-4 rounded-full "
                                            style={{ backgroundColor: season.color }}
                                        ></span>
                                    </span>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                )
            }
        </main>
    )
}

export default Portfolio;