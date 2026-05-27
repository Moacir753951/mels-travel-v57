import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  side: 'left' | 'right';
}

// Private Jet SVG Component - mais proporcional a um jato real
function PrivateJet({ angle, isMoving }: { angle: number; isMoving: boolean }) {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className="w-14 h-14"
      style={{ 
        transform: `rotate(${angle}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Asas principais (traseiras no SVG pois o avião aponta para cima) */}
      <path 
        d="M12 38 L32 32 L52 38 L48 42 L32 38 L16 42 Z" 
        fill="#e5e7eb" 
        stroke="#9ca3af" 
        strokeWidth="0.5"
      />
      
      {/* Corpo/fuselagem */}
      <ellipse 
        cx="32" 
        cy="32" 
        rx="5" 
        ry="22" 
        fill="#f3f4f6" 
        stroke="#d1d5db" 
        strokeWidth="0.5"
      />
      
      {/* Nariz/cockpit */}
      <path 
        d="M28 12 Q32 6 36 12 L34 14 L30 14 Z" 
        fill="#1f2937" 
      />
      
      {/* Janelas do cockpit */}
      <ellipse cx="30" cy="14" rx="1.5" ry="2" fill="#60a5fa" opacity="0.7" />
      <ellipse cx="34" cy="14" rx="1.5" ry="2" fill="#60a5fa" opacity="0.7" />
      
      {/* Janelas laterais */}
      <circle cx="32" cy="22" r="1" fill="#374151" />
      <circle cx="32" cy="26" r="1" fill="#374151" />
      <circle cx="32" cy="30" r="1" fill="#374151" />
      
      {/* Cauda vertical */}
      <path 
        d="M28 48 L24 58 L32 54 L40 58 L36 48 Z" 
        fill="#e5e7eb" 
        stroke="#9ca3af" 
        strokeWidth="0.5"
      />
      
      {/* Estabilizador horizontal */}
      <path 
        d="M22 52 L32 50 L42 52 L40 54 L32 52 L24 54 Z" 
        fill="#d1d5db" 
        stroke="#9ca3af" 
        strokeWidth="0.5"
      />
      
      {/* Motor esquerdo */}
      <ellipse cx="22" cy="36" rx="3" ry="5" fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" />
      <ellipse cx="22" cy="38" rx="2" ry="3" fill="#6b7280" />
      
      {/* Motor direito */}
      <ellipse cx="42" cy="36" rx="3" ry="5" fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" />
      <ellipse cx="42" cy="38" rx="2" ry="3" fill="#6b7280" />
      
      {/* Brilho do motor esquerdo quando em movimento */}
      {isMoving && (
        <ellipse cx="22" cy="40" rx="2" ry="1.5" fill="#f97316" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="0.2s" repeatCount="indefinite" />
        </ellipse>
      )}
      
      {/* Brilho do motor direito quando em movimento */}
      {isMoving && (
        <ellipse cx="42" cy="40" rx="2" ry="1.5" fill="#f97316" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="0.2s" repeatCount="indefinite" />
        </ellipse>
      )}
      
      {/* Detalhe da fuselagem */}
      <line x1="32" y1="14" x2="32" y2="48" stroke="#d1d5db" strokeWidth="0.3" opacity="0.5" />
    </svg>
  );
}

// Condensation cloud particle
function CloudParticle({ x, y, opacity, scale }: { x: number; y: number; opacity: number; scale: number }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
      }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <radialGradient id={`cloudGrad-${x}-${y}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="12" cy="14" rx="10" ry="6" fill={`url(#cloudGrad-${x}-${y})`} />
        <ellipse cx="8" cy="12" rx="5" ry="4" fill={`url(#cloudGrad-${x}-${y})`} />
        <ellipse cx="16" cy="12" rx="5" ry="4" fill={`url(#cloudGrad-${x}-${y})`} />
      </svg>
    </div>
  );
}

export default function CustomCursor() {
  const jetRef = useRef<HTMLDivElement>(null);
  const [targetAngle, setTargetAngle] = useState(-90); // Target angle
  const [displayAngle, setDisplayAngle] = useState(-90); // Smoothed display angle
  const [isMoving, setIsMoving] = useState(false);
  const [leftTrail, setLeftTrail] = useState<TrailParticle[]>([]);
  const [rightTrail, setRightTrail] = useState<TrailParticle[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrame = useRef<number | null>(null);

  // Calculate angle between two points
  const calculateAngle = useCallback((fromX: number, fromY: number, toX: number, toY: number) => {
    const dx = toX - fromX;
    const dy = toY - fromY;
    return Math.atan2(dy, dx) * (180 / Math.PI) + 90; // +90 because jet points up by default
  }, []);

  // Calculate offset position for trail (behind the jet engines)
  const calculateEngineOffset = useCallback((x: number, y: number, angleDeg: number, side: 'left' | 'right') => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const offsetDistance = 18; // Distance behind the jet
    const sideOffset = side === 'left' ? -12 : 12; // Distance between engines
    
    // Calculate position behind the jet
    const backX = x - Math.cos(angleRad) * offsetDistance;
    const backY = y - Math.sin(angleRad) * offsetDistance;
    
    // Add side offset perpendicular to direction
    const perpAngle = angleRad + Math.PI / 2;
    const finalX = backX + Math.cos(perpAngle) * sideOffset;
    const finalY = backY + Math.sin(perpAngle) * sideOffset;
    
    return { x: finalX, y: finalY };
  }, []);

  // Add trail particles for both engines
  const addTrailParticles = useCallback((x: number, y: number, angle: number) => {
    const leftPos = calculateEngineOffset(x, y, angle, 'left');
    const rightPos = calculateEngineOffset(x, y, angle, 'right');
    
    const newLeftParticle: TrailParticle = {
      id: particleId.current++,
      x: leftPos.x,
      y: leftPos.y,
      opacity: 0.5,
      scale: 0.7 + Math.random() * 0.3,
      side: 'left',
    };
    
    const newRightParticle: TrailParticle = {
      id: particleId.current++,
      x: rightPos.x,
      y: rightPos.y,
      opacity: 0.5,
      scale: 0.7 + Math.random() * 0.3,
      side: 'right',
    };
    
    setLeftTrail(prev => [...prev.slice(-12), newLeftParticle]);
    setRightTrail(prev => [...prev.slice(-12), newRightParticle]);
  }, [calculateEngineOffset]);

  // Smooth angle interpolation
  useEffect(() => {
    const smoothRotation = () => {
      setDisplayAngle(prev => {
        const diff = targetAngle - prev;
        // Handle angle wrapping (e.g., 350° to 10° should go through 360°)
        let adjustedDiff = diff;
        if (diff > 180) adjustedDiff = diff - 360;
        if (diff < -180) adjustedDiff = diff + 360;
        
        // Smooth interpolation with easing (0.25 = 25% per frame - faster rotation)
        const newAngle = prev + adjustedDiff * 0.25;
        return newAngle;
      });
      animationFrame.current = requestAnimationFrame(smoothRotation);
    };
    
    animationFrame.current = requestAnimationFrame(smoothRotation);
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [targetAngle]);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate angle
      const newAngle = calculateAngle(lastPos.current.x, lastPos.current.y, e.clientX, e.clientY);
      
      // Only update angle if mouse moved significantly
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPos.current.x, 2) + 
        Math.pow(e.clientY - lastPos.current.y, 2)
      );
      
      if (distance > 5) {
        setTargetAngle(newAngle);
        setIsMoving(true);
        
        // Add trail particles from both engines
        addTrailParticles(lastPos.current.x, lastPos.current.y, newAngle);
        
        // Clear existing timeout
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }
        
        // Set timeout to stop moving state
        moveTimeout.current = setTimeout(() => {
          setIsMoving(false);
        }, 100);
      }
      
      // Update jet position immediately
      if (jetRef.current) {
        jetRef.current.style.left = `${e.clientX}px`;
        jetRef.current.style.top = `${e.clientY}px`;
      }
      
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [calculateAngle, addTrailParticles]);

  // Fade out trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTrail(prev => {
        const updated = prev.map(p => ({
          ...p,
          opacity: p.opacity - 0.05, // Fade out over ~1 second
          scale: p.scale * 0.98,
        })).filter(p => p.opacity > 0);
        
        return updated;
      });
      
      setRightTrail(prev => {
        const updated = prev.map(p => ({
          ...p,
          opacity: p.opacity - 0.05,
          scale: p.scale * 0.98,
        })).filter(p => p.opacity > 0);
        
        return updated;
      });
    }, 20); // ~50fps

    return () => clearInterval(interval);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Left engine trail particles */}
      <div className="fixed inset-0 pointer-events-none z-[9997]">
        {leftTrail.map(particle => (
          <CloudParticle
            key={`left-${particle.id}`}
            x={particle.x}
            y={particle.y}
            opacity={particle.opacity}
            scale={particle.scale}
          />
        ))}
      </div>

      {/* Right engine trail particles */}
      <div className="fixed inset-0 pointer-events-none z-[9997]">
        {rightTrail.map(particle => (
          <CloudParticle
            key={`right-${particle.id}`}
            x={particle.x}
            y={particle.y}
            opacity={particle.opacity}
            scale={particle.scale}
          />
        ))}
      </div>

      {/* Private Jet cursor */}
      <div
        ref={jetRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: 0, top: 0 }}
      >
        <motion.div
          animate={{ scale: isMoving ? 1.02 : 1 }}
          transition={{ duration: 0.1 }}
        >
          <PrivateJet angle={displayAngle} isMoving={isMoving} />
        </motion.div>
      </div>

      {/* Hide default cursor - except for modals and interactive elements */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
          /* Restore cursor for modals and their content */
          [data-modal="true"],
          [data-modal="true"] *,
          .modal-content,
          .modal-content *,
          /* Restore cursor for buttons and interactive elements */
          button,
          a,
          input,
          textarea,
          select,
          [role="button"] {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
