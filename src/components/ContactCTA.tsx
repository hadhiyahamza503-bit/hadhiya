import React from 'react';
import { Flame, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactCTAProps {
  onOpenOrderModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#160205] text-[#FFF2D1] overflow-hidden border-t-2 border-[#FFD600]/30">
      {/* Background with grilled chicken food photography & deep red and golden ambiance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/al_faham_charcoal_1790141383961.jpg"
          alt="Charcoal grilling at Yamama Shawaya"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160205] via-[#350711]/90 to-[#160205]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl text-center">
        {/* Official Logo Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-[#FFD600] shadow-[0_0_25px_rgba(255,214,0,0.35)] bg-[#350710] mb-6 hover:scale-105 transition-transform duration-300">
          <img
            src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
            alt="Yamama Shawaya Logo - Refill Your Energy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Heading - Red, Yellow & Gold Mixed */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
            CRAVING CHARCOAL-GRILLED CHICKEN?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-heading text-lg sm:text-2xl text-[#FFE600] font-light tracking-wide mb-10">
          &ldquo;Come hungry. Leave satisfied.&rdquo;
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-xl mx-auto">
          {/* VIEW MENU */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#350711]/90 hover:bg-[#4D0B17] text-[#FFE600] font-bold text-xs uppercase tracking-widest rounded-xl border-2 border-[#FFD600]/60 hover:border-[#FFE600] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#FFE600]" />
            <span>VIEW MENU</span>
          </a>

          {/* CALL NOW */}
          <a
            href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#590C17] to-[#7F1D1D] hover:from-[#7F1D1D] hover:to-[#991B1B] text-[#FFFDE7] font-bold text-xs uppercase tracking-widest rounded-xl border-2 border-[#FFD600] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#FFE600]" />
            <span>CALL NOW</span>
          </a>

          {/* ORDER NOW */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-[#FFD600]/35 hover:shadow-[#FFD600]/55 transition-all flex items-center justify-center gap-2 border border-[#FFF59D]"
          >
            <Flame className="w-4 h-4 text-[#3D070F]" />
            <span>ORDER NOW</span>
          </button>
        </div>

        {/* Small location note */}
        <div className="mt-8 text-xs text-[#FFD600]/90 font-semibold">
          Open Daily 12:30 PM – 12:00 AM • Calicut Road, Angadipuram
        </div>
      </div>
    </section>
  );
};
