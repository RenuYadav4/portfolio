import React from 'react'

const About = () => {
    return (
        <div className='mt-30 h-80 lg:mt-40 ml-[-10px]  lg:ml-[5px]'>
            <div className='flex'>
                <div className='ml-3 h-12.5 w-12.5 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.2)]'>
                    <img src="src\assets\MyLogo.svg" alt="" />
                </div>
                <h2 className='m-3 text-xl font-serif'>Frontend Developer</h2>
            </div>
            <p className='md:text-sm font-serif mt-5 ml-5  text-gray-700'>
                I am a Frontend developer getting in React.js and javaScript, specializing in building responsive and interactive applications. Passionate about modern web technologies, I focus on clean code and continuously adapt to industry trends.
            </p>
            <p className='font-serif font-bold text-gray-800 text-sm ml-[18px]  mt-5 '>Bringing ideas to life with code!</p>
        </div>)
}

export default About