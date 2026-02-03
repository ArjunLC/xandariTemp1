"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";

const Footer = () => {
  const [openItems, setOpenItems] = useState({ dining: true, hotels: true });

  const toggleItem = (item) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <footer className="relative bg-[#0a0f24] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* LOGO */}
        <div className="mb-16 flex justify-center">
          <Image
            src="/Xandari Logo (Recreated).png"
            alt="Xandari"
            width={290}
            height={111}
            className="w-[290px] h-auto"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* COLUMN 1: HOTELS & DINING */}
          <div>
            {/* HOTELS SECTION */}
            <div className="border-b border-t pt-4 border-white/10 pb-4 mb-4">
              <button
                onClick={() => toggleItem("hotels")}
                className="flex w-full items-center justify-between text-base font-normal text-white pb-2"
              >
                <span>Hotels</span>
                <span className="text-sm">
                  {openItems.hotels ? (
                    <IoIosArrowDropdown />
                  ) : (
                    <IoIosArrowDropright />
                  )}
                </span>
              </button>

              {openItems.hotels && (
                <ul className="mt-4 pl-5 space-y-0 text-sm text-gray-300">
                  <li className="flex justify-between border-b border-white/10 py-3 items-center">
                    <span>Xandari Costa Rica</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Villas</span>
                      <button className="text-xs">
                        <IoIosArrowDropright />
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between border-b border-white/10 py-3 items-center">
                    <span>Xandari Pearl</span>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Rooms</span>
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between border-b border-white/10 py-3 items-center">
                    <span>Cardamom County</span>
                    <div className="flex gap-7.5">
                      <div className="flex items-center gap-2">
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Villas</span>
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between border-b border-white/10 py-3 items-center">
                    <span>Xandari Riverscapes</span>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Rooms</span>
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between border-white/10 py-3 items-center">
                    <span>Xandari Harbour</span>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Rooms</span>
                        <button className="text-xs">
                          <IoIosArrowDropright />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>

            {/* DINING SECTION */}
            <div className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggleItem("dining")}
                className="flex w-full items-center justify-between text-base font-normal text-white pb-1"
              >
                <span>Dining</span>
                <span className="text-sm">
                  {openItems.dining ? (
                    <IoIosArrowDropdown />
                  ) : (
                    <IoIosArrowDropright />
                  )}
                </span>
              </button>

              {openItems.dining && (
                <ul className="mt-4 space-y-0 pl-5 text-sm text-gray-300">
                  <li className="flex justify-between items-center border-b border-white/10 py-3">
                    <span>Restaurant & Cafe</span>
                    <button className="text-xs">
                      <IoIosArrowDropright />
                    </button>
                  </li>
                  <li className="flex justify-between items-center border-white/10 py-3">
                    <span>Restaurant & Cafe</span>
                    <button className="text-xs">
                      <IoIosArrowDropright />
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* COLUMN 2: SPA */}
          <div className="flex flex-col justify-between">
            <div className="border-t pt-4 border-white/10">
              {["Spa", "Experiences", "Weddings", "Meetings"].map((item) => (
                <div key={item} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() =>
                      setOpenItems((prev) => ({
                        ...prev,
                        [item]: !prev[item],
                      }))
                    }
                    className="flex w-full items-center justify-between pb-1 text-base font-normal text-white"
                  >
                    <span>{item}</span>
                    <span className="text-sm">
                      {openItems[item] ? (
                        <IoIosArrowDropdown />
                      ) : (
                        <IoIosArrowDropright />
                      )}
                    </span>
                  </button>
                </div>
              ))}
            </div>
            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-14 h-2/5 flex w-full justify-center">
              <div className="flex justify-between gap-9 text-xl text-white">
                <button className="hover:text-gray-300 transition-colors">
                  <FiYoutube className="w-8 h-8" />
                </button>
                <button className="hover:text-gray-300 transition-colors">
                  <FaWhatsapp className="w-8 h-8" />
                </button>
                <button className="hover:text-gray-300 transition-colors">
                  <SlSocialFacebook className="w-8 h-8" />
                </button>
                <button className="hover:text-gray-300 transition-colors">
                  <FaInstagram className="w-8 h-8" />
                </button>
                <button className="hover:text-gray-300 transition-colors">
                  <SlSocialLinkedin className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 3: RESORT MAP */}
          <div className="border-t pt-4 border-white/10">
            {["Resort Map", "Access", "Support", "Residences", "Offers"].map(
              (item) => (
                <div key={item} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() =>
                      setOpenItems((prev) => ({
                        ...prev,
                        [item]: !prev[item],
                      }))
                    }
                    className="flex w-full items-center justify-between pb-1 text-base font-normal text-white"
                  >
                    <span>{item}</span>
                    <span className="text-sm">
                      {openItems[item] ? (
                        <IoIosArrowDropdown />
                      ) : (
                        <IoIosArrowDropright />
                      )}
                    </span>
                  </button>
                </div>
              ),
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/20 pt-6 text-xs text-gray-400">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>
              © 2025 Xandari Resorts is a registered service mark protected by
              copyright law. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms & Conditions
              </button>
              <button className="hover:text-white transition-colors">
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
