'use client';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 text-accent text-sm tracking-widest font-light">
          WELCOME TO SERENITY
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-primary mb-8 text-balance">
          Pink Lotus
        </h1>

        <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance">
          Experience unparalleled luxury in the heart of the city. Indulge in our world-class amenities, exquisite dining, and personalized service.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-accent text-white text-sm tracking-widest font-medium hover:bg-accent/90 transition-colors rounded-sm">
            EXPLORE SUITES
          </button>
          <button className="px-10 py-4 border-2 border-accent text-accent text-sm tracking-widest font-medium hover:bg-accent hover:text-white transition-colors rounded-sm">
            LEARN MORE
          </button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-20 relative">
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 text-accent/20">🌸</div>
                <p className="text-primary/30 text-sm tracking-widest">HERO IMAGE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
