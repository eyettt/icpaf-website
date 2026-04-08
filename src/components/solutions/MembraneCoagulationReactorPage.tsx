import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../DownloadButton';

export default function MembraneCoagulationReactorPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/membrane coagulation.webp" 
            alt="Membrane Coagulation Reactor" 
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
              {isFr ? 'Réacteur à Coagulation Membranaire (MCR)' : 'Membrane Coagulation-Reactor (MCR)'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Élimination à haute efficacité des matières organiques. Le MCR est un système hybride révolutionnaire qui intègre une coagulation chimique optimisée directement avec des membranes d\'ultrafiltration immergées.' : 'High-efficiency organics removal. The MCR is a revolutionary hybrid system that integrates optimized chemical coagulation directly with submerged ultrafiltration membranes.'}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Traitement Synergique' : 'Synergistic Treatment'}</h2>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Cette synergie permet l\'élimination continue et à haut flux des matières colloïdales, des matières organiques à haut poids moléculaire et des métaux lourds en une seule étape compacte. Elle élimine le besoin de grands bassins de décantation et réduit considérablement le volume des boues par rapport aux clarificateurs conventionnels.' : 'This synergy allows for the continuous, high-flux removal of colloidal matter, high-molecular-weight organics, and heavy metals in a single, compact step. It eliminates the need for large settling tanks and significantly reduces sludge volume compared to conventional clarifiers.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Avantages Principaux' : 'Core Advantages'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Prétraitement pour les alimentations OI très encrassantes",
                  "Traitement direct des eaux de surface pour la boisson",
                  "Élimination de la matière organique naturelle (MON)",
                  "Précipitation du phosphore et des métaux lourds",
                  "Modernisation des infrastructures de clarification existantes"
                ] : [
                  "Pre-treatment for highly fouling RO feeds",
                  "Direct treatment of surface water for drinking",
                  "Removal of natural organic matter (NOM)",
                  "Phosphorus and heavy metal precipitation",
                  "Retrofitting existing clarifier infrastructure"
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
                  title: "Eau de Surface",
                  desc: "Traitement direct pour la production d'eau potable."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Protection OI",
                  desc: "Prétraitement pour les alimentations d'osmose inverse très encrassantes."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Métaux Lourds",
                  desc: "Précipitation et élimination efficaces des contaminants."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "Surface Water",
                  desc: "Direct treatment for potable water production."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "RO Protection",
                  desc: "Pre-treatment for highly fouling reverse osmosis feeds."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Heavy Metals",
                  desc: "Efficient precipitation and removal of contaminants."
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
