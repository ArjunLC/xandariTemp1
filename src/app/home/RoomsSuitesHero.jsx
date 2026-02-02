"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const rooms = [
  "Xandari Costa Rica",
  "Xandari Pearl",
  "Cardamom County",
  "Xandari Riverscapes",
  "Xandari Harbour",
];

const RoomsDataSet = [
  {
    images: ["/RoomsImage.png", "/image1.png", "/image2.png"],
    roomName: "PEARL SUITE VILLA",
    person: "2 Persons",
    count: "56 m²",
    price: "From $180",
    title: "Xandari Costa Rica",
  },
  {
    images: ["/image1.png", "/RoomsImage.png", "/image1.png", "/image3.png"],
    roomName: "PEARL SUITE VILLA",
    person: "4 Persons",
    count: "60 m²",
    price: "From $280",
    title: "Xandari Pearl",
  },
  {
    images: ["/image3.png", "/image1.png", "/image2.png"],
    roomName: "PEARL SUITE VILLA",
    person: "10 Persons",
    count: "56 m²",
    price: "From $380",
    title: "Cardamom County",
  },
  {
    images: ["/image1.png", "/image3.png", "/image2.png"],
    roomName: "PEARL SUITE VILLA",
    person: "5 Persons",
    count: "56 m²",
    price: "From $480",
    title: "Xandari Riverscapes",
  },
  {
    images: ["/image2.png", "/image1.png", "/image3.png"],
    roomName: "PEARL SUITE VILLA",
    person: "6 Persons",
    count: "56 m²",
    price: "From $980",
    title: "Xandari Harbour",
  },
];

const RoomsSuitesHero = () => {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const swiperRef = useRef(null);

  const handleRoomChange = (room) => {
    setActiveRoom(room);
    // Restart autoplay after room change
    setTimeout(() => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }, 0);
  };

  const currentRoom = RoomsDataSet.find((item) => item.title === activeRoom);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Swiper
          key={activeRoom}
          modules={[Autoplay]}
          effect="fade"
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full w-full"
        >
          {currentRoom.images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={currentRoom.roomName}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Adjustable black shade - change the number (0-100) to control darkness */}
              <div className="absolute inset-0 bg-black/40" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.47)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl px-10">
        {/* Left */}
        <div className="flex w-1/3 flex-col justify-center gap-4">
          <h2 className="mb-6 text-3xl font-light">Rooms & Suites</h2>

          {rooms.map((room) => (
            <button
              key={room}
              onClick={() => handleRoomChange(room)}
              className={`rounded-full px-5 py-3 text-left backdrop-blur-md transition ${
                room === activeRoom
                  ? "bg-[#27388040]"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {room}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex w-2/3 flex-col items-end justify-center text-center">
          <div className="text-5xl font-semibold tracking-wide">
            <h1>{currentRoom.roomName.split(" ")[0]}</h1>
            <h1>{currentRoom.roomName.split(" ").slice(1).join(" ")}</h1>
          </div>

          <div className="mt-4 flex w-[18rem] justify-center gap-6 text-sm opacity-80">
            <span>{currentRoom.person}</span>
            <span>{currentRoom.count}</span>
            <span>{currentRoom.price}</span>
          </div>

          <div className="w-[275px]">
            <button className="mt-14 w-[14rem] rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSuitesHero;
