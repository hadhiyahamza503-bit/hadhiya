import React from 'react';
import { Flame, Drumstick, Utensils, Bike } from 'lucide-react';

export const WhyYamama: React.FC = () => {
  const pillars = [
    {
      goldTitle: 'CHARCOAL',
      whiteTitle: 'SLOW-FIRED',
      description: 'Traditional slow-charcoal grilling techniques that impart deep, authentic smoky flavor.',
      icon: Flame,
    },
    {
      goldTitle: 'JUICY',
      whiteTitle: 'GRILLED CHICKEN',
      description: 'Marinated in signature Arabic spice rubs and flame-roasted to succulent tenderness.',
      icon: Drumstick,
    },
    {
      goldTitle: 'FLAVORFUL',
      whiteTitle: 'ARABIC RICE',
      description: 'Specially flavored basmati rice recipes formulated to elevate the slow-grilled chicken.',
      icon: Utensils,
    },
    {
      goldTitle: 'TAKEAWAY',
      whiteTitle: '& DELIVERY',
      description: 'Fast, secure hot-packed meals for takeaway on Calicut Road or doorstep delivery.',
      icon: Bike,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#1B0307] text-white relative border-b border-[#FFE500]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] block mb-2">
            <span className="text-[#FFD700]">THE YAMAMA</span> <span className="text-white">STANDARD</span>
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
              WHY YAMAMA
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              SHAWAYA
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/85 font-light">
            Dedicated craftsmanship over slow charcoal embers and aromatic Middle Eastern spices.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.goldTitle}
                className="group relative bg-[#27040C] hover:bg-[#380712] p-8 rounded-2xl border-2 border-[#FFE500]/40 hover:border-[#FFE500] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-[0_0_20px_rgba(255,229,0,0.25)]"
              >
                <div>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#540C1A] to-[#2E050D] border-2 border-[#FFE500] flex items-center justify-center text-[#FFE500] mb-6 group-hover:scale-110 group-hover:border-white transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title: Half Gold Half White Write */}
                  <h3 className="font-heading font-bold text-lg tracking-wider mb-3 leading-snug flex items-center flex-wrap gap-1.5">
                    <span className="text-[#FFD700]">{item.goldTitle}</span>
                    <span className="text-white group-hover:text-[#FFFDE7]">{item.whiteTitle}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle index mark */}
                <div className="mt-8 pt-4 border-t border-[#FFE500]/25 flex items-center justify-between text-xs text-[#FFE500] font-mono">
                  <span className="font-bold text-[#FFE500]">0{idx + 1}</span>
                  <span className="text-[10px] tracking-widest uppercase font-sans font-semibold text-white/70">
                    <span className="text-[#FFD700]">Yamama</span> Quality
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
