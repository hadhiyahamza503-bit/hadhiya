import React from 'react';
import { Flame, Sparkles, Users2 } from 'lucide-react';

export const SignatureIntro: React.FC = () => {
  const features = [
    {
      goldWord: 'CHARCOAL',
      whiteWord: 'FIRED',
      description: 'Slow-fired over genuine charcoal embers for a deep, authentic smoky flavor.',
      icon: Flame,
      label: 'TRADITIONAL GRILL',
    },
    {
      goldWord: 'SPECIAL',
      whiteWord: 'ARABIC RICE',
      description: 'Enjoy our signature grilled chicken paired with savory flavored basmati rice.',
      icon: Sparkles,
      label: 'AROMATIC GRAINS',
    },
    {
      goldWord: 'MADE TO',
      whiteWord: 'SHARE',
      description: 'Generous portions cooked for family platters, friends, and special gatherings.',
      icon: Users2,
      label: 'FAMILY PORTIONS',
    },
  ];

  return (
    <section id="taste" className="py-20 sm:py-28 bg-[#1B0307] relative border-b border-[#FFE500]/30 overflow-hidden">
      {/* Subtle background radial glows in flame red and warm radiant yellow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8F1222]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#FFE500]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <span className="w-6 h-0.5 bg-[#FFE500]" />
            <span><span className="text-[#FFD700]">AN AUTHENTIC</span> <span className="text-white">CULINARY JOURNEY</span></span>
            <span className="w-6 h-0.5 bg-[#FFE500]" />
          </div>

          {/* Half Gold Half White Title */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-6 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.45)]">
              THE TASTE
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]">
              OF YAMAMA
            </span>
          </h2>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            From slow-fired charcoal chicken to fragrant Arabic rice, Yamama Shawaya brings together smoky grilled flavors, generous portions, and authentic Middle Eastern spice blends.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="group relative bg-gradient-to-b from-[#340710] to-[#20040A] p-8 rounded-2xl border-2 border-[#FFE500]/45 hover:border-[#FFE500] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(255,229,0,0.3)] flex flex-col items-center text-center"
              >
                {/* Icon in yellow border on deep red */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#540C1A] to-[#2E050D] border-2 border-[#FFE500] flex items-center justify-center text-[#FFE500] mb-6 shadow-md group-hover:scale-110 group-hover:border-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Subtitle / tag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFE500] mb-2 block">
                  {feature.label}
                </span>

                {/* Title: Half Gold Half White Write */}
                <h3 className="font-heading font-bold text-xl tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="text-[#FFD700]">{feature.goldWord}</span>
                  <span className="text-white">{feature.whiteWord}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-white/85 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Bottom red & yellow hairline on hover */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#B91C1C] to-[#FFE500] group-hover:w-20 transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
