import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function OilWaterSeparationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/picture-of-oily-water.jpg" 
            alt="Oil Water Separation" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-sapphire" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Solutions Intégrées' : 'Integrated Solutions'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Séparation Huile-Eau' : 'Oil Water Separation'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Rupture d\'émulsion avancée et récupération d\'huile. Nos systèmes de séparation utilisent des membranes oléophobes spécialisées pour séparer efficacement l\'huile libre, dispersée et émulsionnée de l\'eau.' : 'Advanced emulsion breaking and oil recovery. Our separation systems utilize specialized oleophobic membranes to effectively separate free, dispersed, and emulsified oil from water.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Récupération Haute Efficacité' : 'High-Efficiency Recovery'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les séparateurs huile-eau traditionnels ont souvent des difficultés avec les émulsions stables. Notre technologie membranaire fournit une barrière physique qui garantit un effluent de haute qualité, respectant des limites de rejet strictes tout en permettant la récupération d\'huile précieuse.' : 'Traditional oil-water separators often struggle with stable emulsions. Our membrane-based technology provides a physical barrier that guarantees high-quality effluent, meeting strict discharge limits while allowing for the recovery of valuable oil.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Traitement des émulsions huile-dans-eau stables",
                  "Traitement de l'eau de production dans le pétrole et le gaz",
                  "Recyclage des fluides de travail des métaux et des liquides de refroidissement",
                  "Eau de cale et applications marines",
                  "Transformation des aliments et récupération d'huiles comestibles"
                ] : [
                  "Treatment of stable oil-in-water emulsions",
                  "Produced water treatment in oil & gas",
                  "Metalworking fluid and coolant recycling",
                  "Bilge water and marine applications",
                  "Food processing and edible oil recovery"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {(isFr ? [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Émulsions Stables",
                  desc: "Rupture et séparation efficaces des émulsions huile-dans-eau."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Eau de Production",
                  desc: "Traitement pour l'industrie pétrolière et gazière."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Recyclage du Liquide de Refroidissement",
                  desc: "Récupération et réutilisation des fluides de travail des métaux."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Stable Emulsions",
                  desc: "Effective breaking and separation of oil-in-water emulsions."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Produced Water",
                  desc: "Treatment for the oil & gas industry."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Coolant Recycling",
                  desc: "Metalworking fluid recovery and reuse."
                }
              ]).map((feature, idx) => (
                <div key={idx} className={`bg-sapphire/5 p-8 rounded-3xl border border-sapphire/10 ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-sans font-bold text-sapphire mb-3">{feature.title}</h3>
                  <p className="text-sapphire/70 font-light">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
