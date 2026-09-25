import React from 'react';
import { Flame, Sparkles, Users2 } from 'lucide-react';

export const SignatureIntro: React.FC = () => {
  const features = [
    {
      title: 'CHARCOAL FIRED',
      description: 'Slow-fired over charcoal for a rich smoky flavor.',
      icon: Flame,
      label: 'TRADITIONAL GRILL',
    },
    {
      title: 'SPECIAL RICE',
      description: 'Enjoy our grilled chicken with flavorful Arabic rice.',
      icon: Sparkles,
      label: 'AROMATIC GRAINS',
    },
    {
      title: 'MADE TO SHARE',
      description: 'Perfect for family meals, friends and gatherings.',
      icon: Users2,
      label: 'GENEROUS PORTIONS',
    },
  ];

  return (
    <section id="taste" className="py-20 sm:py-28 bg-[#1A0307] relative border-b border-[#FFD600]/25 overflow-hidden">
      {/* Subtle background radial glows in red and warm golden yellow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#991B1B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#FFD600]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFE600] mb-3">
            <span className="w-6 h-0.5 bg-[#FFD600]" />
            <span>AN AUTHENTIC CULINARY JOURNEY</span>
            <span className="w-6 h-0.5 bg-[#FFD600]" />
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D] tracking-tight mb-6">
            THE TASTE OF YAMAMA
          </h2>

          <p className="text-[#FFF2D1] text-base sm:text-lg leading-relaxed font-normal">
            From slow-fired charcoal chicken to flavorful Arabic rice, Yamama Shawaya brings together smoky grilled flavors, generous portions and the comforting taste of Arabic-inspired cuisine.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-b from-[#340710] to-[#20040A] p-8 rounded-2xl border-2 border-[#FFD600]/40 hover:border-[#FFE600] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_25px_rgba(255,214,0,0.25)] flex flex-col items-center text-center"
              >
                {/* Icon in gold/yellow border on deep red */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4D0B17] to-[#2E050D] border-2 border-[#FFD600] flex items-center justify-center text-[#FFE600] mb-6 shadow-md group-hover:scale-110 group-hover:border-[#FFF066] transition-all">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Subtitle / tag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD600] mb-2 block">
                  {feature.label}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[#FFE600] tracking-wider mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#FFF2D1]/85 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Subtle bottom red/yellow hairline on hover */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#FF4D4D] to-[#FFD600] group-hover:w-20 transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
