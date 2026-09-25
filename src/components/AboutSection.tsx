import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#180205] text-white relative overflow-hidden border-b border-[#FFE500]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]">
              <span className="w-6 h-0.5 bg-[#FFE500]" />
              <span><span className="text-[#FFD700]">WHO</span> <span className="text-white">WE ARE</span></span>
            </div>

            {/* Half Gold Half White Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight flex items-center flex-wrap gap-x-3">
              <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
                ABOUT YAMAMA
              </span>
              <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
                SHAWAYA
              </span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#B91C1C] via-[#FFE500] to-[#FF9E00] rounded-full" />

            <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light">
              <p>
                <strong className="font-bold text-[#FFD700]">Yamama Shawaya</strong> is a celebrated Arabic and fast-food destination on Calicut Road in Angadipuram, near Perinthalmanna. The restaurant is renowned for charcoal slow-fired shawaya, succulent grilled chicken, and richly flavored spiced rice combinations.
              </p>
              <p>
                Whether you&apos;re dining in with family, grabbing a quick takeaway meal on your journey, or ordering for home feasts, Yamama Shawaya brings authentic smoky grill flavors and generous hospitality to every table.
              </p>
            </div>

            {/* Service & Experience Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {RESTAURANT_INFO.services.map((service) => (
                <div
                  key={service}
                  className="bg-[#28040C] p-4 rounded-xl border border-[#FFE500]/40 shadow-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFE500] shrink-0" />
                  <span className="font-heading font-bold text-xs sm:text-sm text-white tracking-wide uppercase">
                    <span className="text-[#FFD700]">{service.split(' ')[0]}</span>{' '}
                    <span>{service.split(' ').slice(1).join(' ') || ''}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authenticity Badges / Highlight Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#25040B] text-white p-8 rounded-3xl border-2 border-[#FFE500] shadow-2xl relative">
              {/* Official Logo Emblem */}
              <div className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#FFE500] shadow-lg bg-[#180205]">
                <img
                  src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                  alt="Yamama Shawaya Logo - Refill Your Energy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFE500] block mb-2">
                VERIFIED RESTAURANT DETAILS
              </span>

              <h3 className="font-heading font-black text-2xl mb-6 max-w-[200px] flex items-center gap-1.5">
                <span className="text-[#FFD700]">Culinary</span> <span className="text-white">Focus</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFE500]/35 flex items-center justify-between">
                  <span className="text-white/80 font-medium">Customer Rating</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#FFE500]">
                    <Star className="w-4 h-4 fill-[#FFE500] text-[#FFE500]" />
                    <span className="text-base">{RESTAURANT_INFO.googleRating}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFE500]/35 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-medium">Price Per Person</span>
                    <span className="font-bold text-[#FFE500] text-base">{RESTAURANT_INFO.priceRange}</span>
                  </div>
                  <span className="text-[11px] text-[#FFD700] font-medium text-right">
                    {RESTAURANT_INFO.priceReportedBy}
                  </span>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFE500]/35 flex items-center justify-between">
                  <span className="text-white/80 font-medium">Operating Hours</span>
                  <div className="text-right">
                    <span className="font-bold text-[#FFE500] block">12:30 PM – 12:00 AM</span>
                    <span className="text-[11px] text-white/80">Open Daily until Midnight</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFE500]/35 flex items-center justify-between">
                  <span className="text-white/80 font-medium">Prime Location</span>
                  <span className="font-bold text-xs text-right">
                    <span className="text-[#FFD700]">Angadipuram</span> <span className="text-white">/ Tirurkad</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
