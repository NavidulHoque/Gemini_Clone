/* eslint-disable react/prop-types */
import { BarLoader } from "react-spinners"
import avatar from "../../assets/avatar.png"
import gemini from "../../assets/gemini.png"
import DOMPurify from 'dompurify';

const Chat = ({showMyMessage, showGeminiResults, loading}) => {
    //for security purpose
    const sanitizedHtml = DOMPurify.sanitize(showGeminiResults)
    return (
        <div className="flex flex-col gap-8 overflow-y-auto">

            <div className="flex items-center space-x-3">

                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">

                    <img src={avatar} alt="avatar" className="w-full h-full" />

                </div>

                <p className="text-[18px]">{showMyMessage}</p>

            </div>

            <div className="flex items-center space-x-3">

                <div className="w-[40px] h-[40px] self-start">

                    <img src={gemini} alt="gemini" className="w-full h-full" />

                </div>

                {loading ? (
                    <div className="flex flex-col gap-3 w-[90%]">

                        <BarLoader color="#9ed7ff" width="100%" height={10} />
                        <BarLoader color="#9ed7ff" width="100%" height={10} />
                        <BarLoader color="#9ed7ff" width="100%" height={10} />

                    </div>
                ) : (
                    <p 
                        className="w-[85%] text-justify" 
                        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                    >
                        
                    </p>
                )}

            </div>

        </div>
    )
}

export default Chat
