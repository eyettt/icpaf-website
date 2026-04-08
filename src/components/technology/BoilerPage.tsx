import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BoilerPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/boiler.jpg" 
            alt="Industrial Boiler Systems" 
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
              {isFr ? 'Systèmes de Chaudière' : 'Boiler Systems'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Traitement de l\'eau d\'alimentation de chaudière haute pression, prévention de l\'entartrage et élimination de la silice pour maximiser le transfert de chaleur et la durée de vie des actifs.' : 'High-pressure boiler feed water treatment, scaling prevention, and silica removal to maximize heat transfer and asset life.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Efficacité Thermique' : 'Thermal Efficiency'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'L\'entartrage et la corrosion dans les chaudières haute pression entraînent des pertes d\'efficacité catastrophiques et des défaillances d\'équipement dangereuses. Nos programmes chimiques intégrés et nos technologies de dosage automatisées maintiennent une chimie de l\'eau précise, maximisant l\'efficacité du transfert de chaleur, prolongeant la durée de vie des actifs et minimisant les déchets de purge.' : 'Scaling and corrosion in high-pressure boilers lead to catastrophic efficiency losses and dangerous equipment failure. Our integrated chemical programs and automated dosing technologies maintain precise water chemistry, maximizing heat transfer efficiency, extending asset life, and minimizing blowdown waste.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Traitement de l'eau d'alimentation de chaudière haute pression",
                  "Élimination de la silice et de la dureté par OI/EDI",
                  "Élimination de l'oxygène et inhibition de la corrosion",
                  "Polissage du retour de condensat",
                  "Systèmes automatisés de contrôle de purge"
                ] : [
                  "High-pressure boiler feed water treatment",
                  "Silica and hardness removal via RO/EDI",
                  "Oxygen scavenging and corrosion inhibition",
                  "Condensate return polishing",
                  "Automated blowdown control systems"
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
                  title: "Prévention du Tartre",
                  desc: "Éliminer les dépôts minéraux isolants."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Protection des Actifs",
                  desc: "Prévenir les piqûres corrosives et la défaillance des tubes."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Économies d'Énergie",
                  desc: "Maximiser l'efficacité du transfert de chaleur."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Scale Prevention",
                  desc: "Eliminate insulating mineral deposits."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Asset Protection",
                  desc: "Prevent corrosive pitting and tube failure."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Energy Savings",
                  desc: "Maximize heat transfer efficiency."
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
