'use client';

import Lottie from 'lottie-react';
import lotusBoomAnimation from '@/public/lotus-bloom.json';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="h-32 w-32">
          <Lottie 
            animationData={lotusBoomAnimation} 
            loop={true}
            autoplay={true}
          />
        </div>
        <p className="text-sm tracking-widest text-primary/60">
          PINK LOTUS HOTEL
        </p>
      </div>
    </div>
  );
}
