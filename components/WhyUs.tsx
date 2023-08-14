import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section className="container mx-auto flex justify-center mt-[140px]">
      <div className="flex gap-[24px] items-center max-lg:flex-col px-[20px]">
        {/* Image and title (for small devices) */}
        <div className="lg:hidden">
          <h2 className="text-center font-bold text-[46px]">
            WHY <span className="text-primary-cyan">CRYPTOPIA</span>
          </h2>
          <Image src="/why-us.svg" width={380} height={380} alt="Why us?" />
        </div>
        {/* First 3 cards */}
        <div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px] mb-[16px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Accurate and Extensive Data
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Access a vast array of reliable and up-to-date cryptocurrency
              data. Our platform provides you with comprehensive insights to
              make informed investment decisions.
            </p>
          </div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px] mb-[16px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Intuitive User Experience
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Our user-friendly interface ensures that you can navigate and
              explore the cryptocurrency market effortlessly, whether you're a
              seasoned trader or just getting started.
            </p>
          </div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Instant Real-Time Updates
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Stay ahead of market trends with real-time updates. Our platform
              ensures you're always in the know about the latest price changes
              and developments.
            </p>
          </div>
        </div>
        {/* Image and title */}
        <div className="max-lg:hidden">
          <h2 className="text-center font-bold text-[30px] xl:text-[36px] 2xl:text-[46px]">
            WHY <span className="text-primary-cyan">CRYPTOPIA</span>
          </h2>
          <Image src="/why-us.svg" width={380} height={380} alt="Why us?" />
        </div>
        {/* Second 3 cards */}
        <div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px] mb-[16px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Educational Resources
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Expand your understanding of cryptocurrencies with our curated
              educational resources. Learn about blockchain technology, trading
              strategies, and more.
            </p>
          </div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px] mb-[16px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Interactive Price Charts
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Visualize historical and current cryptocurrency prices through
              interactive charts. Gain insights into market trends with
              easy-to-read graphical representations.
            </p>
          </div>
          <div
            className="p-[30px] max-xl:p-[20px] bg-[rgba(124,124,124,0.10)] rounded-[30px]
        border-[rgba(228,228,228,0.50)] border-solid border-[2px]"
          >
            <h4 className="text-[20px] font-bold text-center mb-[10px]">
              Security You Can Trust
            </h4>
            <p className="text-[14px] font-medium max-w-[400px] text-center text-[#C3C3C3]">
              Rest assured that your data and interactions are safeguarded. We
              prioritize security, utilizing the latest technologies to protect
              your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
