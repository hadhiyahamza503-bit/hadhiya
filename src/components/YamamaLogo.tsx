import React from 'react';

interface YamamaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const YamamaLogo: React.FC<YamamaLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28 sm:w-36 sm:h-36',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`relative ${sizeMap[size]} rounded-full overflow-hidden border-2 border-[#FFE500] shadow-lg bg-[#25060A] flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <img
          src="/src/assets/images/yamama_official_logo_1790141855254.jpg"
          alt="Yamama Shawaya Official Mascot Logo - Refill Your Energy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          {/* Half Gold Half White Write */}
          <div className="font-heading font-black text-xl sm:text-2xl tracking-wider leading-none flex items-center gap-1">
            <span className="text-[#FFD700]">YAMAMA</span>
            <span className="text-white">SHAWAYA</span>
          </div>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#FFE500] uppercase leading-tight mt-0.5">
            CHARCOAL GRILL
          </span>
          <span className="text-[9px] font-semibold text-white/80 tracking-widest uppercase mt-0.5">
            Refill Your Energy
          </span>
        </div>
      )}
    </div>
  );
};
