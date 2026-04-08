import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ReclaimedWaterReusedPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/reclaimed water reused.webp" 
            alt="Reclaimed Water Reuse" 
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
              {isFr ? 'Réutilisation de l\'Eau Récupérée' : 'Reclaimed Water Reuse'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Boucler la boucle de l\'eau industrielle. Nos systèmes d\'eau récupérée combinent un traitement biologique (MBR) avec une filtration sur membrane avancée (OI/NF) pour transformer les effluents industriels en eau de processus de haute pureté.' : 'Closing the loop on industrial water. Our reclaimed water systems combine biological treatment (MBR) with advanced membrane filtration (RO/NF) to transform industrial effluent into high-purity process water.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Zéro Rejet Liquide' : 'Zero Liquid Discharge'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'La pénurie d\'eau et les réglementations environnementales strictes poussent les industries vers le zéro rejet liquide (ZLD) et la réutilisation de l\'eau. En bouclant la boucle de l\'eau, les installations peuvent réduire considérablement leur dépendance aux sources municipales et garantir la conformité aux réglementations strictes en matière de rejets.' : 'Water scarcity and strict environmental regulations are driving industries toward zero liquid discharge (ZLD) and water reuse. By closing the water loop, facilities can significantly reduce reliance on municipal sources and ensure compliance with stringent discharge regulations.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Conformité aux réglementations strictes en matière de rejets",
                  "Réduction significative de la consommation d'eau douce",
                  "Récupération de sous-produits précieux à partir des effluents",
                  "Conçu sur mesure pour des profils d'eaux usées industrielles spécifiques",
                  "Intégration avec les stations d'épuration existantes"
                ] : [
                  "Compliance with stringent discharge regulations",
                  "Significant reduction in fresh water consumption",
                  "Recovery of valuable byproducts from effluent",
                  "Custom-engineered for specific industrial wastewater profiles",
                  "Integration with existing wastewater treatment plants"
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
                  title: "Systèmes ZLD",
                  desc: "Stratégies de conformité Zéro Rejet Liquide."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Pénurie d'Eau",
                  desc: "Réduction de la dépendance aux sources d'eau douce municipales."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Récupération de Sous-produits",
                  desc: "Récupération de matériaux précieux à partir des effluents."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "ZLD Systems",
                  desc: "Zero Liquid Discharge compliance strategies."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Water Scarcity",
                  desc: "Reduced reliance on municipal fresh water sources."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Byproduct Recovery",
                  desc: "Reclamation of valuable materials from effluent."
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
