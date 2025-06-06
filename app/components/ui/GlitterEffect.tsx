'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const GlitterParticle = () => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 2
  });

  return (
    <motion.div
      className="absolute rounded-full bg-white dark:bg-indigo-200 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.size}px`,
        height: `${position.size}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, position.opacity, 0],
      }}
      transition={{
        duration: 3,
        delay: position.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const GlitterOverlay = ({ count = 30 }: { count?: number }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[9998]">
      {Array.from({ length: count }).map((_, i) => (
        <GlitterParticle key={i} />
      ))}
    </div>
  );
};