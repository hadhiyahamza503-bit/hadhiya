import React from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#180205] text-white relative border-b border-[#FFE500]/25">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">VISUAL</span> <span className="text-white">FEAST</span></span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
          </div>

          {/* Half Gold Half White Title */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
              THE YAMAMA
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              GALLERY
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/85 font-light">
            Authentic slow-fired shawaya, sizzling Al Faham, and aromatic Arabic spiced rice straight from the charcoal pit.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(index)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#FFE500]/40 hover:border-[#FFE500] cursor-pointer bg-[#29040D] shadow-xl hover:shadow-2xl hover:shadow-[0_0_25px_rgba(255,229,0,0.3)] transition-all duration-300 aspect-square sm:aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180205]/95 via-[#180205]/40 to-transparent opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5" />

              {/* Hover Badge / Zoom Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-2 rounded-full bg-[#2F050E]/90 border border-[#FFE500] text-[#FFE500] flex items-center justify-center backdrop-blur-sm shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Caption details - Half Gold Half White Write */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 translate-y-2 sm:translate-y-4 group-hover:translate-y-0 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD700] block truncate">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-white leading-tight truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Note */}
        <div className="mt-8 text-center text-xs text-white/80 font-medium">
          <span className="text-[#FFD700]">Tap or click</span> any image to view in high resolution with dish details.
        </div>
      </div>
    </section>
  );
};
