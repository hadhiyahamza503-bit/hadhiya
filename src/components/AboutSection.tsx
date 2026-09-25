import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#180306] text-[#FFF2D1] relative overflow-hidden border-b border-[#FFD600]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFE600]">
              <span className="w-6 h-0.5 bg-[#FFD600]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
                ABOUT YAMAMA SHAWAYA
              </span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FFE600] to-[#FFA000] rounded-full" />

            <div className="space-y-4 text-base sm:text-lg text-[#FFF2D1]/90 leading-relaxed font-light">
              <p>
                Yamama Shawaya is an Arabic and fast-food restaurant on Calicut Road in Angadipuram, near Perinthalmanna. The restaurant focuses on charcoal slow-fired shawaya, grilled chicken and flavorful rice combinations.
              </p>
              <p>
                Whether you&apos;re dining with family, grabbing a takeaway meal or ordering for home, Yamama Shawaya brings smoky grilled flavors and generous rice combinations to the table.
              </p>
            </div>

            {/* Service & Experience Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {RESTAURANT_INFO.services.map((service) => (
                <div
                  key={service}
                  className="bg-[#28050D] p-4 rounded-xl border border-[#FFD600]/40 shadow-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFE600] shrink-0" />
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#FFE600] tracking-wide uppercase">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authenticity Badges / Highlight Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#26050C] text-[#FFF2D1] p-8 rounded-3xl border-2 border-[#FFD600] shadow-2xl relative">
              {/* Official Logo Emblem */}
              <div className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#FFD600] shadow-lg bg-[#160205]">
                <img
                  src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                  alt="Yamama Shawaya Logo - Refill Your Energy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD600] block mb-2">
                VERIFIED RESTAURANT DETAILS
              </span>

              <h3 className="font-heading font-black text-2xl text-[#FFE600] mb-6 max-w-[200px]">
                Culinary Focus
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFD600]/35 flex items-center justify-between">
                  <span className="text-[#FFF2D1]/80 font-medium">Customer Rating</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#FFE600]">
                    <Star className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
                    <span className="text-base">{RESTAURANT_INFO.googleRating}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFD600]/35 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFF2D1]/80 font-medium">Price Per Person</span>
                    <span className="font-bold text-[#FFE600] text-base">{RESTAURANT_INFO.priceRange}</span>
                  </div>
                  <span className="text-[11px] text-[#FFD600] font-medium text-right">
                    {RESTAURANT_INFO.priceReportedBy}
                  </span>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFD600]/35 flex items-center justify-between">
                  <span className="text-[#FFF2D1]/80 font-medium">Operating Hours</span>
                  <div className="text-right">
                    <span className="font-bold text-[#FFE600] block">12:30 PM – 12:00 AM</span>
                    <span className="text-[11px] text-[#FFD600]/80">Open Daily until Midnight</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1C0308]/90 rounded-xl border border-[#FFD600]/35 flex items-center justify-between">
                  <span className="text-[#FFF2D1]/80 font-medium">Prime Location</span>
                  <span className="font-bold text-xs text-[#FFE600] text-right">
                    Angadipuram / Tirurkad
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
