/**
 * ═══════════════════════════════════════════════════════════════
 * 🌍 GLOBE 3D COMPONENT - Game Travel™
 * ═══════════════════════════════════════════════════════════════
 * 
 * © 2025 Mel's Travel. Todos los derechos reservados.
 * Componente proprietario del sistema Game Travel™.
 * 
 * ⚠️ PROPIEDAD INTELECTUAL PROTEGIDA
 * Este componente contiene tecnología 3D desarrollada exclusivamente
 * para Mel's Travel. Queda prohibida su reproducción o uso no autorizado.
 * 
 * ═══════════════════════════════════════════════════════════════
 */

import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeProps {
  isSpinning: boolean;
  baseSpeed: number;
  spinSpeed: number;
}

// Detect if device is mobile
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Simple SVG Globe for mobile - cleaner design
function CSSGlobe({ isSpinning }: { isSpinning: boolean }) {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto">
      {/* Globe container with rotation */}
      <div 
        className={`absolute inset-0 ${isSpinning ? 'animate-spin' : ''}`}
        style={{ animationDuration: isSpinning ? '0.5s' : '25s' }}
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-2xl"
        >
          <defs>
            {/* Ocean gradient */}
            <radialGradient id="ocean" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#4a9fd4" />
              <stop offset="50%" stopColor="#2d8bc9" />
              <stop offset="100%" stopColor="#1a5f9e" />
            </radialGradient>
            
            {/* Continent gradient */}
            <linearGradient id="continent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a7c59" />
              <stop offset="100%" stopColor="#2d5a3d" />
            </linearGradient>
            
            {/* Atmosphere glow */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Globe base (ocean) */}
          <circle cx="100" cy="100" r="95" fill="url(#ocean)" />
          
          {/* Continents - simplified shapes */}
          <g fill="url(#continent)" opacity="0.9">
            {/* North America */}
            <ellipse cx="45" cy="50" rx="25" ry="20" />
            <ellipse cx="35" cy="70" rx="15" ry="25" />
            
            {/* South America */}
            <ellipse cx="55" cy="120" rx="18" ry="35" />
            
            {/* Europe */}
            <ellipse cx="95" cy="45" rx="20" ry="15" />
            
            {/* Africa */}
            <ellipse cx="100" cy="95" rx="22" ry="35" />
            
            {/* Asia */}
            <ellipse cx="140" cy="55" rx="35" ry="25" />
            <ellipse cx="155" cy="85" rx="20" ry="20" />
            
            {/* Australia */}
            <ellipse cx="150" cy="135" rx="20" ry="15" />
            
            {/* Antarctica */}
            <ellipse cx="100" cy="175" rx="60" ry="10" opacity="0.6" />
          </g>
          
          {/* Clouds */}
          <g fill="white" opacity="0.3">
            <ellipse cx="60" cy="40" rx="20" ry="8" />
            <ellipse cx="120" cy="60" rx="25" ry="10" />
            <ellipse cx="80" cy="110" rx="18" ry="6" />
            <ellipse cx="140" cy="100" rx="22" ry="8" />
            <ellipse cx="50" cy="150" rx="15" ry="5" />
          </g>
          
          {/* Atmosphere rim */}
          <circle 
            cx="100" 
            cy="100" 
            r="95" 
            fill="none" 
            stroke="rgba(74,159,212,0.4)" 
            strokeWidth="3"
            filter="url(#glow)"
          />
        </svg>
      </div>
      
      {/* Outer glow effect */}
      <div className="absolute -inset-4 rounded-full bg-[#ff6b35]/10 blur-2xl -z-10" />
    </div>
  );
}

// Twinkling Stars Component - Desktop only
function TwinklingStars() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, sizes, phases } = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 80 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = 0.5 + Math.random() * 1.5;
      phases[i] = Math.random() * Math.PI * 2;
    }
    
    return { positions, sizes, phases };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime();
      const material = pointsRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.uTime.value = time;
      }
    }
  });

  const vertexShader = `
    attribute float size;
    attribute float phase;
    varying float vPhase;
    uniform float uTime;
    
    void main() {
      vPhase = phase;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      float twinkle = 0.6 + 0.4 * sin(uTime * 2.0 + phase);
      gl_PointSize = size * twinkle * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vPhase;
    uniform float uTime;
    
    void main() {
      float twinkle = 0.7 + 0.3 * sin(uTime * 2.0 + vPhase);
      float strength = 1.0 - distance(gl_PointCoord, vec2(0.5));
      strength = pow(strength, 2.0);
      
      vec3 color = vec3(1.0, 1.0, 1.0);
      if (vPhase > 4.0) color = vec3(1.0, 0.9, 0.8);
      if (vPhase > 5.0) color = vec3(0.8, 0.9, 1.0);
      
      gl_FragColor = vec4(color, strength * twinkle);
    }
  `;

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-phase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Earth({ isSpinning, baseSpeed, spinSpeed }: GlobeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentSpeed = useRef(baseSpeed);
  const targetSpeed = useRef(baseSpeed);

  const [earthMap, earthBump, earthSpecular] = useLoader(THREE.TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
  ]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * delta * 2;
      meshRef.current.rotation.y += currentSpeed.current * delta;
    }
  });

  useEffect(() => {
    targetSpeed.current = isSpinning ? spinSpeed : baseSpeed;
  }, [isSpinning, baseSpeed, spinSpeed]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={earthMap}
        normalMap={earthBump}
        specularMap={earthSpecular}
        shininess={5}
      />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.1, 64, 64]} />
      <meshPhongMaterial
        color="#4a90d9"
        transparent
        opacity={0.15}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function Clouds({ isSpinning, baseSpeed, spinSpeed }: GlobeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentSpeed = useRef(baseSpeed * 1.1);
  const targetSpeed = useRef(baseSpeed * 1.1);

  const [cloudMap] = useLoader(THREE.TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * delta * 2;
      meshRef.current.rotation.y += currentSpeed.current * delta;
    }
  });

  useEffect(() => {
    targetSpeed.current = isSpinning ? spinSpeed * 1.1 : baseSpeed * 1.1;
  }, [isSpinning, baseSpeed, spinSpeed]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.05, 64, 64]} />
      <meshPhongMaterial
        map={cloudMap}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene({ isSpinning, baseSpeed, spinSpeed }: GlobeProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} color="#ff6b35" />
      
      <Earth isSpinning={isSpinning} baseSpeed={baseSpeed} spinSpeed={spinSpeed} />
      <Atmosphere />
      <Clouds isSpinning={isSpinning} baseSpeed={baseSpeed} spinSpeed={spinSpeed} />
      <TwinklingStars />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </>
  );
}

interface Globe3DProps {
  isSpinning: boolean;
  size?: 'small' | 'large';
}

export default function Globe3D({ isSpinning, size = 'large' }: Globe3DProps) {
  const [mobile, setMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMobile(isMobile());
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Use CSS globe for mobile or when WebGL is not supported
  if (mobile || !webglSupported) {
    return (
      <div className={`${size === 'large' ? 'h-[350px] md:h-[500px]' : 'h-[250px] md:h-[300px]'} w-full flex items-center justify-center`}>
        <CSSGlobe isSpinning={isSpinning} />
      </div>
    );
  }

  const baseSpeed = 0.3;
  const spinSpeed = 4;
  const dimensions = size === 'large' ? 'h-[500px] w-full' : 'h-[300px] w-full';

  return (
    <div className={`${dimensions} relative`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Scene isSpinning={isSpinning} baseSpeed={baseSpeed} spinSpeed={spinSpeed} />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff6b35]/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
