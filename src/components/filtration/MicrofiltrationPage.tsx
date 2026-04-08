import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import FiltrationSpectrumChart from '../FiltrationSpectrumChart';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function MicrofiltrationPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Filtration/micro filtration.jpg" 
            alt="Microfiltration Systems" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Technologie de Filtration' : 'Filtration Technology'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Microfiltration (MF)' : 'Microfiltration (MF)'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'La première ligne de défense critique. Nos systèmes avancés de microfiltration à médias et à cartouches offrent un contrôle absolu des particules, permettant une réduction logarithmique des solides en suspension, des bactéries et des matières colloïdales.' : 'The critical first line of defense. Our advanced media and cartridge microfiltration systems provide absolute particulate control, achieving log-reduction of suspended solids, bacteria, and colloidal matter.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Contrôle Absolu des Particules' : 'Absolute Particulate Control'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Fonctionnant dans la plage de 0,1 à 10 microns, la microfiltration (MF) est essentielle pour éliminer les impuretés physiques avant qu\'elles ne puissent encrasser les membranes plus sensibles en aval, comme l\'osmose inverse (OI). En utilisant des structures de pores conçues avec précision, ces systèmes prolongent considérablement la durée de vie de l\'ensemble de votre architecture de traitement de l\'eau.' : 'Operating in the 0.1 to 10 micron range, Microfiltration (MF) is essential for removing physical impurities before they can foul downstream, more sensitive membranes like Reverse Osmosis (RO). By utilizing precisely engineered pore structures, these systems drastically extend the lifespan of your entire water treatment architecture.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Protège les membranes OI et NF en aval de l'encrassement physique",
                  "Élimine efficacement les solides en suspension, les algues et les grosses bactéries",
                  "Disponible dans des configurations à cartouche et à média",
                  "La faible pression de fonctionnement réduit les coûts énergétiques",
                  "Taux de flux élevés pour le traitement industriel de grands volumes"
                ] : [
                  "Protects downstream RO and NF membranes from physical fouling",
                  "Effectively removes suspended solids, algae, and large bacteria",
                  "Available in both cartridge and media-based configurations",
                  "Low operating pressure requirement reduces energy costs",
                  "High flux rates for large-volume industrial processing"
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
                  title: "Prétraitement",
                  desc: "Idéal pour préparer l'eau d'alimentation des systèmes OI."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Clarification",
                  desc: "Élimine la turbidité de l'eau de processus industriel."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Alimentation & Boissons",
                  desc: "Filtration stérile et clarification des liquides."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Pre-treatment",
                  desc: "Ideal for preparing feed water for RO systems."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Clarification",
                  desc: "Removes turbidity from industrial process water."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Food & Beverage",
                  desc: "Sterile filtration and liquid clarification."
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

      <FiltrationSpectrumChart />
    </PageWrapper>
  );
}
