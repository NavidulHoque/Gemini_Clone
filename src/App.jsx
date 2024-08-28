import { useState } from "react";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import runChat from "./config/gemini";
import optimizeResponse from "./functions/optimizeResponse";

const App = () => {
  const [hasChattingStarted, setHasChattingStarted] = useState(false);
  const [showGeminiResults, setShowGeminiResults] = useState("");
  const [showMyMessage, setShowMyMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  
  async function handleClickingRecentChat(chatInfo) {

    setIsDisabled(true)

    setShowGeminiResults("")

    setLoading(true)

    setHasChattingStarted(true)

    setShowMyMessage(chatInfo.chatInfo)

    const response = await runChat(chatInfo.chatInfo)

    optimizeResponse(response, setShowGeminiResults, setIsDisabled)

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex box-border font-outfitRegular">
      <SideBar handleClickingRecentChat={handleClickingRecentChat} setHasChattingStarted={setHasChattingStarted} isDisabled={isDisabled} />
      <Main
        hasChattingStarted={hasChattingStarted}
        setHasChattingStarted={setHasChattingStarted}
        showGeminiResults={showGeminiResults}
        setShowGeminiResults={setShowGeminiResults}
        showMyMessage={showMyMessage}
        setShowMyMessage={setShowMyMessage}
        loading={loading}
        setLoading={setLoading}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
};

export default App;
