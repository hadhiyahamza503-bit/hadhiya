import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Check, ShoppingBag, Utensils, Truck } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

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

  const handleCopyOrder = () => {
    const text = `Order for Yamama Shawaya: ${quantity}x ${activeItem.name} (${serviceType})${notes ? ` - Note: ${notes}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
    >
      <div
        className="relative w-full max-w-lg bg-[#1A0307] border-2 border-[#FFD600]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#29050E] border-b border-[#FFD600]/35 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFD600] shadow-sm bg-[#160205] shrink-0">
              <img
                src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
                alt="Yamama Shawaya Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDE7] via-[#FFD600] via-[#FFA000] to-[#FF4D4D] text-base sm:text-lg font-heading tracking-wide uppercase font-black block leading-tight" id="order-modal-title">
                Order from Yamama
              </span>
              <span className="text-[10px] text-[#FFD600] font-bold tracking-widest uppercase">
                Fast Takeaway & Delivery
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#FFE600] hover:text-[#FFFDE7] hover:bg-[#4D0B17] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#FFF2D1]">
          {/* Selected Dish Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FFE600] mb-2">
              Select Dish / Platter
            </label>
            <select
              value={activeItem.id}
              onChange={(e) => {
                const found = ALL_MENU_ITEMS.find((i) => i.id === e.target.value);
                if (found) setActiveItem(found);
              }}
              className="w-full bg-[#26050C] border border-[#FFD600]/45 text-[#FFFDE7] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
            >
              {ALL_MENU_ITEMS.map((item) => (
                <option key={item.id} value={item.id} className="bg-[#1A0307] text-[#FFF2D1]">
                  {item.name} — {item.price}
                </option>
              ))}
            </select>
          </div>

          {/* Item Preview Card */}
          <div className="bg-[#26050C] rounded-xl p-4 border border-[#FFD600]/35 flex gap-4 items-center">
            <img
              src={activeItem.image}
              alt={activeItem.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-lg object-cover border border-[#FFD600]/50 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-bold text-sm text-[#FFE600] truncate">
                {activeItem.name}
              </h4>
              <p className="text-xs text-[#FFF2D1]/75 line-clamp-2 mt-0.5">
                {activeItem.description}
              </p>
              <span className="font-heading font-black text-sm text-[#FFFDE7] block mt-1">
                {activeItem.price}
              </span>
            </div>
          </div>

          {/* Service Preference (Dine-in / Takeaway / Delivery) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FFE600] mb-2">
              Service Type
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
                        ? 'bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] text-[#3D070F] border-[#FFF59D] shadow-md'
                        : 'bg-[#2B060E] text-[#FFF2D1] border-[#FFD600]/35 hover:border-[#FFE600] hover:text-[#FFE600]'
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
              <span className="block text-xs font-bold uppercase tracking-wider text-[#FFE600]">
                Quantity
              </span>
              <span className="text-[11px] text-[#FFD600]/80 font-medium">Number of portions</span>
            </div>
            <div className="flex items-center gap-3 bg-[#26050C] border border-[#FFD600]/45 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-[#450914] text-[#FFE600] hover:bg-[#5E0D1B] flex items-center justify-center font-bold text-base transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-heading font-black text-base text-[#FFFDE7]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-[#450914] text-[#FFE600] hover:bg-[#5E0D1B] flex items-center justify-center font-bold text-base transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Special Instructions / Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FFE600] mb-2">
              Special Instructions / Dietary Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Extra garlic toum, less spicy, parcel tightly..."
              rows={2}
              className="w-full bg-[#26050C] border border-[#FFD600]/40 text-[#FFFDE7] placeholder-[#FFD600]/40 text-xs rounded-xl p-3 focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600]"
            />
          </div>

          {/* Subtotal Display */}
          <div className="p-4 bg-[#26050C] rounded-xl border border-[#FFD600]/40 flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FFD600]">
              Estimated Subtotal
            </span>
            <span className="font-heading font-black text-xl text-[#FFE600]">
              {calculateSubtotal()}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#26050C] border-t border-[#FFD600]/35 p-6 flex flex-col sm:flex-row gap-3">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#FFF066] via-[#FFD600] to-[#FFA000] hover:from-[#FFFDE7] hover:to-[#FFD600] text-[#3D070F] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-center border border-[#FFF59D]"
          >
            <MessageCircle className="w-4 h-4 text-[#3D070F]" />
            <span>Send on WhatsApp</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phones[0].raw}`}
            className="py-3.5 px-5 bg-[#450914] hover:bg-[#5E0D1B] text-[#FFE600] border-2 border-[#FFD600]/70 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4 text-[#FFE600]" />
            <span>Call to Confirm</span>
          </a>
        </div>
      </div>
    </div>
  );
};
