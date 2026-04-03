'use client';
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="py-60 px-6 relative"
      style={{
        backgroundImage: "url('/bg-Net.svg'), url('/pinklotus.jpeg')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10 ">
        {/* Lotus Icon on top */}
        <Image
          src="/icon-lotus-1.png"
          alt="Pink Lotus Luxury Hotel"
          width={150}
          height={150}
          className="mx-auto mb-2 object-contain "
        />

        <h1 className="mb-2 text-white text-6xl font-serif">
          ENJOY A LUXURY EXPERIENCE
        </h1>

        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-light  text-balance">
          Experience unparalleled luxury in the heart of the city. Indulge in our world-class amenities, exquisite dining, and personalized service.
        </p>
      </div>
    </section>
  );
}