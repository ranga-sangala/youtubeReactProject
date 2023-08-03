import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET_LIVE_CHAT } from "./config";

const chatSlice = createSlice({
    name:"chat",
    initialState:{ 
          messages:[]
    },
    reducers:{
        addMessage:(state,action) =>{
            state.messages.splice(OFF_SET_LIVE_CHAT,1)
            state.messages.unshift(action.payload)
        }
    }
})  

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer