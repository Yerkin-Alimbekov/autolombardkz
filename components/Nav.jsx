"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const links = [
  {
    name: "",
    icon: "",
  },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              className={linkStyles}
            >
              {link.icon}
            </ScrollLink>
          );
        })}
        <div>
              <p className="h3 text-center text-primary font-normal text-[18px] mb-[-5px] mt-[-15px]">
                Узнайте сколько Вы получите
                </p>
            </div>
         <Link href={'https://go.2gis.com/gi5fqd'}>
         <button className="btn btn-accent1 mb-1 text-xl bg-accent hover:bg-accent text-white font-light py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full" src="assets/hero/whatsapp.svg">2ГИС</button>
         </Link>

         <Link 
          href={"https://wa.me/+77014191890"} smooth>
          <button className="btn btn-accent mb-1 text-xl bg-accent hover:bg-accent text-white font-light py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full">WhatsApp</button>
         </Link>

         <Link href='tel:77750073395'>
         <button className="btn btn-accent2 mb-1 text-xl bg-accent hover:bg-accent text-white font-light py-2 px-4 border-b-2 border-secondary hover:border-secondary rounded-full">Позвонить</button>
         </Link>

      </ul>
    </nav>
  );
};

export default Nav;
