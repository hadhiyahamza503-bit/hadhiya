import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquareQuote, ExternalLink, Filter, Utensils } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = [
    'All',
    'Shawaya & Rice',
    'Family Dine-in',
    'Takeaway & Delivery',
    'Al Faham',
  ];

  const filteredReviews = activeFilter === 'All'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.tag === activeFilter);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#1B0307] text-white relative overflow-hidden border-b border-[#FFE500]/25">
      {/* Background subtle radial accents in red and radiant yellow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8E0E20]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFE500]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#340711] border border-[#FFE500]/50 text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
            <Star className="w-3.5 h-3.5 fill-[#FFE500] text-[#FFE500]" />
            <span><span className="text-[#FFD700]">COMMUNITY</span> <span className="text-white">FEEDBACK</span></span>
          </div>

          {/* Half Gold Half White Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4 flex items-center justify-center flex-wrap gap-x-3">
            <span className="text-[#FFD700] drop-shadow-[0_2px_12px_rgba(255,215,0,0.5)]">
              GUEST
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              EXPERIENCES
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-light">
            Read what families, foodies, and travelers say about our slow-fired charcoal chicken and signature flavored rice on Calicut Road.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="bg-[#27040C] rounded-3xl p-6 sm:p-8 border-2 border-[#FFE500]/45 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Overall Rating Score */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#FFE500]/30 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading font-black text-5xl sm:text-6xl text-[#FFE500]">
                  {RESTAURANT_INFO.googleRating.split('/')[0]}
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center text-[#FFE500]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'fill-[#FFE500]' : 'fill-[#FFE500]/40'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/80 font-semibold mt-1">
                    out of 5.0 on Google
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-normal mb-4">
                Based on owner-provided listing ratings and guest reviews on Calicut Road, Angadipuram.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3B0813] rounded-xl border border-[#FFE500]/40 text-xs font-bold">
                <span className="text-[#FFD700]">{RESTAURANT_INFO.priceRange}</span>
                <span className="text-[#FFE500]">•</span>
                <span className="text-white/80">{RESTAURANT_INFO.priceReportedBy}</span>
              </div>
            </div>

            {/* Middle: Key Highlight Metrics */}
            <div className="lg:col-span-5 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FFD700]">Slow-Fired Charcoal Taste</span>
                  <span className="text-white font-bold">4.9 / 5</span>
                </div>
                <div className="h-2 bg-[#180205] rounded-full overflow-hidden border border-[#FFE500]/35">
                  <div className="h-full bg-gradient-to-r from-[#8E0E20] via-[#FFD000] to-[#FFE500] rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FFD700]">Flavored Arabic Rice &amp; Toum</span>
                  <span className="text-white font-bold">4.8 / 5</span>
                </div>
                <div className="h-2 bg-[#180205] rounded-full overflow-hidden border border-[#FFE500]/35">
                  <div className="h-full bg-gradient-to-r from-[#8E0E20] via-[#FFD000] to-[#FFE500] rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FFD700]">Portion Size &amp; Platter Value</span>
                  <span className="text-white font-bold">4.9 / 5</span>
                </div>
                <div className="h-2 bg-[#180205] rounded-full overflow-hidden border border-[#FFE500]/35">
                  <div className="h-full bg-gradient-to-r from-[#8E0E20] via-[#FFD000] to-[#FFE500] rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FFD700]">Takeaway &amp; Service Speed</span>
                  <span className="text-white font-bold">4.6 / 5</span>
                </div>
                <div className="h-2 bg-[#180205] rounded-full overflow-hidden border border-[#FFE500]/35">
                  <div className="h-full bg-gradient-to-r from-[#8E0E20] via-[#FFD000] to-[#FFE500] rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>

            {/* Right: CTA to Review on Google */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 bg-[#350710] rounded-2xl border border-[#FFE500]/40 shadow-inner">
              <MessageSquareQuote className="w-8 h-8 text-[#FFE500] mb-2" />
              <h4 className="font-heading font-bold text-sm uppercase mb-1">
                <span className="text-[#FFD700]">Dined with us</span> <span className="text-white">recently?</span>
              </h4>
              <p className="text-xs text-white/75 mb-4">
                Share your experience on Google Maps to help travelers &amp; locals find great shawaya.
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 border border-[#FFF8B3]"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">Filter</span> <span className="text-white">Reviews:</span></span>
          </div>
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] text-[#3D070F] font-bold shadow-md border border-[#FFF8B3]'
                  : 'bg-[#2B050E] text-white border border-[#FFE500]/35 hover:border-[#FFE500] hover:text-[#FFE500]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#27040C] rounded-2xl p-6 border-2 border-[#FFE500]/35 hover:border-[#FFE500] shadow-xl hover:shadow-2xl hover:shadow-[0_0_20px_rgba(255,229,0,0.25)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header with Star Rating and Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-[#FFE500]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFE500]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/70 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-white/90 leading-relaxed font-light mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div>
                {/* Dish Ordered Tag */}
                {review.dishRecommended && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#380812] border border-[#FFE500]/35 text-[11px] font-medium">
                    <Utensils className="w-3 h-3 text-[#FFE500]" />
                    <span><span className="text-[#FFD700]">Ordered:</span> <span className="text-white">{review.dishRecommended}</span></span>
                  </div>
                )}

                {/* Author Info */}
                <div className="pt-3 border-t border-[#FFE500]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#520A18] border border-[#FFE500]/50 flex items-center justify-center text-xs font-bold text-[#FFE500]">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-[#FFD700]">
                          {review.author}
                        </span>
                        {review.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500]" />
                        )}
                      </div>
                      <span className="text-[10px] text-white/70 block">
                        {review.location || 'Local Diner'}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-[#FFE500] bg-[#3B0914] px-2 py-0.5 rounded border border-[#FFE500]/35">
                    {review.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link / Disclaimer */}
        <div className="mt-12 text-center text-xs text-white/75">
          <p>
            Ratings and reviews are representative of verified guest feedback collected for Yamama Shawaya, Calicut Road, Angadipuram / Tirurkad.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE500] hover:text-white font-bold flex items-center gap-1 underline underline-offset-4"
            >
              <span><span className="text-[#FFD700]">View all reviews</span> on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
