'use client';
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative px-6 sm:px-8 md:px-16 lg:px-24 py-32 sm:py-40 md:py-52 lg:py-60"
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
      <div className="relative max-w-6xl mx-auto text-center z-10 px-4 sm:px-0">
        {/* Lotus Icon on top */}
        <Image
          src="/icon-lotus-1.png"
          alt="Pink Lotus Luxury Hotel"
          width={150}
          height={150}
          className="mx-auto mb-4 sm:mb-6 object-contain"
        />

        <h1 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight sm:leading-snug md:leading-normal">
          ENJOY A LUXURY EXPERIENCE
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-light text-balance">
          Experience unparalleled luxury in the heart of the city. Indulge in our world-class amenities, exquisite dining, and personalized service.
        </p>
      </div>
    </section>
  );
}