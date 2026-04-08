import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, Droplets, Filter, ArrowRight, FlaskConical, Atom } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';

const getProductCatalog = (isFr: boolean) => [
  // Instant Chemicals
  { 
    id: 'carbonoxy', 
    name: 'carbonoxy', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Oxydant catalytique haute performance pour la dégradation rapide des polluants organiques et la réduction de la DCO/DBO.' : 'High-performance catalytic oxidant for rapid degradation of organic pollutants and COD/BOD reduction.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '9.5 - 10.5', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Poudre Blanche' : 'White Powder', [isFr ? 'Dosage' : 'Dosing']: '5-50 g/m³' } 
  },
  { 
    id: 'instant-i-soft', 
    name: 'instant i-soft', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Technologie avancée de prévention du tartre. Agent complexant biodégradable pour tours de refroidissement et chaudières.' : 'Advanced scale prevention technology. Biodegradable complexing agent for cooling towers and boilers.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '7.0 - 8.5', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Liquide Clair' : 'Clear Liquid', [isFr ? 'Dosage' : 'Dosing']: '10-20 ppm' } 
  },
  { 
    id: 'pureoxy', 
    name: 'pureoxy', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Désinfectant et agent de blanchiment de qualité alimentaire. Se décompose en eau et en oxygène sans aucun résidu.' : 'Food-grade disinfectant and bleaching agent. Decomposes into water and oxygen with zero residue.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '3.0 - 5.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Liquide Incolore' : 'Colorless Liquid', [isFr ? 'Dosage' : 'Dosing']: '1-5 ppm' } 
  },
  { 
    id: 'oxytreatment', 
    name: 'oxytreatment', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Oxydant pour eaux usées municipales pour la gestion des boues et le contrôle des odeurs anaérobies.' : 'Municipal wastewater oxidant for sludge management and anaerobic odor control.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.5 - 8.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulés' : 'Granules', [isFr ? 'Dosage' : 'Dosing']: '20-40 ppm' } 
  },
  { 
    id: 'smart-poz', 
    name: 'smart poz', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Alternative non toxique au permanganate de potassium pour l\'élimination du fer et du manganèse.' : 'Non-toxic alternative to Potassium Permanganate for iron and manganese removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Poudre' : 'Powder', [isFr ? 'Dosage' : 'Dosing']: '2-10 ppm' } 
  },
  { 
    id: 'quantum-xsw', 
    name: 'Quantum xsw', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Traitement des eaux de mer extrêmes pour les saumures à haute salinité et les usines de dessalement SWRO.' : 'Extreme Sea Water treatment for high-salinity brine and SWRO desalination plants.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '7.5 - 8.5', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Solide' : 'Solid', [isFr ? 'Dosage' : 'Dosing']: '5-15 ppm' } 
  },
  { 
    id: 'rapid-oxy', 
    name: 'rapid oxy', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Traitement de choc d\'urgence pour les événements de contamination soudaine et l\'assainissement des déversements.' : 'Emergency shock treatment for sudden contamination events and spill remediation.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '5.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Liquide' : 'Liquid', [isFr ? 'Dosage' : 'Dosing']: '50-100 ppm' } 
  },
  { 
    id: 'inpipe-clarifier', 
    name: 'inpipe Clarifier', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Système de floculation en ligne qui fonctionne dans la turbulence des pipelines, éliminant les grands réservoirs.' : 'Inline flocculation system that works within pipeline turbulence, eliminating large tanks.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.0 - 8.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Liquide Visqueux' : 'Viscous Liquid', [isFr ? 'Dosage' : 'Dosing']: '1-5 ppm' } 
  },
  { 
    id: 'carbofix', 
    name: 'carbofix', 
    category: isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 
    overview: isFr ? 'Agent de reminéralisation pour l\'eau douce ou dessalée afin de prévenir la corrosion des réseaux.' : 'Remineralization agent for soft or desalinated water to prevent network corrosion.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '7.0 - 8.5', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulés Blancs' : 'White Granules', [isFr ? 'Dosage' : 'Dosing']: '10-50 ppm' } 
  },

  // Adsorption
  { 
    id: 'aquaredox', 
    name: 'Aquaredox', 
    category: 'Adsorption', 
    overview: isFr ? 'Média redox avancé pour l\'élimination des métaux lourds et du chlore.' : 'Advanced redox media for heavy metal and chlorine removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.5 - 8.5', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Média Granulaire' : 'Granular Media', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'hydrosorb', 
    name: 'Hydrosorb', 
    category: 'Adsorption', 
    overview: isFr ? 'Adsorbant organique à haute efficacité pour l\'élimination du COT et de la couleur.' : 'High-efficiency organic adsorbent for TOC and color removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '2.0 - 12.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Billes de Résine' : 'Resin Beads', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'dye', 
    name: 'Dye', 
    category: 'Adsorption', 
    overview: isFr ? 'Média spécialisé pour l\'élimination des colorants synthétiques et des matières organiques complexes des eaux usées textiles.' : 'Specialized media for the removal of synthetic dyes and complex organics from textile wastewater.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '4.0 - 10.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulaire' : 'Granular', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'catalytic-carbon', 
    name: 'catalytic carbon', 
    category: 'Adsorption', 
    overview: isFr ? 'Charbon actif amélioré pour l\'élimination des chloramines et du sulfure d\'hydrogène.' : 'Enhanced activated carbon for the removal of chloramines and hydrogen sulfide.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulés Noirs' : 'Black Granules', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'borontrapp', 
    name: 'borontrapp', 
    category: 'Adsorption', 
    overview: isFr ? 'Média d\'adsorption sélective pour l\'élimination du bore dans l\'eau d\'irrigation et l\'eau potable.' : 'Selective adsorption media for boron removal in irrigation and drinking water.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '4.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Résine' : 'Resin', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'silicatrap', 
    name: 'silicatrap', 
    category: 'Adsorption', 
    overview: isFr ? 'Élimination ciblée de la silice réactive et non réactive pour protéger les chaudières à haute pression.' : 'Targeted removal of reactive and non-reactive silica to protect high-pressure boilers.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '7.0 - 10.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulaire' : 'Granular', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'carbon-oxy-r', 
    name: 'Carbon oxy R', 
    category: 'Adsorption', 
    overview: isFr ? 'Média oxydant régénératif à base de carbone pour la destruction continue des matières organiques.' : 'Regenerative carbon-based oxidant media for continuous organic destruction.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '5.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Granulés Noirs' : 'Black Granules', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },

  // Filtration
  { 
    id: 'catalyst-light', 
    name: 'catalyst light', 
    category: 'Filtration', 
    overview: isFr ? 'Média de filtration catalytique avancé pour l\'élimination du fer et du manganèse.' : 'Advanced catalytic filtration media for iron and manganese removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '6.2 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Média Granulaire' : 'Granular Media', [isFr ? 'Dosage' : 'Dosing']: isFr ? 'Dépendant du Volume du Lit' : 'Bed Volume Dependent' } 
  },
  { 
    id: 'ultrafiltration', 
    name: 'ultrafiltration', 
    category: 'Filtration', 
    overview: isFr ? 'Systèmes à membrane à fibres creuses pour l\'élimination des agents pathogènes et des solides en suspension.' : 'Hollow fiber membrane systems for pathogen and suspended solids removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '2.0 - 11.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Module à Membrane' : 'Membrane Module', [isFr ? 'Dosage' : 'Dosing']: 'N/A' } 
  },
  { 
    id: 'nano-filtration', 
    name: 'nano filtration', 
    category: 'Filtration', 
    overview: isFr ? 'Filtration membranaire sélective pour l\'adoucissement et l\'élimination des matières organiques.' : 'Selective membrane filtration for softening and organic removal.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '3.0 - 10.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Élément à Membrane' : 'Membrane Element', [isFr ? 'Dosage' : 'Dosing']: 'N/A' } 
  },
  { 
    id: 'ro', 
    name: 'RO', 
    category: 'Filtration', 
    overview: isFr ? 'Systèmes de dessalement à haut rejet pour le traitement des eaux saumâtres et de l\'eau de mer.' : 'High-rejection desalination systems for brackish and sea water treatment.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '2.0 - 11.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Élément à Membrane' : 'Membrane Element', [isFr ? 'Dosage' : 'Dosing']: 'N/A' } 
  },
  { 
    id: 'polymere', 
    name: 'polymere', 
    category: 'Filtration', 
    overview: isFr ? 'Polymères avancés de floculation et de coagulation pour la clarification industrielle.' : 'Advanced flocculation and coagulation polymers for industrial clarification.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '5.0 - 9.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Liquide/Poudre' : 'Liquid/Powder', [isFr ? 'Dosage' : 'Dosing']: '1-10 ppm' } 
  },
  { 
    id: 'membrane-ceramic', 
    name: 'membrane ceramic', 
    category: 'Filtration', 
    overview: isFr ? 'Membranes robustes et chimiquement résistantes pour des conditions d\'eaux usées extrêmes.' : 'Robust, chemically resistant membranes for extreme wastewater conditions.', 
    specs: { [isFr ? 'Plage de pH' : 'pH Range']: '0.0 - 14.0', [isFr ? 'Apparence' : 'Appearance']: isFr ? 'Tube en Céramique' : 'Ceramic Tube', [isFr ? 'Dosage' : 'Dosing']: 'N/A' } 
  },
];

const productImagesMap: Record<string, string> = {
  'carbonoxy': '/images/Our products/carbonoxy.webp',
  'instant-i-soft': '/images/Our products/instant isoft.jpg',
  'pureoxy': '/images/Our products/Pure-Oxy-5-600x600.jpg',
  'oxytreatment': '/images/Our products/oxytreatment.jpg',
  'smart-poz': '/images/Our products/smart poz.webp',
  'quantum-xsw': '/images/Our products/quantum xsw.jpeg',
  'rapid-oxy': '/images/Our products/rapid oxy.jpg',
  'inpipe-clarifier': '/images/Our products/inpipe clarifier.webp',
  'carbofix': '/images/Our products/carbofix.jpg',
  'aquaredox': '/images/Our products/aquaredox.jpg',
  'hydrosorb': '/images/Our products/hydrosorb.jpg',
  'dye': '/images/Our products/dye.png',
  'catalytic-carbon': '/images/Our products/CatalyticCarbonPhoto.webp',
  'borontrapp': '/images/Our products/borontrapp.jpeg',
  'silicatrap': '/images/Our products/silicatrapp.jpeg',
  'carbon-oxy-r': '/images/Our products/carbonoxyr.png',
  'catalyst-light': '/images/Our products/catalyst light.jpg',
  'ultrafiltration': '/images/Our products/ultrafiltration-membranes.jpg',
  'nano-filtration': '/images/Our products/nanofiltration.webp',
  'ro': '/images/Our products/RO.jpeg',
  'polymere': '/images/Our products/polymer.webp',
  'membrane-ceramic': '/images/Our products/membrane ceramic.jpg',
};

const schematicImages = [
  "/images/Main Menu/industrial purity.jpg",
  "/images/Main Menu/reverse_osmosis.jpg",
  "/images/solutions/membrane coagulation.webp",
  "/images/Technologies/Cooling-Towers.png"
];

const getProductImage = (id: string) => {
  return productImagesMap[id] || '/images/Main Menu/industrial purity.jpg';
};

const getSchematicImage = (id: string) => {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return schematicImages[hash % schematicImages.length];
};

export default function ProductsPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories = ['All', isFr ? 'Produits Chimiques Instantanés' : 'Instant Chemicals', 'Adsorption', 'Filtration'];
  const productCatalog = getProductCatalog(isFr);

  const filteredProducts = selectedCategory === 'All' 
    ? productCatalog 
    : productCatalog.filter(p => p.category === selectedCategory);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const getCategoryIcon = (category: string) => {
    if (category === 'Instant Chemicals' || category === 'Produits Chimiques Instantanés') return <FlaskConical className="w-6 h-6 text-oxygen-blue" />;
    if (category === 'Adsorption') return <Atom className="w-6 h-6 text-oxygen-blue" />;
    if (category === 'Filtration') return <Filter className="w-6 h-6 text-oxygen-blue" />;
    return <Droplets className="w-6 h-6 text-oxygen-blue" />;
  };

  return (
    <>
      <PageWrapper>
      <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">{isFr ? 'Portefeuille de Produits' : 'Product Portfolio'}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.85] tracking-tighter mb-12 text-sapphire">
            {isFr ? 'Précision' : 'Molecular'} <br />
            <span className="text-sapphire/20">{isFr ? 'Moléculaire.' : 'Precision.'}</span>
          </h1>
          <p className="text-2xl font-light text-sapphire/60 max-w-3xl leading-relaxed">
            {isFr ? 'Explorez notre catalogue complet de solutions avancées de traitement de l\'eau.' : 'Explore our comprehensive catalog of advanced water treatment solutions.'}
          </p>
        </motion.div>

        {/* Filter UI */}
        <div className="mb-16 flex flex-wrap items-center gap-4 border-b border-sapphire/10 pb-8">
          <div className="flex items-center gap-3 text-sapphire/40 mr-4">
            <Filter className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest">{isFr ? 'Filtrer par :' : 'Filter by:'}</span>
          </div>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[10px] font-mono tracking-[0.3em] uppercase px-6 py-2 rounded-full transition-all ${selectedCategory === cat ? 'bg-sapphire text-deep-sea' : 'text-sapphire/60 hover:text-oxygen-blue'}`}
            >
              {cat === 'All' ? (isFr ? 'Tous' : 'All') : cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="space-y-24">
          {categories.filter(c => c !== 'All').map((category) => {
            const categoryProducts = filteredProducts.filter(p => p.category === category);
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-4xl font-serif text-sapphire">{category}</h2>
                  <div className="h-px bg-sapphire/10 flex-grow" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {categoryProducts.map((product, i) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="bg-sapphire/5 border border-sapphire/10 rounded-3xl p-8 hover:bg-sapphire/10 transition-colors cursor-pointer flex flex-col h-full"
                        onClick={() => openModal(product)}
                      >
                        <div className="mb-6 flex justify-between items-start">
                          <div className="p-4 bg-white/50 rounded-2xl">
                            {getCategoryIcon(product.category)}
                          </div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-sapphire/40 bg-sapphire/5 px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <div className="mb-6 w-full h-48 rounded-2xl overflow-hidden bg-sapphire/5">
                          <img 
                            src={getProductImage(product.id)} 
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h3 className="text-2xl font-serif text-sapphire mb-4 capitalize">{product.name}</h3>
                        <p className="text-sapphire/60 font-light text-sm mb-8 flex-grow line-clamp-3">
                          {product.overview}
                        </p>
                        <button className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-oxygen-blue hover:text-sapphire transition-colors mt-auto">
                          {isFr ? 'Voir les Détails' : 'View Details'} <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"
              onClick={closeModal}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 py-6 flex justify-between items-center z-20">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-blue-600 block mb-1">{selectedProduct.category}</span>
                  <h2 className="text-3xl font-serif text-gray-900 capitalize">{selectedProduct.name}</h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                {/* Image & Overview Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-50">
                    <img 
                      src={getProductImage(selectedProduct.id)} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <section>
                    <h3 className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-4">{isFr ? 'Aperçu du Produit' : 'Product Overview'}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                      {selectedProduct.overview}
                    </p>
                  </section>
                </div>

                {/* Technical Specifications Section */}
                <section>
                  <h3 className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-6">{isFr ? 'Spécifications Techniques' : 'Technical Specifications'}</h3>
                  <div className="overflow-hidden rounded-2xl border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-gray-500 w-1/3">{isFr ? 'Paramètre' : 'Parameter'}</th>
                          <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-gray-500">{isFr ? 'Valeur' : 'Value'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {Object.entries(selectedProduct.specs).map(([key, val]) => (
                          <tr key={key} className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">{key}</td>
                            <td className="py-4 px-6 text-sm text-gray-600">{val as string}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Schematic Section */}
                <section>
                  <h3 className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-6">{isFr ? 'Schéma' : 'Schematic'}</h3>
                  <div className="w-full h-80 bg-gray-50 rounded-3xl overflow-hidden relative border border-gray-200">
                    <img 
                      src={getSchematicImage(selectedProduct.id)} 
                      alt={`${selectedProduct.name} Schematic`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                      <span className="text-white text-sm font-mono tracking-widest uppercase">{isFr ? 'Diagramme Technique' : 'Technical Diagram'}</span>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
