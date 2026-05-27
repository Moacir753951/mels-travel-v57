import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export default function ParallaxLayer({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yValue = direction === 'up' ? -100 * speed : 100 * speed;
  
  const y = useTransform(scrollYProgress, [0, 1], [0, yValue]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax with scale effect
interface ParallaxScaleProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxScale({ children, className = '' }: ParallaxScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ scale: smoothScale, opacity: smoothOpacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Horizontal parallax for carousels
interface HorizontalParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function HorizontalParallax({
  children,
  className = '',
  speed = 1,
}: HorizontalParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotating element on scroll
interface ParallaxRotateProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
}

export function ParallaxRotate({
  children,
  className = '',
  rotation = 360,
}: ParallaxRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation]);
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ rotate: smoothRotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
