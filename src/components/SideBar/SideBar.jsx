/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatInfo from "./ChatInfo";
import { deleteEntireChat } from "../../features/chatListSlice";

const SideBar = ({ handleClickingRecentChat, setHasChattingStarted, isDisabled, isExtendedInMobile, setIsExtendedInMobile }) => {
  const windowInnerWidth = window.innerWidth
  const [isExtended, setIsExtended] = useState(windowInnerWidth < 768 ? true : false)
  const chatList = useSelector(state => state.ChatList.ChatList)
  const dispatch = useDispatch()

  function handleCreatingNewChat() {
    dispatch(deleteEntireChat())
    setHasChattingStarted(false)
  }

  return (

    <div className={`flex flex-col gap-10 bg-[#f0f4f9] py-[25px] px-[15px] transition-all duration-200  ${windowInnerWidth < 768 ? "fixed left-0 top-0 w-[50%] h-full z-10" : ""} ${(!isExtendedInMobile && windowInnerWidth < 768) ? "-translate-x-full" : "translate-x-0"}`}>

      <FaBars
        className="w-[22px] min-h-[22px] cursor-pointer"
        onClick={() => windowInnerWidth < 768 ? setIsExtendedInMobile(false) : setIsExtended((prev) => !prev)}
      />

      <div onClick={() => isDisabled ? "" : handleCreatingNewChat()} className="flex items-center gap-2 bg-[#e6eaf1] text-[14px] text-slate-500 py-[15px] px-[15px] rounded-full cursor-pointer">

        <GoPlus className="w-[30px] h-[30px]" />

        {isExtended && <p>New Chat</p>}

      </div>

      {isExtended && (

        <div className="flex flex-col gap-4">

          <p>Recent</p>

          <div className="h-[480px] overflow-y-auto space-y-3">

            {chatList.map(chatInfo => (
              <ChatInfo key={chatInfo.id} chatInfo={chatInfo} handleClickingRecentChat={handleClickingRecentChat} isDisabled={isDisabled} />
            ))}

          </div>

        </div>
      )}

    </div>
  )
}

export default SideBar
