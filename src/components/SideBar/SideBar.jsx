/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatInfo from "./ChatInfo";
import { deleteEntireChat } from "../../features/chatListSlice";

const SideBar = ({handleClickingRecentChat, setHasChattingStarted, isDisabled}) => {
  const [isExtended, setIsExtended] = useState(false)
  const chatList = useSelector(state => state.ChatList.ChatList)
  const dispatch = useDispatch()

  function handleCreatingNewChat() {
    dispatch(deleteEntireChat())
    setHasChattingStarted(false)
  }

  return (

    <div className="flex flex-col gap-10 bg-[#f0f4f9] py-[25px] px-[15px] overflow-y-auto">

      <FaBars
        className="w-[22px] h-[22px] cursor-pointer"
        onClick={() => setIsExtended((prev) => !prev)}
      />

      <div onClick={() => isDisabled ? "" : handleCreatingNewChat()} className="flex items-center gap-2 bg-[#e6eaf1] text-[14px] text-slate-500 py-[10px] px-[15px] rounded-full cursor-pointer">

        <GoPlus className="w-[30px] h-[30px]" />

        {isExtended && <p>New Chat</p>}

      </div>

      {isExtended && (

        <div className="flex flex-col gap-4">

          <p>Recent</p>

          {chatList.map(chatInfo => (
            <ChatInfo key={chatInfo.id} chatInfo={chatInfo} handleClickingRecentChat={handleClickingRecentChat} isDisabled={isDisabled} />
          ))}

        </div>
      )}

    </div>
  )
}

export default SideBar
