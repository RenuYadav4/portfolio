import React from 'react';
import { motion } from "framer-motion";
import { IoLogoLinkedin } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc';
import { TbBrandGmail } from 'react-icons/tb';


const icons = [
    { id: 1, Component: IoLogoLinkedin, link: "https://www.linkedin.com/in/renu-yadav-60b82625b/", color: "text-blue-800", margin: "mt-[-6px]" },
    { id: 2, Component: VscGithub, link: "https://github.com/RenuYadav4", color: "text-black", margin: "mt-3" },
    { id: 3, Component: TbBrandGmail, link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhJnCVZGRRsXQjgQCkRCLPPmKBKFbWxnSdNqcfqXrVfPMrBflPthXPDKBmdKWqkfxRxB", color: "text-black", margin: "mt-3.5" }
];

const SocialMedia = ({ color }) => {
    return (
        <div className='px-58 md:px-2 lg:px-15 lg:py-13'>
            {icons.map((icon, index) => (
                <motion.div
                    className={`flex justify-center items-center h-8 w-8  rounded-full bg-slate-100 text-xl  ${icon.color} ${icon.margin} shadow-[0_4px_6px_rgba(0,0,0,0.2)] `}
                    style={{ boxShadow: `inset 0 2px 3px ${color}` }}
                    key={icon.id}
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: index * 0.3,
                        ease: "easeOut",
                    }}
                >
                    <a href={icon.link} target="_blank" rel="noopener noreferrer">
                        {<icon.Component />}
                    </a>
                </motion.div>
            ))}
        </div>
    )
}

export default SocialMedia;