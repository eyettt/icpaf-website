import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function SeawaterDesalinationROPretreatmentPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/desalination.webp" 
            alt="Seawater Desalination RO Pretreatment" 
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
              {isFr ? 'Prétraitement OI pour le Dessalement de l\'Eau de Mer' : 'Seawater Desalination RO Pretreatment'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Installation au Moyen-Orient - 50 000 m³/jour. Surmonter l\'encrassement biologique sévère et la dégradation rapide des membranes grâce à une ultrafiltration avancée.' : 'Middle East Facility - 50,000 m³/day. Overcoming severe biofouling and rapid membrane degradation with advanced ultrafiltration.'}
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
                {isFr ? 'Une importante usine de dessalement au Moyen-Orient connaissait un encrassement biologique sévère et une dégradation rapide des membranes en raison de niveaux élevés de matières en suspension et de matières organiques dans l\'eau de mer brute. ICPAF a conçu un système de prétraitement par ultrafiltration (UF) complet, combiné à un régime de dosage d\'antitartre exclusif.' : 'A major desalination plant in the Middle East was experiencing severe biofouling and rapid membrane degradation due to high levels of suspended solids and organics in the raw seawater intake. ICPAF engineered a comprehensive ultrafiltration (UF) pretreatment skid combined with a proprietary antiscalant dosing regimen.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Réduction de l'indice de densité de colmatage (SDI) de >5,0 à systématiquement <2,5",
                  "Prolongation de la durée de vie de la membrane OI de 40 %",
                  "Diminution de la fréquence de nettoyage chimique (CIP) de 60 %",
                  "Réduction de 15 % de la consommation d'énergie globale",
                  "Garantie d'un fonctionnement ininterrompu de l'usine pendant les proliférations d'algues"
                ] : [
                  "Reduced Silt Density Index (SDI) from >5.0 to consistently <2.5",
                  "Extended RO membrane lifespan by 40%",
                  "Decreased chemical cleaning frequency (CIP) by 60%",
                  "Achieved a 15% reduction in overall energy consumption",
                  "Ensured uninterrupted plant operation during algal blooms"
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
                  title: "SDI < 2,5",
                  desc: "Eau d'alimentation de haute qualité constante pour l'OI."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "+40% Durée de Vie",
                  desc: "Prolongation significative de la durée de vie de la membrane OI."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "-15% Énergie",
                  desc: "Réduction globale de la consommation d'énergie de l'usine."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "SDI < 2.5",
                  desc: "Consistent high-quality feed water for RO."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "+40% Lifespan",
                  desc: "Significant extension of RO membrane life."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "-15% Energy",
                  desc: "Overall reduction in plant energy consumption."
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
