import avatar from "../../assets/avatar.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[8vh] text-[22px] text-[#585858] px-5">

        <h2>Gemini</h2>

        <div className="w-[30px] h-[30px] rounded-full">

            <img className="w-full h-full" src={avatar} alt="image" />

        </div>
      
    </nav>
  )
}

export default Navbar
