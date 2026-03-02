import blueyLogo from '../assets/blueys-logo.jpg';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-charcoal text-white pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] -mt-8 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

          <div className="md:col-span-4 flex flex-col gap-6">
            <a href="#" aria-label="Blueys Pool Service — Home" className="block w-fit">
              <img
                src={blueyLogo}
                alt="Blueys Pool Service Logo"
                className="h-10 md:h-12 w-auto object-contain rounded"
              />
            </a>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Servicing Sutherland Shire, Southern Sydney, St George area, Eastern Suburbs and beyond with over 20 years of pool care experience.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:0415056275" className="flex items-center gap-2 hover:text-aqua transition-colors font-medium text-white">
                <Phone size={14} className="text-aqua" />
                0415 056 275
              </a>
              <a href="mailto:blueyspools@yahoo.com" className="flex items-center gap-2 hover:text-aqua transition-colors text-cream/70">
                <Mail size={14} className="text-aqua" />
                blueyspools@yahoo.com
              </a>
              <div className="flex items-center gap-2 text-cream/70">
                <MapPin size={14} className="text-aqua" />
                Caringbah South, NSW 2229
              </div>
              <div className="flex items-center gap-2 text-cream/70">
                <Clock size={14} className="text-aqua" />
                Mon – Sat, 7:00AM – 5:00PM
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/Alexpoolandgarden" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-aqua/20 transition-colors" aria-label="Facebook">
                <Facebook size={14} className="text-aqua" />
              </a>
            </div>
          </div>

          <nav aria-label="Services" className="md:col-span-2 md:col-start-6 flex flex-col gap-3">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-3">Services</h4>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Pool Cleaning</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Regular Maintenance</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Pump & Equipment Repairs</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Pool Renovations</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Pool Construction</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Heating Repairs</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Pool Plumbing</a>
          </nav>

          <nav aria-label="Service Areas" className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-3">Areas</h4>
            <span className="text-cream/70 text-sm">Caringbah South</span>
            <span className="text-cream/70 text-sm">Sutherland Shire</span>
            <span className="text-cream/70 text-sm">Cronulla</span>
            <span className="text-cream/70 text-sm">Miranda</span>
            <span className="text-cream/70 text-sm">Eastern Suburbs</span>
            <span className="text-cream/70 text-sm">St George Area</span>
            <span className="text-cream/70 text-sm">Southern Sydney</span>
          </nav>

          <nav aria-label="Company" className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-3">Company</h4>
            <a href="#story" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">About Us</a>
            <a href="#reviews" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Testimonials</a>
            <a href="#services" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Our Services</a>
            <a href="#contact" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Contact Us</a>
            <a href="#recovery" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Green Pool Recovery</a>
            <a href="#quote" className="hover-lift text-cream/70 hover:text-aqua transition-colors text-sm">Get A Quote</a>
          </nav>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-cream/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Blueys Pool Service. All rights reserved.</p>
            <span className="hidden md:inline text-cream/20">|</span>
            <span className="text-xs font-mono tracking-widest uppercase">ABN: XX XXX XXX XXX</span>
          </div>

          <div className="flex gap-6 text-sm text-cream/60">
            <a href="#" className="hover:text-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
