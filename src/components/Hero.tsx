import React from 'react';
import { ArrowDown, Flame, UtensilsCrossed, PhoneCall, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#160205]"
    >
      {/* Background Hero Image with Deep Ruby Red & Golden Ambiance Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_shawaya_rice_1790141349164.jpg"
          alt="Yamama charcoal grilled shawaya chicken served with specially flavored Arabic rice"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.62] contrast-[1.15]"
        />
        {/* Rich Velvet Red & Golden Warm Glow Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160205] via-[#2F050D]/85 to-[#160205]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(22,2,5,0.85)_100%)]" />
      </div>

      {/* Decorative Golden-Yellow Filigree Corner Accents */}
      <div className="absolute top-8 left-8 hidden lg:block pointer-events-none opacity-60">
        <div className="w-16 h-16 border-t-2 border-l-2 border-[#FFD600]" />
      </div>
      <div className="absolute top-8 right-8 hidden lg:block pointer-events-none opacity-60">
        <div className="w-16 h-16 border-t-2 border-r-2 border-[#FFD600]" />
      </div>
      <div className="absolute bottom-8 left-8 hidden lg:block pointer-events-none opacity-60">
        <div className="w-16 h-16 border-b-2 border-l-2 border-[#FFD600]" />
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-none opacity-60">
        <div className="w-16 h-16 border-b-2 border-r-2 border-[#FFD600]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center max-w-4xl flex flex-col items-center">
        {/* Official Mascot Logo Emblem */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD600] via-[#FF4D4D] to-[#FFA000] rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#FFD600] shadow-[0_0_25px_rgba(255,214,0,0.4)] bg-[#350710]">
            <img
              src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
              alt="Yamama Shawaya Official Mascot Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Golden-Yellow & Red motif / divider */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#FF4D4D] to-[#FFD600]" />
          <div className="flex items-center gap-1.5 text-[#FFD600]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#FFE600]">
              ARABIC & FAST FOOD CUISINE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" />
          </div>
          <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#FF4D4D] to-[#FFD600]" />
        </div>

        {/* Main Restaurant Heading - Red, Yellow & Gold Mixed Opulence */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] to-[#FFA000]">
            YAMAMA
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
            SHAWAYA
          </span>
        </h1>

        {/* Selective Uppercase Label */}
        <div className="mb-6">
          <p className="font-heading text-xs sm:text-base md:text-lg font-bold tracking-[0.25em] text-[#FFE600] uppercase border-y-2 border-[#FFD600]/60 py-2 px-4 sm:px-8 inline-block bg-[#32060E]/90 backdrop-blur-sm shadow-xl">
            CHARCOAL GRILLED • SLOW FIRED • FULL OF FLAVOR
          </p>
        </div>

        {/* Hero Tagline / Statement */}
        <p className="text-base sm:text-xl md:text-2xl text-[#FFF2D1] max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 text-balance drop-shadow-md">
          &ldquo;Experience the rich taste of charcoal-fired chicken served with specially flavored Arabic rice.&rdquo;
        </p>

        {/* Location Line */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#FFE600] font-semibold tracking-wide mb-10 bg-[#350711]/95 px-5 py-2 rounded-full border border-[#FFD600]/50 shadow-[0_0_15px_rgba(255,214,0,0.25)]">
          <span>{RESTAURANT_INFO.address.shortLocation}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          {/* Primary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-[#FFD600]/30 hover:shadow-[#FFD600]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex items-center justify-center gap-2 group border border-[#FFF59D]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#3D070F] group-hover:rotate-12 transition-transform" />
            <span>VIEW MENU</span>
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#7F1D1D] to-[#991B1B] hover:bg-[#B91C1C] text-[#FFE600] font-bold text-sm uppercase tracking-widest rounded-xl border-2 border-[#FFD600] hover:border-[#FFF066] shadow-xl shadow-[#7F1D1D]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 text-[#FFE600]" />
            <span>ORDER NOW</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#taste"
          aria-label="Scroll to introduction"
          className="mt-12 sm:mt-16 text-[#FFD600]/80 hover:text-[#FFE600] transition-colors animate-bounce flex flex-col items-center gap-1.5 focus:outline-none"
        >
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#FFF2D1]/70">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 text-[#FFD600]" />
        </a>
      </div>
    </section>
  );
};
