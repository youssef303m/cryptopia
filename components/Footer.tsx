import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center pt-[75px] pb-4
    bg-gradient-to-t from-black to-transparent"
    >
      {/* logo */}
      <Image
        src="/cryptopia-logo-white.png"
        width={264}
        height={38}
        alt="Logo"
      />
      {/* Privacy Policy & Terms of Service */}
      <div className="text-[18px] lg:text-[24px] mt-6">
        <span className="hover:underline cursor-pointer">Terms of Service</span>{" "}
        | <span className="hover:underline cursor-pointer">Privacy Policy</span>
      </div>
      {/* Social Media Links */}
      <div className="flex gap-[32px] text-[30px] mt-6">
        <BsDiscord className="duration-[0.3s] cursor-pointer hover:text-primary-purple" />{" "}
        <BsTwitter className="duration-[0.3s] cursor-pointer hover:text-primary-cyan" />{" "}
        <BsFacebook className="duration-[0.3s] cursor-pointer hover:text-primary-purple" />{" "}
        <BsYoutube className="duration-[0.3s] cursor-pointer hover:text-primary-cyan" />
      </div>
      {/* Copyrights */}
      <div className="mt-12">
        <h5 className="text-center">
          Made with ♥ by{" "}
          <Link
            href="https://github.com/youssef303m"
            className="hover:underline"
          >
            Youssef Mohamed
          </Link>
        </h5>
        <h5 className="text-center">
          Powered by{" "}
          <Link href="https://www.coingecko.com/" className="hover:underline">
            CoinGecko
          </Link>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
