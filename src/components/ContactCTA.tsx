import React from 'react';
import { Flame, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactCTAProps {
  onOpenOrderModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#180205] text-white overflow-hidden border-t-2 border-[#FFE500]/35">
      {/* Background with grilled chicken food photography & deep red and radiant yellow ambiance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/al_faham_charcoal_1790141383961.jpg"
          alt="Charcoal grilling at Yamama Shawaya"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.2] contrast-[1.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#180205] via-[#350711]/92 to-[#180205]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl text-center">
        {/* Official Logo Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-[#FFE500] shadow-[0_0_30px_rgba(255,229,0,0.45)] bg-[#350710] mb-6 hover:scale-105 transition-transform duration-300">
          <img
            src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
            alt="Yamama Shawaya Logo - Refill Your Energy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Heading - Half Gold Half White Write */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3">
          <span className="text-[#FFD700] drop-shadow-[0_2px_15px_rgba(255,215,0,0.5)]">
            CRAVING CHARCOAL-
          </span>
          <span className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.45)]">
            GRILLED CHICKEN?
          </span>
        </h2>

        {/* Subtitle - Half Gold Half White Write */}
        <p className="font-heading text-lg sm:text-2xl font-light tracking-wide mb-10 flex items-center justify-center flex-wrap gap-x-2">
          <span>&ldquo;<span className="text-[#FFD700]">Come hungry.</span></span>
          <span><span className="text-white">Leave satisfied.</span>&rdquo;</span>
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-xl mx-auto">
          {/* VIEW MENU */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#380812]/95 hover:bg-[#520A18] text-white font-bold text-xs uppercase tracking-widest rounded-xl border-2 border-[#FFE500]/60 hover:border-[#FFE500] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">VIEW</span> <span className="text-white">MENU</span></span>
          </a>

          {/* CALL NOW */}
          <a
            href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#660C1B] to-[#8E1224] hover:from-[#8E1224] hover:to-[#B91C1C] text-white font-bold text-xs uppercase tracking-widest rounded-xl border-2 border-[#FFE500] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">CALL</span> <span className="text-white">NOW</span></span>
          </a>

          {/* ORDER NOW */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-[#FFE500]/35 hover:shadow-[#FFE500]/55 transition-all flex items-center justify-center gap-2 border border-[#FFF8B3]"
          >
            <Flame className="w-4 h-4 text-[#3D070F]" />
            <span>ORDER NOW</span>
          </button>
        </div>

        {/* Small location note */}
        <div className="mt-8 text-xs text-white/90 font-medium">
          <span className="text-[#FFD700]">Open Daily:</span> 12:30 PM – 12:00 AM • Calicut Road, Angadipuram
        </div>
      </div>
    </section>
  );
};
