import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import FiltrationSpectrumChart from '../FiltrationSpectrumChart';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function ReverseOsmosisPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Main Menu/reverse_osmosis.jpg" 
            alt="Reverse Osmosis Plant" 
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
              {isFr ? 'Osmose Inverse (OI)' : 'Reverse Osmosis (RO)'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Le summum de la purification de l\'eau. L\'osmose inverse élimine jusqu\'à 99,9 % des sels dissous, des ions monovalents et des impuretés microscopiques, fournissant une eau ultra-pure pour les applications industrielles et municipales les plus exigeantes.' : 'The pinnacle of water purification. Reverse Osmosis removes up to 99.9% of dissolved salts, monovalent ions, and microscopic impurities, delivering ultra-pure water for the most demanding industrial and municipal applications.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Purification Ultime' : 'Ultimate Purification'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Fonctionnant en dessous de 0,001 micron, l\'osmose inverse (OI) utilise une haute pression pour forcer l\'eau à travers une membrane semi-perméable, laissant derrière elle presque tous les solides dissous. C\'est la norme mondiale pour le dessalement de l\'eau de mer et la production d\'eau ultra-pure (UPW) pour la microélectronique et les produits pharmaceutiques.' : 'Operating below 0.001 microns, Reverse Osmosis (RO) utilizes high pressure to force water through a semi-permeable membrane, leaving behind almost all dissolved solids. It is the global standard for seawater desalination and the production of ultra-pure water (UPW) for microelectronics and pharmaceuticals.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Élimine jusqu'à 99,9 % des sels dissous et des ions monovalents (Na+, Cl-)",
                  "Produit de l'eau ultra-pure pour les processus industriels critiques",
                  "Technologie essentielle pour le dessalement de l'eau de mer et de l'eau saumâtre",
                  "Hautement évolutif, des petits skids aux grandes usines municipales",
                  "Les dispositifs avancés de récupération d'énergie (ERD) minimisent la consommation d'énergie"
                ] : [
                  "Removes up to 99.9% of dissolved salts and monovalent ions (Na+, Cl-)",
                  "Produces ultra-pure water for critical industrial processes",
                  "Essential technology for seawater and brackish water desalination",
                  "Highly scalable from small skids to massive municipal plants",
                  "Advanced energy recovery devices (ERD) minimize power consumption"
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
                  title: "Dessalement",
                  desc: "Conversion de l'eau de mer en eau potable."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Eau Ultra-Pure",
                  desc: "Pour la fabrication de semi-conducteurs et de produits pharmaceutiques."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Rejet Liquide Nul",
                  desc: "Concentration finale dans les systèmes d'eaux usées ZLD."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Desalination",
                  desc: "Converting seawater into potable drinking water."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Ultra-Pure Water",
                  desc: "For semiconductor and pharmaceutical manufacturing."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Zero Liquid Discharge",
                  desc: "Final stage concentration in ZLD wastewater systems."
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
