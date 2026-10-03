import React, { useState } from 'react';
import officialLogoImg from '../assets/images/dhruvsetu_official_logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

const FALLBACK_LOGO_URL = 'https://file.tmper.app/image_1790964321020_739a8a3e.png';

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'light',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(officialLogoImg || FALLBACK_LOGO_URL);

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_LOGO_URL) {
      setImgSrc(FALLBACK_LOGO_URL);
    }
  };

  if (size === 'hero') {
    return (
      <div 
        onClick={onClick}
        className={`flex flex-col items-center text-center cursor-pointer group ${className}`}
      >
        <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-lg border border-cyan-200/60 bg-white">
          <img
            src={imgSrc}
            alt="DhruvSetu - India's Polar Knowledge & Outreach Platform"
            onError={handleImageError}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
          />
        </div>
      </div>
    );
  }

  const isDark = variant === 'dark';
  const iconDimensions = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textDimensions = size === 'sm' ? 'text-xl sm:text-[22px]' : size === 'lg' ? 'text-2xl' : 'text-xl sm:text-[22px]';

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer group select-none max-w-[260px] ${className}`}
    >
      {/* Official Emblem Icon (Compact, refined 40-44px) */}
      <div className={`relative ${iconDimensions} rounded-xl overflow-hidden border ${isDark ? 'border-cyan-500/40 bg-slate-900 shadow-sm' : 'border-cyan-200/90 bg-white shadow-xs'} flex-shrink-0 group-hover:border-cyan-400 transition-all`}>
        <img
          src={imgSrc}
          alt="DhruvSetu Emblem"
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center leading-none">
          <span className={`${textDimensions} font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-950'} font-sans`}>
            Dhruv
          </span>
          <span className={`${textDimensions} font-extrabold tracking-tight text-cyan-700 font-sans`}>
            Setu
          </span>
        </div>
        
        {showSubtitle && (
          <span className={`text-[10px] sm:text-[11px] leading-tight font-medium tracking-tight mt-1 whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            India’s Polar Knowledge &amp; Outreach Platform
          </span>
        )}
      </div>
    </div>
  );
};
