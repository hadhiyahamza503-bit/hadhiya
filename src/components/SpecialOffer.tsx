import React from 'react';
import { Sparkles, CheckCircle2, Flame, ArrowRight } from 'lucide-react';
import { COMBO_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

interface SpecialOfferProps {
  onSelectCombo: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({
  onSelectCombo,
  onOpenOrderModal,
}) => {
  return (
    <section id="special-offer" className="py-20 sm:py-28 bg-[#200308] relative overflow-hidden border-b border-[#FFE500]/30">
      {/* Decorative background radial effects in red and radiant yellow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFE500_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8F1222] rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFE500]/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Visual Photography */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow & Red-Yellow Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#FFE500] via-[#B91C1C] to-[#FF9E00] rounded-3xl opacity-50 blur-lg" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFE500] shadow-2xl bg-[#180205]">
                <img
                  src="/src/assets/images/yamama_combo_plate_1790141367889.jpg"
                  alt="The Yamama Combo: Charcoal Shawaya with Flavorful Arabic Rice"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180205]/95 via-transparent to-transparent pointer-events-none" />

                {/* Corner Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#2E040D]/95 backdrop-blur-md border border-[#FFE500]/60 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-[#FFE500]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-wider">
                      <span className="text-[#FFD700]">Signature Charcoal</span> <span className="text-white">Platter</span>
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#FFE500]">
                    Slow-Fired Daily
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Combo Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-4 h-4 text-[#FFE500]" />
              <span><span className="text-[#FFD700]">MOST POPULAR</span> <span className="text-white">COMBINATION</span></span>
            </div>

            {/* Heading - Half Gold Half White Write */}
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-2 flex items-center flex-wrap gap-x-3">
              <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
                THE YAMAMA
              </span>
              <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
                COMBO
              </span>
            </h2>

            {/* Subheading - Half Gold Half White Write */}
            <p className="text-lg sm:text-xl font-heading font-semibold mb-6 flex items-center flex-wrap gap-x-2">
              <span className="text-[#FFD700]">Charcoal Shawaya</span>
              <span className="text-white">+ Flavorful Arabic Rice</span>
            </p>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8 font-light">
              Experience the restaurant's signature pairing: tender, smoky charcoal slow-fired chicken coupled with fragrant spiced Arabic rice, homemade garlic toum paste, and crisp pickled accompaniments.
            </p>

            {/* Portion Pricing Cards */}
            <div className="space-y-3 mb-8">
              {COMBO_ITEMS.map((combo) => (
                <div
                  key={combo.id}
                  onClick={() => onSelectCombo(combo)}
                  className="group cursor-pointer bg-[#2E050E]/95 hover:bg-[#3E0813] border-2 border-[#FFE500]/40 hover:border-[#FFE500] rounded-xl p-4 flex items-center justify-between transition-all duration-200 hover:shadow-xl hover:shadow-[0_0_20px_rgba(255,229,0,0.25)]"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFE500] shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base flex items-center gap-1.5 transition-colors">
                        <span className="text-[#FFD700]">{combo.name.split(' ')[0]}</span>
                        <span className="text-white group-hover:text-[#FFFDE7]">Shawaya + Rice Combo</span>
                      </h4>
                      <p className="text-xs text-white/75 line-clamp-1">
                        Shawaya chicken served with Arabic rice &amp; garlic toum
                      </p>
                    </div>
                  </div>
                  <div className="text-right pl-4">
                    <span className="font-heading font-black text-lg sm:text-2xl text-[#FFE500]">
                      {combo.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold/Yellow CTA */}
            <div>
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-[#FFE500]/30 hover:shadow-[#FFE500]/50 active:scale-95 transition-all flex items-center justify-center gap-2 group border border-[#FFF8B3]"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4 text-[#3D070F] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
