import React from 'react';
import { Flame, Drumstick, Utensils, Bike } from 'lucide-react';

export const WhyYamama: React.FC = () => {
  const pillars = [
    {
      title: 'CHARCOAL SLOW-FIRED',
      description: 'Traditional charcoal grilling for deep smoky flavor.',
      icon: Flame,
    },
    {
      title: 'JUICY GRILLED CHICKEN',
      description: 'Carefully grilled chicken prepared for rich flavor.',
      icon: Drumstick,
    },
    {
      title: 'FLAVORFUL ARABIC RICE',
      description: 'Special rice combinations made to complement the grilled chicken.',
      icon: Utensils,
    },
    {
      title: 'TAKEAWAY & DELIVERY',
      description: 'Enjoy Yamama at the restaurant or at home.',
      icon: Bike,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#1A0307] text-[#FFF2D1] relative border-b border-[#FFD600]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFE600] block mb-2">
            THE YAMAMA STANDARD
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
              WHY YAMAMA SHAWAYA
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#FFF2D1]/85 font-light">
            Dedicated craftsmanship over slow charcoal embers and aromatic spices.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-[#28050D] hover:bg-[#380812] p-8 rounded-2xl border-2 border-[#FFD600]/40 hover:border-[#FFE600] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-[0_0_20px_rgba(255,214,0,0.2)]"
              >
                <div>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4D0B17] to-[#2E050D] border-2 border-[#FFD600] flex items-center justify-center text-[#FFE600] mb-6 group-hover:scale-110 group-hover:border-[#FFF066] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#FFE600] group-hover:text-[#FFFDE7] tracking-wider mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#FFF2D1]/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle index mark */}
                <div className="mt-8 pt-4 border-t border-[#FFD600]/25 flex items-center justify-between text-xs text-[#FFD600] font-mono">
                  <span className="font-bold text-[#FFE600]">0{idx + 1}</span>
                  <span className="text-[10px] tracking-widest uppercase font-sans font-semibold text-[#FFF2D1]/70">
                    Yamama Quality
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
