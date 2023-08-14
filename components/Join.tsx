import Link from "next/link";
import React from "react";
import { BsDiscord } from "react-icons/bs";

const Join = () => {
  return (
    <section className="container mx-auto flex justify-center mt-[140px] mb-[140px] relative">
      <div className="w-4 h-4 absolute top-[-180px]" id="join" />
      <div>
        <h3 className="text-center font-bold text-[32px] sm:text-[42px] md:text-[64px]">
          JOIN US VIA DISCORD
        </h3>
        <p className="text-center text-[#C3C3C3] font-medium text-[14px] sm:text-[18px] md:text-[24px]">
          Invest and manage all your crypto at one place.
        </p>
        <Link
          href="https://discord.com/"
          className="flex items-center font-bold gap-4 w-fit px-6 py-2 rounded-full mx-auto
          text-[28px] md:text-[36px] mt-4 md:mt-8
          join__btn"
        >
          <BsDiscord /> DISCORD
        </Link>
      </div>
    </section>
  );
};
export default Join;
