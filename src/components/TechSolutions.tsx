import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Droplets, ShieldCheck, Zap } from 'lucide-react';

const solutions = [
  {
    id: '01',
    title: 'Nano-Filtration',
    description: 'Precision separation at the molecular level, removing contaminants with 99.9% efficiency.',
    icon: Droplets,
    image: '/images/Technologies/process-water.jpg',
  },
  {
    id: '02',
    title: 'AI-Optimized Dosing',
    description: 'Intelligent chemical delivery systems that adapt in real-time to water quality fluctuations.',
    icon: Cpu,
    image: '/images/Technologies/process-water.jpg',
  },
  {
    id: '03',
    title: 'Kinetic Purification',
    description: 'High-velocity treatment units designed for industrial-scale pure water requirements.',
    icon: Zap,
    image: '/images/Technologies/process-water.jpg',
  },
  {
    id: '04',
    title: 'Bio-Shield Tech',
    description: 'Advanced antimicrobial barriers that ensure long-term system integrity and safety.',
    icon: ShieldCheck,
    image: '/images/Technologies/process-water.jpg',
  },
];

export default function TechSolutions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent isolate" id="science">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 md:left-24 z-[-1] pointer-events-none">
          <h2 className="text-6xl md:text-9xl font-serif italic text-sapphire/5 select-none">The Science</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 relative z-10">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group relative h-[65vh] w-[85vw] md:w-[500px] flex-shrink-0 glass-panel overflow-hidden p-10 flex flex-col justify-between"
            >
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-5 bg-sapphire/5 rounded-2xl group-hover:bg-oxygen-blue group-hover:text-deep-sea transition-all duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-sapphire/10 text-3xl">{item.id}</span>
                </div>
                
                <h3 className="text-4xl font-serif mb-6 group-hover:text-oxygen-blue transition-colors text-sapphire">
                  {item.title}
                </h3>
                <p className="text-sapphire/60 font-light leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-6 text-[10px] font-mono tracking-[0.4em] uppercase text-oxygen-blue opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                View Specifications <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
