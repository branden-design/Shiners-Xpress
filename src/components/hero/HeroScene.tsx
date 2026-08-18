"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshReflectorMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const BRAND_BLUE = "#3f76bb";
const BRAND_BLUE_LIGHT = "#6a9bd8";
const BRAND_NAVY = "#18242c";

function ShineBurst() {
  const group = useRef<THREE.Group>(null);
  const rayCount = 14;

  const rays = useMemo(() => {
    return Array.from({ length: rayCount }, (_, i) => {
      const angle = (i / rayCount) * Math.PI * 2;
      const length = i % 2 === 0 ? 2.6 : 1.6;
      return { angle, length };
    });
  }, [rayCount]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.12;
  });

  return (
    <group ref={group} position={[0, 1.6, -1]}>
      {rays.map((ray, i) => (
        <mesh
          key={i}
          rotation={[0, 0, ray.angle]}
          position={[
            (Math.cos(ray.angle) * ray.length) / 2,
            (Math.sin(ray.angle) * ray.length) / 2,
            0,
          ]}
        >
          <coneGeometry args={[0.05, ray.length, 8]} />
          <meshStandardMaterial
            color={BRAND_BLUE_LIGHT}
            emissive={BRAND_BLUE}
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#bcd4ee"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function StylizedCar() {
  const car = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!car.current) return;
    const t = clock.getElapsedTime();
    car.current.position.y = -0.55 + Math.sin(t * 1.4) * 0.03;
    car.current.rotation.y = Math.sin(t * 0.3) * 0.25;
  });

  const wheelPositions: [number, number, number][] = [
    [0.85, -0.28, 0.62],
    [0.85, -0.28, -0.62],
    [-0.85, -0.28, 0.62],
    [-0.85, -0.28, -0.62],
  ];

  return (
    <group ref={car}>
      {/* body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.3, 0.5, 1.1]} />
        <meshStandardMaterial color={BRAND_NAVY} metalness={0.6} roughness={0.25} />
      </mesh>
      {/* cabin */}
      <mesh position={[-0.1, 0.42, 0]} castShadow>
        <boxGeometry args={[1.3, 0.4, 1]} />
        <meshStandardMaterial color={BRAND_BLUE} metalness={0.4} roughness={0.3} />
      </mesh>
      {/* accent stripe */}
      <mesh position={[0, 0.02, 0.56]}>
        <boxGeometry args={[2.32, 0.08, 0.02]} />
        <meshStandardMaterial
          color={BRAND_BLUE_LIGHT}
          emissive={BRAND_BLUE_LIGHT}
          emissiveIntensity={0.6}
          toneMapped={false}
        />
      </mesh>
      {wheelPositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.24, 0.24, 0.2, 20]} />
          <meshStandardMaterial color="#0c1216" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Bubbles() {
  const count = 40;
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 8,
          Math.random() * 3 - 0.4,
          (Math.random() - 0.5) * 4 - 0.5,
        ] as [number, number, number],
        scale: 0.05 + Math.random() * 0.12,
        speed: 0.4 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <>
      {items.map((item, i) => (
        <Float key={i} speed={item.speed} floatIntensity={2} rotationIntensity={0.3}>
          <mesh position={item.position}>
            <sphereGeometry args={[item.scale, 12, 12]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.35}
              roughness={0.05}
              transmission={0.9}
              thickness={0.4}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
      <planeGeometry args={[40, 40]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color={BRAND_NAVY}
        metalness={0.6}
        mirror={0}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={[BRAND_NAVY]} />
      <fog attach="fog" args={[BRAND_NAVY, 6, 18]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#dfeaf7" />
      <pointLight position={[-4, 2, -2]} intensity={30} color={BRAND_BLUE} />
      <pointLight position={[3, 1, 3]} intensity={12} color={BRAND_BLUE_LIGHT} />

      <ShineBurst />
      <StylizedCar />
      <Bubbles />
      <Sparkles count={60} scale={[8, 4, 4]} size={2} speed={0.3} color={BRAND_BLUE_LIGHT} opacity={0.6} />
      <Floor />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.6, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
