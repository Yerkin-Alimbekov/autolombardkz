"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { FaCheck } from "react-icons/fa";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";
import Kalkulator from "./Kalkulator";
import Contact from "./Contact";

const Hero = () => {
  return (
    <section className="h-[800px] relative mb-[10px] bg-accent/0 xl:bg-white" id="home">
      {/* header */}
      <Header />
      <div className="container mx-auto h-full bg-secondary/0">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-[480px]">
          <h1 className="h2 mb-2 max-w-[320px] xl:max-w-none">
            <div className="gap-1 mb-[10px] text-[30px]">
            <span>Автоломбард</span> Алматы
            </div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["", 2000, "", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          
          <div className="container mt-[-40px]">
          <div className="mb-2">
                <div className="flex text-[18px] gap-2">
                  <FaCheck className="text-accent text-[18px]" />
                    <p>Выдача наличных за 30 минут</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex text-[18px] gap-2">
                  <FaCheck className="text-accent text-[18px]" />
                    <p>С любой кредитной историей</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex text-[18px] gap-2">
                  <FaCheck className="text-accent text-[18px]" />
                    <p>С правом управления и без</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex text-[18px] gap-2">
                  <FaCheck className="text-accent text-[18px]" />
                    <p>Платежи через KASPI BANK</p>
                </div>
              </div>
              <div className="mb-[-5px]">
                <div className="flex text-[18px] gap-2">
                  <FaCheck className="text-accent text-[18px]" />
                    <p>Ставка 3.15% в месяц</p>
                </div>
              </div>
          </div>
          {/* stats */}
          <Contact />
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[45vw] h-[680px] absolute top-0 right-0 bg-accent/0">
        <div className="absolute w-[658px] h-[402px] bottom-0 z-40 left-[-9.5vw]">
          <Kalkulator />
          <div className="mt-12 px-[150px]">
            <Stats />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
