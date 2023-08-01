import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {
     const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

     if(!isMenuOpen) return null;

  return (
    <div className='w-100 p-5 shadow-lg '>
      <ul className='pt-5'>
       <li><Link to="/">Home</Link></li>
       <li>Shorts</li>
       <li>Subscriptions</li>
      </ul>
      <ul className='pt-5'>
       <li>Library</li>
       <li>History</li>
       <li>Watch Later</li>
       <li>Your Videos</li>
       <li>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar
