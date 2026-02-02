"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export default function TextCarousel({ data, onSwiper, controlledSwiper }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop
      onSwiper={onSwiper}
      controller={{ control: controlledSwiper }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mt-4 text-[40px] text-[#9fd3ff]">{item.title}</h4>

            <p className="mt-2 text-[15px] pr-20 text-gray-400">
              {item.description}
            </p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
