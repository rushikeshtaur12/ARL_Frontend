"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PopcornAnimation() {
    const [kernels, setKernels] = useState<Array<{ id: number; x: number; y: number; delay: number; scale: number }>>([]);

    useEffect(() => {
        // Generate random positions for popcorn kernels only on client side
        const newKernels = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2,
            scale: 0.5 + Math.random() * 0.5,
        }));
        setKernels(newKernels);
    }, []);

    if (kernels.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {kernels.map((kernel) => (
                <motion.div
                    key={kernel.id}
                    className="absolute w-8 h-8 bg-popcorn-butter rounded-full opacity-20"
                    style={{
                        left: `${kernel.x}%`,
                        top: `${kernel.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, kernel.scale, 0],
                        opacity: [0, 0.4, 0],
                        y: [0, -100],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: kernel.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
