import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleMenu}   from '../utils/appSlice'
 
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        
        dispatch(toggleMenu()); 
    };

  return ( 
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=> toggleMenuHandler()} className='h-10 cursor-pointer ' alt="menu" src="https://simpleweblearning.s3.us-west-2.amazonaws.com/2021/06/09000145/hamburger_menu1.gif"/>
     <a href="/"><img  className='h-10 px-4' alt="youtube-logo" src='https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png'/></a>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' type="text" />
        <button className='border border-gray-500 p-2 bg-gray-300 rounded-r-full'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-10' alt="user-icon" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
      </div>
    </div>
  )
}

export default Header
