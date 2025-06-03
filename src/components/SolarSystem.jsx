import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import '../styles.css';

// Загрузка текстур
import sunTexture from '../assets/textures/sun.jpg';
import mercuryTexture from '../assets/textures/mercury.jpg';
import venusTexture from '../assets/textures/venus.jpg';
import earthTexture from '../assets/textures/earth.jpg';
import marsTexture from '../assets/textures/mars.jpg';
import jupiterTexture from '../assets/textures/jupiter.jpg';
import saturnTexture from '../assets/textures/saturn.jpg';
import uranusTexture from '../assets/textures/uranus.jpg';
import neptuneTexture from '../assets/textures/neptune.jpg';
import plutoTexture from '../assets/textures/pluto.jpg';
import ringTexture from '../assets/textures/rings.png';

// Орбита
const Orbit = ({ radius, visible }) =>
  visible ? (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
      <meshBasicMaterial color="white" transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  ) : null;

// Планета
const Planet = ({ size, distance, speed, texture, withRings, showOrbit }) => {
  const orbitRef = useRef();
  const planetRef = useRef();
  const ringRef = useRef();
  const map = useLoader(THREE.TextureLoader, texture);
  const ringMap = useLoader(THREE.TextureLoader, ringTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    orbitRef.current.rotation.y = t * speed;        // Вращение вокруг Солнца
    if (planetRef.current) planetRef.current.rotation.y = t * 0.5; // Вращение вокруг оси
    if (ringRef.current) ringRef.current.rotation.z = t * 0.5;     // Вращение колец
  });

  return (
    <group ref={orbitRef}>
      <Orbit radius={distance} visible={showOrbit} />
      <mesh ref={planetRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={map} />
      </mesh>
      {withRings && (
        <mesh
          ref={ringRef}
          position={[distance, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          <meshBasicMaterial
            map={ringMap}
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
};

// Главный компонент
const SolarSystem = () => {
  const [showOrbits, setShowOrbits] = useState(true);
  const sunMap = useLoader(THREE.TextureLoader, sunTexture);

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Canvas camera={{ position: [0, 40, 80], fov: 50 }} style={{ background: 'black' }}>
        <Stars radius={200} depth={60} count={5000} factor={4} fade speed={1} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} />
        <OrbitControls />

        {/* Солнце */}
        <mesh>
          <sphereGeometry args={[5, 64, 64]} />
          <meshStandardMaterial map={sunMap} emissiveMap={sunMap} emissive={'orange'} emissiveIntensity={1.5} />
        </mesh>

        {/* Планеты */}
        <Planet size={0.7} distance={10} speed={0.8} texture={mercuryTexture} showOrbit={showOrbits} />
        <Planet size={1} distance={15} speed={0.6} texture={venusTexture} showOrbit={showOrbits} />
        <Planet size={1.1} distance={20} speed={0.5} texture={earthTexture} showOrbit={showOrbits} />
        <Planet size={0.9} distance={25} speed={0.45} texture={marsTexture} showOrbit={showOrbits} />
        <Planet size={2.5} distance={35} speed={0.3} texture={jupiterTexture} showOrbit={showOrbits} />
        <Planet size={2.2} distance={45} speed={0.25} texture={saturnTexture} withRings showOrbit={showOrbits} />
        <Planet size={1.8} distance={55} speed={0.2} texture={uranusTexture} showOrbit={showOrbits} />
        <Planet size={1.6} distance={65} speed={0.15} texture={neptuneTexture} showOrbit={showOrbits} />
        <Planet size={0.5} distance={75} speed={0.1} texture={plutoTexture} showOrbit={showOrbits} />
      </Canvas>

      {/* Переключатель орбит */}
      <label htmlFor="toggle-orbits" className="toggle-switch visualization-toggle">
        <input
          id="toggle-orbits"
          type="checkbox"
          checked={showOrbits}
          onChange={() => setShowOrbits(!showOrbits)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SolarSystem;
