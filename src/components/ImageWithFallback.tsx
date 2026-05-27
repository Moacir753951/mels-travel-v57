import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  city?: string;
  country?: string;
}

// Get initials for the fallback display
function getInitials(city: string): string {
  return city.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  city = '',
  country = ''
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div className={`${className} bg-gradient-to-br from-[#1f2433] to-[#2a3142] flex flex-col items-center justify-center text-center p-4`}>
        <div className="w-16 h-16 rounded-full bg-[#ff6b35]/20 flex items-center justify-center mb-3">
          <span className="text-[#ff6b35] font-bold text-xl">{getInitials(city || alt)}</span>
        </div>
        <span className="text-white font-semibold text-sm">{city || alt}</span>
        {country && <span className="text-white/50 text-xs mt-1">{country}</span>}
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f2433] to-[#2a3142] flex items-center justify-center z-10">
          <Loader2 size={32} className="text-[#ff6b35] animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={() => { setHasError(true); setIsLoading(false); }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
