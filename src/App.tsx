/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureIntro } from './components/SignatureIntro';
import { SpecialOffer } from './components/SpecialOffer';
import { MenuSection } from './components/MenuSection';
import { WhyYamama } from './components/WhyYamama';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_ITEMS } from './data/restaurantData';
import { MenuItem } from './types/restaurant';
import { Phone, MessageCircle, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrderItem, setSelectedOrderItem] = useState<MenuItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenOrder = (item?: MenuItem) => {
    if (item) {
      setSelectedOrderItem(item);
    }
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div className="min-h-screen bg-[#180205] text-white flex flex-col font-sans selection:bg-[#FFE500] selection:text-[#500810]">
      {/* Header & Sticky Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrder()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenOrder()} />

        {/* Signature Intro: The Taste of Yamama */}
        <SignatureIntro />

        {/* The Yamama Combo: Dramatic Dark-Maroon Feature */}
        <SpecialOffer
          onSelectCombo={(item) => handleOpenOrder(item)}
          onOpenOrderModal={() => handleOpenOrder()}
        />

        {/* Menu Section: Combos and Signature Dishes */}
        <MenuSection onOrderDish={(item) => handleOpenOrder(item)} />

        {/* Why Yamama: 4 Core Culinary Pillars */}
        <WhyYamama />

        {/* Gallery: Authentic Arabic Shawaya & Rice Food Imagery */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Guest Experiences & Community Reviews */}
        <ReviewsSection />

        {/* About Section: History, Verified Details & Services */}
        <AboutSection />

        {/* Location & Visiting Section: Address, Hours, Phones, Directions */}
        <LocationSection />

        {/* Contact CTA: Craving Charcoal-Grilled Chicken */}
        <ContactCTA onOpenOrderModal={() => handleOpenOrder()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar for Fast Ordering - Red & Yellow Shades with Gold & White Writing */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#25040B]/98 backdrop-blur-md border-t-2 border-[#FFE500]/60 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#590C19] to-[#801024] text-white hover:text-[#FFD700] rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border border-[#FFE500]/50 active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
          <span><span className="text-[#FFD700]">Call</span> <span className="text-white">Now</span></span>
        </a>

        <button
          onClick={() => handleOpenOrder()}
          className="flex-[1.5] py-2.5 px-3 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] text-[#3D070F] rounded-xl text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-lg shadow-[#FFE500]/40 border border-[#FFF8B3] active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#3D070F]" />
          <span>Order Now</span>
        </button>

        <a
          href="#menu"
          className="flex-1 py-2.5 px-3 bg-[#380812] text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border border-[#FFE500]/40 active:scale-95 transition-all"
        >
          <Utensils className="w-3.5 h-3.5 text-[#FFE500]" />
          <span><span className="text-[#FFD700]">Our</span> <span className="text-white">Menu</span></span>
        </a>
      </div>

      {/* Interactive Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        selectedItem={selectedOrderItem}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onOrderClick={() => handleOpenOrder()}
      />
    </div>
  );
}
