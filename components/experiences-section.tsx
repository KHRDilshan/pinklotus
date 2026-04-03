'use client';

export function ExperiencesSection() {
  const experiences = [
    {
      title: 'SPA & WELLNESS',
      description: 'Rejuvenate your mind and body with our world-class spa treatments and wellness programs'
    },
    {
      title: 'CONCIERGE SERVICES',
      description: 'Our dedicated concierge team arranges personalized experiences and local adventures'
    },
    {
      title: 'FITNESS CENTER',
      description: 'State-of-the-art gym with personal trainers and yoga classes'
    },
    {
      title: 'BUSINESS FACILITIES',
      description: 'Complete meeting and conference rooms with high-tech amenities'
    },
    {
      title: 'SWIMMING POOL',
      description: 'Elegant infinity pool overlooking the city skyline'
    },
    {
      title: 'EVENTS & WEDDINGS',
      description: 'Stunning venues for weddings, conferences, and special occasions'
    }
  ];

  return (
    <section id="experiences" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest font-light mb-4">
            EXPERIENCES
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
            Exceptional Amenities
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Discover a world of luxury amenities designed for your comfort and enjoyment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group p-8 border border-black/5 rounded-lg hover:border-accent/30 hover:shadow-md transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg mb-6 flex items-center justify-center text-white font-light text-lg group-hover:shadow-lg transition-all">
                {index + 1}
              </div>
              <h3 className="text-lg font-light tracking-wide text-primary mb-3">
                {exp.title}
              </h3>
              <p className="text-primary/70 font-light text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
