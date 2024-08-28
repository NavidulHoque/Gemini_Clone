/* eslint-disable react/prop-types */
import { FaRegMessage } from "react-icons/fa6";

const ChatInfo = ({chatInfo, handleClickingRecentChat, isDisabled}) => {
    return (
        <div onClick={() => isDisabled ? "" : handleClickingRecentChat(chatInfo)} className="flex items-center gap-2 hover:bg-slate-200 p-3 rounded-3xl cursor-pointer">

            <FaRegMessage />

            <p>{chatInfo.chatInfo.slice(0,25)}...</p>

        </div>
    )
}

export default ChatInfo
