import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blueyLogo from '../assets/blueys-logo.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`flex items-center justify-between px-6 py-2 rounded-full transition-all duration-500 w-full max-w-4xl ${scrolled
          ? 'bg-cream/90 backdrop-blur-xl border border-navy/10 shadow-sm text-navy'
          : 'bg-navy/40 backdrop-blur-md text-white border border-white/10'
          }`}
      >
        <a href="#" className="flex items-center" aria-label="Blueys Pool Service — Home">
          <img
            src={blueyLogo}
            alt="Blueys Pool Service Logo"
            className="h-8 md:h-9 w-auto object-contain rounded"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover-lift opacity-80 hover:opacity-100">Services</a>
          <a href="#story" className="hover-lift opacity-80 hover:opacity-100">About Us</a>
          <a href="#reviews" className="hover-lift opacity-80 hover:opacity-100">Reviews</a>
          <a href="#contact" className="hover-lift opacity-80 hover:opacity-100">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:0415056275" className="hidden md:flex items-center gap-2 text-sm font-bold hover:text-aqua transition-colors" aria-label="Call us directly at 0415 056 275">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            0415 056 275
          </a>
          <a
            href="#quote"
            className={`btn-magnetic px-5 py-2 text-sm ${scrolled ? 'bg-navy text-white' : 'bg-aqua text-navy'
              }`}
            aria-label="Get your free pool care quote"
          >
            Get A Quote
          </a>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full mt-2 left-4 right-4 bg-cream/95 backdrop-blur-xl rounded-2xl border border-navy/10 shadow-lg p-6 flex flex-col gap-4 text-navy font-medium">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="tel:0415056275" className="text-aqua font-bold">📞 0415 056 275</a>
        </div>
      )}
    </header>
  );
}
