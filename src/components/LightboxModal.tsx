import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { GalleryItem } from '../types/restaurant';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOrderClick: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onOrderClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    if (currentIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null) return null;
  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1A0307] border-2 border-[#FFD600]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 bg-[#26050C] border-b border-[#FFD600]/35 text-[#FFF2D1]">
          <div>
            <span className="text-[#FFE600] text-xs font-bold uppercase tracking-widest block">
              {currentItem.category}
            </span>
            <h3 className="font-heading text-lg font-bold text-[#FFFDE7] truncate max-w-md">
              {currentItem.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#FFD600] font-mono font-bold">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close lightbox"
              className="p-1.5 text-[#FFE600] hover:text-[#FFFDE7] hover:bg-[#4D0B17] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Viewport with Nav arrows */}
        <div className="relative bg-[#100103] flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[65vh] transition-all duration-300"
          />

          {/* Prev button */}
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#28050D]/90 hover:bg-[#450914] text-[#FFE600] border border-[#FFD600]/50 backdrop-blur-sm transition-all focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#28050D]/90 hover:bg-[#450914] text-[#FFE600] border border-[#FFD600]/50 backdrop-blur-sm transition-all focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom bar with Details & Fast Order */}
        <div className="p-4 bg-[#26050C] border-t border-[#FFD600]/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#FFF2D1]/90 font-light flex-1">
            {currentItem.description || 'Authentic slow charcoal-fired recipe made fresh daily at Yamama Shawaya.'}
          </p>

          <button
            onClick={() => {
              onClose();
              onOrderClick();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0 border border-[#FFF59D]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#3D070F]" />
            <span>Order This Dish</span>
          </button>
        </div>
      </div>
    </div>
  );
};
