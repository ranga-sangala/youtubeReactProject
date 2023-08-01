import React from 'react'
import Button from './Button'
const btnList = ["All","Music","News","Data Sciences","Gaming","Cricket","Sales","Live","Podcasts","Travel Vlogs","Food","Movies"]
 const ButtonsList = () => {
  return (
    <div className='flex'>
     {btnList.map((button) => (<Button name={button}/>))}
    </div>
  )
}

export default ButtonsList
