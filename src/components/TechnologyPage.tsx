import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from './Navbar';
import { useTranslation } from 'react-i18next';

interface TechnologyPageProps {
  onNavigate?: (page: PageId) => void;
}

export default function TechnologyPage({ onNavigate }: TechnologyPageProps) {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  const handleNavigate = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  const technologies = [
    {
      id: 'waste-water' as PageId,
      title: isFr ? 'Traitement des Eaux Usées' : 'Wastewater Treatment',
      subtitle: isFr ? 'Conformité et Récupération' : 'Compliance and Reclamation',
      description: isFr ? "Les effluents industriels sont très complexes, contenant souvent des métaux lourds, une DCO/DBO élevée et des produits chimiques agressifs. Nos architectures de traitement exclusives combinent l'oxydation avancée, la coagulation spécialisée et les bioréacteurs à membrane (MBR) pour décomposer les matières organiques récalcitrantes, garantissant une stricte conformité environnementale et permettant un pourcentage élevé de réutilisation de l'eau." : 'Industrial effluent is highly complex, often containing heavy metals, high COD/BOD, and aggressive chemicals. Our proprietary treatment architectures combine advanced oxidation, specialized coagulation, and membrane bioreactors (MBR) to break down recalcitrant organics, ensuring strict environmental compliance and enabling high-percentage water reuse.',
      image: '/images/Technologies/Wastewater-treatment.jpg',
      bullets: isFr ? [
        "Effluents de teinture et de finition textile",
        "Eaux usées pharmaceutiques et cosmétiques",
        "Moulins à huile et ruissellement agricole",
        "Précipitation et élimination des métaux lourds",
        "Réduction de la demande biologique en oxygène (DBO)"
      ] : [
        "Textile dyeing and finishing effluent",
        "Pharmaceutical and cosmetic wastewater",
        "Olive-mill and agricultural runoff",
        "Heavy metal precipitation and removal",
        "Biological oxygen demand (BOD) reduction"
      ]
    },
    {
      id: 'drinking-water' as PageId,
      title: isFr ? 'Eau Potable' : 'Drinking Water',
      subtitle: isFr ? 'Pureté et Sécurité Absolues' : 'Absolute Purity & Safety',
      description: isFr ? "Garantir la sécurité de l'eau potable nécessite une purification robuste à barrières multiples. Nos systèmes utilisent l'ultrafiltration avancée (UF) et l'osmose inverse (OI) pour éliminer les agents pathogènes, les métaux lourds et les contaminants émergents des sources d'eau de surface et souterraines, garantissant une eau potable sûre pour les communautés et les installations." : 'Ensuring the safety of drinking water requires robust, multi-barrier purification. Our systems utilize advanced ultrafiltration (UF) and reverse osmosis (RO) to remove pathogens, heavy metals, and emerging contaminants from surface and groundwater sources, guaranteeing safe, potable water for communities and facilities.',
      image: '/images/Technologies/drinking-Water-Treatment-Process.webp',
      bullets: isFr ? [
        "Usines de traitement des eaux municipales",
        "Élimination de l'arsenic et du fluorure des eaux souterraines",
        "Clarification et désinfection des eaux de surface",
        "Systèmes d'approvisionnement en eau des communautés éloignées",
        "Purification d'eau d'urgence et mobile"
      ] : [
        "Municipal water treatment plants",
        "Groundwater arsenic and fluoride removal",
        "Surface water clarification and disinfection",
        "Remote community water supply systems",
        "Emergency and mobile water purification"
      ]
    },
    {
      id: 'process-water' as PageId,
      title: isFr ? 'Eau de Processus' : 'Process Water',
      subtitle: isFr ? 'Précision Ultra-Pure' : 'Ultra-Pure Precision',
      description: isFr ? "La fabrication de haute technologie exige une eau d'une pureté sans compromis. Nos systèmes d'eau de processus utilisent l'OI à double passage, l'électrodéionisation (EDI) et des techniques de polissage avancées pour produire de l'eau ultra-pure (UPW) avec une résistance spécifique allant jusqu'à 18,2 MΩ·cm, garantissant aucune interférence dans les processus de production sensibles." : 'High-tech manufacturing demands water of uncompromising purity. Our process water systems utilize double-pass RO, Electrodeionization (EDI), and advanced polishing techniques to produce ultra-pure water (UPW) with specific resistance up to 18.2 MΩ·cm, ensuring zero interference in sensitive production processes.',
      image: '/images/Technologies/process-water.jpg',
      bullets: isFr ? [
        "Fabrication de semi-conducteurs et de microélectronique",
        "Eau pour préparations injectables (EPPI) pharmaceutique",
        "Eau d'ingrédient pour aliments et boissons",
        "Eau d'alimentation de turbine de production d'énergie",
        "Production de cosmétiques et de soins personnels"
      ] : [
        "Semiconductor and microelectronics manufacturing",
        "Pharmaceutical Water for Injection (WFI)",
        "Food and beverage ingredient water",
        "Power generation turbine feed water",
        "Cosmetics and personal care production"
      ]
    },
    {
      id: 'desalination' as PageId,
      title: isFr ? 'Dessalement' : 'Desalination',
      subtitle: isFr ? 'Solutions à Haute Salinité' : 'High-Salinity Solutions',
      description: isFr ? "Faire face à la pénurie mondiale d'eau nécessite un dessalement efficace. Nos usines SWRO et BWRO sont conçues pour une efficacité énergétique maximale et une longévité des membranes. En intégrant des dispositifs de récupération d'énergie isobares (ERD) et un prétraitement optimisé, nous réduisons considérablement la consommation d'énergie spécifique et les coûts opérationnels du dessalement." : 'Addressing global water scarcity requires efficient desalination. Our SWRO and BWRO plants are engineered for maximum energy efficiency and membrane longevity. By incorporating isobaric energy recovery devices (ERDs) and optimized pre-treatment, we significantly lower the specific energy consumption and operational costs of desalination.',
      image: '/images/Technologies/desalination.webp',
      bullets: isFr ? [
        "Approvisionnement en eau municipale côtière (SWRO)",
        "Dessalement des eaux souterraines saumâtres intérieures (BWRO)",
        "Eau de processus industriel à partir d'eau de mer",
        "Autonomie en eau des îles et des complexes hôteliers",
        "Irrigation agricole à partir d'aquifères salins"
      ] : [
        "Coastal municipal water supply (SWRO)",
        "Inland brackish groundwater desalination (BWRO)",
        "Industrial process water from seawater",
        "Island and resort water autonomy",
        "Agricultural irrigation from saline aquifers"
      ]
    },
    {
      id: 'boiler' as PageId,
      title: isFr ? 'Systèmes de Chaudière' : 'Boiler Systems',
      subtitle: isFr ? 'Efficacité Thermique' : 'Thermal Efficiency',
      description: isFr ? "L'entartrage et la corrosion dans les chaudières à haute pression entraînent des pertes d'efficacité catastrophiques et des défaillances d'équipement dangereuses. Nos programmes chimiques intégrés et nos technologies de dosage automatisées maintiennent une chimie de l'eau précise, maximisant l'efficacité du transfert de chaleur, prolongeant la durée de vie des actifs et minimisant les déchets de purge." : 'Scaling and corrosion in high-pressure boilers lead to catastrophic efficiency losses and dangerous equipment failure. Our integrated chemical programs and automated dosing technologies maintain precise water chemistry, maximizing heat transfer efficiency, extending asset life, and minimizing blowdown waste.',
      image: '/images/Technologies/boiler.jpg',
      bullets: isFr ? [
        "Traitement de l'eau d'alimentation de chaudière à haute pression",
        "Élimination de la silice et de la dureté par OI/EDI",
        "Élimination de l'oxygène et inhibition de la corrosion",
        "Polissage des retours de condensats",
        "Systèmes de contrôle de purge automatisés"
      ] : [
        "High-pressure boiler feed water treatment",
        "Silica and hardness removal via RO/EDI",
        "Oxygen scavenging and corrosion inhibition",
        "Condensate return polishing",
        "Automated blowdown control systems"
      ]
    },
    {
      id: 'cooling-tower' as PageId,
      title: isFr ? 'Tours de Refroidissement' : 'Cooling Towers',
      subtitle: isFr ? "Conservation de l'Eau" : 'Water Conservation',
      description: isFr ? "Les tours de refroidissement consomment de grandes quantités d'eau et sont très sensibles à l'encrassement biologique, à l'entartrage et à la corrosion. Nos programmes de gestion complets utilisent la filtration en dérivation, des biocides ciblés et des systèmes de récupération de purge pour augmenter en toute sécurité les cycles de concentration, réduisant considérablement la demande en eau d'appoint et l'utilisation de produits chimiques." : 'Cooling towers consume vast amounts of water and are highly susceptible to biological fouling, scaling, and corrosion. Our comprehensive management programs utilize side-stream filtration, targeted biocides, and blowdown recovery systems to safely increase cycles of concentration, drastically reducing make-up water demand and chemical usage.',
      image: '/images/Technologies/Cooling-Towers.png',
      bullets: isFr ? [
        "Inhibition du tartre et de la corrosion des tours de refroidissement",
        "Contrôle de la légionelle et programmes biocides",
        "Filtration en dérivation (UF/Médias)",
        "Récupération et réutilisation de l'eau de purge",
        "Dosage et surveillance chimiques automatisés"
      ] : [
        "Cooling tower scale and corrosion inhibition",
        "Legionella control and biocide programs",
        "Side-stream filtration (UF/Media)",
        "Blowdown water recovery and reuse",
        "Automated chemical dosing and monitoring"
      ]
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Technologies/drinking-Water-Treatment-Process.webp" 
            alt="Advanced Technology" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-deep-sea" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{isFr ? 'Notre Technologie' : 'Our Technology'}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {isFr ? 'Ingénierie Spécifique au Processus' : 'Process-Specific Engineering'}
            </h1>
            <p className="text-xl text-sapphire/80 font-light leading-relaxed">
              {isFr ? "Nous ne vendons pas d'équipements standard. Nous concevons des technologies holistiques et spécifiques aux processus, adaptées aux exigences chimiques et physiques uniques des eaux usées, de l'eau potable, de l'eau de processus et des systèmes thermiques." : "We don't sell off-the-shelf equipment. We engineer holistic, process-specific technologies tailored to the unique chemical and physical demands of wastewater, drinking water, process water, and thermal systems."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8 space-y-32">
          {technologies.map((tech, index) => (
            <div key={tech.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{tech.title}</h2>
                <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{tech.subtitle}</h3>
                <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                  {tech.description}
                </p>
                
                <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{isFr ? 'Applications Clés' : 'Key Applications'}</h4>
                <ul className="space-y-3 mb-10">
                  {tech.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                      <span className="text-sapphire/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleNavigate(tech.id)}
                  className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
                >
                  {isFr ? 'Explorer la Technologie' : 'Explore Technology'} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
