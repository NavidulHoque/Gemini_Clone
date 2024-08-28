/* eslint-disable react/prop-types */
import { FaCompass } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";

const Introductory = ({ handleSendingCardMessage }) => {

  const card1Message = "Suggest beautiful places to see on an upcoming road trip";
  const card2Message = "Briefly summarize this concept: urban planning";
  const card3Message = "Brainstorm team bonding activities for our work retreat";
  const card4Message = "Tell me about React js and React native";

  return (
    <>
      <span className="bg-gradient-text bg-clip-text text-transparent text-[56px] font-outfitMedium">
        Hello, Dev.
      </span>

      <h1 className="text-[56px] text-[#c4c7c5] font-outfitMedium">
        How can I help you today?
      </h1>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-3 p-5 pt-[120px]">

        <div
          onClick={() => handleSendingCardMessage(card1Message)}
          className="bg-[#f0f4f9] hover:bg-[#dfe4ea] h-[200px] relative p-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[17px] text-[#585858]">
            Suggest beautiful places to see on an upcoming road trip
          </p>

          <FaCompass className="absolute bottom-[10px] right-[10px] h-[25px] w-[25px]" />

        </div>

        <div
          onClick={() => handleSendingCardMessage(card2Message)}
          className="bg-[#f0f4f9] hover:bg-[#dfe4ea] h-[200px] relative p-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[17px] text-[#585858]">
            Briefly summarize this concept: urban planning
          </p>

          <FaRegLightbulb className="absolute bottom-[10px] right-[10px] h-[25px] w-[25px]" />

        </div>

        <div
          onClick={() => handleSendingCardMessage(card3Message)}
          className="bg-[#f0f4f9] hover:bg-[#dfe4ea] h-[200px] relative p-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[17px] text-[#585858]">
            Brainstorm team bonding activities for our work retreat
          </p>

          <FaRegMessage className="absolute bottom-[10px] right-[10px] h-[25px] w-[25px]" />

        </div>

        <div
          onClick={() => handleSendingCardMessage(card4Message)}
          className="bg-[#f0f4f9] hover:bg-[#dfe4ea] h-[200px] relative p-[15px] rounded-lg cursor-pointer"
        >
          <p className="text-[17px] text-[#585858]">
            Tell me about React js and React native
          </p>

          <FaTags className="absolute bottom-[10px] right-[10px] h-[25px] w-[25px]" />

        </div>

      </div>
    </>
  );
};

export default Introductory;
