import React,{useEffect,useState} from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';  
import { generateRandonName,generateRandomString } from '../utils/helper';

const LiveChat = () => {
    const [liveMsg,setLiveMsg] = useState("")
    const dispatch = useDispatch();

    const chatMsgs = useSelector((store) => store.chat.messages )

    useEffect(()=>{
       const interval =  setInterval(()=>{
           dispatch(addMessage({
            name:generateRandonName(),
            message:generateRandomString(20)
           }))
        },1500) 

        return() => clearInterval(interval)
    })
  return (
    <>
    <div className='flex ml-2 p-2 border border-black-300 w-full h-[400px] overflow-scroll flex-col-reverse'>
       {chatMsgs.map((chat,index) => <ChatMessages key={index} name={chat.name} message={chat.message}/>)}
    </div>
    <form className='w-full border border-black' onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
         name:"Lakshmi Ranga",
         message:liveMsg
      }))
      setLiveMsg('')
    }}
    > 
    <input className='w-96 p-2 m-1' type="text" value={liveMsg}
    onChange={(event) =>{
         setLiveMsg(event.target.value)
    }} 
    /> 
    <button className='px-2 mx-2 bg-green-500'>send</button>
    </form>
   
    </> 
  )
}

export default LiveChat
