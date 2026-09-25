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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#180205]"
    >
      {/* Background Hero Image with Deep Ruby Red & Warm Yellow Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_shawaya_rice_1790141349164.jpg"
          alt="Yamama charcoal grilled shawaya chicken served with specially flavored Arabic rice"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.2]"
        />
        {/* Rich Velvet Red & Golden Yellow Glow Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#180205] via-[#35050F]/85 to-[#180205]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(24,2,5,0.88)_100%)]" />
      </div>

      {/* Decorative Golden-Yellow Filigree Corner Accents */}
      <div className="absolute top-8 left-8 hidden lg:block pointer-events-none opacity-70">
        <div className="w-16 h-16 border-t-2 border-l-2 border-[#FFE500]" />
      </div>
      <div className="absolute top-8 right-8 hidden lg:block pointer-events-none opacity-70">
        <div className="w-16 h-16 border-t-2 border-r-2 border-[#FFE500]" />
      </div>
      <div className="absolute bottom-8 left-8 hidden lg:block pointer-events-none opacity-70">
        <div className="w-16 h-16 border-b-2 border-l-2 border-[#FFE500]" />
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-none opacity-70">
        <div className="w-16 h-16 border-b-2 border-r-2 border-[#FFE500]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center max-w-4xl flex flex-col items-center">
        {/* Official Mascot Logo Emblem */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FFE500] via-[#B91C1C] to-[#FF9E00] rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#FFE500] shadow-[0_0_30px_rgba(255,229,0,0.5)] bg-[#350710]">
            <img
              src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
              alt="Yamama Shawaya Official Mascot Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Red and Yellow motif divider */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#B91C1C] to-[#FFE500]" />
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em]">
              <span className="text-[#FFD700]">ARABIC &amp; FAST FOOD</span> <span className="text-white">CUISINE</span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
          </div>
          <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#B91C1C] to-[#FFE500]" />
        </div>

        {/* Main Restaurant Heading - Half Gold Half White Write */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6">
          <span className="text-[#FFD700] drop-shadow-[0_2px_15px_rgba(255,215,0,0.6)]">
            YAMAMA
          </span>
          <span className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.45)]">
            SHAWAYA
          </span>
        </h1>

        {/* Half Gold Half White Selective Banner */}
        <div className="mb-6">
          <p className="font-heading text-xs sm:text-base md:text-lg font-bold tracking-[0.25em] uppercase border-y-2 border-[#FFE500]/70 py-2.5 px-4 sm:px-8 inline-block bg-[#30050D]/95 backdrop-blur-sm shadow-2xl">
            <span className="text-[#FFD700]">CHARCOAL GRILLED • SLOW FIRED</span> <span className="text-white">• FULL OF FLAVOR</span>
          </p>
        </div>

        {/* Hero Tagline / Statement - Half Gold Half White Write */}
        <p className="text-base sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 text-balance drop-shadow-md">
          &ldquo;<span className="text-[#FFD700]">Experience the rich taste of charcoal-fired chicken</span>{' '}
          <span className="text-white">served with specially flavored Arabic rice.</span>&rdquo;
        </p>

        {/* Location Line */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide mb-10 bg-[#380812]/95 px-5 py-2 rounded-full border border-[#FFE500]/60 shadow-[0_0_20px_rgba(255,229,0,0.3)]">
          <span className="text-[#FFD700]">Angadipuram</span>
          <span className="text-[#FFE500]">•</span>
          <span className="text-white">Perinthalmanna, Kerala</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          {/* Primary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-[#FFE500]/35 hover:shadow-[#FFE500]/55 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex items-center justify-center gap-2 group border border-[#FFF8B3]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#3D070F] group-hover:rotate-12 transition-transform" />
            <span>VIEW MENU</span>
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#700E1C] via-[#8C1224] to-[#B91C1C] hover:bg-[#8C1224] text-white font-bold text-sm uppercase tracking-widest rounded-xl border-2 border-[#FFE500] hover:border-white shadow-xl shadow-[#700E1C]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">ORDER</span> <span className="text-white">NOW</span></span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#taste"
          aria-label="Scroll to introduction"
          className="mt-12 sm:mt-16 text-[#FFE500]/90 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-1.5 focus:outline-none"
        >
          <span className="text-[10px] tracking-widest uppercase font-semibold text-white/80">
            <span className="text-[#FFD700]">Scroll to</span> explore
          </span>
          <ArrowDown className="w-4 h-4 text-[#FFE500]" />
        </a>
      </div>
    </section>
  );
};
