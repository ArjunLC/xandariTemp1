"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveImage from "@/components/WaveImage";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const centerImgRef = useRef(null);
  const buttonRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT – slow
      gsap.fromTo(
        textRef.current,
        { y: 80, opacity: 0 },
        {
          y: -40,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // CENTER IMAGE – medium
      gsap.fromTo(
        centerImgRef.current,
        { y: 150 },
        {
          y: -150,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // BUTTON – follows center image
      gsap.fromTo(
        buttonRef.current,
        { y: 120, opacity: 0 },
        {
          y: -120,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // RIGHT TOP IMAGE – faster
      gsap.fromTo(
        topImgRef.current,
        { y: 100 },
        {
          y: -200,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // RIGHT BOTTOM IMAGE – fastest
      gsap.fromTo(
        bottomImgRef.current,
        { y: 200 },
        {
          y: -300,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-auto bg-white px-10 pt-20 pb-30 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row gap-16">
        {/* LEFT TEXT */}
        <div ref={textRef} className="flex-1">
          <p className="text-[#273880] text-[38px] leading-[50px] max-w-[1000px] font-arial">
            An exquisite collection of eco-luxury resorts across Kerala, Xandari
            Resorts offers thoughtfully designed stays set amidst pristine
            landscapes. Experience refined hospitality, immersive local
            experiences, world-class amenities
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        {/* CENTER CONTENT */}
        <div className="flex-1 relative flex flex-col">
          <div
            ref={centerImgRef}
            className="relative mt-12 w-[505px] h-[473px] top-[210px]"
          >
            {/* <Image
              src="/image2.png"
              alt="Resort"
              fill
              className="object-cover"
            /> */}
            <WaveImage src="/image2.png" />
          </div>

          <div
            ref={buttonRef}
            className="w-[31.5rem] relative flex justify-center top-[321px]"
          >
            <button className="flex items-center gap-2 rounded-[8px] border border-[#273880] px-6 py-3 text-[#273880] text-[15px] hover:bg-[#273880] hover:text-white transition">
              Explore More
              <span className="scale-150 -rotate-45">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 flex flex-col items-end gap-10">
          <div
            ref={topImgRef}
            className="relative w-[316px] h-[349px] top-[35px]"
          >
            {/* <Image src="/image1.png" alt="Resort View" fill /> */}
            <WaveImage src="/image1.png" />
          </div>

          <div
            ref={bottomImgRef}
            className="relative w-[303px] h-[359px] mr-20 top-[196px] right-[174px]"
          >
            {/* <Image src="/image3.png" alt="Walkway" fill /> */}
            <WaveImage src="/image3.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
