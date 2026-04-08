import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CoolingTowerPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/Cooling-Towers.png" 
            alt="Cooling Tower Systems" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Technologie' : 'Technology'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Tours de Refroidissement' : 'Cooling Towers'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Récupération de purge, contrôle de l\'entartrage/corrosion et stratégies de conservation de l\'eau pour les systèmes de refroidissement industriels.' : 'Blowdown recovery, scaling/corrosion control, and water conservation strategies for industrial cooling systems.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Conservation de l\'Eau' : 'Water Conservation'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les tours de refroidissement consomment de grandes quantités d\'eau et sont très sensibles à l\'encrassement biologique, à l\'entartrage et à la corrosion. Nos programmes de gestion complets utilisent la filtration en dérivation, des biocides ciblés et des systèmes de récupération de purge pour augmenter en toute sécurité les cycles de concentration, réduisant considérablement la demande en eau d\'appoint et l\'utilisation de produits chimiques.' : 'Cooling towers consume vast amounts of water and are highly susceptible to biological fouling, scaling, and corrosion. Our comprehensive management programs utilize side-stream filtration, targeted biocides, and blowdown recovery systems to safely increase cycles of concentration, drastically reducing make-up water demand and chemical usage.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Inhibition du tartre et de la corrosion des tours de refroidissement",
                  "Contrôle des légionelles et programmes biocides",
                  "Filtration en dérivation (UF/Média)",
                  "Récupération et réutilisation de l'eau de purge",
                  "Dosage chimique et surveillance automatisés"
                ] : [
                  "Cooling tower scale and corrosion inhibition",
                  "Legionella control and biocide programs",
                  "Side-stream filtration (UF/Media)",
                  "Blowdown water recovery and reuse",
                  "Automated chemical dosing and monitoring"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg">
                {isFr ? 'Demander la Fiche Technique' : 'Request Technical Data Sheet'} <ArrowRight className="w-4 h-4" />
              </button>
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
                  title: "Économies d'Eau",
                  desc: "Augmenter les cycles de concentration."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Bio-Contrôle",
                  desc: "Prévenir la croissance des légionelles et du biofilm."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Récupération de Purge",
                  desc: "Traiter et réutiliser la purge de la tour de refroidissement."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Water Savings",
                  desc: "Increase cycles of concentration."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Bio-Control",
                  desc: "Prevent Legionella and biofilm growth."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Blowdown Recovery",
                  desc: "Treat and reuse cooling tower blowdown."
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
