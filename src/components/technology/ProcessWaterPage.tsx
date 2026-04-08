import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProcessWaterPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/process-water.jpg" 
            alt="Process Water Systems" 
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
              {isFr ? 'Eau de Processus' : 'Process Water'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Génération d\'eau ultra-pure pour les applications critiques de fabrication, d\'électronique et pharmaceutiques nécessitant une conductivité précise.' : 'Ultra-pure water generation for critical manufacturing, electronics, and pharmaceutical applications requiring precise conductivity.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Précision Ultra-Pure' : 'Ultra-Pure Precision'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'La fabrication de haute technologie exige une eau d\'une pureté sans compromis. Nos systèmes d\'eau de processus utilisent l\'OI à double passage, l\'électrodéionisation (EDI) et des techniques de polissage avancées pour produire de l\'eau ultra-pure (UPW) avec une résistance spécifique allant jusqu\'à 18,2 MΩ·cm, garantissant aucune interférence dans les processus de production sensibles.' : 'High-tech manufacturing demands water of uncompromising purity. Our process water systems utilize double-pass RO, Electrodeionization (EDI), and advanced polishing techniques to produce ultra-pure water (UPW) with specific resistance up to 18.2 MΩ·cm, ensuring zero interference in sensitive production processes.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Fabrication de semi-conducteurs et de microélectronique",
                  "Eau pour préparation injectable (EPPI) pharmaceutique",
                  "Eau d'ingrédient pour l'alimentation et les boissons",
                  "Eau d'alimentation de turbine de production d'énergie",
                  "Production de cosmétiques et de soins personnels"
                ] : [
                  "Semiconductor and microelectronics manufacturing",
                  "Pharmaceutical Water for Injection (WFI)",
                  "Food and beverage ingredient water",
                  "Power generation turbine feed water",
                  "Cosmetics and personal care production"
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
                  title: "18,2 MΩ·cm",
                  desc: "Pureté théorique maximale de l'eau."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Intégration EDI",
                  desc: "Désionisation continue sans produits chimiques."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Cohérent",
                  desc: "Qualité inébranlable pour la fabrication critique."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "18.2 MΩ·cm",
                  desc: "Maximum theoretical water purity."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "EDI Integration",
                  desc: "Chemical-free continuous deionization."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Consistent",
                  desc: "Unwavering quality for critical manufacturing."
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
