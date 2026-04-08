import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WasteWaterPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/Wastewater-treatment.jpg" 
            alt="Wastewater Treatment" 
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
              {isFr ? 'Traitement des Eaux Usées' : 'Wastewater Treatment'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Solutions avancées pour les effluents industriels, axées sur la conformité, l\'élimination des métaux lourds et la récupération d\'eau à pourcentage élevé.' : 'Advanced solutions for industrial effluent, focusing on compliance, heavy metal removal, and high-percentage water reclamation.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Conformité et Récupération' : 'Compliance and Reclamation'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les effluents industriels sont très complexes, contenant souvent des métaux lourds, une DCO/DBO élevée et des produits chimiques agressifs. Nos architectures de traitement exclusives combinent l\'oxydation avancée, la coagulation spécialisée et les bioréacteurs à membrane (BRM) pour décomposer les matières organiques récalcitrantes, garantissant une stricte conformité environnementale et permettant une réutilisation de l\'eau à pourcentage élevé.' : 'Industrial effluent is highly complex, often containing heavy metals, high COD/BOD, and aggressive chemicals. Our proprietary treatment architectures combine advanced oxidation, specialized coagulation, and membrane bioreactors (MBR) to break down recalcitrant organics, ensuring strict environmental compliance and enabling high-percentage water reuse.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Effluents de teinture et de finition textile",
                  "Eaux usées pharmaceutiques et cosmétiques",
                  "Moulins à huile et ruissellement agricole",
                  "Précipitation et élimination des métaux lourds",
                  "Réduction de la demande biologique en oxygène (DBO)"
                ] : [
                  "Textile dyeing and finishing effluent",
                  "Pharmaceutical and cosmetic wastewater",
                  "Olive-mill and agricultural runoff",
                  "Heavy metal precipitation and removal",
                  "Biological oxygen demand (BOD) reduction"
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
                  title: "Prêt pour ZLD",
                  desc: "Capacités de rejet liquide nul."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Conformité",
                  desc: "Respect des réglementations environnementales strictes."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Récupération",
                  desc: "Réutilisation de l'eau à pourcentage élevé."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "ZLD Ready",
                  desc: "Zero Liquid Discharge capabilities."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Compliance",
                  desc: "Meet strict environmental regulations."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Reclamation",
                  desc: "High-percentage water reuse."
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
