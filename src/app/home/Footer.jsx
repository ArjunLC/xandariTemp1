import WaveTransition from "@/components/WaveTransition";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b1430] to-[#070d1f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <WaveTransition bgColor={"#0b1430"} height={100} top={"-15px"} flip />
        {/* LOGO */}
        <div className="mb-16 flex justify-center">
          <Image
            src="/Xandari Logo (Recreated).png"
            alt="Xandari"
            width={2000}
            height={1060}
            className="w-[290px] h-[111]"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-3">
          {/* HOTELS */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Hotels</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Xandari Costa Rica</span>
                <span className="text-xs">Villas</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Xandari Pearl</span>
                <span className="text-xs">Rooms</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Cardamom County</span>
                <span className="text-xs">Villas</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Xandari Riverscapes</span>
                <span className="text-xs">Rooms</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Xandari Harbour</span>
                <span className="text-xs">Rooms</span>
              </li>
            </ul>

            <h3 className="mt-10 mb-4 text-lg font-semibold">Dining</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="border-b border-white/10 pb-2">
                Restaurant & Cafe
              </li>
              <li className="border-b border-white/10 pb-2">
                Restaurant & Cafe
              </li>
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-lg font-semibold">Spa</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="border-b border-white/10 pb-2">Experiences</li>
                <li className="border-b border-white/10 pb-2">Weddings</li>
                <li className="border-b border-white/10 pb-2">Meetings</li>
              </ul>
            </div>
            <div className="flex items-end justify-start lg:justify-end">
              <div className="flex justify-between text-xl text-white w-full h-[7rem] px-8 items-center">
                <FiYoutube className="scale-125" />
                <FaWhatsapp className="scale-125" />
                <SlSocialFacebook className="scale-125" />
                <FaInstagram className="scale-125" />
                <SlSocialLinkedin className="scale-125" />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Resort Map</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="border-b border-white/10 pb-2">Access</li>
              <li className="border-b border-white/10 pb-2">Support</li>
              <li className="border-b border-white/10 pb-2">Residences</li>
              <li className="border-b border-white/10 pb-2">Offers</li>
            </ul>
          </div>

          {/* SOCIAL */}
          {/* <div className="flex items-end justify-start lg:justify-end">
            <div className="flex gap-5 text-xl text-white">
              <FaYoutube />
              <FaWhatsapp />
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div> */}
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-gray-400 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            © 2025 Xandari Resorts is a registered service mark protected by
            copyright law. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Cancellation Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
