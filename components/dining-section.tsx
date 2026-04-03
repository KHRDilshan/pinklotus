'use client';

export function DiningSection() {
  const restaurants = [
    {
      name: 'BLOSSOM',
      cuisine: 'Contemporary Fine Dining',
      description: 'Award-winning cuisine crafted by our executive chefs'
    },
    {
      name: 'LOTUS GARDEN',
      cuisine: 'Asian Fusion',
      description: 'Modern interpretation of traditional Asian flavors'
    },
    {
      name: 'ROSE CAFÉ',
      cuisine: 'All-Day Dining',
      description: 'Casual elegance with an international menu'
    },
    {
      name: 'TWILIGHT BAR',
      cuisine: 'Cocktails & Lounge',
      description: 'Sophisticated drinks with panoramic city views'
    }
  ];

  return (
    <section id="dining" className="py-20 px-6 bg-primary/2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest font-light mb-4">
            CULINARY EXCELLENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
            World-Class Dining
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Indulge in exceptional culinary experiences across our diverse dining venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index} 
              className="group border border-black/5 rounded-lg p-8 hover:border-accent/30 hover:shadow-lg transition-all cursor-pointer bg-white"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg mb-6 group-hover:from-accent/10 transition-colors">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-primary/20 text-sm tracking-widest">DINING IMAGE</p>
                </div>
              </div>
              <h3 className="text-2xl font-light tracking-wide text-primary mb-2">
                {restaurant.name}
              </h3>
              <p className="text-accent text-xs tracking-widest font-medium mb-3">
                {restaurant.cuisine}
              </p>
              <p className="text-primary/70 font-light mb-6">
                {restaurant.description}
              </p>
              <button className="text-xs tracking-widest text-primary/60 hover:text-accent transition-colors font-medium">
                RESERVE A TABLE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
