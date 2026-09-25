import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import { ALL_MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onOrderDish: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOrderDish }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'combos' | 'grill' | 'rice'>('all');

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#180205] text-white relative overflow-hidden border-b border-[#FFE500]/25">
      {/* Background ambient red & radiant yellow radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8E0E20]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFE500]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <span className="w-8 h-0.5 bg-[#FFE500]" />
            <span><span className="text-[#FFD700]">CULINARY</span> <span className="text-white">SELECTIONS</span></span>
            <span className="w-8 h-0.5 bg-[#FFE500]" />
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-3 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
              OUR SIGNATURE
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              MENU
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-medium italic">
            Slow-fired favorites, grilled to perfection over charcoal.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#B91C1C] via-[#FFE500] to-[#FF9E00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Specialties' },
            { id: 'combos', label: 'Shawaya + Rice Combos' },
            { id: 'grill', label: 'Charcoal Grills' },
            { id: 'rice', label: 'Arabic Rice' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] text-[#3D070F] shadow-lg shadow-[#FFE500]/35 scale-105 border border-[#FFF8B3]'
                  : 'bg-[#2B050E] text-white border border-[#FFE500]/40 hover:border-[#FFE500] hover:text-[#FFE500] hover:bg-[#3D0A14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const words = item.name.split(' ');
            const mid = Math.ceil(words.length / 2);
            const goldWords = words.slice(0, mid).join(' ');
            const whiteWords = words.slice(mid).join(' ');

            return (
              <div
                key={item.id}
                className="group bg-[#27040C] rounded-2xl border-2 border-[#FFE500]/40 hover:border-[#FFE500] shadow-xl hover:shadow-2xl hover:shadow-[0_0_25px_rgba(255,229,0,0.25)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Food Image Container */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#180205]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#27040C] via-transparent to-transparent opacity-90" />

                  {/* Badges - Red & Radiant Yellow */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.isPopular && (
                      <span className="bg-gradient-to-r from-[#800F1E] to-[#B91C1C] text-[#FFE500] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#FFE500] shadow-md">
                        Popular Choice
                      </span>
                    )}
                    {item.isSignature && (
                      <span className="bg-gradient-to-r from-[#540C18] to-[#7B1022] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#FFD000] shadow-md">
                        Chef's Special
                      </span>
                    )}
                  </div>

                  {/* Category kicker */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-heading uppercase tracking-widest text-[#FFE500] text-[11px] drop-shadow font-bold">
                      {item.category === 'combos'
                        ? 'Combos & Plates'
                        : item.category === 'grill'
                        ? 'Slow Charcoal Grill'
                        : 'Aromatic Grains'}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dish Title: Half Gold Half White Write */}
                    <h3 className="font-heading font-black text-xl leading-snug mb-2 flex items-center flex-wrap gap-x-1.5">
                      <span className="text-[#FFD700]">{goldWords}</span>
                      <span className="text-white group-hover:text-[#FFFDE7] transition-colors">{whiteWords}</span>
                    </h3>

                    <p className="text-sm text-white/80 leading-relaxed font-normal mb-6 min-h-[42px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and Order Button */}
                  <div className="pt-4 border-t border-[#FFE500]/30 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFD700]">
                        {item.rawPrice ? 'Price' : 'Seasonal Pricing'}
                      </span>
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#FFE500]">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onOrderDish(item)}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#590C19] to-[#801024] hover:from-[#801024] hover:to-[#A81729] text-white hover:text-[#FFE500] text-xs font-bold uppercase tracking-wider rounded-xl border-2 border-[#FFE500] hover:border-white transition-all duration-200 shadow-md active:scale-95 flex items-center gap-1.5"
                    >
                      <Flame className="w-3.5 h-3.5 text-[#FFE500]" />
                      <span><span className="text-[#FFD700]">Order</span> <span className="text-white">Now</span></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Disclaimer & Price Tiers */}
        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          <div className="bg-[#27040C] border-2 border-[#FFE500]/45 rounded-2xl p-5 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#FFE500]/30 pb-3 mb-3">
              <span className="font-heading font-bold text-sm uppercase tracking-wider">
                <span className="text-[#FFD700]">Price Range Guide</span> <span className="text-white">• ₹1–200 per person</span>
              </span>
              <span className="text-xs font-semibold text-[#FFE500] bg-[#420815] px-2.5 py-1 rounded-md border border-[#FFE500]/50 w-fit">
                Reported by 40 people on Google
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[#340710] border border-[#FFE500]/35">
                <span className="font-bold text-[#FFE500] block text-sm">₹1–200</span>
                <span className="text-[11px] text-white/80 font-medium">Single Combos</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#340710] border border-[#FFE500]/35">
                <span className="font-bold text-[#FFE500] block text-sm">₹200–400</span>
                <span className="text-[11px] text-white/80 font-medium">Half Platters</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#340710] border border-[#FFE500]/35">
                <span className="font-bold text-[#FFE500] block text-sm">₹400–600</span>
                <span className="text-[11px] text-white/80 font-medium">Special Combos</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#340710] border border-[#FFE500]/35">
                <span className="font-bold text-[#FFE500] block text-sm">₹600–800</span>
                <span className="text-[11px] text-white/80 font-medium">Full Family Feast</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#200308]/90 border border-[#FFE500]/30 rounded-xl text-center text-[11px] text-white/80">
            <p>
              * All meals prepared fresh over slow charcoal fire. Daily special cuts and seasonal fish/chicken specialties available upon direct inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
