import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function DrinkingWaterPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/drinking-Water-Treatment-Process.webp" 
            alt="Drinking Water Purification" 
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
              {isFr ? 'Eau Potable' : 'Drinking Water'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Systèmes de purification sûrs et fiables conçus pour respecter et dépasser les normes mondiales de l\'OMS pour l\'approvisionnement municipal et industriel.' : 'Safe, reliable purification systems designed to meet and exceed global WHO standards for municipal and industrial supply.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Pureté et Sécurité Absolues' : 'Absolute Purity & Safety'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Garantir la sécurité de l\'eau potable nécessite une purification robuste à barrières multiples. Nos systèmes utilisent l\'ultrafiltration (UF) et l\'osmose inverse (OI) avancées pour éliminer les agents pathogènes, les métaux lourds et les contaminants émergents des sources d\'eau de surface et souterraines, garantissant une eau potable sûre pour les communautés et les installations.' : 'Ensuring the safety of drinking water requires robust, multi-barrier purification. Our systems utilize advanced ultrafiltration (UF) and reverse osmosis (RO) to remove pathogens, heavy metals, and emerging contaminants from surface and groundwater sources, guaranteeing safe, potable water for communities and facilities.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Usines municipales de traitement des eaux",
                  "Élimination de l'arsenic et du fluorure des eaux souterraines",
                  "Clarification et désinfection des eaux de surface",
                  "Systèmes d'approvisionnement en eau des communautés éloignées",
                  "Purification de l'eau d'urgence et mobile"
                ] : [
                  "Municipal water treatment plants",
                  "Groundwater arsenic and fluoride removal",
                  "Surface water clarification and disinfection",
                  "Remote community water supply systems",
                  "Emergency and mobile water purification"
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
                  title: "Normes OMS",
                  desc: "Dépasse les directives mondiales sur l'eau potable."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Multi-Barrières",
                  desc: "Élimination complète des agents pathogènes et des toxines."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Évolutif",
                  desc: "Des petites communautés aux grandes municipalités."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "WHO Standards",
                  desc: "Exceeds global drinking water guidelines."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Multi-Barrier",
                  desc: "Comprehensive pathogen and toxin removal."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Scalable",
                  desc: "From small communities to large municipalities."
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
