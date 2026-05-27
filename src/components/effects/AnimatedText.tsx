import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

interface AnimatedTextProps {
  children: string;
  className?: string;
  type?: 'words' | 'chars' | 'lines';
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function AnimatedText({
  children,
  className = '',
  type = 'words',
  delay = 0,
  staggerDelay = 0.05,
  once = true,
  tag: Tag = 'span',
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getContent = () => {
    if (type === 'chars') {
      return children.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }

    if (type === 'words') {
      return children.split(' ').map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em]" style={{ overflow: 'visible' }}>
          <motion.span
            variants={itemVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ));
    }

    // lines
    return children.split('\n').map((line, index) => (
      <span key={index} className="block" style={{ overflow: 'visible' }}>
        <motion.span
          variants={itemVariants}
          className="inline-block"
        >
          {line}
        </motion.span>
      </span>
    ));
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
      style={{ perspective: 1000 }}
    >
      <Tag className="inline">{getContent()}</Tag>
    </motion.div>
  );
}

// Simple fade up text for subtitles
export function FadeUpText({
  children,
  className = '',
  delay = 0,
  once = true,
}: Omit<AnimatedTextProps, 'type' | 'staggerDelay' | 'tag'>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
