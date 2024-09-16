import { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png"
import { FaBars } from "react-icons/fa6";

const Navbar = ({ setIsExtendedInMobile }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

  //for window resizing purpose
  useEffect(() => {

    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, [])
  
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
