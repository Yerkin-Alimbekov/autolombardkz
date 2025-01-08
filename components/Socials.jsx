import Link from "next/link";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/lombard.progress",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/61566355602181",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@lombard.progress",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@LombardProgress",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
