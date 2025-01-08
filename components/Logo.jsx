import Link from "next/link";

const Logo = ({ light = false }) => {
  // determine the logo color based on the light prop
  const colorClass = light ? "text-white" : "text-primary"; // default to black
  return (
    <Link href="/" className="font-accent text-2xl tracking-[4px] mb-[-5px] mt-[-25px]">
        <span className="text-white grid font-medium text-justify px-[14px] text-[10px] mb-[-5px]">автоломбард</span>
      <span className="text-accent font-primary text-[35px]">PROGRESS</span>
      <span className="text-white">.</span>
      <span className="text-white grid font-medium text-justify px-[7px] text-[10px] mt-[-15px]">autolombard.kz</span>
    </Link>
  );
};

export default Logo;
