import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { TbBrandGmail } from "react-icons/tb";

const icons = [
    { id: 1, Component: IoLogoLinkedin, link: "https://www.linkedin.com/in/renu-yadav-60b82625b/", color: "text-blue-800" },
    { id: 2, Component: VscGithub, link: "https://github.com/RenuYadav4", color: "text-black" },
    { id: 3, Component: TbBrandGmail, link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhJnCVZGRRsXQjgQCkRCLPPmKBKFbWxnSdNqcfqXrVfPMrBflPthXPDKBmdKWqkfxRxB", color: "text-red-600" }
];

const Demo = () => {
    return (
        <main className='flex justify-center items-center md:bg-[#DBBFDB] lg:bg-[#DBBFDB] h-screen w-screen'>
            <div className='md:px-5 md:flex md:justify-center md:items-center h-[90vh] w-[95vw] md:bg-slate-100 md:rounded-sm md:shadow-md shadow-[#6e6e6e]'>

                {/* Left Section */}
                <div className='h-[10%] w-[10%] flex mx-2 md:w-[25%] md:h-[91%] md:bg-slate-200 p-7 md:shadow-md'>
                    <img className='lg:ml-9 rounded-sm md:h-27 md:w-27 lg:h-53 lg:w-52'
                        src="https://img.freepik.com/free-vector/cartoon-businesswoman-working-with-laptop-gesture-pose-clip-art_40876-3410.jpg"
                        alt="profile" />

                    {/* Icons - Social Media */}
                    <div className='px-60 md:px-3 lg:px-15 lg:py-13'>
                        {icons.map((icon, index) => {
                            const IconComponent = icon.Component;
                            return (
                                <motion.div
                                    key={icon.id}
                                    initial={{ y: "-100vh", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.3,
                                        ease: "easeOut",
                                    }}
                                    className={`mt-3 flex justify-center items-center h-8 w-8 rounded-full bg-slate-100 shadow-md ${icon.color}`}
                                >
                                    <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                        <IconComponent size={24} />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Middle Section */}
                <div className='hidden md:flex mx-2 md:w-[60%] md:h-[91%] md:bg-slate-200 shadow-md overflow-y-auto overflow-x-auto'>
                    {/* Content */}
                </div>

                {/* Right Section */}
                <div className='hidden md:block mx-2 md:w-[15%] md:h-[91%] md:bg-slate-200 shadow-md'>
                    right
                </div>

            </div>
        </main>
    );
};

export default Demo;
