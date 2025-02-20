import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GiSkills } from 'react-icons/gi'
import { GrProjects } from 'react-icons/gr'
import { MdOutlineWorkHistory } from 'react-icons/md'

const RightStatus = ({rightBg, rightBg1,rightBg2,rightBg3}) => {
    return (
        <div className='hidden md:block mx-5 md:w-[15%] md:h-[91%] md:bg-slate-200 shadow-md  '>
            <div className='flex h-full flex-col items-center justify-center gap-6'>
                <div className={`flex flex-col justify-center items-center text-gray-400 text-4xl inset-shadow-sm inset-shadow-gray-500 h-[13%] lg:h-[20%] w-[84%] ${rightBg}`}>
                    <CgProfile />
                    <h4 className='mt-2 text-xs font-serif font-semibold'>About</h4>
                </div>
                <div className={`flex flex-col justify-center items-center text-gray-400 text-4xl inset-shadow-sm inset-shadow-gray-500 h-[13%] lg:h-[20%] w-[84%] ${rightBg1}`}>
                    <GrProjects />
                    <h4 className='mt-2 text-xs font-serif font-semibold'>Projects</h4>
                </div>
                <div className={`flex flex-col justify-center items-center text-gray-400 text-4xl inset-shadow-sm inset-shadow-gray-500 h-[13%] lg:h-[20%] w-[84%] ${rightBg2}`}>
                    < GiSkills />
                    <h4 className='mt-2 text-xs font-serif font-semibold'>Skills</h4>
                </div>
                <div className={`flex flex-col justify-center items-center text-gray-400 text-4xl inset-shadow-sm inset-shadow-gray-500 h-[13%] lg:h-[20%] w-[84%] ${rightBg3}`}>
                    <MdOutlineWorkHistory />
                    <h4 className='mt-2 text-xs font-serif font-semibold'>Experience</h4>
                </div>
            </div>
        </div>)
}

export default RightStatus