'use client';

export function SuitesSection() {
  const suites = [
    {
      name: 'DELUXE ROOM',
      description: 'Elegantly appointed rooms with premium amenities',
      price: '$350',
      features: ['King Bed', 'City View', 'Marble Bathroom']
    },
    {
      name: 'EXECUTIVE SUITE',
      description: 'Spacious suites with separate living areas',
      price: '$550',
      features: ['King Bed', 'Panoramic View', 'Spa Bath']
    },
    {
      name: 'PRESIDENTIAL SUITE',
      description: 'The ultimate luxury experience',
      price: '$1,200',
      features: ['Multiple Beds', 'Private Terrace', 'Jacuzzi']
    },
    {
      name: 'LOTUS VILLA',
      description: 'Exclusive villa with private gardens',
      price: '$2,000',
      features: ['Multiple Beds', 'Private Pool', 'Personal Butler']
    }
  ];

  return (
    <section id="suites" className="py-20 px-6 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest font-light mb-4">
            OUR ACCOMMODATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
            Luxurious Suites
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Each suite is thoughtfully designed to provide the utmost comfort and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {suites.map((suite, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/5 rounded-lg mb-6 overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-primary/20 text-sm tracking-widest">SUITE IMAGE</p>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-primary mb-2">
                {suite.name}
              </h3>
              <p className="text-primary/70 font-light mb-4 text-sm">
                {suite.description}
              </p>
              <div className="flex gap-3 mb-4 flex-wrap">
                {suite.features.map((feature, idx) => (
                  <span key={idx} className="text-xs text-accent/80 border border-accent/30 px-3 py-1 rounded-full font-light">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <span className="text-2xl font-light text-accent">{suite.price}</span>
                <button className="text-xs tracking-widest text-primary/60 hover:text-accent transition-colors font-medium">
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
