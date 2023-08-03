import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center'>
      <img className='h-10' alt="user-icon" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" />
      <span className='font-bold px-3 '>
        {name}
      </span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessages
 