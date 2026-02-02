"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import WaveTransition from "@/components/WaveTransition";

const TrustedSection = () => {
  const slides = [
    {
      rating: "★★★★★",
      text: "Our workflows used to take hours of manual processing. After integrating their AI system, tasks now run automatically.",
      name: "Aaron Mitchell",
      role: "Operations Manager",
      video: "/TrustedSectionimage.mp4",
    },
    {
      rating: "★★★★★",
      text: "The automation completely changed how our team works. Faster delivery and fewer errors.",
      name: "Sophia Lee",
      role: "Product Lead",
      video: "/TrustedSectionimage.mp4",
    },
  ];

  return (
    <section className="bg-black py-24">
      <WaveTransition bgColor="black" top={"-15px"} flip />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* LEFT + CENTER CAROUSEL */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4500, // ⏱ auto scroll time
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // 🖱 pause on hover
              }}
              navigation={{
                nextEl: ".trusted-next",
                prevEl: ".trusted-prev",
              }}
              className="w-full"
            >
              {slides.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* CARD */}
                    <div
                      className="
    rounded-2xl
    p-8
    bg-[#06080f]
    relative
    overflow-hidden
    shadow-[inset_0_0_35px_rgba(88,101,242,0.35)]
  "
                    >
                      {/* Inner glow gradient */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2b36ff]/25 via-transparent to-transparent" />

                      {/* Content */}
                      <div className="relative">
                        {/* Stars */}
                        <div className="mb-4 text-[#5f6cff] text-sm tracking-widest">
                          {item.rating}
                        </div>

                        {/* Text */}
                        <p className="text-[15px] leading-[1.9] text-[#c9d2ff]">
                          “{item.text}”
                        </p>

                        {/* Author */}
                        <div className="mt-6">
                          <p className="text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* VIDEO */}
                    <div className="flex justify-center">
                      <div className="relative h-[420px] w-[280px] overflow-hidden">
                        <video
                          src={item.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT CONTENT (UNCHANGED) */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Trusted by Those <br /> We Serve
            </h2>

            <div className="mt-8 flex gap-4">
              <button className="trusted-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-800">
                ‹
              </button>
              <button className="trusted-next flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-800">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
