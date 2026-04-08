import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DesalinationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/desalination.webp" 
            alt="Desalination Facility" 
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
              {isFr ? 'Dessalement' : 'Desalination'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Transformation de l\'eau de mer et de l\'eau saumâtre en eau douce à l\'aide de systèmes avancés d\'osmose inverse (SWRO/BWRO) et de récupération d\'énergie.' : 'Transforming seawater and brackish water into fresh water using advanced Reverse Osmosis (SWRO/BWRO) and energy recovery systems.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Solutions Haute Salinité' : 'High-Salinity Solutions'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Faire face à la pénurie mondiale d\'eau nécessite un dessalement efficace. Nos usines SWRO et BWRO sont conçues pour une efficacité énergétique maximale et une longévité des membranes. En intégrant des dispositifs de récupération d\'énergie isobares (ERD) et un prétraitement optimisé, nous réduisons considérablement la consommation d\'énergie spécifique et les coûts opérationnels du dessalement.' : 'Addressing global water scarcity requires efficient desalination. Our SWRO and BWRO plants are engineered for maximum energy efficiency and membrane longevity. By incorporating isobaric energy recovery devices (ERDs) and optimized pre-treatment, we significantly lower the specific energy consumption and operational costs of desalination.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Approvisionnement en eau municipale côtière (SWRO)",
                  "Dessalement des eaux souterraines saumâtres intérieures (BWRO)",
                  "Eau de processus industriel à partir d'eau de mer",
                  "Autonomie en eau des îles et des complexes hôteliers",
                  "Irrigation agricole à partir d'aquifères salins"
                ] : [
                  "Coastal municipal water supply (SWRO)",
                  "Inland brackish groundwater desalination (BWRO)",
                  "Industrial process water from seawater",
                  "Island and resort water autonomy",
                  "Agricultural irrigation from saline aquifers"
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
                  title: "Récupération d'Énergie",
                  desc: "Les ERD isobares réduisent la consommation d'énergie."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Prétraitement",
                  desc: "L'UF avancée empêche l'encrassement de la membrane OI."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Haute Récupération",
                  desc: "Conceptions optimisées pour un rendement maximal en eau douce."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Energy Recovery",
                  desc: "Isobaric ERDs reduce power consumption."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Pre-treatment",
                  desc: "Advanced UF prevents RO membrane fouling."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "High Recovery",
                  desc: "Optimized designs for maximum fresh water yield."
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
