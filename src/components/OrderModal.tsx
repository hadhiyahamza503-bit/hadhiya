import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, ShoppingBag, Utensils, Truck } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { RESTAURANT_INFO, ALL_MENU_ITEMS } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
}) => {
  const [activeItem, setActiveItem] = useState<MenuItem>(
    selectedItem || ALL_MENU_ITEMS[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [serviceType, setServiceType] = useState<'Dine-in' | 'Takeaway' | 'Home Delivery'>('Takeaway');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setActiveItem(selectedItem);
      setQuantity(1);
    }
  }, [selectedItem]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    if (activeItem.rawPrice) {
      return `₹${activeItem.rawPrice * quantity}`;
    }
    return "Ask for today's price";
  };

  const generateWhatsAppUrl = () => {
    const priceText = activeItem.rawPrice
      ? `(₹${activeItem.rawPrice * quantity})`
      : "(Price: Ask for today's price)";

    const message = `Hello Yamama Shawaya! 🍗
I would like to order:
• Item: ${activeItem.name}
• Quantity: ${quantity} ${priceText}
• Service: ${serviceType}
${notes.trim() ? `• Special request: ${notes.trim()}` : ''}

Location: Calicut Road, Angadipuram.
Please confirm my order. Thank you!`;

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
    >
      <div
        className="relative w-full max-w-lg bg-[#1B0307] border-2 border-[#FFE500]/70 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#29040D] border-b border-[#FFE500]/40 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFE500] shadow-sm bg-[#180205] shrink-0">
              <img
                src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                alt="Yamama Shawaya Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              {/* Half Gold Half White Write */}
              <div className="text-base sm:text-lg font-heading tracking-wide uppercase font-black leading-tight flex items-center gap-1.5" id="order-modal-title">
                <span className="text-[#FFD700]">ORDER FROM</span>
                <span className="text-white">YAMAMA</span>
              </div>
              <span className="text-[10px] text-[#FFE500] font-bold tracking-widest uppercase">
                Fast Takeaway &amp; Delivery
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#FFE500] hover:text-white hover:bg-[#520A18] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-white">
          {/* Selected Dish Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">
              <span className="text-[#FFD700]">Select Dish</span> <span className="text-white">/ Platter</span>
            </label>
            <select
              value={activeItem.id}
              onChange={(e) => {
                const found = ALL_MENU_ITEMS.find((i) => i.id === e.target.value);
                if (found) setActiveItem(found);
              }}
              className="w-full bg-[#26050C] border border-[#FFE500]/45 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE500] focus:ring-1 focus:ring-[#FFE500]"
            >
              {ALL_MENU_ITEMS.map((item) => (
                <option key={item.id} value={item.id} className="bg-[#1B0307] text-white">
                  {item.name} — {item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Item Preview Card */}
          <div className="bg-[#26050C] rounded-xl p-4 border border-[#FFE500]/35 flex gap-4 items-center">
            <img
              src={activeItem.image}
              alt={activeItem.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-lg object-cover border border-[#FFE500]/50 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-bold text-sm text-[#FFD700] truncate">
                {activeItem.name}
              </h4>
              <p className="text-xs text-white/75 line-clamp-2 mt-0.5">
                {activeItem.description}
              </p>
              <span className="font-heading font-black text-sm text-[#FFE500] block mt-1">
                {activeItem.price}
              </span>
            </div>
          </div>

          {/* Service Preference (Dine-in / Takeaway / Delivery) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">
              <span className="text-[#FFD700]">Service</span> <span className="text-white">Type</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Takeaway', 'Dine-in', 'Home Delivery'] as const).map((type) => {
                const isSelected = serviceType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceType(type)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all border ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] text-[#3D070F] border-[#FFF8B3] shadow-md'
                        : 'bg-[#2B050E] text-white border-[#FFE500]/35 hover:border-[#FFE500] hover:text-[#FFE500]'
                    }`}
                  >
                    {type === 'Takeaway' && <ShoppingBag className="w-4 h-4" />}
                    {type === 'Dine-in' && <Utensils className="w-4 h-4" />}
                    {type === 'Home Delivery' && <Truck className="w-4 h-4" />}
                    <span className="truncate">{type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider">
                <span className="text-[#FFD700]">Quantity</span>
              </span>
              <span className="text-[11px] text-white/80 font-medium">Number of portions</span>
            </div>
            <div className="flex items-center gap-3 bg-[#26050C] border border-[#FFE500]/45 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-[#4E0A16] text-[#FFE500] hover:bg-[#680E1E] flex items-center justify-center font-bold text-base transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-heading font-black text-base text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-[#4E0A16] text-[#FFE500] hover:bg-[#680E1E] flex items-center justify-center font-bold text-base transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Special Instructions / Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2">
              <span className="text-[#FFD700]">Special Instructions</span> <span className="text-white">(Optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Extra garlic toum, less spicy, parcel tightly..."
              rows={2}
              className="w-full bg-[#26050C] border border-[#FFE500]/40 text-white placeholder-white/40 text-xs rounded-xl p-3 focus:outline-none focus:border-[#FFE500] focus:ring-1 focus:ring-[#FFE500]"
            />
          </div>

          {/* Subtotal Display */}
          <div className="p-4 bg-[#26050C] rounded-xl border border-[#FFE500]/40 flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider">
              <span className="text-[#FFD700]">Estimated</span> <span className="text-white">Subtotal</span>
            </span>
            <span className="font-heading font-black text-xl text-[#FFE500]">
              {calculateSubtotal()}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#26050C] border-t border-[#FFE500]/35 p-6 flex flex-col sm:flex-row gap-3">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#FFE500] via-[#FFD000] to-[#FF9E00] hover:from-[#FFFDE7] hover:to-[#FFE500] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-center border border-[#FFF8B3]"
          >
            <MessageCircle className="w-4 h-4 text-[#3D070F]" />
            <span>Send on WhatsApp</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
            className="py-3.5 px-5 bg-[#4E0A16] hover:bg-[#680E1E] text-white border-2 border-[#FFE500]/70 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4 text-[#FFE500]" />
            <span><span className="text-[#FFD700]">Call to</span> <span className="text-white">Confirm</span></span>
          </a>
        </div>
      </div>
    </div>
  );
};
