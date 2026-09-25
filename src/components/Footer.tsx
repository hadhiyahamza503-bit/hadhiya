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
    <footer className="bg-[#130103] text-[#FFF2D1] border-t-2 border-[#FFD600]/45 relative">
      {/* Top subtle golden-yellow accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFE600] to-transparent opacity-90" />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD600] shadow-lg bg-[#2E050D] flex-shrink-0">
                <img
                  src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                  alt="Yamama Shawaya Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D] tracking-wider block leading-none">
                  YAMAMA
                </span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#FFD600] uppercase block mt-1">
                  SHAWAYA
                </span>
                <span className="text-[10px] font-semibold text-[#FFE600] tracking-widest uppercase">
                  Refill Your Energy
                </span>
              </div>
            </div>

            <p className="font-heading text-xs uppercase tracking-[0.18em] text-[#FFE600] font-semibold">
              &ldquo;{RESTAURANT_INFO.motto}&rdquo;
            </p>

            <p className="text-sm text-[#FFF2D1]/85 leading-relaxed font-light">
              Arabic slow-fired charcoal chicken, savory shawaya, and seasoned rice combinations crafted for authentic taste and family gatherings.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#FFE600] font-bold border-b border-[#FFD600]/50 pb-1">
                Google Rating: {RESTAURANT_INFO.googleRating}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFE600] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#FFF2D1]/85 hover:text-[#FFE600] transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFE600] mb-4">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-xs text-[#FFF2D1]/90">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.road}, {RESTAURANT_INFO.address.locality}, {RESTAURANT_INFO.address.city}, Kerala {RESTAURANT_INFO.address.pincode}
                </span>
              </p>
              <p className="flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-[#FFD600] shrink-0" />
                <span className="font-bold text-[#FFFDE7]">{RESTAURANT_INFO.hours.display}</span>
              </p>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFE600] mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              {RESTAURANT_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="flex items-center gap-2 text-[#FFF2D1]/90 hover:text-[#FFE600] transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
                  <span className="font-semibold">{phone.display}</span>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <span className="text-[11px] text-[#FFD600]/80 block font-medium">
                Dine-in · Takeaway · Home Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#FFD600]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFD600]/80">
          <p>
            &copy; {new Date().getFullYear()} Yamama Shawaya. All rights reserved. Angadipuram, Perinthalmanna, Kerala.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-[#FFE600] hover:text-[#FFFDE7] transition-colors p-2 rounded-lg bg-[#2E050D] border border-[#FFD600]/50 focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
