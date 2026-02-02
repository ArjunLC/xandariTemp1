"use client";

import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Image from "next/image";
import ExperienceSection from "./ExperienceSection";
import ImageOverlayCard from "./ImageOverlayCard";
import RoomsSuitesHero from "./RoomsSuitesHero";
import FeatureShowcase from "./FeatureShowcase";
import DestinationWeddingSection from "./DestinationWeddingSection";
import TrustedSection from "./TrustedSection";
import Footer from "./Footer";
import SliderRaper from "./SliderRaper";
import Luxury from "./Luxury";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveTransition from "@/components/WaveTransition";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Create arch animations for each section transition
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      // Create the scroll-triggered animation
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate the arch curve
            // At progress 0 (section entering): full arch (100px curve)
            // At progress 0.5 (section halfway): peak arch
            // At progress 1 (section at top): flat (0px curve)

            // Create a smooth transition curve
            const archHeight = Math.sin(progress * Math.PI) * 80; // Max 80px arch height

            // Create SVG path for smooth arch
            // The arch curves upward from bottom
            const path = `path('
              M 0,${archHeight}
              Q 25,${archHeight * 0.8} 50,0
              T 100,${archHeight}
              L 100,100
              L 0,100
              Z
            ')`;

            gsap.set(section, {
              clipPath: path,
            });
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-white">
      <div className="relative h-screen w-screen max-w-[95rem] overflow-hidden ">
        {/* Video Background */}
        <video
          src="/proxy.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute scale-150 inset-0 h-full w-full object-cover"
        />

        {/* Header on top */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Text Content */}
        <div className="relative top-[250px] left-[53rem] z-20 flex">
          <div className=" text-white w-[48rem]">
            <h1 className=" text-[80px] font-bold leading-tight font-inter">
              Inspired <br /> Travels in India <br /> & Costa Rica
            </h1>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="relative bg-white">
        <ExperienceSection />
      </div>

      <div ref={addToRefs} className="relative bg-white">
        <SliderRaper />
      </div>

      <div ref={addToRefs} className="relative bg-white">
        <Luxury />
      </div>

      <div ref={addToRefs} className="relative bg-[#0c0c0c]">
        <RoomsSuitesHero />
      </div>

      <div ref={addToRefs} className="relative bg-white">
        <FeatureShowcase />
      </div>

      <div ref={addToRefs} className="relative bg-white">
        <DestinationWeddingSection />
      </div>

      <div ref={addToRefs} className="relative bg-black">
        <TrustedSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
