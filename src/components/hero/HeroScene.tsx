"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const BRAND_BLUE = "#3f76bb";
const BRAND_BLUE_LIGHT = "#6a9bd8";
const BRAND_NAVY = "#18242c";
const ACCENT_GOLD = "#f5b942";

function glowTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(170,205,240,0.55)");
  gradient.addColorStop(1, "rgba(63,118,187,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function GlowCore() {
  const texture = useMemo(() => glowTexture(), []);
  return (
    <Billboard position={[0, 1.6, -1]}>
      <mesh>
        <planeGeometry args={[3.2, 3.2]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </Billboard>
  );
}

function ShineBurst() {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  const outerRays = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const length = i % 2 === 0 ? 3.1 : 1.9;
        return { angle, length };
      }),
    []
  );
  const innerRays = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2 + 0.2;
        return { angle, length: 1.1 };
      }),
    []
  );

  useFrame((_, delta) => {
    if (outer.current) outer.current.rotation.z += delta * 0.1;
    if (inner.current) inner.current.rotation.z -= delta * 0.22;
  });

  return (
    <>
      <group ref={outer} position={[0, 1.6, -1]}>
        {outerRays.map((ray, i) => (
          <mesh
            key={i}
            rotation={[0, 0, ray.angle]}
            position={[
              (Math.cos(ray.angle) * ray.length) / 2,
              (Math.sin(ray.angle) * ray.length) / 2,
              0,
            ]}
          >
            <coneGeometry args={[0.045, ray.length, 8]} />
            <meshStandardMaterial
              color={BRAND_BLUE_LIGHT}
              emissive={BRAND_BLUE}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      <group ref={inner} position={[0, 1.6, -1]}>
        {innerRays.map((ray, i) => (
          <mesh
            key={i}
            rotation={[0, 0, ray.angle]}
            position={[
              (Math.cos(ray.angle) * ray.length) / 2,
              (Math.sin(ray.angle) * ray.length) / 2,
              0,
            ]}
          >
            <coneGeometry args={[0.09, ray.length, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive={ACCENT_GOLD}
              emissiveIntensity={1.6}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      <GlowCore />

      <mesh position={[0, 1.6, -1]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
    </>
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
        <meshPhysicalMaterial
          color={BRAND_NAVY}
          metalness={0.7}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* cabin */}
      <mesh position={[-0.1, 0.42, 0]} castShadow>
        <boxGeometry args={[1.3, 0.4, 1]} />
        <meshPhysicalMaterial
          color={BRAND_BLUE}
          metalness={0.5}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>
      {/* accent stripe */}
      <mesh position={[0, 0.02, 0.56]}>
        <boxGeometry args={[2.32, 0.08, 0.02]} />
        <meshStandardMaterial
          color={ACCENT_GOLD}
          emissive={ACCENT_GOLD}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
      {/* headlights */}
      {[0.58, -0.58].map((z) => (
        <mesh key={z} position={[1.16, 0.05, z]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* taillights */}
      {[0.5, -0.5].map((z) => (
        <mesh key={z} position={[-1.16, 0.05, z]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial
            color="#ff4d4d"
            emissive="#ff4d4d"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}
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
  const count = 55;
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 9,
          Math.random() * 3.5 - 0.4,
          (Math.random() - 0.5) * 5 - 0.5,
        ] as [number, number, number],
        scale: 0.05 + Math.random() * 0.14,
        speed: 0.4 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <>
      {items.map((item, i) => (
        <Float key={i} speed={item.speed} floatIntensity={2.2} rotationIntensity={0.3}>
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

function WaterStreaks() {
  const count = 26;
  const group = useRef<THREE.Group>(null);
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 3,
        startY: Math.random() * 4 + 1,
        speed: 2.5 + Math.random() * 2,
        length: 0.3 + Math.random() * 0.4,
      })),
    [count]
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((_, delta) => {
    items.forEach((item, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      mesh.position.y -= delta * item.speed;
      if (mesh.position.y < -1) mesh.position.y = item.startY;
    });
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={[item.x, item.startY, item.z]}
        >
          <planeGeometry args={[0.015, item.length]} />
          <meshBasicMaterial
            color={BRAND_BLUE_LIGHT}
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
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

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.y = 0.9 + Math.sin(t * 0.35) * 0.08;
  });
  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={[BRAND_NAVY]} />
      <fog attach="fog" args={[BRAND_NAVY, 7, 19]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#dfeaf7" />
      <pointLight position={[-4, 2, -2]} intensity={35} color={BRAND_BLUE} />
      <pointLight position={[3, 1.5, 3]} intensity={16} color={ACCENT_GOLD} />
      <pointLight position={[0, 2.5, -1.5]} intensity={20} color={BRAND_BLUE_LIGHT} />

      <ShineBurst />
      <StylizedCar />
      <Bubbles />
      <WaterStreaks />
      <Sparkles count={90} scale={[9, 4.5, 5]} size={2.2} speed={0.35} color={BRAND_BLUE_LIGHT} opacity={0.7} />
      <Floor />
      <CameraRig />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        target={[0, -0.1, 0]}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 2.02}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [3.4, 0.9, 5.8], fov: 42 }}
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
