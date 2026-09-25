import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const getWhatsAppChatUrl = () => {
    const text = `Hello Yamama Shawaya! I would like to inquire about dining / takeaway / delivery.`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#1B0307] text-white relative overflow-hidden border-b border-[#FFE500]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <span className="w-6 h-0.5 bg-[#FFE500]" />
            <span><span className="text-[#FFD700]">FIND US IN</span> <span className="text-white">ANGADIPURAM</span></span>
            <span className="w-6 h-0.5 bg-[#FFE500]" />
          </div>

          {/* Half Gold Half White Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
              COME VISIT
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              YAMAMA
            </span>
          </h2>

          <p className="text-base text-white/85 font-light">
            Conveniently situated on Calicut Road between Angadipuram and Tirurkad, welcoming families, travellers, and local food enthusiasts.
          </p>
        </div>

        {/* Location Cards & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Details Card */}
          <div className="lg:col-span-6 bg-[#27040C] rounded-3xl p-8 sm:p-10 border-2 border-[#FFE500]/45 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#520A18] text-[#FFE500] flex items-center justify-center shrink-0 shadow-md border border-[#FFE500]/50">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1 flex items-center gap-1.5">
                    <span className="text-[#FFD700]">Restaurant</span> <span className="text-white">Address</span>
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                    {RESTAURANT_INFO.address.line1},<br />
                    {RESTAURANT_INFO.address.road},<br />
                    {RESTAURANT_INFO.address.locality},<br />
                    {RESTAURANT_INFO.address.city},<br />
                    {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.state} — {RESTAURANT_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#FFE500]/25">
                <div className="w-12 h-12 rounded-2xl bg-[#520A18] text-[#FFE500] flex items-center justify-center shrink-0 shadow-md border border-[#FFE500]/50">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1 flex items-center gap-1.5">
                    <span className="text-[#FFD700]">Opening</span> <span className="text-white">Hours</span>
                  </h3>
                  <p className="text-base font-bold text-white">
                    Daily: <span className="text-[#FFE500]">12:30 PM – 12:00 AM (Midnight)</span>
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Open seven days a week: Wednesday to Tuesday, lunch to late night
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#FFE500]/25">
                <div className="w-12 h-12 rounded-2xl bg-[#520A18] text-[#FFE500] flex items-center justify-center shrink-0 shadow-md border border-[#FFE500]/50">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1 flex items-center gap-1.5">
                    <span className="text-[#FFD700]">Telephone Orders</span> <span className="text-white">&amp; Inquiries</span>
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {RESTAURANT_INFO.phones.map((phone) => (
                      <a
                        key={phone.raw}
                        href={`tel:${phone.raw}`}
                        className="px-4 py-2 rounded-xl bg-[#3B0813] hover:bg-[#520A18] text-white hover:text-[#FFE500] border border-[#FFE500]/50 font-bold text-sm flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                        <span><span className="text-[#FFD700]">{phone.display.split(' ')[0]}</span> <span>{phone.display.split(' ').slice(1).join(' ')}</span></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#FFE500]/25 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 border border-[#FFF8B3]"
              >
                <Navigation className="w-4 h-4 text-[#3D070F]" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#3B0813] hover:bg-[#520A18] text-white border-2 border-[#FFE500]/60 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#FFE500]" />
                <span><span className="text-[#FFD700]">WhatsApp</span> <span className="text-white">Us</span></span>
              </a>
            </div>
          </div>

          {/* Travel Info Card */}
          <div className="lg:col-span-6 bg-[#27040C] rounded-3xl p-8 sm:p-10 border-2 border-[#FFE500]/45 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFE500]">
                  VISITOR GUIDE
                </span>
                <span className="text-xs font-bold text-[#FFE500] bg-[#3B0914] px-3 py-1 rounded-full border border-[#FFE500]/40">
                  Google Verified
                </span>
              </div>

              {/* Title: Half Gold Half White */}
              <h3 className="font-heading font-black text-2xl flex items-center gap-2">
                <span className="text-[#FFD700]">Getting to</span> <span className="text-white">Yamama Shawaya</span>
              </h3>

              <div className="space-y-4 text-sm text-white/90">
                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFE500]/35 space-y-1">
                  <h4 className="font-heading font-bold text-sm">
                    <span className="text-[#FFD700]">From Perinthalmanna Town</span> <span className="text-white">(~3–4 km)</span>
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Take the Calicut Road (SH 72 / Kozhikode Highway) heading towards Angadipuram. Continue through Oradampalam towards Tirurkad.
                  </p>
                </div>

                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFE500]/35 space-y-1">
                  <h4 className="font-heading font-bold text-sm">
                    <span className="text-[#FFD700]">From Angadipuram Railway Station</span> <span className="text-white">(~2.5 km)</span>
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Direct access via Calicut Road. Convenient stop for travelers looking for quick takeaway or lunch and late-night dinners.
                  </p>
                </div>

                <div className="p-4 bg-[#1E0308]/90 rounded-2xl border border-[#FFE500]/35 space-y-1">
                  <h4 className="font-heading font-bold text-sm">
                    <span className="text-[#FFD700]">Parking</span> <span className="text-white">&amp; Accessibility</span>
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Roadside parking available along the highway front for quick takeaway pickup and dining guests.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#FFE500]/25 flex items-center justify-between">
              <span className="text-xs text-white/80 font-medium">
                <span className="text-[#FFD700]">Pincode:</span> {RESTAURANT_INFO.address.pincode}
              </span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#FFE500] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span><span className="text-[#FFD700]">Open in</span> Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
