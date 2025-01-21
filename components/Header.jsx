"use client";
import { Link as ScrollLink } from "react-scroll";
import { FaMapPin, FaPhone, FaMailBulk, FaWhatsapp } from "react-icons/fa";
// components
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[20px] z-30 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          {/* logo */}
          <Logo />
          <div className="flex mb-[-5px]">
          <span className="text-white font-medium text-justify px-[4px] text-[12px] mt-[0px]">Режим работы: </span>
          <span className="text-white font-medium text-justify px-[4px] text-[12px] mt-[0px]">пн-пт: 10:00 - 19:00,</span>
          <span className="text-white font-medium text-justify px-[4px] text-[12px] mt-[0px]">сб: 10:00 - 16:00</span>
          </div>
          <div className="text-white grid w-100">
          <div className="mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaMapPin className="text-accent text-[14px]" />
                   <p>г.Алматы, улица Толе би 302, офис 39</p>
                  </div>
             </div>
             <div className="flex flex-col mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaMailBulk className="text-accent text-[14px]" />
                   <p>progressautolombard@gmail.com</p>
                  </div>
             </div>
            <div className="flex flex-col mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaPhone className="text-accent text-[14px]"/>
                   <p>+7 775 007 3395</p>
                  </div>
             </div>
             <div className="flex flex-col mb-[-15px] text-white">
              <div className="flex text-[12px] gap-2">
                <FaWhatsapp className="text-accent text-[17px]"/>
                   <p>+7 701 419 1890</p>
                  </div>
             </div>
          </div>
          <div className="flex items-center gap-12">
            {/* nav & socials */}
            <Socials
              containerStyles="flex items-center gap-2 mb-[-55px]"
              iconStyles="text-base w-[32px] h-[32px] bg-primary text-accent flex items-center justify-center rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
