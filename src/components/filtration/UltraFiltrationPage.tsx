import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import FiltrationSpectrumChart from '../FiltrationSpectrumChart';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function UltraFiltrationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Filtration/micro filtration.jpg" 
            alt="Ultrafiltration Systems" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Technologie de Filtration' : 'Filtration Technology'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Ultrafiltration (UF)' : 'Ultrafiltration (UF)'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Comblant le fossé entre la microfiltration et l\'osmose inverse. Nos systèmes UF offrent des seuils de coupure de poids moléculaire (MWCO) précis, excellant dans l\'élimination des virus, des macromolécules et des ions multivalents.' : 'Bridging the gap between microfiltration and reverse osmosis. Our UF systems offer precise molecular weight cut-offs (MWCO), excelling at removing viruses, macromolecules, and multivalent ions.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Séparation au Niveau Moléculaire' : 'Molecular Level Separation'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Fonctionnant dans la plage de 0,01 à 0,1 micron, l\'ultrafiltration (UF) offre des performances à flux élevé tout en fonctionnant à des pressions nettement inférieures à celles de l\'OI traditionnelle. Cela optimise la consommation d\'énergie tout en éliminant efficacement les agents pathogènes, les grosses molécules organiques et la silice colloïdale.' : 'Operating in the 0.01 to 0.1 micron range, Ultrafiltration (UF) provides high-flux performance while operating at significantly lower pressures than traditional RO. This optimizes energy consumption while effectively removing pathogens, large organic molecules, and colloidal silica.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Élimine les virus, les bactéries et les macromolécules",
                  "Fournit un perméat constant et de haute qualité, quelle que soit la turbidité de l'eau d'alimentation",
                  "Fonctionne à des pressions inférieures à celles de l'OI, économisant de l'énergie",
                  "Peut être lavé à contre-courant et nettoyé chimiquement pour une longue durée de vie",
                  "Excellent prétraitement pour les systèmes OI dans le dessalement"
                ] : [
                  "Removes viruses, bacteria, and macromolecules",
                  "Provides consistent, high-quality permeate regardless of feed water turbidity",
                  "Operates at lower pressures than RO, saving energy",
                  "Can be backwashed and chemically cleaned for long lifespan",
                  "Excellent pre-treatment for RO systems in desalination"
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
                  title: "Dessalement",
                  desc: "Prétraitement avancé pour les usines OI d'eau de mer."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Eaux Usées",
                  desc: "Récupération et réutilisation des effluents industriels."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Biotechnologie & Pharma",
                  desc: "Concentration de protéines et séparation de macromolécules."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Desalination",
                  desc: "Advanced pre-treatment for seawater RO plants."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Wastewater",
                  desc: "Reclamation and reuse of industrial effluents."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Biotech & Pharma",
                  desc: "Protein concentration and macromolecule separation."
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

      <FiltrationSpectrumChart />
    </PageWrapper>
  );
}
