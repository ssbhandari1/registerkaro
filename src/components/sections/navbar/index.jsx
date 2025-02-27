import { CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="w-full h-11 bg-[#1C4670] flex items-center justify-end px-6 text-[#D0D0D0]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CiMail />
            <p>www.registerkaro.in</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMail />
            <p>+918447746183</p>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <CiMail />
            <CiMail />
            <CiMail />
            <CiMail />
          </div>
        </div>
      </header>

      <nav className="w-full h-20 bg-[#FFFFFF]  px-6 flex items-center justify-between  border-b border-gray-300">
        <div className="flex items-center gap-2">
        <img src="/registerkaro.png" alt="Logo" width={200} height={100} />

        </div>
        <div className="flex gap-6 text-[#272D37] font-semibold">
          <button className="hover:text-[#0a0c0f]">Home</button>
          <button className="hover:text-[#0a0c0f]">Our Service</button>
          <button className="hover:text-[#0a0c0f]">Blog</button>
          <button className="hover:text-[#0a0c0f]">Contact Us</button>
          <button className="hover:text-[#0a0c0f]">About</button>
          <button className="bg-white text-green-500 px-4 py-1 rounded-md font-semibold">
            769494903494
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
