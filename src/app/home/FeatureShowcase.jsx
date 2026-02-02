"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaveImage from "@/components/WaveImage";

const FeatureShowcase = () => {
  return (
    <section className="relative h-auto bg-[#0c0c0c] overflow-hidden">
      {/* MAIN FLEX WRAPPER */}
      <div className="mx-auto max-w-[1300px] h-full py-10 flex items-center gap-24 relative">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between h-full relative flex-1">
          {/* TOP ROW (small image + heading) */}
          <div className="flex items-start">
            {/* Small image */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[207px] h-[260px] flex-shrink-0"
            >
              {/* <Image
                src="/FeatureShowcaseImage3.png"
                fill
                className="object-cover"
                alt=""
              /> */}
              <WaveImage src="/FeatureShowcaseImage3.png" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[80px] font-arial mx-[53px] mt-[96px] leading-[80px] font-light text-[#BFA280]"
            >
              Beautiful <br />
              and Secure <br />
              Environment
            </motion.h2>
          </div>
          {/* <div className="flex "> */}
          {/* OVERLAPPING CARD */}
          <div className="w-full mt-[250px] pb-[100px] flex justify-end">
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="flex flex-row-reverse w-[640px]"
            >
              <Image
                src="/FeatureShowcaseImage2.png"
                width={260}
                height={313}
                className="object-cover w-[249px] h-[313px] -translate-x-20"
                alt=""
              />

              <div className="flex flex-col">
                <h4 className="mt-4 text-[40px] text-[#9fd3ff] text-lg z-10">
                  Beautiful and Secure Environment
                </h4>

                <p className="mt-2 text-[15px] pr-20 text-gray-400 leading-relaxed">
                  Discover opulent gardens, graceful gazebos, scenic arcades,
                  picture-perfect pathways designed for your family.
                </p>
              </div>
            </motion.div>
          </div>
          {/* </div> */}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-1 justify-end">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* <Image
              src="/FeatureShowcaseImage1.png"
              width={560}
              height={740}
              className="object-cover w-[350px] h-[492px]"
              alt=""
            /> */}
            <div className="object-cover w-[350px] h-[592px]">
              <WaveImage src="/FeatureShowcaseImage1.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
