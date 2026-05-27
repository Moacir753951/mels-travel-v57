import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function Particles({ count = 100, mousePosition }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;
      
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    
    return [positions, velocities];
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#ff6b35');
    const color2 = new THREE.Color('#1f2433');
    const color3 = new THREE.Color('#ffd8c9');
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const rand = Math.random();
      let color: THREE.Color;
      
      if (rand < 0.4) color = color1;
      else if (rand < 0.7) color = color2;
      else color = color3;
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return colors;
  }, [count]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    
    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update positions based on velocity
      positionArray[i3] += velocities[i3];
      positionArray[i3 + 1] += velocities[i3 + 1];
      positionArray[i3 + 2] += velocities[i3 + 2];
      
      // Mouse interaction - particles are attracted to mouse
      const mouseX = mousePosition.current.x * 10;
      const mouseY = mousePosition.current.y * 10;
      
      const dx = mouseX - positionArray[i3];
      const dy = mouseY - positionArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 3) {
        const force = (3 - dist) * 0.001;
        positionArray[i3] -= dx * force;
        positionArray[i3 + 1] -= dy * force;
      }
      
      // Boundary check - wrap around
      if (positionArray[i3] > 10) positionArray[i3] = -10;
      if (positionArray[i3] < -10) positionArray[i3] = 10;
      if (positionArray[i3 + 1] > 10) positionArray[i3 + 1] = -10;
      if (positionArray[i3 + 1] < -10) positionArray[i3 + 1] = 10;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Gentle rotation
    mesh.current.rotation.y += delta * 0.02;
    mesh.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface ConnectionLinesProps {
  count?: number;
}

function ConnectionLines({ count = 30 }: ConnectionLinesProps) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 6);
    const originalPositions = new Float32Array(count * 6);
    
    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      const x1 = (Math.random() - 0.5) * 15;
      const y1 = (Math.random() - 0.5) * 15;
      const z1 = (Math.random() - 0.5) * 3;
      
      const x2 = x1 + (Math.random() - 0.5) * 2;
      const y2 = y1 + (Math.random() - 0.5) * 2;
      const z2 = z1 + (Math.random() - 0.5) * 1;
      
      positions[i6] = x1;
      positions[i6 + 1] = y1;
      positions[i6 + 2] = z1;
      positions[i6 + 3] = x2;
      positions[i6 + 4] = y2;
      positions[i6 + 5] = z2;
      
      originalPositions[i6] = x1;
      originalPositions[i6 + 1] = y1;
      originalPositions[i6 + 2] = z1;
      originalPositions[i6 + 3] = x2;
      originalPositions[i6 + 4] = y2;
      originalPositions[i6 + 5] = z2;
    }
    
    return [positions, originalPositions];
  }, [count]);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    const positionArray = linesRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      
      // Gentle wave motion
      positionArray[i6 + 1] = originalPositions[i6 + 1] + Math.sin(time * 0.5 + i * 0.1) * 0.2;
      positionArray[i6 + 4] = originalPositions[i6 + 4] + Math.sin(time * 0.5 + i * 0.1 + 1) * 0.2;
    }
    
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#ff6b35"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

interface ParticleFieldProps {
  className?: string;
}

export default function ParticleField({ className = '' }: ParticleFieldProps) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={80} mousePosition={mousePosition} />
        <ConnectionLines count={30} />
      </Canvas>
    </div>
  );
}
