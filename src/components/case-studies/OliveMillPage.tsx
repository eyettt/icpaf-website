import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function OliveMillPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/case studies/olive mill.jpeg" 
            alt="Olive-mill Wastewater Treatment" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Étude de Cas' : 'Case Study'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Eaux Usées de Moulin à Huile d\'Olive' : 'Olive-Mill Wastewater'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Producteur d\'huile d\'olive méditerranéen. Mise en œuvre d\'une approche de traitement durable pour des eaux usées saisonnières, hautement concentrées et phytotoxiques.' : 'Mediterranean Olive Oil Producer. Implementing a sustainable treatment approach for seasonal, highly concentrated, and phytotoxic wastewater.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Le Défi et la Solution' : 'The Challenge & Solution'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Une grande coopérative de la région méditerranéenne avait besoin d\'une solution pour les eaux usées des moulins à huile d\'olive (margines), notoirement difficiles à traiter en raison de leur charge organique élevée et de leurs polyphénols phytotoxiques. ICPAF a conçu un système membranaire intégré utilisant une ultrafiltration en céramique suivie d\'une osmose inverse polymérique.' : 'A large cooperative in the Mediterranean region needed a solution for Olive Mill Wastewater (OMW), which is notoriously difficult to treat due to its high organic load and phytotoxic polyphenols. ICPAF designed an integrated membrane system utilizing ceramic ultrafiltration followed by polymeric reverse osmosis.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Récupération réussie de polyphénols précieux pour l'industrie cosmétique",
                  "Réduction du volume des eaux usées de 80 %, minimisant les coûts d'élimination",
                  "Production d'eau propre adaptée à l'irrigation agricole",
                  "Élimination du risque environnemental lié au rejet de margines brutes",
                  "Création d'une nouvelle source de revenus à partir des sous-produits récupérés"
                ] : [
                  "Successfully recovered valuable polyphenols for the cosmetics industry",
                  "Reduced wastewater volume by 80%, minimizing disposal costs",
                  "Produced clean water suitable for agricultural irrigation",
                  "Eliminated the environmental hazard of raw OMW discharge",
                  "Created a new revenue stream from recovered byproducts"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg">
                {isFr ? 'Télécharger le Rapport Complet' : 'Download Full Report'} <ArrowRight className="w-4 h-4" />
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
                  title: "Récupération de Polyphénols",
                  desc: "Extraction d'antioxydants de grande valeur pour la revente."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Réduction Vol. 80%",
                  desc: "Diminution massive du volume d'élimination des eaux usées."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Irrigation Sûre",
                  desc: "Eau traitée réutilisée en toute sécurité pour l'agriculture."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Polyphenol Recovery",
                  desc: "Extracted high-value antioxidants for resale."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "80% Vol Reduction",
                  desc: "Massive decrease in wastewater disposal volume."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Safe Irrigation",
                  desc: "Treated water safely reused for agriculture."
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
