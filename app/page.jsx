"use client";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Services2 from "@/components/Services2";
import Contact2 from "@/components/Contact2";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Testimonial from "@/components/Testimonial";
import Services3 from "@/components/Services3";
import Footer2 from "@/components/Footer2";
import Contact3 from "@/components/Contact3";
import About2 from "@/components/About2";
import About3 from "@/components/About3";


const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
    
  }, []);
  

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Services2 />
      <Contact2 />
      <Services3 />
      <Journey />
     {/* <Work />*/}
      <Testimonial />
      <Contact3 />
      <About2 />
      <About3 />
      <Footer2 />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </>
  );
};

export default Home;
