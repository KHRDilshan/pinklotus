'use client';

import { useEffect, useState } from 'react';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SuitesSection } from '@/components/suites-section';
import { DiningSection } from '@/components/dining-section';
import { ExperiencesSection } from '@/components/experiences-section';
import { Footer } from '@/components/footer';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  const [loadingOpacity, setLoadingOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingOpacity(0); // fade out loader
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      
      {/* 🏨 Main Content (always rendered) */}
      <main className="bg-white">
        <Header />
        <HeroSection />
        <SuitesSection />
        <DiningSection />
        <Footer />
      </main>

      {/* 🌸 Loading Overlay */}
      <div
        className="fixed inset-0 z-[9999] transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: loadingOpacity, pointerEvents: loadingOpacity === 0 ? 'none' : 'auto' }}
      >
        <LoadingScreen />
      </div>
    </div>
  );
}