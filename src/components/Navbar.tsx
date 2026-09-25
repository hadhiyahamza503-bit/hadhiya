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
      {/* Top Banner Notice: Red & Yellow Shades Theme */}
      <div className="bg-gradient-to-r from-[#3D0811] via-[#240409] to-[#3D0811] border-b border-[#FFE500]/30 text-[11px] sm:text-xs py-1.5 px-4 text-white flex items-center justify-between z-40 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-[#FFE500] shadow-[0_0_8px_#FFE500] animate-pulse" />
            <span className="text-[#FFD700] font-bold tracking-wide">Open Daily</span>
            <span className="hidden sm:inline text-[#FFE500]/60">·</span>
            <span className="hidden sm:inline text-white/90">12:30 PM – 12:00 AM (Midnight)</span>
            <span className="hidden md:inline text-[#FFE500]/60">·</span>
            <span className="hidden md:inline font-semibold">
              <span className="text-[#FFD700]">Angadipuram</span> <span className="text-white">/ Perinthalmanna</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
              className="text-[#FFD700] hover:text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FFE500]" />
              <span className="text-white hover:text-[#FFD700]">{RESTAURANT_INFO.phones[0].display}</span>
            </a>
            <span className="text-[#FFE500]/40 hidden xs:inline">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phones[1].raw}`}
              className="text-white hover:text-[#FFD700] hidden xs:inline transition-colors"
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
            ? 'bg-[#1C0308]/98 backdrop-blur-md border-b-2 border-[#FFE500]/40 shadow-2xl py-3 shadow-black/80'
            : 'bg-gradient-to-b from-[#28040C]/98 via-[#1F0309]/92 to-[#180205]/90 backdrop-blur-sm border-b border-[#FFE500]/30 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Wordmark - Half Gold Half White Write on Red Background */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE500] rounded-lg p-1"
          >
            {/* Mascot Circular Emblem */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#FFE500] shadow-[0_0_15px_rgba(255,229,0,0.4)] bg-[#350710] flex-shrink-0 group-hover:scale-105 group-hover:border-white transition-all duration-300">
              <img
                src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                alt="Yamama Shawaya Official Mascot Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              {/* Half Gold Half White Write */}
              <div className="font-heading font-black text-xl sm:text-2xl tracking-wider leading-none drop-shadow-sm flex items-center gap-1.5">
                <span className="text-[#FFD700] drop-shadow-[0_1px_8px_rgba(255,215,0,0.5)]">
                  YAMAMA
                </span>
                <span className="text-white drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]">
                  SHAWAYA
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FFE500] uppercase leading-tight">
                  CHARCOAL GRILL
                </span>
                <span className="text-[9px] font-semibold text-white/80 hidden sm:inline">
                  • Refill Your Energy
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Red & Yellow Shades Theme with Gold & White highlights */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 hover:text-[#FFE500] ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#FFE500] font-bold'
                    : 'text-white/90 hover:text-[#FFE500]'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B91C1C] via-[#FFE500] to-[#FFD000] rounded-full shadow-[0_0_10px_#FFE500]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#FFE500]/30 hover:shadow-[#FFE500]/50 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#FFE500] border border-[#FFF8B3]"
            >
              <span>Order Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 text-[#FFE500] hover:text-white rounded-lg border border-[#FFE500]/40 bg-[#350710]/90 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#24040A]/98 border-b-2 border-[#FFE500]/40 px-6 py-6 transition-all animate-fadeIn shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-[#FFE500]/15 flex items-center justify-between ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#FFE500] font-bold'
                      : 'text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[#FFE500] text-xs font-bold">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#FFE500]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] text-[#3D070F] font-black text-center rounded-xl text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all border border-[#FFF8B3]"
              >
                Order via WhatsApp / Call
              </button>
              <div className="text-center text-xs text-white/90 pt-2 font-medium">
                <span className="text-[#FFD700]">Open Daily:</span> 12:30 PM – 12:00 AM • Calicut Road, Angadipuram
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
