import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <header className=" top-0 left-0 z-30 w-full px-8 py-4 text-white">
      <nav className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex gap-1 flex-col">
          <div className="h-1 w-14 rounded bg-white"></div>
          <div className="h-1 w-14 rounded bg-white"></div>
        </h2>
        <div className="relative w-[170px] h-[65px]">
          <Image
            src="/Xandari Logo (Recreated).png"
            alt="Resort Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex h-[43px] w-[200px] items-center justify-center gap-3 rounded-[10px] bg-white px-5 text-[20px] font-normal text-[#273880] cursor-pointer">
          Book Now
          <IoIosArrowRoundForward className="text-[#273880] scale-150 -rotate-45" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
