"use client";

import { useEffect, useRef, useState } from "react";
import ImageOverlayCard from "./ImageOverlayCard";
import OverlayCard from "@/components/OverlayCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SliderRaper = () => {
  const imageList = [
    {
      id: 1,
      title: "Elegant & Secure Living",
      description:
        "Experience a thoughtfully planned environment featuring lush landscaped gardens, serene walkways, and advanced security—crafted to offer comfort, safety, and peace of mind for your family.",
      imageList: "/resortImg.png",
    },
    {
      id: 2,
      title: "Nature-Inspired Landscapes",
      description:
        "Stroll through scenic arcades, decorative fountains, and green open spaces designed to blend natural beauty with modern living for a refreshing everyday lifestyle.",
      imageList: "/image1.png",
    },
    {
      id: 3,
      title: "Family-Friendly Outdoor Spaces",
      description:
        "Enjoy tree-shaded playgrounds, safe recreational zones, and picture-perfect pathways where children play freely and families create lasting memories.",
      imageList: "/image2.png",
    },
    {
      id: 4,
      title: "Resort-Style Community Living",
      description:
        "Indulge in resort-inspired amenities including elegant gazebos, tranquil seating areas, and leisure spaces that bring relaxation and luxury closer to home.",
      imageList: "/image3.png",
    },
  ];

  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const image = section.querySelector(".image-card"); // class inside ImageOverlayCard

      gsap.set(image, { y: 0, opacity: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => {
          setActiveIndex(index);
          gsap.fromTo(
            image,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          );
        },

        onLeave: () => {
          gsap.to(image, {
            y: -100, // 🔼 move UP when removed
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
        },

        onEnterBack: () => {
          setActiveIndex(index);
          gsap.fromTo(
            image,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          );
        },

        onLeaveBack: () => {
          gsap.to(image, {
            y: 100, // 🔽 move DOWN when scrolling back
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative">
      <OverlayCard itemData={imageList[activeIndex]} />

      {imageList.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="sticky top-0"
        >
          <ImageOverlayCard itemList={item} />
        </div>
      ))}
    </div>
  );
};

export default SliderRaper;
