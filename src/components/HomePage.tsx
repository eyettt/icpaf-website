import { useState, useEffect, useRef } from 'react';
import industrialPurityImg from '../../images/Main Menu/industrial purity.jpg';
import reverseOsmosisImg from '../../images/Main Menu/reverse_osmosis.jpg';
import zeroLiquidImg from '../../images/Main Menu/zero_liquid_discharge.jpg';
import imgSeawater from '../../images/Sub main menu/sea water desalination.png';
import imgAcid from '../../images/Sub main menu/acid liquid purification.webp';
import imgTextile from '../../images/Sub main menu/textile dyeing.webp';
import imgCosmetic from '../../images/Sub main menu/cosmetics and oil.png';
import logoAssad from '../../images/Client Logos/assad.png';
import logoAtlantic from '../../images/Client Logos/atlantic_washing_logo.jpeg';
import logoCocaCola from '../../images/Client Logos/coca cola.png';
import logoGabon from '../../images/Client Logos/gabon.png';
import logoGerman from '../../images/Client Logos/german ambassy.svg';
import logoJadida from '../../images/Client Logos/jadida.jpg';
import logoMazraa from '../../images/Client Logos/mazraa.png';
import logoOnas from '../../images/Client Logos/onas.jpg';
import logoMilitary from '../../images/Client Logos/tunisian armed forces.png';
import logoSatem from '../../images/Client Logos/satem.png';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Layers, Settings, Factory, TestTube, Waves, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import PageWrapper from './PageWrapper';
import { PageId } from './Navbar';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const FadeInSection = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn("slide-up", isVisible && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const getHeroSlides = (t: any) => [
  {
    src: industrialPurityImg,
    subtitle: t('home.hero1.subtitle'),
    title: t('home.hero1.title'),
    description: t('home.hero1.desc')
  },
  {
    src: reverseOsmosisImg,
    subtitle: t('home.hero2.subtitle'),
    title: t('home.hero2.title'),
    description: t('home.hero2.desc')
  },
  {
    src: zeroLiquidImg,
    subtitle: t('home.hero3.subtitle'),
    title: t('home.hero3.title'),
    description: t('home.hero3.desc')
  }
];

const clientLogos = [
  logoAssad,
  logoAtlantic,
  logoCocaCola,
  logoGabon,
  logoGerman,
  logoJadida,
  logoMazraa,
  logoOnas,
  logoMilitary,
  logoSatem,
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const heroSlides = getHeroSlides(t);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-gray-900 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={heroSlides[currentImage].src}
            alt={`Industrial Facility ${currentImage + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/95 backdrop-blur-md p-10 md:p-16 max-w-3xl border-l-8 border-blue-600 shadow-2xl flex flex-col"
          >
            <div className="relative w-full">
              {/* Invisible placeholder to maintain height based on the longest content */}
              <div className="invisible pointer-events-none flex flex-col justify-start">
                <span className="text-sm font-mono tracking-[0.5em] uppercase text-blue-600 mb-6 block font-bold">{heroSlides[0].subtitle}</span>
                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  {heroSlides[0].title}
                </h1>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  {heroSlides[0].description}
                </p>
              </div>
              
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-start"
                >
                  <span className="text-sm font-mono tracking-[0.5em] uppercase text-blue-600 mb-6 block font-bold">{heroSlides[currentImage].subtitle}</span>
                  <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    {heroSlides[currentImage].title}
                  </h1>
                  <p className="text-xl text-gray-700 font-light leading-relaxed">
                    {heroSlides[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
              <button 
                onClick={() => onNavigate('solutions')}
                className="px-8 py-4 bg-blue-600 text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
              >
                {t('home.exploreSolutions')}
              </button>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gray-900 text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-3"
              >
                {t('nav.contactUs')} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
          <button 
            onClick={() => setCurrentImage((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)} 
            className="text-white hover:text-blue-400 transition-colors p-1"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2.5">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentImage === index ? "bg-blue-500 scale-125" : "bg-white/50 hover:bg-white/90"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={() => setCurrentImage((prev) => (prev + 1) % heroSlides.length)} 
            className="text-white hover:text-blue-400 transition-colors p-1"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-8 text-center">
          <h3 className="text-sm font-mono tracking-[0.3em] uppercase text-gray-400 font-bold">{t('home.trustedBy')}</h3>
        </div>
        <div className="relative w-full flex overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Double the logos array to create a seamless infinite loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="mx-8 flex items-center justify-center w-48 h-20">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">{t('home.whoWeAre.title')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              {t('home.whoWeAre.desc')}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-blue-600 mb-4 block font-bold">{t('home.capabilities.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">{t('home.capabilities.title')}</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100} className="bg-white p-10 shadow-lg border-t-4 border-blue-600">
              <Droplets className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif text-gray-900 mb-4">{t('home.capabilities.filtration.title')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.capabilities.filtration.desc')}
              </p>
              <button onClick={() => onNavigate('filtration')} className="text-sm font-mono tracking-widest uppercase text-blue-600 hover:text-blue-800 flex items-center gap-2 font-bold">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInSection>

            <FadeInSection delay={200} className="bg-white p-10 shadow-lg border-t-4 border-blue-600">
              <Layers className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif text-gray-900 mb-4">{t('home.capabilities.membranes.title')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.capabilities.membranes.desc')}
              </p>
              <button onClick={() => onNavigate('membranes')} className="text-sm font-mono tracking-widest uppercase text-blue-600 hover:text-blue-800 flex items-center gap-2 font-bold">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInSection>

            <FadeInSection delay={300} className="bg-white p-10 shadow-lg border-t-4 border-blue-600">
              <Settings className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif text-gray-900 mb-4">{t('home.capabilities.solutions.title')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.capabilities.solutions.desc')}
              </p>
              <button onClick={() => onNavigate('solutions')} className="text-sm font-mono tracking-widest uppercase text-blue-600 hover:text-blue-800 flex items-center gap-2 font-bold">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-blue-600 mb-4 block font-bold">{t('home.applications.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">{t('home.applications.title')}</h2>
            </div>
            <button onClick={() => onNavigate('case-studies')} className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-mono tracking-widest uppercase text-xs font-bold hover:bg-gray-900 hover:text-white transition-colors">
              {t('home.viewCaseStudies')}
            </button>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={100} className="group bg-white shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={imgSeawater} 
                  alt="Seawater Desalination"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{t('home.industries.seawater.title')}</h3>
                <p className="text-gray-600 font-light">{t('home.industries.seawater.desc')}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200} className="group bg-white shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={imgAcid} 
                  alt="Chemical & Acid Purification"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <TestTube className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{t('home.industries.acid.title')}</h3>
                <p className="text-gray-600 font-light">{t('home.industries.acid.desc')}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300} className="group bg-white shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={imgTextile} 
                  alt="Textile Dyeing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Factory className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{t('home.industries.textile.title')}</h3>
                <p className="text-gray-600 font-light">{t('home.industries.textile.desc')}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400} className="group bg-white shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={imgCosmetic} 
                  alt="Food & Cosmetic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Droplets className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{t('home.industries.cosmetic.title')}</h3>
                <p className="text-gray-600 font-light">{t('home.industries.cosmetic.desc')}</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
