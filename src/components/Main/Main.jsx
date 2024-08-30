/* eslint-disable react/prop-types */
import Navbar from "./Navbar"
import { LuSendHorizonal } from "react-icons/lu";
import Chat from "./Chat";
import Introductory from "./Introductory";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewChat } from "../../features/chatListSlice";
import runChat from "../../config/gemini";
import optimizeResponse from "../../functions/optimizeResponse";

const Main = ({
    hasChattingStarted,
    setHasChattingStarted,
    showGeminiResults,
    setShowGeminiResults,
    showMyMessage,
    setShowMyMessage,
    loading,
    setLoading,
    setIsDisabled,
    isDisabled,
    setIsExtendedInMobile
}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("");
    const chatList = useSelector(state => state.ChatList.ChatList)

    async function handleSendMessage() {
        
        setIsDisabled(true)

        setShowGeminiResults("")

        setInput("")
    
        setLoading(true);
    
        setHasChattingStarted(true);
    
        setShowMyMessage(input);

        if (!chatList.find(chatInfo => chatInfo.chatInfo === input.trim())) {
            dispatch(addNewChat({ id: Date.now().toString(32), chatInfo: input }));
        }
    
        const response = await runChat(input)

        optimizeResponse(response, setShowGeminiResults, setIsDisabled)
    
        setLoading(false);
    }

    async function handleSendingCardMessage(message) {

        setIsDisabled(true)

        setShowGeminiResults("")
    
        setLoading(true);
    
        setHasChattingStarted(true);
    
        setShowMyMessage(message)

        if (!chatList.find(chatInfo => chatInfo.chatInfo === message)) {
            dispatch(addNewChat({ id: Date.now().toString(32), chatInfo: message }))
        }
    
        const response = await runChat(message)

        optimizeResponse(response, setShowGeminiResults, setIsDisabled)
    
        setLoading(false)
    }

    return (
        <div className="grow min-h-screen pb-[20px]">

            <Navbar setIsExtendedInMobile={setIsExtendedInMobile} />

            <div className="flex flex-col min-h-[78vh] md:w-[60vw] w-[80vw] mx-auto pt-12 pb-6">

                {!hasChattingStarted ? (
                    <Introductory handleSendingCardMessage={handleSendingCardMessage} />
                ) : (
                    <Chat showMyMessage={showMyMessage} showGeminiResults={showGeminiResults} loading={loading} />
                )}

            </div>

            <div onKeyDown={(e) => e.key === "Enter" ? handleSendMessage() : ""} className="flex items-center justify-between bg-[#f0f4f9] sticky bottom-[10px] sm:w-[65vw] w-[90vw] mx-auto py-[10px] px-[20px] rounded-3xl">

                <input
                    type="text"
                    placeholder="Enter a prompt here"
                    className="grow bg-transparent outline-none text-[18px]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isDisabled}
                />

                <LuSendHorizonal onClick={() => (isDisabled || input.length === 0) ? "" : handleSendMessage()} className="w-[25px] h-[25px] cursor-pointer" />

            </div>

            <p className="text-[13px] text-center font-light pt-[11px]">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>

        </div>
    )
}

export default Main
