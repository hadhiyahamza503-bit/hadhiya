import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const getWhatsAppChatUrl = () => {
    const text = `Hello Yamama Shawaya! I would like to inquire about dining / takeaway / delivery.`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#1A0307] text-[#FFF2D1] relative overflow-hidden border-b border-[#FFD600]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFE600] mb-3">
            <span className="w-6 h-0.5 bg-[#FFD600]" />
            <span>FIND US IN ANGADIPURAM</span>
            <span className="w-6 h-0.5 bg-[#FFD600]" />
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D]">
              COME VISIT YAMAMA
            </span>
          </h2>

          <p className="text-base text-[#FFF2D1]/85 font-light">
            Conveniently situated on Calicut Road between Angadipuram and Tirurkad, welcoming families, travellers, and local food enthusiasts.
          </p>
        </div>

        {/* Location Cards & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Details Card */}
          <div className="lg:col-span-6 bg-[#28050D] rounded-3xl p-8 sm:p-10 border-2 border-[#FFD600]/45 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4D0B17] text-[#FFE600] flex items-center justify-center shrink-0 shadow-md border border-[#FFD600]/50">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#FFE600] mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-sm sm:text-base text-[#FFF2D1]/90 leading-relaxed font-light">
                    {RESTAURANT_INFO.address.line1},<br />
                    {RESTAURANT_INFO.address.road},<br />
                    {RESTAURANT_INFO.address.locality},<br />
                    {RESTAURANT_INFO.address.city},<br />
                    {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.state} — {RESTAURANT_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#FFD600]/25">
                <div className="w-12 h-12 rounded-2xl bg-[#4D0B17] text-[#FFE600] flex items-center justify-center shrink-0 shadow-md border border-[#FFD600]/50">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#FFE600] mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-base text-[#FFFDE7] font-bold">
                    Daily: 12:30 PM – 12:00 AM (Midnight)
                  </p>
                  <p className="text-xs text-[#FFD600]/80 mt-1">
                    Open seven days a week: Wednesday to Tuesday, lunch to late night
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#FFD600]/25">
                <div className="w-12 h-12 rounded-2xl bg-[#4D0B17] text-[#FFE600] flex items-center justify-center shrink-0 shadow-md border border-[#FFD600]/50">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#FFE600] mb-1">
                    Telephone Orders & Inquiries
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {RESTAURANT_INFO.phones.map((phone) => (
                      <a
                        key={phone.raw}
                        href={`tel:${phone.raw}`}
                        className="px-4 py-2 rounded-xl bg-[#380812] hover:bg-[#500C19] text-[#FFE600] hover:text-[#FFFDE7] border border-[#FFD600]/50 font-bold text-sm flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
                        <span>{phone.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#FFD600]/25 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 border border-[#FFF59D]"
              >
                <Navigation className="w-4 h-4 text-[#3D070F]" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#380812] hover:bg-[#4D0B17] text-[#FFE600] border-2 border-[#FFD600]/60 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#FFD600]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Interactive Direction & Travel Info Card */}
          <div className="lg:col-span-6 bg-[#28050D] rounded-3xl p-8 sm:p-10 border-2 border-[#FFD600]/45 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE600]">
                  VISITOR GUIDE
                </span>
                <span className="text-xs font-bold text-[#FFE600] bg-[#3B0914] px-3 py-1 rounded-full border border-[#FFD600]/40">
                  Google Verified
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-[#FFE600]">
                Getting to Yamama Shawaya
              </h3>

              <div className="space-y-4 text-sm text-[#FFF2D1]/90">
                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFD600]/35 space-y-1">
                  <h4 className="font-heading font-bold text-[#FFE600] text-sm">
                    From Perinthalmanna Town (~3–4 km)
                  </h4>
                  <p className="text-xs text-[#FFF2D1]/80 leading-relaxed font-light">
                    Take the Calicut Road (SH 72 / Kozhikode Highway) heading towards Angadipuram. Continue through Oradampalam towards Tirurkad.
                  </p>
                </div>

                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFD600]/35 space-y-1">
                  <h4 className="font-heading font-bold text-[#FFE600] text-sm">
                    From Angadipuram Railway Station (~2.5 km)
                  </h4>
                  <p className="text-xs text-[#FFF2D1]/80 leading-relaxed font-light">
                    Direct access via Calicut Road. Convenient stop for travelers looking for quick takeaway or lunch and late-night dinners.
                  </p>
                </div>

                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFD600]/35 space-y-1">
                  <h4 className="font-heading font-bold text-[#FFE600] text-sm">
                    Parking & Accessibility
                  </h4>
                  <p className="text-xs text-[#FFF2D1]/80 leading-relaxed font-light">
                    Roadside parking available along the highway front for quick takeaway pickup and dining guests.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#FFD600]/25 flex items-center justify-between">
              <span className="text-xs text-[#FFD600]/80 font-medium">
                Pincode: {RESTAURANT_INFO.address.pincode}
              </span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#FFE600] hover:text-[#FFFDE7] flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
