"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function ThreeScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />

                <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#F59E0B" // Popcorn caramel/butter color
                            attach="material"
                            distort={0.6} // Amount of distortion
                            speed={2} // Speed of distortion
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
