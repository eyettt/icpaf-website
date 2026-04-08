import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function SeawaterDesalinationPreTreatmentPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/desalination.webp" 
            alt="Seawater Desalination Pre-treatment" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Solutions Intégrées' : 'Integrated Solutions'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Prétraitement du Dessalement de l\'Eau de Mer' : 'Seawater Desalination Pre-treatment'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Protection de l\'infrastructure d\'osmose inverse. Nos solutions de prétraitement intégrées utilisent l\'ultrafiltration (UF) et la microfiltration (MF) avancées pour fournir systématiquement une eau d\'alimentation de haute qualité.' : 'Protecting Reverse Osmosis infrastructure. Our integrated pre-treatment solutions utilize advanced ultrafiltration (UF) and microfiltration (MF) to consistently deliver high-quality feed water.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Protection Robuste' : 'Robust Protection'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les usines de dessalement nécessitent un prétraitement robuste pour protéger les membranes OI sensibles de l\'encrassement et de l\'entartrage. Nos systèmes garantissent des performances constantes, quelles que soient les variations saisonnières ou les proliférations d\'algues dans l\'eau source.' : 'Desalination plants require robust pre-treatment to protect sensitive RO membranes from fouling and scaling. Our systems ensure consistent performance, regardless of seasonal variations or algal blooms in the source water.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Réduction constante du SDI (Indice de Densité de la Vase)",
                  "Protection contre les proliférations d'algues et les marées rouges",
                  "Durée de vie prolongée de la membrane OI",
                  "Fréquence de nettoyage chimique réduite",
                  "Empreinte compacte par rapport aux filtres à média conventionnels"
                ] : [
                  "Consistent SDI (Silt Density Index) reduction",
                  "Protection against algal blooms and red tides",
                  "Extended RO membrane lifespan",
                  "Reduced chemical cleaning frequency",
                  "Compact footprint compared to conventional media filters"
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
                  title: "Réduction du SDI",
                  desc: "Réduction constante de l'Indice de Densité de la Vase pour l'alimentation OI."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Proliférations d'Algues",
                  desc: "Protection contre les marées rouges et les algues saisonnières."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Durée de Vie OI",
                  desc: "Durée de vie prolongée de la membrane et fréquence de nettoyage réduite."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "SDI Reduction",
                  desc: "Consistent Silt Density Index reduction for RO feed."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Algal Blooms",
                  desc: "Protection against seasonal red tides and algae."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "RO Lifespan",
                  desc: "Extended membrane life and reduced cleaning frequency."
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
