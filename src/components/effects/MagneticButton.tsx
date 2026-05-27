import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  strength = 0.3,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-[#ff6b35] text-white shadow-lg shadow-[#ff6b35]/30 hover:shadow-xl hover:shadow-[#ff6b35]/40',
    secondary: 'bg-[#1f2433] text-white shadow-lg shadow-[#1f2433]/30 hover:shadow-xl hover:shadow-[#1f2433]/40',
    outline: 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
    ghost: 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as any}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
