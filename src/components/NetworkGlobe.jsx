import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Html } from '@react-three/drei';

const Globe = () => {
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
        if (groupRef.current) {
            groupRef.current.rotation.z += delta * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Core Wireframe Sphere */}
            <Sphere args={[1.5, 32, 32]} ref={meshRef}>
                <meshStandardMaterial
                    color="#0ea5e9" // Primary-500
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#0ea5e9"
                    emissiveIntensity={0.5}
                />
            </Sphere>

            {/* Inner Glowing Core */}
            <Sphere args={[1, 32, 32]}>
                <MeshDistortMaterial
                    color="#8b5cf6" // Purple
                    attach="material"
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.6}
                />
            </Sphere>

            {/* Orbiting Satellites (Data Nodes) */}
            <group rotation={[0.5, 0, 0]}>
                <Sphere args={[0.1, 16, 16]} position={[2, 0, 0]}>
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
                </Sphere>
            </group>
            <group rotation={[0, 0.5, 0.5]}>
                <Sphere args={[0.1, 16, 16]} position={[0, 2.2, 0]}>
                    <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
                </Sphere>
            </group>
            <group rotation={[1, 1, 0]}>
                <Sphere args={[0.08, 16, 16]} position={[0, -1.8, 0]}>
                    <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={1} />
                </Sphere>
            </group>
        </group>
    );
};

const NetworkGlobe = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Globe />
            </Canvas>

            {/* Decorative Ring */}
            <div className="absolute inset-0 border-2 border-primary-500/20 rounded-full animate-pulse-slow pointer-events-none scale-75"></div>
        </div>
    );
};

export default NetworkGlobe;
