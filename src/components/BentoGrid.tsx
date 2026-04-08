import React from 'react';
import { motion } from 'motion/react';
import { Factory, FlaskConical, Globe, Zap, Users, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

const sectors = [
  {
    title: 'Industrial Processing',
    icon: Factory,
    size: 'col-span-2 row-span-2',
    color: 'bg-teal-kinetic/5',
    image: '/images/Main Menu/industrial purity.jpg',
  },
  {
    title: 'Municipal Water',
    icon: Globe,
    size: 'col-span-1 row-span-1',
    color: 'bg-white/5',
    image: '/images/Main Menu/industrial purity.jpg',
  },
  {
    title: 'Chemical R&D',
    icon: FlaskConical,
    size: 'col-span-1 row-span-2',
    color: 'bg-teal-kinetic/10',
    image: '/images/Main Menu/industrial purity.jpg',
  },
  {
    title: 'Power Generation',
    icon: Zap,
    size: 'col-span-1 row-span-1',
    color: 'bg-white/5',
    image: '/images/Main Menu/industrial purity.jpg',
  },
];

export default function BentoGrid() {
  return (
    <section className="py-32 px-8 md:px-24 bg-transparent" id="sectors">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">Sectors</span>
          <h2 className="text-5xl md:text-8xl font-serif italic text-balance leading-none tracking-tighter text-sapphire">
            Tailored solutions for <br />
            <span className="text-sapphire/20">complex environments.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-8 h-auto md:h-[900px]">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative rounded-[2.5rem] overflow-hidden glass-panel group cursor-pointer min-h-[300px]',
                sector.size
              )}
            >
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire/20 via-transparent to-transparent z-10" />

              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="p-4 bg-sapphire/5 rounded-2xl w-fit mb-8 group-hover:bg-oxygen-blue group-hover:text-deep-sea transition-all duration-500">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif leading-[1.1] break-words tracking-tighter text-sapphire">{sector.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
