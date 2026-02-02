"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveImage from "@/components/WaveImage";

gsap.registerPlugin(ScrollTrigger);

const Luxury = () => {
  const leftImg = useRef(null);
  const rightImg = useRef(null);
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);
  const mainText = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [leftImg.current, rightImg.current],
        {
          y: -150, // Start from above (negative value)
          opacity: 0,
        },
        {
          y: 40, // End at normal position
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play none none reverse",
            // markers: true,  // Uncomment to debug
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx2 = gsap.context(() => {
      gsap.fromTo(
        [mainText.current],
        {
          y: "100vh", // Start from above (negative value)
          opacity: 0,
        },
        {
          y: -10, // End at normal position
          opacity: 1,
          //   duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );
    }, mainText);

    return () => ctx2.revert();
  }, []);
  useEffect(() => {
    const ctx3 = gsap.context(() => {
      gsap.fromTo(
        [descriptionRef.current],
        {
          y: -100, // Start from above (negative value)
          opacity: 0,
        },
        {
          y: 20, // End at normal position
          opacity: 1,
          //   duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );
    }, descriptionRef);

    return () => ctx3.revert();
  }, []);

  return (
    <div className="pt-[153px] bg-white bg-[url('/BgImage.png')] bg-cover bg-center bg-no-repeat">
      <div
        ref={containerRef}
        className="flex containerMax gap-4 justify-between"
      >
        {/* Left Image */}
        <div ref={leftImg} className="relative w-[323px] h-[403px]">
          <WaveImage src="/image1.png" />
          {/* <Image
            src="/image1.png"
            alt="Resort Logo"
            fill
            className="object-fill"
          /> */}
        </div>

        {/* Text */}
        <p
          ref={descriptionRef}
          className="text-[#273880] w-[604px] h-[170px] mt-10 font-arial text-[27px] text-justify"
        >
          An exquisite collection of eco-luxury resorts across Kerala, Xandari
          Resorts offers thoughtfully designed stays set amidst pristine
          landscapes.
        </p>

        {/* Right Image */}
        <div ref={rightImg} className="relative w-[323px] h-[403px]">
          <WaveImage src="/image1.png" />
        </div>
      </div>

      {/* Center Video */}
      <div className="relative w-[446px] h-[717px] mx-auto -top-[10rem]">
        <video
          src="/resortImage.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <h1
          ref={mainText}
          className="
    absolute top-[200px] left-1/2 -translate-x-1/2
    tracking-[50px] text-[114px] font-bold uppercase
    bg-[url('/testImag.jpg')] bg-cover bg-center
    text-transparent bg-clip-text
  "
        >
          Loremipsum
        </h1>
      </div>
    </div>
  );
};

export default Luxury;
