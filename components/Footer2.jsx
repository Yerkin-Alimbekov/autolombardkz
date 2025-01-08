import Logo from "./Logo";
import { FaFile } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="px-[100px]">
          <Logo light={true} />
          </div>
          <div className="grid grid-cols-1">
          <Link href="https://drive.google.com/file/d/1B1olZqC0T3-LFEvFeuIrwlTd0WImqIk2/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Реквизиты</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/11OSN-hLcmdnKVMYjT0-RS1WwMWgFVF74/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Лицензия 02.21.0058.L.</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/1M5EvZwgFlv0Zlt3NtbhF9eFmDGbPPJor/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Договор присоеденения</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/19R-qM1QLSCCrb_vBMfiq8yjTedpTGhqG/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Финансовый отчет за 2023г.</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="grid grid-cols-1">
          <Link href="https://drive.google.com/file/d/1b-TLEzSO3lWN0M2EY66QRWyEhbzf0Ssm/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Шағын несие беру қағидалары</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/1S5f7VttFVH_8SU2aLKeUYGBrm1JB5VWq/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Политика конфеденциальности</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/1EGBsY81EbRfBBhokykuOOFiaygYofX8y/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Типовая форма залогового билета</p>
              </div>
            </div>
          </Link>
          <Link href="https://drive.google.com/file/d/1JM7IJGIkxr20iv_EOSRnKzDOjFyQtHKm/view?usp=drive_link">
          <div className="mb-1 text-white">
              <div className="flex text-[10px] gap-2">
                <FaFile className="text-accent text-[14px] justify-center items-center text-center mt-1" />
                <p>Правила предоставления микрокредитов</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="text-white/70 font-light pt-[50px] px-[80px] text-[13px] justify-center items-center text-center">
            ТОО "Ломбард Прогресс" 2025.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
