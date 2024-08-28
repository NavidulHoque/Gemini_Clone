import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ChatList: JSON.parse(localStorage.getItem("ChatList")) || []
}

const chatListSlice = createSlice({
    name: "ChatList",
    initialState,
    reducers:{
        addNewChat: (state, action) => {
            state.ChatList.push(action.payload)
            localStorage.setItem("ChatList", JSON.stringify(state.ChatList))
        },
        deleteEntireChat: (state) => {
            state.ChatList = []
            localStorage.setItem("ChatList", JSON.stringify(state.ChatList))
        }
    }
})

export const { addNewChat, deleteEntireChat } = chatListSlice.actions
export default chatListSlice.reducer