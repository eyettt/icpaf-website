import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SodiumSulfatePage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Main Menu/industrial purity.jpg" 
            alt="Sodium Sulfate Water Treatment" 
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
              {isFr ? 'Traitement de l\'Eau au Sulfate de Sodium' : 'Sodium Sulfate Water Treatment'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Usine de traitement chimique. Récupération et cristallisation du sulfate de sodium à partir d\'un flux d\'effluents à forte salinité pour atteindre le Zéro Rejet Liquide (ZLD).' : 'Chemical Processing Plant. Recovering and crystallizing sodium sulfate from a high-salinity effluent stream to achieve Zero Liquid Discharge (ZLD).'}
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
                {isFr ? 'Une usine de fabrication de produits chimiques produisait un flux d\'effluents à grand volume saturé de sulfate de sodium. Pour atteindre les objectifs environnementaux, ils avaient besoin d\'une solution ZLD. ICPAF a conçu un système d\'osmose inverse haute pression (OI à haute récupération) couplé à un évaporateur/cristallisoir.' : 'A chemical manufacturing facility was producing a high-volume effluent stream saturated with sodium sulfate. To meet environmental targets, they needed a ZLD solution. ICPAF designed a high-pressure reverse osmosis (High-Recovery RO) system coupled with an evaporator/crystallizer.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Atteinte du véritable statut Zéro Rejet Liquide (ZLD) pour l'installation",
                  "Récupération de 90 % de l'eau sous forme de perméat de haute pureté pour l'alimentation de la chaudière",
                  "Cristallisation de sel de sulfate de sodium de haute pureté pour la revente commerciale",
                  "Réduction des coûts d'énergie d'évaporation thermique par pré-concentration avec l'OI",
                  "Préparation de l'usine aux futures réglementations environnementales plus strictes"
                ] : [
                  "Achieved true Zero Liquid Discharge (ZLD) status for the facility",
                  "Recovered 90% of the water as high-purity permeate for boiler feed",
                  "Crystallized high-purity sodium sulfate salt for commercial resale",
                  "Reduced thermal evaporation energy costs by pre-concentrating with RO",
                  "Future-proofed the plant against tightening environmental regulations"
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
                  title: "90% de Récupération d'Eau",
                  desc: "Perméat de haute pureté réutilisé comme eau d'alimentation de chaudière."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Cristallisation du Sel",
                  desc: "Sulfate de sodium de qualité commerciale récupéré pour la revente."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "ZLD Atteint",
                  desc: "Élimination complète des rejets de déchets liquides."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "90% Water Recovery",
                  desc: "High-purity permeate reused as boiler feed water."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Salt Crystallization",
                  desc: "Commercial-grade sodium sulfate recovered for resale."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "ZLD Achieved",
                  desc: "Complete elimination of liquid waste discharge."
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
