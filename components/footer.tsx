'use client';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-widest mb-4">
              PINK LOTUS
            </h3>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              Luxury hospitality experience in the heart of the city
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-6 text-white/90">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              <li><a href="#suites" className="text-white/70 hover:text-accent text-sm transition-colors font-light">Suites</a></li>
              <li><a href="#dining" className="text-white/70 hover:text-accent text-sm transition-colors font-light">Dining</a></li>
              <li><a href="#experiences" className="text-white/70 hover:text-accent text-sm transition-colors font-light">Experiences</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent text-sm transition-colors font-light">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-6 text-white/90">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="text-white/70">
                <span className="block text-white/50 text-xs tracking-widest mb-1">PHONE</span>
                +1 (555) 123-4567
              </li>
              <li className="text-white/70">
                <span className="block text-white/50 text-xs tracking-widest mb-1">EMAIL</span>
                reservations@pinklotus.com
              </li>
              <li className="text-white/70">
                <span className="block text-white/50 text-xs tracking-widest mb-1">ADDRESS</span>
                123 Luxury Avenue, City Center
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-6 text-white/90">
              HOURS
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li>
                <span className="block text-white/50 text-xs tracking-widest mb-1">RECEPTION</span>
                24/7
              </li>
              <li>
                <span className="block text-white/50 text-xs tracking-widest mb-1">SPA</span>
                7:00 AM - 10:00 PM
              </li>
              <li>
                <span className="block text-white/50 text-xs tracking-widest mb-1">DINING</span>
                6:00 AM - 11:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="max-w-md">
            <h3 className="text-sm font-medium tracking-widest mb-4 text-white/90">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/50 rounded-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-white text-xs font-medium tracking-widest hover:bg-accent/90 transition-colors rounded-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 font-light">
          <p>&copy; 2024 Pink Lotus Hotel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
