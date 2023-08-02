import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu}   from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/config'
import { cacheResults } from '../utils/searchSlice'

 
const Header = () => {
    const [searchQuery,setSearchQuery] = useState("")
    const [suggestions,setSuggestions] = useState([])
    const [showSuggestions,setShowSuggestions] = useState(false)
    const dispatch = useDispatch();

    const searchCache = useSelector(store => store.search);
    const toggleMenuHandler = () => {
        
        dispatch(toggleMenu()); 
    };

    useEffect(() =>{

      const timer = setTimeout(() => {
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery])
        }else{
          getSearchSuggestions()  
        }
        
      }, 200);
      
      return() =>{
        clearTimeout(timer)
      }
    },[searchQuery])
  
       const getSearchSuggestions = async() =>{
           console.log("api call- "+searchQuery)
           const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
           const json = await data.json()
           setSuggestions(json[1])

           dispatch(cacheResults({
            [searchQuery]:json[1],
           }))
       }

  return ( 
    <div className='grid grid-flow-col p-3 m-2 shadow-sm'>
      <div className='flex col-span-1'>
        <img onClick={()=> toggleMenuHandler()} className='h-10 cursor-pointer ' alt="menu" src="https://simpleweblearning.s3.us-west-2.amazonaws.com/2021/06/09000145/hamburger_menu1.gif"/>
     <a href="/"><img  className='h-10 px-4' alt="youtube-logo" src='https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png'/></a>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>{
          setSearchQuery(e.target.value)
        }}
        onFocus={() =>{
          setShowSuggestions(true)
        }} 
        onBlur={() =>{
          setShowSuggestions(false)
        }}/>
        <button className='border border-gray-500 p-2 bg-gray-300 rounded-r-full'><i className=" px-2 bi bi-search"></i></button>
        {showSuggestions && (<div className='absolute bg-white px-1 py-1 w-[30rem] shadow-lg border border-gray-100'>
          <ul>
            {suggestions.map((suggestion) =>
            <li key={suggestion} className='px-2 py-3 shadow-sm hover:bg-gray-300'><i className=" px-2 bi bi-search"></i>{suggestion}</li>
            )}
          </ul>
        </div>)}
      </div>
      <div className='col-span-1'>
        <img className='h-10' alt="user-icon" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
      </div>
    </div>
  )
}

export default Header
