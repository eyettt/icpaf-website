import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CosmeticIndustryPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/cosmetic water treatment.avif" 
            alt="Cosmetic Industry Wastewater Treatment" 
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
              {isFr ? 'Eaux Usées de l\'Industrie Cosmétique' : 'Cosmetic Industry Wastewater'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Marque mondiale de cosmétiques - France. Traitement d\'une DCO élevée et d\'émulsions complexes provenant des lignes de production cosmétique pour respecter les limites de rejet municipales.' : 'Global Cosmetics Brand - France. Treating high COD and complex emulsions from cosmetic production lines to meet municipal discharge limits.'}
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
                {isFr ? 'Un fabricant de cosmétiques de premier plan en France était aux prises avec des eaux usées contenant de fortes concentrations d\'huiles, de tensioactifs et d\'émulsions complexes. Cet effluent submergeait leur station d\'épuration municipale locale. ICPAF a déployé un bioréacteur à membrane (MBR) spécialisé couplé à un processus d\'oxydation avancée (AOP).' : 'A leading cosmetics manufacturer in France was struggling with wastewater containing high concentrations of oils, surfactants, and complex emulsions. This effluent was overwhelming their local municipal treatment plant. ICPAF deployed a specialized Membrane Bioreactor (MBR) coupled with an advanced oxidation process (AOP).'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Rupture d'émulsion et élimination de l'huile à 99 %",
                  "Réduction de la demande chimique en oxygène (DCO) de plus de 95 %",
                  "Élimination des surtaxes municipales pour les déchets à forte concentration",
                  "Le système automatisé a réduit l'intervention de l'opérateur de 80 %",
                  "A permis la réutilisation partielle de l'eau traitée pour les tours de refroidissement"
                ] : [
                  "Achieved 99% emulsion breaking and oil removal",
                  "Reduced Chemical Oxygen Demand (COD) by over 95%",
                  "Eliminated municipal surcharges for high-strength waste",
                  "Automated system reduced operator intervention by 80%",
                  "Enabled partial reuse of treated water for cooling towers"
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
                  title: "99% d'Élimination d'Huile",
                  desc: "Rupture complète des émulsions cosmétiques complexes."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "-95% DCO",
                  desc: "Réduction massive de la Demande Chimique en Oxygène."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Zéro Surtaxe",
                  desc: "Conformité aux limites de rejet municipales."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "99% Oil Removal",
                  desc: "Complete breaking of complex cosmetic emulsions."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "-95% COD",
                  desc: "Massive reduction in Chemical Oxygen Demand."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Zero Surcharges",
                  desc: "Compliance with municipal discharge limits."
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
