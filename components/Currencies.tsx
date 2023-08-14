"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Currencies = () => {
  // TODO: Change The API to CoinMarketCap's
  const [currencies, setCurrencies] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdogecoin%2Ccardano%2Csolana%2Clitecoin%2Cdai%2Cstellar%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_change=true"
      );
      const data = await res.json();
      setCurrencies(data);
    };
    getData();
  }, []);
  return (
    <section className="flex flex-col items-center mb-[100px] relative">
      <div className="w-4 h-4 absolute top-[-150px]" id="market" />
      <h2 className="font-bold text-[32px] sm:text-[48px] md:text-[52px] lg:text-[64px] mb-[44px]">
        Market Updates
      </h2>
      {/* Table */}
      <div className="px-4">
        {/* Table Header */}
        <div
          className="grid grid-cols-6 lg:gap-2 max-md:hidden
          bg-gradient-to-b from-primary-cyan to-primary-purple
          rounded-tr-[10px] rounded-tl-[10px]
          px-4 lg:px-8 py-6"
        >
          <h3 className="select-text font-bold text-[18px] lg:text-[24px] text-center">
            Currency
          </h3>
          <h3 className="select-text font-bold text-[18px] lg:text-[24px] text-center col-span-2">
            Price
          </h3>
          <h3 className="select-text font-bold text-[18px] lg:text-[24px] text-center">
            24h Change
          </h3>
          <h3 className="select-text font-bold text-[18px] lg:text-[24px] text-center col-span-2">
            Market Cap
          </h3>
        </div>
        {/* Table Body */}
        <div>
          {Object.keys(currencies).map((currency, i) => (
            <div
              className="grid grid-cols-6 gap-3 max-md:grid-cols-2 max-md:grid-rows-4 max-md:gap-y-1 max-md:gap-x-40 max-sm:gap-x-0
              bg-[rgba(0,0,0,0.24)] px-4 lg:px-8 py-6 table__border-bottom"
              key={currency}
            >
              {/* Currency Name */}
              <div className="md:hidden text-gray-400">Currency:</div>
              <div className="select-text font-medium flex gap-[10px] items-center max-md:justify-center max-sm:text-[14px] text-[16px] lg:text-[20px] text-center capitalize">
                <Image
                  src={`/coins/${currency}.png`}
                  width={40}
                  height={40}
                  className="max-md:w-[30px]"
                  alt={`${currency} logo`}
                />
                {currency}
              </div>
              {/* Currency Price */}
              <div className="md:hidden text-gray-400">Price:</div>
              <div className="select-text font-medium max-sm:text-[14px] text-[16px] lg:text-[20px] text-center col-span-2 max-md:col-span-1">
                ${currencies[currency].usd}
              </div>
              {/* Currency 24h Change */}
              <div className="md:hidden text-gray-400">24h Change:</div>
              <div
                className={`select-text font-medium max-sm:text-[14px] text-[16px] lg:text-[20px] text-center flex justify-center items-center ${
                  currencies[currency].usd_24h_change < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                <span>
                  {currencies[currency].usd_24h_change < 0 ? (
                    <BiSolidDownArrow size={15} />
                  ) : (
                    <BiSolidUpArrow size={15} />
                  )}
                </span>
                {currencies[currency].usd_24h_change
                  .toFixed(2)
                  .replace("-", "")}
                %
              </div>
              {/* Currency Market Cap */}
              <div className="md:hidden text-gray-400">Market Cap:</div>
              <div className="select-text font-medium max-sm:text-[14px] text-[16px] lg:text-[20px] text-center col-span-2 max-md:col-span-1">
                {currencies[currency].usd_market_cap.toFixed(2)}$
              </div>
            </div>
          ))}
        </div>
        {/* Other Currencies */}
        <Link
          href="https://www.coingecko.com/"
          target="_blank"
          className="flex items-center mx-auto mt-4 md:ml-4
          max-sm:flex-col"
        >
          {/* Icons */}
          <div className="flex">
            <Image
              src="/coins/other-coins/bnb.png"
              width={40}
              height={40}
              className="object-contain"
              alt="bnb"
            />
            <Image
              src="/coins/other-coins/polygon.png"
              width={40}
              height={40}
              className="drop-shadow-[0_0px_10px_rgba(0,0,0,1)] z-[2] ml-[-10px] object-contain"
              alt="bnb"
            />
            <Image
              src="/coins/other-coins/shiba.png"
              width={40}
              height={40}
              className="drop-shadow-[0_0px_10px_rgba(0,0,0,1)] z-[3] ml-[-10px] object-contain"
              alt="bnb"
            />
            <Image
              src="/coins/other-coins/tron.png"
              width={40}
              height={40}
              className="drop-shadow-[0_0px_10px_rgba(0,0,0,1)] z-[4] ml-[-10px] object-contain"
              alt="bnb"
            />
            <span className="bg-[#555555] min-w-[40px] min-h-[40px] rounded-full grid place-items-center z-[5] ml-[-10px] drop-shadow-[0_0px_10px_rgba(0,0,0,1)]">
              50+
            </span>
          </div>
          {/* Text */}
          <div className="ml-6">
            <h4 className="font-semibold text-[18px] max-sm:text-center max-sm:mt-2">
              Explore multiple other assets
            </h4>
            <p className="font-normal text-[16px] text-[#D3D3D3]">
              New assets are specially selected and added regularly.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Currencies;
