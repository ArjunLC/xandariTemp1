"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WaveCarousel from "@/components/WaveCarousel";
import TextCarousel from "@/components/TextCarousel";
import { useEffect, useState } from "react";

const FeatureShowcase = () => {
  const content = [
    {
      title: "Beautiful and Secure Environment",
      desc: "Discover opulent gardens, graceful gazebos, scenic arcades, picture-perfect pathways designed for your family.",
    },
    {
      title: "World-Class Amenities",
      desc: "Enjoy clubhouse facilities, swimming pools, fitness centers, and serene walkways.",
    },
  ];
  const headings = [
    "Beautiful\nand Secure\nEnvironment",
    "Luxury Living Spaces",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0c0c0c] overflow-hidden">
      {" "}
      <div className="mx-auto max-w-[1300px] py-10 flex gap-24">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          {/* TOP ROW */}
          <div className="flex items-start">
            {/* Small image carousel */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[207px] h-[260px] pr-[50px]"
            >
              <WaveCarousel
                height={260}
                images={[
                  "/FeatureShowcaseImage3.png",
                  "/FeatureShowcaseImage1.png",
                ]}
              />
            </motion.div>

            {/* Heading */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={index} // 🔥 REQUIRED
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="text-[80px] mt-[80px] leading-[80px] font-light text-[#BFA280]"
              >
                {headings[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* CARD SECTION */}
          <div className="w-full mt-[250px] pb-[100px] flex justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={index} // 🔥 REQUIRED
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex flex-row-reverse w-[640px] pl-10"
              >
                {/* <Image
                src="/FeatureShowcaseImage2.png"
                width={260}
                height={313}
                className="object-cover w-[249px] h-[313px] -translate-x-20"
                alt=""
              /> */}
                <div className="object-cover w-[249px] h-[340px] -translate-x-24">
                  <WaveCarousel
                    height={592}
                    images={[
                      "/FeatureShowcaseImage1.png",
                      "/FeatureShowcaseImage2.png",
                      "/FeatureShowcaseImage3.png",
                    ]}
                  />
                </div>

                <div>
                  <h4 className="mt-4 text-[40px] z-20 relative text-[#9fd3ff]">
                    {content[index].title}
                  </h4>

                  <p className="mt-2 text-[15px] pr-20 text-gray-400">
                    {content[index].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex justify-end">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[350px] h-[592px]"
          >
            <WaveCarousel
              height={592}
              images={[
                "/FeatureShowcaseImage1.png",
                "/FeatureShowcaseImage2.png",
                "/FeatureShowcaseImage3.png",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
