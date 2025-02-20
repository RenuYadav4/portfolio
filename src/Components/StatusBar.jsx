import React from 'react'

const StatusBar = ({ status, color }) => {

  return (
    <>
      <div className='fixed z-2 bg-[#fff] h-10 w-3/9 rounded-3xl flex  items-center justify-center text-gray-400 font-bold font-serif  hover:bg-green-300 hover:text-[#fff] cursor-pointer flex-shrink-0'
        style={{ boxShadow: `0 4px 6px rgba(0,0,0,0.2), inset 0 2px 3px ${color}` }}
      >
        <h1>{status}</h1>
      </div>
    </>
  )
}

export default StatusBar