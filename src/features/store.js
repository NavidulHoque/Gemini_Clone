import { configureStore } from "@reduxjs/toolkit";
import chatListSlice from "./chatListSlice";

export const store = configureStore({
    reducer: {
        ChatList: chatListSlice
    }
})