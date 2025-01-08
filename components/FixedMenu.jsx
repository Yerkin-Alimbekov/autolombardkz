import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components
import Nav from "./Nav";
import Socials from "./Socials";
import Link from "next/link";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // ensure the component is mounted

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  // check if the component is mounted to prevent SSR mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150); // show the button after scrolling 150px
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        // always show the button on mobile
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  // prevent rendering until mounted
  if (!isMounted) return null;

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      {/* menu */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md md:max-w-none h-[300px] bottom-[25rem] xl:bottom-[21.2rem] px-4 pointer-events-auto"
          >
            <div className="bg-white w-full h-full shadow-custom max-w-[910px] mx-auto py-12 xl:py-12 px-12 xl:px-15 flex items-center gap-12 rounded-lg">
              <Nav
                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="font-primary text-2xl text-primary cursor-pointer"
                spy={true}
              />
              {/* info */}
              <div className="hidden md:flex mx-auto mt-[30px]">
                <div>
                  <div className="flex gap-7 mb-8">
                    {/* location */}
                    <div className="flex flex-col">
                      
                      <p className="font-semibold text-primary text-lg">
                        Адрес:
                      </p>
                      <p>г.Алматы, Ауезовский р-он, ул. Толе би 302, 3 этаж, офис 39</p>
                    </div>
                    {/* phone */}
                   
                    {/* email */}

                    <div className="flex flex-col">
                      <p className="font-semibold text-primary text-lg">
                        Email:
                      </p>
                      <p>progressautolombard@gmail.com</p>
                    </div>
                  </div>
                  {/* socials */}
                  <Socials
                    containerStyles="flex gap-9 relative h-40"
                    iconStyles="text-[20px] w-[32px] h-[32px] text-secondary flex items-center justify-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* menu button */}
      {/* render button without animations on mobile */}
      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-accent/80 shadow-custom w-[54px] h-[54px] rounded-full cursor-pointer flex items-center justify-center select-none pointer-events-auto"
          >
            <FiPhoneCall className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;