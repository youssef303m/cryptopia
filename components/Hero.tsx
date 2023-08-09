import React from "react";

const Hero = () => {
  return (
    <main className="h-screen flex items-center">
      <div className="flex flex-col items-center">
        <h2 className="max-sm:text-[35px] max-md:text-[50px] text-[64px] font-bold">
          Explore the World of
        </h2>
        <span
          className="max-sm:text-[35px] max-md:text-[50px] text-[64px] font-black tracking-[3px] mt-[-15px]
        bg-gradient-to-b from-primary-cyan to-primary-purple bg-clip-text text-transparent"
        >
          Cryptocurrencies
        </span>
        <p className="mt-[10px] max-w-[730px] font-medium text-[20px] tracking-[1px] text-center max-md:text-[16px] max-md:max-w-[600px] max-sm:text-[14px] max-sm:max-w-[350px] max-sm:tracking-normal">
          Stay updated with real-time cryptocurrency prices, trends, and
          insights. Discover a diverse range of digital assets and make informed
          decisions in the dynamic world of blockchain technology
        </p>
        <a
          href="#market"
          className="mt-[40px] bg-purple-600 py-[15px] px-[30px] text-[40px] font-medium rounded-[15px]
          max-md:text-[30px] max-sm:text-[20px]
          duration-[0.3s] hover:drop-shadow-[0_0px_40px_rgba(209,164,255,0.25)]"
        >
          Explore Market
        </a>
      </div>
    </main>
  );
};

export default Hero;
