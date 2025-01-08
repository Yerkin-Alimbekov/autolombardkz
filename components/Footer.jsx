import Logo from "./Logo";
import { FaFile } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <Link href="/">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[16px] justify-center items-center text-center mt-1" />
                <p>Документы</p>
              </div>
            </div>
          </Link>
          <div className="text-white/70 font-light pt-[10px] text-[12px]">
            Автоломбард Прогресс 2025. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
