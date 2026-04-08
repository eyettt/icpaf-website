import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import industrialPurityImg from '../../images/Main Menu/industrial purity.jpg';
import reverseOsmosisImg from '../../images/Main Menu/reverse_osmosis.jpg';
import zeroLiquidImg from '../../images/Main Menu/zero_liquid_discharge.jpg';

interface HeroProps {
  onExplore: () => void;
}

const images = [
  {
    url: industrialPurityImg,
    title: 'Industrial Purity',
    subtitle: 'Kinetic Efficiency'
  },
  {
    url: reverseOsmosisImg,
    title: 'Reverse Osmosis',
    subtitle: 'Molecular Integrity'
  },
  {
    url: zeroLiquidImg,
    title: 'Zero Liquid',
    subtitle: 'Sterile Precision'
  }
];

export default function Hero({ onExplore }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 } as const,
        opacity: { duration: 0.8 },
        scale: { duration: 5, ease: 'linear' as const }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 } as const,
        opacity: { duration: 0.8 }
      }
    })
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deep-sea">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-deep-sea/40 via-transparent to-deep-sea z-10" />
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-between px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-4 glass rounded-full pointer-events-auto hover:bg-sapphire/10 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 text-sapphire group-hover:text-oxygen-blue transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 glass rounded-full pointer-events-auto hover:bg-sapphire/10 transition-all group"
        >
          <ChevronRight className="w-6 h-6 text-sapphire group-hover:text-oxygen-blue transition-colors" />
        </button>
      </div>

      <div className="relative z-30 text-center px-8 max-w-6xl">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-6 py-2 rounded-full glass text-[10px] font-mono tracking-[0.4em] uppercase mb-12 text-oxygen-blue shadow-sm">
            {images[currentIndex].subtitle}
          </span>
          <h1 className="text-[10vw] md:text-[8vw] lg:text-[120px] font-serif leading-[0.8] tracking-tighter mb-12 text-balance text-sapphire">
            Engineering the <br />
            <span className="italic text-oxygen-blue drop-shadow-[0_0_20px_rgba(0,119,182,0.2)]">
              {images[currentIndex].title}.
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
            <p className="text-sapphire/80 text-lg md:text-xl max-w-xl font-sans font-light leading-relaxed text-balance md:text-left">
              Revolutionizing industrial water treatment through advanced chemical engineering and intelligent filtration systems.
            </p>
            <div className="h-px w-12 bg-sapphire/20 hidden md:block" />
            <button 
              onClick={onExplore}
              className="group flex items-center gap-6 px-10 py-6 glass rounded-full text-xs font-mono tracking-[0.4em] uppercase hover:bg-oxygen-blue hover:text-deep-sea transition-all duration-500 text-sapphire"
            >
              The Method <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-sapphire/40">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-oxygen-blue/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

