import React from 'react'
import logo from '../assets/codepen-logo.png'
const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between text-white pr-7 bg-slate-700'>
      <div className='flex flex-row items-center gap-3 pl-4 py-[5px] '>
        <img className='w-10 h-10 rounded-full' src={logo} alt="" />
        <p className='font-sans text-xl font-medium'> <span className='text-red-500'>My</span><span className='text-cyan-500' >Code</span><span className='text-yellow-500'>Pen</span></p>

      </div>
      <button onClick={()=>window.location.reload()} className='px-4 py-[3px] text-lg rounded-full bg-cyan-500 hover:bg-cyan-600'>Reset</button>
    </div>

  )
}

export default Header
