'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SuitesSection } from '@/components/suites-section';
import { DiningSection } from '@/components/dining-section';
import { ExperiencesSection } from '@/components/experiences-section';
import { Footer } from '@/components/footer';
import { LoadingScreen } from '@/components/loading-screen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <SuitesSection />
      <DiningSection />
      <ExperiencesSection />
      <Footer />
    </main>
  );
}
