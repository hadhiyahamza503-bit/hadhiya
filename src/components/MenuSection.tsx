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
    <section id="menu" className="py-20 sm:py-28 bg-[#180306] text-[#FFF2D1] relative overflow-hidden border-b border-[#FFD600]/25">
      {/* Background ambient red & golden yellow radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8B1124]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFD600]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFE600] mb-3">
            <span className="w-8 h-0.5 bg-[#FFD600]" />
            <span>CULINARY SELECTIONS</span>
            <span className="w-8 h-0.5 bg-[#FFD600]" />
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
              OUR SIGNATURE MENU
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFF2D1]/90 font-medium italic">
            Slow-fired favorites, grilled to perfection over charcoal.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FFE600] to-[#FFA000] mx-auto mt-4 rounded-full" />
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
                  ? 'bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] text-[#3D070F] shadow-lg shadow-[#FFD600]/30 scale-105 border border-[#FFF59D]'
                  : 'bg-[#2B060E] text-[#FFF2D1] border border-[#FFD600]/40 hover:border-[#FFE600] hover:text-[#FFE600] hover:bg-[#3D0A14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#28050D] rounded-2xl border-2 border-[#FFD600]/40 hover:border-[#FFE600] shadow-xl hover:shadow-2xl hover:shadow-[0_0_25px_rgba(255,214,0,0.25)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Food Image Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-[#160205]">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28050D] via-transparent to-transparent opacity-90" />

                {/* Badges - Red & Golden Yellow Mixed */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {item.isPopular && (
                    <span className="bg-gradient-to-r from-[#7F1D1D] to-[#991B1B] text-[#FFE600] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#FFD600] shadow-md">
                      Popular Choice
                    </span>
                  )}
                  {item.isSignature && (
                    <span className="bg-gradient-to-r from-[#4A0B14] to-[#6B0F1E] text-[#FFFDE7] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#FFA000] shadow-md">
                      Chef's Special
                    </span>
                  )}
                </div>

                {/* Category kicker */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-heading uppercase tracking-widest text-[#FFD600] text-[11px] drop-shadow font-bold">
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
                  <h3 className="font-heading font-black text-xl text-[#FFE600] group-hover:text-[#FFFDE7] transition-colors leading-snug mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#FFF2D1]/80 leading-relaxed font-normal mb-6 min-h-[42px]">
                    {item.description}
                  </p>
                </div>

                {/* Price and Order Button */}
                <div className="pt-4 border-t border-[#FFD600]/30 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFD600]/80">
                      {item.rawPrice ? 'Price' : 'Seasonal Pricing'}
                    </span>
                    <span className="font-heading font-black text-xl sm:text-2xl text-[#FFE600]">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOrderDish(item)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#4A0A12] to-[#6A0E1C] hover:from-[#6A0E1C] hover:to-[#8B1124] text-[#FFE600] hover:text-[#FFFDE7] text-xs font-bold uppercase tracking-wider rounded-xl border-2 border-[#FFD600] hover:border-[#FFE600] transition-all duration-200 shadow-md active:scale-95 flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5 text-[#FFE600]" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Disclaimer & Price Tiers */}
        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          <div className="bg-[#26050C] border-2 border-[#FFD600]/45 rounded-2xl p-5 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#FFD600]/30 pb-3 mb-3">
              <span className="font-heading font-bold text-sm uppercase text-[#FFE600] tracking-wider">
                Price Range Guide • ₹1–200 per person
              </span>
              <span className="text-xs font-semibold text-[#FFE600] bg-[#3E0913] px-2.5 py-1 rounded-md border border-[#FFD600]/50 w-fit">
                Reported by 40 people on Google
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[#32060E] border border-[#FFD600]/35">
                <span className="font-bold text-[#FFE600] block text-sm">₹1–200</span>
                <span className="text-[11px] text-[#FFF2D1]/75 font-medium">Single Combos</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#32060E] border border-[#FFD600]/35">
                <span className="font-bold text-[#FFE600] block text-sm">₹200–400</span>
                <span className="text-[11px] text-[#FFF2D1]/75 font-medium">Half Platters</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#32060E] border border-[#FFD600]/35">
                <span className="font-bold text-[#FFE600] block text-sm">₹400–600</span>
                <span className="text-[11px] text-[#FFF2D1]/75 font-medium">Special Combos</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#32060E] border border-[#FFD600]/35">
                <span className="font-bold text-[#FFE600] block text-sm">₹600–800</span>
                <span className="text-[11px] text-[#FFF2D1]/75 font-medium">Full Family Feast</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#200408]/90 border border-[#FFD600]/30 rounded-xl text-center text-[11px] text-[#FFF2D1]/75">
            <p>
              * All meals prepared fresh over slow charcoal fire. Daily special cuts and seasonal fish/chicken specialties available upon direct inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
