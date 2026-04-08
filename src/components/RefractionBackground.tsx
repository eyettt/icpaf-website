import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function RefractionBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-deep-sea">
      {/* Base Caustic Layer */}
      <div className="absolute inset-0 caustic-layer animate-caustic" />
      
      {/* Interactive Light Refraction */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        animate={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 168, 232, 0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Deep Sea Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-sea/50 to-deep-sea" />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-oxygen-blue/20 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 2,
          }}
          animate={{
            y: [null, '-20%'],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
