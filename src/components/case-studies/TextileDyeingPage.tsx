import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../PageWrapper';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TextileDyeingPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Sub main menu/textile dyeing.webp" 
            alt="Textile Dyeing Wastewater Treatment" 
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
              {isFr ? 'Traitement des Eaux Usées de Teinture Textile' : 'Textile Dyeing Wastewater Treatment'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'Installation en Asie du Sud-Est - Zéro Rejet Liquide. Mise en œuvre d\'une coagulation avancée et d\'une ultrafiltration en céramique pour répondre aux réglementations environnementales strictes.' : 'Southeast Asia Facility - Zero Liquid Discharge. Implementing advanced coagulation and ceramic ultrafiltration to meet strict environmental regulations.'}
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
                {isFr ? 'Un grand fabricant de textiles était confronté à de nouvelles réglementations environnementales strictes concernant le rejet d\'eaux usées de teinture hautement colorées et à forte salinité. Le traitement biologique traditionnel ne parvenait pas à respecter les limites de couleur et de DCO. ICPAF a mis en œuvre un processus en plusieurs étapes utilisant une coagulation avancée, une ultrafiltration en céramique et une nanofiltration à haute récupération.' : 'A large-scale textile manufacturer faced strict new environmental regulations regarding the discharge of highly colored, high-salinity dye wastewater. Traditional biological treatment was failing to meet color and COD limits. ICPAF implemented a multi-stage process utilizing advanced coagulation, ceramic ultrafiltration, and high-recovery nanofiltration.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Les Résultats' : 'The Results'}</h4>
              <ul className="space-y-4 mb-10">
                {(isFr ? [
                  "Récupération de 95 % d'eau de processus de haute qualité",
                  "Séparation et récupération réussies de la saumure pour réutilisation dans la teinture",
                  "Élimination complète des rejets de couleur dans le réseau fluvial local",
                  "Réduction des coûts de prélèvement d'eau douce de plus de 1,2 million de dollars par an",
                  "Garantie d'une conformité totale aux mandats de Zéro Rejet Liquide (ZLD)"
                ] : [
                  "Achieved 95% recovery of high-quality process water",
                  "Successfully separated and recovered brine for reuse in dyeing",
                  "Completely eliminated color discharge to the local river system",
                  "Reduced fresh water intake costs by over $1.2M annually",
                  "Ensured full compliance with Zero Liquid Discharge (ZLD) mandates"
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
                  title: "95% de Récupération",
                  desc: "Eau de processus de haute qualité récupérée pour réutilisation."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Zéro Couleur",
                  desc: "Élimination complète des rejets de couleur."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "Conforme ZLD",
                  desc: "Respect de tous les mandats locaux de Zéro Rejet Liquide."
                }
              ] : [
                {
                  icon: <Droplets className="w-8 h-8 text-oxygen-blue" />,
                  title: "95% Recovery",
                  desc: "High-quality process water recovered for reuse."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                  title: "Zero Color",
                  desc: "Complete elimination of color discharge."
                },
                {
                  icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                  title: "ZLD Compliant",
                  desc: "Met all local Zero Liquid Discharge mandates."
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
