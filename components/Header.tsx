import Image from "next/image";
import { BsTwitter, BsDiscord } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-center fixed w-full top-0 left-0">
      <div className="px-[16px] flex justify-between items-center w-full container py-[46px] max-lg:py-[20px]">
        <div>
          <a href="#home">
            <Image
              src="/cryptopia-logo-white.png"
              width={264}
              height={38}
              alt="logo"
              className="max-sm:w-[200px] cursor-pointer"
            />
          </a>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex gap-[69px] max-xl:gap-[30px]">
            <a
              href="#home"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Home</li>
            </a>
            <a
              href="#market"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Market</li>
            </a>
            <a
              href="#why-us"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Why us</li>
            </a>
            <a
              href="#join"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Join</li>
            </a>
          </ul>
        </div>
        <div className="flex gap-[20px] max-sm:gap-[10px]">
          <BsTwitter
            className="text-[40px] max-sm:text-[30px]
          cursor-pointer duration-[0.3s] hover:text-primary-purple"
          />
          <BsDiscord
            className="text-[40px] max-sm:text-[30px]
          cursor-pointer duration-[0.3s] hover:text-primary-purple"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
