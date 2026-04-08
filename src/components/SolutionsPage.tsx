import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from './DownloadButton';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/solutions/membrane coagulation.webp" 
            alt="Custom Solutions" 
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
              {isFr ? 'Systèmes Industriels Clés en Main' : 'Turnkey Industrial Systems'}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {isFr ? 'De la conception à la mise en service, nous fournissons des solutions entièrement intégrées, montées sur patins et modulaires conçues pour relever des défis industriels spécifiques. Nos systèmes combinent des membranes avancées, un dosage chimique précis et une automatisation intelligente.' : 'From concept to commissioning, we deliver fully integrated, skid-mounted, and modular solutions designed to tackle specific industrial challenges. Our systems combine advanced membranes, precise chemical dosing, and intelligent automation.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Solution 1: MCR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Réacteur à Coagulation Membranaire (MCR)' : 'Membrane Coagulation-Reactor (MCR)'}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{isFr ? 'Élimination Haute Efficacité des Matières Organiques' : 'High-Efficiency Organics Removal'}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Le MCR est un système hybride révolutionnaire qui intègre une coagulation chimique optimisée directement avec des membranes d\'ultrafiltration immergées. Cette synergie permet l\'élimination continue et à haut flux de matières colloïdales, de matières organiques de haut poids moléculaire et de métaux lourds en une seule étape compacte. Il élimine le besoin de grands bassins de décantation et réduit considérablement le volume des boues par rapport aux clarificateurs conventionnels.' : 'The MCR is a revolutionary hybrid system that integrates optimized chemical coagulation directly with submerged ultrafiltration membranes. This synergy allows for the continuous, high-flux removal of colloidal matter, high-molecular-weight organics, and heavy metals in a single, compact step. It eliminates the need for large settling tanks and significantly reduces sludge volume compared to conventional clarifiers.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-3 mb-10">
                {(isFr ? [
                  "Prétraitement pour les alimentations OI très encrassantes",
                  "Traitement direct des eaux de surface pour la potabilisation",
                  "Élimination de la matière organique naturelle (MON)",
                  "Précipitation du phosphore et des métaux lourds",
                  "Modernisation de l'infrastructure de clarification existante"
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
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/solutions/membrane coagulation.webp" 
                alt="Membrane Coagulation Reactor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Solution 2: Acid Liquid Purification */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <img 
                src="/images/Sub main menu/acid liquid purification.webp" 
                alt="Acid Liquid Purification" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-sapphire/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Purification des Liquides Acides' : 'Acid Liquid Purification'}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{isFr ? 'Récupération des Ressources et Minimisation des Déchets' : 'Resource Recovery & Waste Minimization'}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les processus industriels génèrent souvent des flux de déchets très acides contaminés par des métaux dissous et des matières organiques. L\'élimination de ces flux est coûteuse et dommageable pour l\'environnement. Nos systèmes de purification d\'acide utilisent une dialyse de diffusion spécialisée et des membranes de nanofiltration résistantes aux acides pour séparer l\'acide libre des sels métalliques dissous, permettant de récupérer jusqu\'à 90 % de l\'acide et de le réutiliser directement dans le processus.' : 'Industrial processes often generate highly acidic waste streams contaminated with dissolved metals and organics. Disposing of these streams is costly and environmentally damaging. Our acid purification systems utilize specialized diffusion dialysis and acid-resistant nanofiltration membranes to separate free acid from dissolved metal salts, allowing up to 90% of the acid to be recovered and reused directly in the process.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-3 mb-10">
                {(isFr ? [
                  "Récupération des liqueurs de décapage de l'acier (HCl, H2SO4)",
                  "Purification des bains d'anodisation de l'aluminium",
                  "Recyclage des batteries et traitement acide-plomb",
                  "Entretien des bains de galvanoplastie",
                  "Extraction minière et hydrométallurgique"
                ] : [
                  "Steel pickling liquor recovery (HCl, H2SO4)",
                  "Aluminum anodizing bath purification",
                  "Battery recycling and acid-lead processing",
                  "Electroplating bath maintenance",
                  "Mining and hydrometallurgical extraction"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />
            </motion.div>
          </div>

          {/* Solution 3: Seawater Desalination Pre-treatment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Prétraitement du Dessalement de l\'Eau de Mer' : 'Seawater Desalination Pre-treatment'}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{isFr ? 'Protection de l\'Infrastructure d\'Osmose Inverse' : 'Protecting Reverse Osmosis Infrastructure'}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'Les usines de dessalement nécessitent un prétraitement robuste pour protéger les membranes OI sensibles de l\'encrassement et de l\'entartrage. Nos solutions de prétraitement intégrées utilisent l\'ultrafiltration (UF) et la microfiltration (MF) avancées pour fournir systématiquement une eau d\'alimentation de haute qualité, indépendamment des variations saisonnières ou des proliférations d\'algues dans l\'eau source.' : 'Desalination plants require robust pre-treatment to protect sensitive RO membranes from fouling and scaling. Our integrated pre-treatment solutions utilize advanced ultrafiltration (UF) and microfiltration (MF) to consistently deliver high-quality feed water, regardless of seasonal variations or algal blooms in the source water.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-3 mb-10">
                {(isFr ? [
                  "Réduction constante du SDI (Silt Density Index)",
                  "Protection contre les proliférations d'algues et les marées rouges",
                  "Durée de vie prolongée de la membrane OI",
                  "Fréquence de nettoyage chimique réduite",
                  "Empreinte compacte par rapport aux filtres à médias conventionnels"
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
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/solutions/Seawater-Desalination.jpg" 
                alt="Seawater Desalination Pre-treatment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Solution 4: Reclaimed Water Reused */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <img 
                src="/images/solutions/reclaimed water reused.webp" 
                alt="Reclaimed Water Reuse" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-sapphire/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Réutilisation des Eaux Récupérées' : 'Reclaimed Water Reuse'}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{isFr ? 'Boucler la Boucle de l\'Eau Industrielle' : 'Closing the Loop on Industrial Water'}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'La pénurie d\'eau et les réglementations environnementales strictes poussent les industries vers le rejet liquide nul (ZLD) et la réutilisation de l\'eau. Nos systèmes d\'eau récupérée combinent le traitement biologique (MBR) avec la filtration sur membrane avancée (OI/NF) pour transformer les effluents industriels en eau de processus de haute pureté, bouclant ainsi la boucle de l\'eau et réduisant la dépendance aux sources municipales.' : 'Water scarcity and strict environmental regulations are driving industries toward zero liquid discharge (ZLD) and water reuse. Our reclaimed water systems combine biological treatment (MBR) with advanced membrane filtration (RO/NF) to transform industrial effluent into high-purity process water, closing the water loop and reducing reliance on municipal sources.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-3 mb-10">
                {(isFr ? [
                  "Conformité avec des réglementations de rejet strictes",
                  "Réduction significative de la consommation d'eau douce",
                  "Récupération de sous-produits précieux à partir des effluents",
                  "Conçu sur mesure pour des profils d'eaux usées industrielles spécifiques",
                  "Intégration avec les stations d'épuration existantes"
                ] : [
                  "Compliance with stringent discharge regulations",
                  "Significant reduction in fresh water consumption",
                  "Recovery of valuable byproducts from effluent",
                  "Custom-engineered for specific industrial wastewater profiles",
                  "Integration with existing wastewater treatment plants"
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />
            </motion.div>
          </div>

          {/* Solution 5: Oil Water Separation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{isFr ? 'Séparation Huile-Eau' : 'Oil-Water Separation'}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{isFr ? 'Récupération Avancée des Hydrocarbures' : 'Advanced Hydrocarbon Recovery'}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {isFr ? 'La séparation efficace de l\'huile émulsionnée de l\'eau est un défi critique dans les industries pétrochimiques, d\'usinage et agroalimentaires. Nos systèmes avancés de membranes céramiques et polymères fournissent des barrières physiques absolues aux gouttelettes d\'huile, atteignant des efficacités de séparation que les coalesceurs conventionnels et les séparateurs API ne peuvent égaler, fournissant une eau sans huile et une huile récupérable concentrée.' : 'Effectively separating emulsified oil from water is a critical challenge in petrochemical, machining, and food processing industries. Our advanced ceramic and polymeric membrane systems provide absolute physical barriers to oil droplets, achieving separation efficiencies that conventional coalescers and API separators cannot match, delivering oil-free water and concentrated recoverable oil.'}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
              <ul className="space-y-3 mb-10">
                {(isFr ? [
                  "Traitement d'émulsions huile-dans-eau stables",
                  "Traitement de l'eau de production dans le pétrole et le gaz",
                  "Recyclage du liquide de refroidissement et de coupe dans l'usinage",
                  "Prolongation de la durée de vie des bains de dégraissage",
                  "Haute résistance thermique et chimique (options céramiques)"
                ] : [
                  "Treatment of stable oil-in-water emulsions",
                  "Produced water treatment in oil & gas",
                  "Coolant and cutting fluid recycling in machining",
                  "Degreasing bath life extension",
                  "High thermal and chemical resistance (Ceramic options)"
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
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/solutions/picture-of-oily-water.jpg" 
                alt="Oil Water Separation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
