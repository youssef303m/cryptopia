"use client";

import { useEffect, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Currencies = () => {
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
  console.log(currencies);

  return (
    <section className="flex flex-col items-center mb-[100px]">
      <h2 className="font-bold text-[48px] mb-[44px]">Market Updates</h2>
      <div className="w-[1280px]">
        <div
          className="bg-gradient-to-b from-primary-cyan to-primary-purple
          flex justify-between px-[64px] py-[26px]
          rounded-tr-[42px] rounded-tl-[42px]"
        >
          <h3 className="font-bold text-[32px]">Currency</h3>
          <h3 className="font-bold text-[32px]">Price</h3>
          <h3 className="font-bold text-[32px]">24h Change</h3>
          <h3 className="font-bold text-[32px]">Market Cap</h3>
        </div>
        <div>
          {Object.keys(currencies).map((currency, i) => (
            <div
              className="bg-[rgba(0,0,0,0.24)] flex justify-between px-[64px] py-[30px]
              table__border-bottom"
              key={currency}
            >
              <p className="font-medium text-[28px] capitalize">{currency}</p>
              <p className="font-medium text-[28px]">
                ${currencies[currency].usd}
              </p>
              <p
                className={`font-medium text-[28px] flex items-center gap-[5px] ${
                  currencies[currency].usd_24h_change < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                $
                {currencies[currency].usd_24h_change
                  .toFixed(2)
                  .replace("-", "")}
                <span>
                  {currencies[currency].usd_24h_change < 0 ? (
                    <BiSolidUpArrow size={20} />
                  ) : (
                    <BiSolidDownArrow size={20} />
                  )}
                </span>
              </p>
              <p className="font-medium text-[28px]">
                ${currencies[currency].usd_market_cap.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Currencies;
