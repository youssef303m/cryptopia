"use client";

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
    <section className="flex flex-col items-center mb-[100px]">
      <h2 className="font-bold text-[48px] mb-[44px]">Market Updates</h2>
      {/* Table */}
      <div>
        {/* Table Header */}
        <div
          className="grid grid-cols-6 gap-3
          bg-blue-400 px-8 py-6"
        >
          <h3 className="font-bold text-[24px] text-center">Currency</h3>
          <h3 className="font-bold text-[24px] text-center col-span-2">
            Price
          </h3>
          <h3 className="font-bold text-[24px] text-center">24h Change</h3>
          <h3 className="font-bold text-[24px] text-center col-span-2">
            Market Cap
          </h3>
        </div>
        {/* Table Body */}
        <div>
          {Object.keys(currencies).map((currency, i) => (
            <div
              className="grid grid-cols-6 gap-3
              bg-[rgba(0,0,0,0.24)] px-8 py-6 table__border-bottom"
              key={currency}
            >
              {/* Currency Name */}
              <div className="font-medium text-[20px] text-center capitalize">
                {currency}
              </div>
              {/* Currency Price */}
              <div className="font-medium text-[20px] text-center col-span-2">
                ${currencies[currency].usd}
              </div>
              {/* Currency 24h Change */}
              <div
                className={`font-medium text-[20px] text-center flex justify-center items-center ${
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
              <div className="font-medium text-[20px] text-center col-span-2">
                {currencies[currency].usd_market_cap.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Currencies;
