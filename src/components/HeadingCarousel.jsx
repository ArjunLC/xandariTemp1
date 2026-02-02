"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export default function HeadingCarousel({
  data,
  onSwiper,
  controlledSwiper,
}) {
  return (
    <Swiper
      modules={[Controller, Autoplay]}
      slidesPerView={1}
      loop
      onSwiper={onSwiper}
      controller={{ control: controlledSwiper }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[80px] mx-[53px] mt-[96px] leading-[80px] font-light text-[#BFA280]"
          >
            {item.headingLine1} <br />
            {item.headingLine2} <br />
            {item.headingLine3}
          </motion.h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
