import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Flame, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'menu', 'gallery', 'reviews', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Notice: Red, Yellow & Golden Mixed Theme */}
      <div className="bg-gradient-to-r from-[#3D0811] via-[#240409] to-[#3D0811] border-b border-[#FFD600]/30 text-[11px] sm:text-xs py-1.5 px-4 text-[#FFF2D1] flex items-center justify-between z-40 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-[#FFE600] shadow-[0_0_8px_#FFE600] animate-pulse" />
            <span className="text-[#FFE600] font-bold tracking-wide">Open Daily</span>
            <span className="hidden sm:inline text-[#FFD600]/60">·</span>
            <span className="hidden sm:inline text-[#FFF2D1]/90">12:30 PM – 12:00 AM (Midnight)</span>
            <span className="hidden md:inline text-[#FFD600]/60">·</span>
            <span className="hidden md:inline text-[#FFD600] font-semibold">Angadipuram / Perinthalmanna</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
              className="text-[#FFE600] hover:text-[#FFFDE7] font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FFD600]" />
              <span>{RESTAURANT_INFO.phones[0].display}</span>
            </a>
            <span className="text-[#FFD600]/40 hidden xs:inline">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phones[1].raw}`}
              className="text-[#FFF2D1] hover:text-[#FFE600] hidden xs:inline transition-colors"
            >
              {RESTAURANT_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A0307]/95 backdrop-blur-md border-b-2 border-[#FFD600]/40 shadow-2xl py-3 shadow-black/80'
            : 'bg-gradient-to-b from-[#26050D]/95 via-[#1D0308]/90 to-[#160205]/85 backdrop-blur-sm border-b border-[#FFD600]/25 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Wordmark - Red, Yellow & Gold Mixed */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600] rounded-lg p-1"
          >
            {/* Mascot Circular Emblem */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#FFD600] shadow-[0_0_15px_rgba(255,214,0,0.35)] bg-[#350710] flex-shrink-0 group-hover:scale-105 group-hover:border-[#FFF066] transition-all duration-300">
              <img
                src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                alt="Yamama Shawaya Official Mascot Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D] tracking-wider leading-none drop-shadow-sm">
                YAMAMA
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FFD600] uppercase leading-tight">
                  SHAWAYA
                </span>
                <span className="text-[9px] font-semibold text-[#FFCA28] hidden sm:inline opacity-90">
                  • Refill Your Energy
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Red & Yellow Golden Mixed Theme */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 hover:text-[#FFE600] ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#FFE600] font-bold'
                    : 'text-[#FFF2D1]/90 hover:text-[#FFE600]'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF4D4D] via-[#FFE600] to-[#FFA000] rounded-full shadow-[0_0_10px_#FFD600]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#FFD600]/30 hover:shadow-[#FFD600]/50 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#FFE600] border border-[#FFF59D]"
            >
              <span>Order Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 text-[#FFE600] hover:text-[#FFFDE7] rounded-lg border border-[#FFD600]/40 bg-[#350710]/90 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#200409]/98 border-b-2 border-[#FFD600]/40 px-6 py-6 transition-all animate-fadeIn shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-[#FFD600]/15 flex items-center justify-between ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#FFE600] font-bold'
                      : 'text-[#FFF2D1]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[#FFD600] text-xs font-bold">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#FFD600]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] text-[#3D070F] font-black text-center rounded-xl text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all border border-[#FFF59D]"
              >
                Order via WhatsApp / Call
              </button>
              <div className="text-center text-xs text-[#FFD600]/90 pt-2 font-semibold">
                Open Daily: 12:30 PM – 12:00 AM • Calicut Road, Angadipuram
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
