import React from 'react';
import { motion } from 'motion/react';
import { Zap, FlaskConical, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';

const industriesEn = [
  {
    id: 'power',
    title: 'Power Generation',
    desc: 'Ultra-pure boiler feed water for high-pressure turbines. We ensure zero scaling and maximum thermal efficiency.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: Zap
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals',
    desc: 'Water for Injection (WFI) systems that meet USP and EP standards. Sterile, pyrogen-free, and molecularly consistent.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: FlaskConical
  },
  {
    id: 'municipal',
    title: 'Municipal Supply',
    desc: 'Scalable desalination and purification for smart cities. Delivering the luxury of pure water to millions.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: Globe
  }
];

const industriesFr = [
  {
    id: 'power',
    title: 'Production d\'Énergie',
    desc: 'Eau d\'alimentation de chaudière ultra-pure pour turbines haute pression. Nous garantissons l\'absence d\'entartrage et une efficacité thermique maximale.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: Zap
  },
  {
    id: 'pharma',
    title: 'Produits Pharmaceutiques',
    desc: 'Systèmes d\'Eau pour Préparation Injectable (EPPI) répondant aux normes USP et EP. Stérile, apyrogène et moléculairement cohérent.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: FlaskConical
  },
  {
    id: 'municipal',
    title: 'Approvisionnement Municipal',
    desc: 'Dessalement et purification évolutifs pour les villes intelligentes. Offrir le luxe de l\'eau pure à des millions de personnes.',
    image: '/images/Technologies/Wastewater-treatment.jpg',
    icon: Globe
  }
];

interface ServicesPageProps {
  onNavigate?: (page: any) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const industries = isFr ? industriesFr : industriesEn;

  return (
    <PageWrapper>
      <div className="pt-32">
        <div className="px-8 md:px-24 max-w-7xl mx-auto mb-24">
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">{isFr ? 'Industries & Services' : 'Industries & Services'}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter text-sapphire">
            {isFr ? 'Secteurs' : 'Global'} <br />
            <span className="text-sapphire/20">{isFr ? 'Mondiaux.' : 'Sectors.'}</span>
          </h1>
        </div>

        {industries.map((industry, i) => (
          <section key={industry.id} className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover grayscale opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-deep-sea via-transparent to-deep-sea" />
            </div>

            <div className="relative z-10 px-8 md:px-24 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="p-6 bg-oxygen-blue/10 rounded-3xl w-fit mb-12">
                    <industry.icon className="w-12 h-12 text-oxygen-blue" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-sapphire">{industry.title}</h2>
                  <p className="text-xl font-light text-sapphire/60 leading-relaxed mb-12 max-w-lg">
                    {industry.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate ? onNavigate('products') : alert(`Exploring tailored solutions for ${industry.title}...`)}
                    className="group flex items-center gap-6 text-sm font-mono tracking-[0.4em] uppercase text-oxygen-blue hover:text-sapphire transition-colors"
                  >
                    {isFr ? 'Explorer les Solutions' : 'Explore Solutions'} <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="glass-panel aspect-video flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 caustic-layer opacity-20" />
                  <ShieldCheck className="w-32 h-32 text-oxygen-blue/20 animate-pulse" />
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
}
