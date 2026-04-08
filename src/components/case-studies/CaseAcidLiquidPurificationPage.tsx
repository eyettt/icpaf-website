import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CaseAcidLiquidPurificationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/Distillation-is-one-of-the-processes-of-water-purification.jpg" 
            alt="Acid Liquid Purification Case Study" 
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
              {isFr ? 'Purification de Liquide Acide' : 'Acid Liquid Purification'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Usine de fabrication d\'acier européenne. Réduction des coûts d\'élimination des déchets dangereux et récupération d\'acides précieux des lignes de décapage.' : 'European Steel Manufacturing Plant. Reducing hazardous waste disposal costs and recovering valuable acids from pickling lines.'}
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
                {isFr ? 'Un important producteur d\'acier européen était confronté à une escalade des coûts de neutralisation et d\'élimination de la liqueur de décapage usée (acide chlorhydrique contaminé par des sels de fer). ICPAF a conçu un système de dialyse de diffusion et de nanofiltration sur mesure pour séparer l\'acide libre des sels métalliques.' : 'A major European steel producer was facing escalating costs for the neutralization and disposal of spent pickling liquor (hydrochloric acid contaminated with iron salts). ICPAF designed a custom diffusion dialysis and nanofiltration system to separate the free acid from the metal salts.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Récupération jusqu'à 85 % d'acide chlorhydrique libre pour réutilisation",
                  "Réduction des volumes d'élimination des déchets dangereux de 75 %",
                  "Baisse significative des coûts d'achat d'acide neuf",
                  "Retour sur investissement (ROI) atteint en moins de 18 mois",
                  "Amélioration de la cohérence globale du processus de décapage"
                ] : [
                  "Recovered up to 85% of free hydrochloric acid for reuse",
                  "Reduced hazardous waste disposal volumes by 75%",
                  "Lowered fresh acid purchasing costs significantly",
                  "Achieved ROI (Return on Investment) in under 18 months",
                  "Improved overall pickling process consistency"
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
                  title: "85% de Récupération",
                  desc: "Acide libre récupéré et réintégré au processus."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "-75% de Déchets",
                  desc: "Réduction massive de l'élimination des déchets dangereux."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "ROI < 18 Mois",
                  desc: "Retour sur investissement rapide grâce aux économies de coûts."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "85% Recovery",
                  desc: "Free acid recovered and returned to the process."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "-75% Waste",
                  desc: "Massive reduction in hazardous waste disposal."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "< 18 Mo ROI",
                  desc: "Rapid return on investment through cost savings."
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
