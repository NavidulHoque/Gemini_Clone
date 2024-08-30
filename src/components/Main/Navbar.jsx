/* eslint-disable react/prop-types */
import avatar from "../../assets/avatar.png"
import { FaBars } from "react-icons/fa6";

const Navbar = ({ setIsExtendedInMobile }) => {
  const windowInnerWidth = window.innerWidth
  return (
    <nav className="flex justify-between items-center h-[8vh] text-[22px] text-[#585858] px-5">

      {windowInnerWidth < 768 && (
        <FaBars
          className="w-[22px] h-[22px] cursor-pointer"
          onClick={() => setIsExtendedInMobile(true)}
        />
      )}

      <h2>Gemini</h2>

      <div className="w-[30px] h-[30px] rounded-full">

        <img className="w-full h-full" src={avatar} alt="image" />

      </div>

    </nav>
  )
}

export default Navbar
