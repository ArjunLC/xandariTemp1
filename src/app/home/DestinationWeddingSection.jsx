"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import "swiper/css";
import WaveTransition from "@/components/WaveTransition";

const images = [
  "/DestinationWeddingSectionimage.png",
  "/image1.png",
  "/image2.png",
];
const imagess = [
  "/DestinationWeddingSectionimage.png",
  "/image2.png",
  "/image1.png",
];

const IMAGE_HEIGHT = 480;

const DestinationWeddingSection = () => {
  const topSwiperRef = useRef(null);
  const bottomSwiperRef = useRef(null);
  const cursorRef = useRef(null);

  const [cursorDir, setCursorDir] = useState(null);

  useEffect(() => {
    if (topSwiperRef.current && bottomSwiperRef.current) {
      topSwiperRef.current.autoplay.start();
      bottomSwiperRef.current.autoplay.start();
    }

    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // 🔁 OPPOSITE DIRECTION CONTROLS
  const slideNextBoth = () => {
    topSwiperRef.current?.slideNext();
    bottomSwiperRef.current?.slidePrev();
  };

  const slidePrevBoth = () => {
    topSwiperRef.current?.slidePrev();
    bottomSwiperRef.current?.slideNext();
  };

  return (
    <section className="bg-white pb-[67px] relative">
      <WaveTransition height={60} top={"-54px"} flip />
      <div>
        <h2 className=" font-bold text-[46px] text-center text-[#273880] font-arial">
          Destination Wedding & Special
          <br /> Events
        </h2>
        <span className="text-center my-[39px] max-w-[558px] font-arial text-[19px] text-[#273880] block px-10 max-w-3xl mx-auto">
          Destination weddings crafted with elegance and emotion Special events
          designed to be unforgettable.
        </span>
      </div>
      {/* ===== CUSTOM ICON CURSOR ===== */}
      {cursorDir && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 z-[9999]
            -translate-x-1/2 -translate-y-1/2
            pointer-events-none transition-transform duration-150"
        >
          {cursorDir === "left" ? (
            <IoIosArrowDropleft size={52} className="text-white scale-125" />
          ) : (
            <IoIosArrowDropright size={52} className="text-white scale-125" />
          )}
        </div>
      )}

      <div className="relative flex flex-col items-center">
        {/* ===== TOP CAROUSEL ===== */}
        <div
          className="relative z-20 w-[993px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;

            setCursorDir(x < rect.width / 2 ? "left" : "right");
          }}
          onMouseLeave={() => setCursorDir(null)}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;

            x < rect.width / 2 ? slidePrevBoth() : slideNextBoth();
          }}
        >
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (topSwiperRef.current = swiper)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            speed={500}
            slidesPerView="auto"
            centeredSlides
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={`top-${index}`}
                className=" swiper-slide-active:w-[600px] transition-all duration-700"
              >
                <Image
                  src={src}
                  alt="Top Carousel"
                  width={1200}
                  height={IMAGE_HEIGHT}
                  className="h-[654px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== BOTTOM CAROUSEL ===== */}
        <div
          className="relative z-0 -mt-[40.9rem] w-[1248px] cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;

            setCursorDir(x < rect.width / 2 ? "left" : "right");
          }}
          onMouseLeave={() => setCursorDir(null)}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;

            x < rect.width / 2 ? slidePrevBoth() : slideNextBoth();
          }}
        >
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            loop
            speed={500}
            slidesPerView="auto"
            centeredSlides
          >
            {imagess.map((src, index) => (
              <SwiperSlide
                key={`bottom-${index}`}
                className="swiper-slide-active:w-[680px] transition-all duration-700"
              >
                <Image
                  src={src}
                  alt="Bottom Carousel"
                  width={1200}
                  height={IMAGE_HEIGHT}
                  className="h-[655px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DestinationWeddingSection;
