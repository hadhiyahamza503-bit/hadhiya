import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#120104] text-white border-t-2 border-[#FFE500]/40 relative">
      {/* Top subtle golden-yellow accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFE500] to-transparent opacity-90" />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFE500] shadow-lg bg-[#2E050D] flex-shrink-0">
                <img
                  src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                  alt="Yamama Shawaya Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                {/* Half Gold Half White Brand */}
                <div className="font-heading font-black text-2xl tracking-wider leading-none flex items-center gap-1.5">
                  <span className="text-[#FFD700] drop-shadow-[0_1px_8px_rgba(255,215,0,0.5)]">
                    YAMAMA
                  </span>
                  <span className="text-white drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]">
                    SHAWAYA
                  </span>
                </div>
                <span className="text-xs font-bold tracking-[0.25em] text-[#FFE500] uppercase block mt-1">
                  CHARCOAL GRILL
                </span>
                <span className="text-[10px] font-semibold text-white/80 tracking-widest uppercase">
                  Refill Your Energy
                </span>
              </div>
            </div>

            <p className="font-heading text-xs uppercase tracking-[0.18em] font-semibold">
              <span className="text-[#FFD700]">&ldquo;{RESTAURANT_INFO.motto.split(' ')[0]}</span>{' '}
              <span className="text-white">{RESTAURANT_INFO.motto.split(' ').slice(1).join(' ')}&rdquo;</span>
            </p>

            <p className="text-sm text-white/85 leading-relaxed font-light">
              Arabic slow-fired charcoal chicken, savory shawaya, and seasoned rice combinations crafted for authentic taste and family gatherings.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold border-b border-[#FFE500]/50 pb-1">
                <span className="text-[#FFD700]">Google Rating:</span> <span className="text-white">{RESTAURANT_INFO.googleRating}</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              <span className="text-[#FFD700]">Quick</span> <span className="text-white">Explore</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/85 hover:text-[#FFE500] transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              <span className="text-[#FFD700]">Visit</span> <span className="text-white">Us</span>
            </h4>
            <div className="space-y-2.5 text-xs text-white/90">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.road}, {RESTAURANT_INFO.address.locality}, {RESTAURANT_INFO.address.city}, Kerala {RESTAURANT_INFO.address.pincode}
                </span>
              </p>
              <p className="flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-[#FFE500] shrink-0" />
                <span className="font-bold text-white"><span className="text-[#FFD700]">Hours:</span> {RESTAURANT_INFO.hours.display}</span>
              </p>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              <span className="text-[#FFD700]">Direct</span> <span className="text-white">Inquiries</span>
            </h4>
            <div className="space-y-2 text-xs">
              {RESTAURANT_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#FFE500] transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span className="font-semibold">{phone.display}</span>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <span className="text-[11px] text-white/80 block font-medium">
                <span className="text-[#FFD700]">Services:</span> Dine-in · Takeaway · Home Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#FFE500]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-[#FFD700]">Yamama</span> <span className="text-white">Shawaya</span>. All rights reserved. Angadipuram, Perinthalmanna, Kerala.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-white hover:text-[#FFE500] transition-colors p-2 rounded-lg bg-[#2E050D] border border-[#FFE500]/50 focus:outline-none"
          >
            <span><span className="text-[#FFD700]">Back to</span> top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFE500]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
