"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import "swiper/css";
import WaveTransition from "@/components/WaveTransition";
import SideWaveImage from "@/components/SideWaveImage";

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

export default function DestinationWeddingSection() {
  const topSwiperRef = useRef(null);
  const bottomSwiperRef = useRef(null);

  const curveRef = useRef(0);
  const lastTranslateTop = useRef(0);
  const lastTranslateBottom = useRef(0);

  const cursorRef = useRef(null);
  const [cursorDir, setCursorDir] = useState(null);

  /* ===== CUSTOM CURSOR FOLLOW ===== */
  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* ===== CURVE UPDATE ===== */
  const updateCurve = (delta) => {
    curveRef.current = Math.max(-1, Math.min(1, delta / 100));
  };

  /* ===== HOVER DIRECTION ===== */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorDir(x < rect.width / 2 ? "left" : "right");
  };

  const handleMouseLeave = () => setCursorDir(null);

  /* ===== CLICK CONTROL (BOTH SWIPERS) ===== */
  const handleClick = () => {
    if (!topSwiperRef.current || !bottomSwiperRef.current) return;

    if (cursorDir === "left") {
      topSwiperRef.current.slidePrev();
      bottomSwiperRef.current.slideNext();
      curveRef.current = -1; // 👈 left curve
    } else {
      topSwiperRef.current.slideNext();
      bottomSwiperRef.current.slidePrev();
      curveRef.current = 1; // 👉 right curve
    }
  };

  return (
    <section className="bg-white pb-[67px] relative">
      <WaveTransition height={60} top="-54px" flip />

      <h2 className="font-bold text-[46px] text-center text-[#273880] mb-12">
        Destination Wedding & Special <br /> Events
      </h2>

      {/* ===== CUSTOM CURSOR ===== */}
      {cursorDir && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          {cursorDir === "left" ? (
            <IoIosArrowDropleft
              size={56}
              className="text-white drop-shadow-lg"
            />
          ) : (
            <IoIosArrowDropright
              size={56}
              className="text-white drop-shadow-lg"
            />
          )}
        </div>
      )}

      <div
        className="relative flex flex-col items-center cursor-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* ===== TOP CAROUSEL ===== */}
        <div className="relative z-20 w-[993px]">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(s) => (topSwiperRef.current = s)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            speed={900}
            slidesPerView="auto"
            centeredSlides
            onSetTranslate={(swiper, translate) => {
              const delta = translate - lastTranslateTop.current;
              lastTranslateTop.current = translate;
              updateCurve(delta);
            }}
            onTransitionEnd={() => {
              curveRef.current = 0;
              lastTranslateTop.current = 0;
            }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="swiper-slide-active:w-[600px]">
                <div className="h-[654px] w-full">
                  <SideWaveImage src={src} curveRef={curveRef} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== BOTTOM CAROUSEL ===== */}
        <div className="relative z-0 -mt-[40.9rem] w-[1248px]">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(s) => (bottomSwiperRef.current = s)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            loop
            speed={900}
            slidesPerView="auto"
            centeredSlides
            onSetTranslate={(swiper, translate) => {
              const delta = translate - lastTranslateBottom.current;
              lastTranslateBottom.current = translate;
              updateCurve(-delta); // 🔁 important
            }}
            onTransitionEnd={() => {
              curveRef.current = 0;
              lastTranslateBottom.current = 0;
            }}
          >
            {imagess.map((src, i) => (
              <SwiperSlide key={i} className="swiper-slide-active:w-[680px]">
                <div className="h-[655px] w-full">
                  <SideWaveImage src={src} curveRef={curveRef} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
