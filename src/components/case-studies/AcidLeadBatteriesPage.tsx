import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function AcidLeadBatteriesPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Main Menu/industrial purity.jpg" 
            alt="Acid-Lead Batteries Wastewater Treatment" 
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
              {isFr ? 'Batteries Plomb-Acide' : 'Acid-Lead Batteries'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Installation de recyclage de batteries - Amérique du Nord. Mise à niveau des systèmes de traitement des eaux usées existants pour respecter les limites strictes de rejet de métaux lourds.' : 'Battery Recycling Facility - North America. Upgrading existing wastewater treatment systems to meet strict heavy metal discharge limits.'}
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
                {isFr ? 'Une importante usine de recyclage de batteries au plomb était soumise à des pressions réglementaires en raison des niveaux de plomb et d\'acide à l\'état de traces dans ses effluents. Leur système de précipitation conventionnel était incohérent. ICPAF a installé un bioréacteur à membrane de coagulation (MCR) robuste utilisant des membranes tubulaires résistantes aux produits chimiques.' : 'A major lead-acid battery recycling plant faced regulatory pressure due to trace lead and acid levels in their effluent. Their conventional precipitation system was inconsistent. ICPAF installed a robust Membrane Coagulation-Reactor (MCR) utilizing chemical-resistant tubular membranes.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Réduction constante des concentrations de plomb dans les effluents à < 0,1 ppm",
                  "Récupération d'acide sulfurique pour réutilisation dans le processus interne",
                  "Élimination du risque d'amendes réglementaires et de fermetures d'usines",
                  "Réduction de la production de boues de 40 % par rapport aux méthodes précédentes",
                  "Fourniture d'un système entièrement automatisé et convivial pour l'opérateur"
                ] : [
                  "Consistently reduced effluent lead concentrations to < 0.1 ppm",
                  "Recovered sulfuric acid for internal process reuse",
                  "Eliminated the risk of regulatory fines and plant shutdowns",
                  "Reduced sludge generation by 40% compared to previous methods",
                  "Provided a fully automated, operator-friendly system"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <DownloadButton isFr={isFr} />
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
                  title: "Plomb < 0,1 ppm",
                  desc: "Conformité garantie aux limites strictes de métaux lourds."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Récupération d'Acide",
                  desc: "Acide sulfurique récupéré pour réutilisation interne."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "-40% de Boues",
                  desc: "Réduction significative de la production de boues dangereuses."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Lead < 0.1 ppm",
                  desc: "Guaranteed compliance with strict heavy metal limits."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Acid Recovery",
                  desc: "Sulfuric acid recovered for internal reuse."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "-40% Sludge",
                  desc: "Significant reduction in hazardous sludge generation."
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
