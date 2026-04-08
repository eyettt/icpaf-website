import React from 'react';
import { motion } from 'motion/react';

const locations = [
  { x: '20%', y: '35%', name: 'North America' },
  { x: '48%', y: '30%', name: 'Europe' },
  { x: '75%', y: '45%', name: 'Asia Pacific' },
  { x: '55%', y: '65%', name: 'Middle East' },
  { x: '25%', y: '70%', name: 'Latin America' },
];

export default function InteractiveMap() {
  return (
    <section className="py-32 px-8 md:px-24 bg-transparent overflow-hidden" id="ecosystem">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">Global Footprint</span>
          <h2 className="text-5xl md:text-9xl font-serif italic tracking-tighter text-sapphire">The ICPAF Ecosystem.</h2>
        </div>

        <div className="relative aspect-[16/9] w-full glass-panel overflow-hidden p-12">
          <div className="absolute inset-0 caustic-layer opacity-10" />
          
          {/* Simple Map Background */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-5 text-oxygen-blue">
            <path
              fill="currentColor"
              d="M150,100 L250,100 L300,150 L250,200 L150,200 Z M450,80 L550,80 L600,130 L550,180 L450,180 Z M700,150 L800,150 L850,200 L800,250 L700,250 Z M500,300 L600,300 L650,350 L600,400 L500,400 Z M200,350 L300,350 L350,400 L300,450 L200,450 Z"
            />
          </svg>

          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              style={{ left: loc.x, top: loc.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            >
              <div className="relative">
                <div className="w-6 h-6 bg-oxygen-blue rounded-full animate-ping absolute inset-0 opacity-20" />
                <div className="w-6 h-6 bg-oxygen-blue rounded-full relative z-10 border-4 border-deep-sea shadow-[0_0_20px_rgba(0,119,182,0.5)]" />
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
                  <span className="glass px-6 py-3 rounded-2xl text-[10px] font-mono tracking-[0.3em] uppercase border-oxygen-blue/20 text-sapphire">
                    {loc.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-12 left-12 max-w-xs">
            <p className="text-sapphire/20 text-xs font-mono tracking-widest uppercase leading-relaxed">
              Operating across 5 continents, delivering molecular precision to the world's most demanding industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
