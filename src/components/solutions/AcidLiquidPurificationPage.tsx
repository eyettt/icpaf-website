import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function AcidLiquidPurificationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/Distillation-is-one-of-the-processes-of-water-purification.jpg" 
            alt="Acid Liquid Purification" 
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
              {isFr ? 'Purification des Liquides Acides' : 'Acid Liquid Purification'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Récupération des ressources et minimisation des déchets. Nos systèmes de purification d\'acide utilisent une dialyse de diffusion spécialisée et des membranes de nanofiltration résistantes aux acides pour séparer l\'acide libre des sels métalliques dissous.' : 'Resource recovery and waste minimization. Our acid purification systems utilize specialized diffusion dialysis and acid-resistant nanofiltration membranes to separate free acid from dissolved metal salts.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Récupérer & Réutiliser' : 'Recover & Reuse'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les processus industriels génèrent souvent des flux de déchets très acides contaminés par des métaux dissous et des matières organiques. L\'élimination de ces flux est coûteuse et dommageable pour l\'environnement. Notre technologie permet de récupérer jusqu\'à 90 % de l\'acide et de le réutiliser directement dans le processus.' : 'Industrial processes often generate highly acidic waste streams contaminated with dissolved metals and organics. Disposing of these streams is costly and environmentally damaging. Our technology allows up to 90% of the acid to be recovered and reused directly in the process.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Récupération de la liqueur de décapage de l'acier (HCl, H2SO4)",
                  "Purification du bain d'anodisation de l'aluminium",
                  "Recyclage des batteries et traitement plomb-acide",
                  "Entretien des bains de galvanoplastie",
                  "Extraction minière et hydrométallurgique"
                ] : [
                  "Steel pickling liquor recovery (HCl, H2SO4)",
                  "Aluminum anodizing bath purification",
                  "Battery recycling and acid-lead processing",
                  "Electroplating bath maintenance",
                  "Mining and hydrometallurgical extraction"
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
                  title: "Liqueur de Décapage",
                  desc: "Récupération de HCl et H2SO4 dans le traitement de l'acier."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Bains d'Anodisation",
                  desc: "Purification des solutions d'anodisation de l'aluminium."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Recyclage des Batteries",
                  desc: "Traitement et récupération plomb-acide."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Pickling Liquor",
                  desc: "Recovery of HCl and H2SO4 in steel processing."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Anodizing Baths",
                  desc: "Purification of aluminum anodizing solutions."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Battery Recycling",
                  desc: "Acid-lead processing and recovery."
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
