import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import FiltrationSpectrumChart from '../FiltrationSpectrumChart';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function NanoFiltrationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Filtration/nano filtration.jpg" 
            alt="Nanofiltration Systems" 
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
              {isFr ? 'Nanofiltration (NF)' : 'Nanofiltration (NF)'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Séparation ionique de précision. La nanofiltration excelle dans l\'élimination des ions multivalents, des pesticides et des composés organiques colorants tout en laissant passer les ions monovalents, offrant un équilibre unique entre purification et efficacité.' : 'Precision ionic separation. Nanofiltration excels at removing multivalent ions, pesticides, and color-causing organic compounds while allowing monovalent ions to pass through, offering a unique balance of purification and efficiency.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Rejet Ionique Sélectif' : 'Selective Ionic Rejection'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Fonctionnant dans la plage de 0,001 à 0,01 micron, la nanofiltration (NF) est souvent appelée "OI lâche". Elle est très efficace pour l\'adoucissement de l\'eau (élimination du calcium et du magnésium) et l\'élimination des matières organiques dissoutes, ce qui en fait une alternative économe en énergie à l\'OI lorsque le dessalement total n\'est pas nécessaire.' : 'Operating in the 0.001 to 0.01 micron range, Nanofiltration (NF) is often referred to as "loose RO". It is highly effective at water softening (removing calcium and magnesium) and removing dissolved organics, making it an energy-efficient alternative to RO when total desalination is not required.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Excellent pour l'adoucissement de l'eau sans besoin de produits chimiques de régénération",
                  "Élimine les pesticides, les herbicides et les matières organiques colorantes",
                  "Pression de fonctionnement et consommation d'énergie inférieures à celles de l'OI",
                  "Conserve sélectivement les minéraux monovalents bénéfiques dans l'eau potable",
                  "Taux de récupération élevés pour l'eau de processus industriel"
                ] : [
                  "Excellent for water softening without the need for regeneration chemicals",
                  "Removes pesticides, herbicides, and color-causing organics",
                  "Lower operating pressure and energy consumption compared to RO",
                  "Selectively retains beneficial monovalent minerals in drinking water",
                  "High recovery rates for industrial process water"
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
                  title: "Adoucissement de l'Eau",
                  desc: "Élimination des ions de dureté (Ca2+, Mg2+) sans sel."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Élimination de la Couleur",
                  desc: "Élimine la matière organique naturelle et les colorants synthétiques."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Industrie Textile",
                  desc: "Récupération de colorants et de sel dans les eaux usées."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Water Softening",
                  desc: "Removal of hardness ions (Ca2+, Mg2+) without salt."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Color Removal",
                  desc: "Eliminates natural organic matter and synthetic dyes."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Textile Industry",
                  desc: "Dye recovery and salt reclamation in wastewater."
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
