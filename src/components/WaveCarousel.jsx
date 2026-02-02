"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import WaveImage from "@/components/WaveImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WaveCarousel({ images, height }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-full"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <WaveImage src={src} height={height} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
