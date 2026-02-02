"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdLocationOn } from "react-icons/md";

export default function InteractiveMap() {
  const locations = [
    {
      id: "costa",
      name: "Xandari Costa Rica",
      x: 28,
      y: 32,
      image: "/image3.png",
      description: "Alajuela",
    },
    {
      id: "pearl",
      name: "Xandari Pearl",
      x: 92,
      y: 28,
      image: "/image1.png",
      description: "Zanzibar",
    },
    {
      id: "cardamom",
      name: "Cardamom County",
      x: 75,
      y: 50,
      image: "/image2.png",
      description: "Thekkady",
    },
    {
      id: "riverscapes",
      name: "Xandari Riverscapes",
      x: 72,
      y: 75,
      image: "/image3.png",
      description: "Coorg",
    },
    {
      id: "harbour",
      name: "Xandari Harbour",
      x: 85,
      y: 40,
      image: "/image1.png",
      description: "Bolghatty",
    },
  ];

  const [active, setActive] = useState(null);

  // Calculate transform to center the clicked location with bounds checking
  const getTransform = () => {
    if (!active) return { x: 0, y: 0 };

    // Calculate the offset needed to center the active location
    // Adjusted for the larger container (150% size, offset by -25%)
    let x = -(active.x - 50) * 0.67; // Scale down since container is larger
    let y = -(active.y - 50) * 0.67;

    // Constrain to reasonable limits to keep map visible
    x = Math.max(Math.min(x, 15), -15);
    y = Math.max(Math.min(y, 15), -15);

    return { x, y };
  };

  const transform = getTransform();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0e1a]">
      <div 
        className="relative h-full w-full"
        onClick={() => setActive(null)}
      >
        {/* MAP ZOOM LAYER */}
        <motion.div
          animate={{
            x: `${transform.x}%`,
            y: `${transform.y}%`,
          }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute h-full w-full"
          style={{
            left: '-25%',
            top: '-25%',
            width: '150%',
            height: '150%',
          }}
        >
          {/* Map container with background image */}
          <div 
            className="relative h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/map2.svg')",
            }}
          >
            {/* LOCATION ICONS */}
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="absolute"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                }}
              >
                {/* CARD ABOVE PIN */}
                <AnimatePresence>
                  {active?.id === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute bottom-12 left-0 w-72 -translate-x-1/2"
                      style={{ transformOrigin: "bottom center" }}
                    >
                      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                        {/* Image */}
                        <div className="relative h-48 w-full">
                          <Image
                            src={loc.image}
                            alt={loc.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900">
                            {loc.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {loc.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow pointer */}
                      <div className="absolute left-1/2 top-full -translate-x-1/2">
                        <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* LOCATION PIN */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(active?.id === loc.id ? null : loc);
                  }}
                  animate={{
                    scale: active?.id === loc.id ? 1 : .8,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`relative -translate-x-1/2 -translate-y-full transition-all ${
                    active?.id === loc.id
                      ? "text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,1)]"
                      : "text-red-400 hover:text-red-300"
                  }`}
                >
                  <MdLocationOn size={48} />
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RESORT LIST - LEFT SIDE */}
        <div className="absolute left-8 top-1/2 z-20 -translate-y-1/2 space-y-4">
          {locations.map((loc) => (
            <motion.button
              key={loc.id}
              onClick={(e) => {
                e.stopPropagation();
                setActive(active?.id === loc.id ? null : loc);
              }}
              whileHover={{ x: 6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block text-left text-lg font-medium transition-all duration-300 ${
                active?.id === loc.id
                  ? "text-[#BFA280] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  : "text-[#e1c7aa] hover:text-gray-200"
              }`}
            >
              {loc.name}
            </motion.button>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>
    </section>
  );
}