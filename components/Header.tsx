"use client";

import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsDiscord } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-center fixed w-full top-0 left-0 backdrop-blur-sm z-[99]">
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
        <nav className="max-lg:hidden">
          <ul className="flex gap-[69px] max-xl:gap-[30px]">
            <Link
              href="#home"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Home</li>
            </Link>
            <Link
              href="/#market"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Market</li>
            </Link>
            <Link
              href="#why-us"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Why us</li>
            </Link>
            <Link
              href="#join"
              className="text-[24px] font-medium cursor-pointer p-[20px] max-xl:p-[10px]
            duration-[0.3s] hover:text-primary-purple hover:font-bold hover:tracking-wide
            relative after:content-[''] after:duration-[0.3s] after:absolute after:left-0
            after:bottom-[-3px] after:w-0 hover:after:w-full after:h-[3px] after:bg-primary-purple"
            >
              <li>Join</li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-[20px] max-sm:gap-[10px]">
          <Link href="https://twitter.com/">
            <BsTwitter
              className="text-[40px] max-sm:text-[30px]
          cursor-pointer duration-[0.3s] hover:text-primary-purple"
            />
          </Link>
          <Link href="https://discord.com/">
            <BsDiscord
              className="text-[40px] max-sm:text-[30px]
          cursor-pointer duration-[0.3s] hover:text-primary-purple"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
