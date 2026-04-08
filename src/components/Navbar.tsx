import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';

export type PageId = string;

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const getNavItems = (t: any) => [
  { name: t('nav.home'), id: 'home' },
  { 
    name: t('nav.about'), 
    id: 'about',
    dropdown: [
      { name: t('nav.philosophy'), id: 'philosophy' },
      { name: t('nav.team'), id: 'team' },
      { name: t('nav.whoWeAre'), id: 'who-we-are' }
    ]
  },
  {
    name: t('nav.filtration'),
    id: 'filtration',
    dropdown: [
      { name: t('nav.microfiltration'), id: 'microfiltration' },
      { name: t('nav.ultraFiltration'), id: 'ultra-filtration' },
      { name: t('nav.nanoFiltration'), id: 'nano-filtration' },
      { name: t('nav.reverseOsmosis'), id: 'reverse-osmosis' }
    ]
  },
  {
    name: t('nav.membranes'),
    id: 'membranes',
    dropdown: [
      { name: t('nav.polymerMembranes'), id: 'polymer-membranes' },
      { name: t('nav.ceramicMembranes'), id: 'ceramic-membranes' },
      { name: t('nav.hybridMembranes'), id: 'hybrid-membranes' }
    ]
  },
  {
    name: t('nav.technology'),
    id: 'technology',
    dropdown: [
      { name: t('nav.wasteWater'), id: 'waste-water' },
      { name: t('nav.drinkingWater'), id: 'drinking-water' },
      { name: t('nav.processWater'), id: 'process-water' },
      { name: t('nav.desalination'), id: 'desalination' },
      { name: t('nav.boiler'), id: 'boiler' },
      { name: t('nav.coolingTower'), id: 'cooling-tower' }
    ]
  },
  {
    name: t('nav.solutions'),
    id: 'solutions',
    dropdown: [
      { name: t('nav.mcr'), id: 'membrane-coagulation-reactor' },
      { name: t('nav.acidLiquid'), id: 'acid-liquid-purification' },
      { name: t('nav.seawaterPre'), id: 'seawater-desalination-pre-treatment' },
      { name: t('nav.reclaimedWater'), id: 'reclaimed-water-reused' },
      { name: t('nav.oilWater'), id: 'oil-water-separation' }
    ]
  },
  {
    name: t('nav.caseStudies'),
    id: 'case-studies',
    dropdown: [
      { name: t('nav.caseSeawater'), id: 'seawater-desalination-ro-pretreatment' },
      { name: t('nav.caseAcidLiquid'), id: 'case-acid-liquid-purification' },
      { name: t('nav.caseTextile'), id: 'textile-dyeing' },
      { name: t('nav.caseCosmetic'), id: 'cosmetic-industry' },
      { name: t('nav.caseOlive'), id: 'olive-mill' },
      { name: t('nav.caseAcidLead'), id: 'acid-lead-batteries' },
      { name: t('nav.caseSodium'), id: 'sodium-sulfate' }
    ]
  },
  { name: t('nav.products'), id: 'products' }
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = getNavItems(t);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 md:px-8 py-4 flex justify-between items-center',
          scrolled ? 'bg-deep-sea/95 backdrop-blur-xl border-b border-clinical-white/5 shadow-sm' : 'bg-deep-sea/80 backdrop-blur-sm'
        )}
      >
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <Logo className="w-12 h-12 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-logo font-extrabold tracking-widest text-xl leading-none text-[#5C9E42]">ICPAF</span>
              <span className="font-logo font-extrabold tracking-widest text-xl leading-none text-[#2B7CBA]">WATER</span>
            </div>
            <span className="text-[7px] font-logo font-medium tracking-[0.3em] uppercase text-[#999999] mt-1">{t('nav.tagline')}</span>
          </div>
        </div>

        <motion.div layout className="hidden xl:flex items-center gap-4 px-6 py-3 bg-deep-sea/90 backdrop-blur-md rounded-full border border-sapphire/10 shadow-sm">
          {navItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-[9px] font-mono tracking-[0.15em] uppercase transition-all hover:text-oxygen-blue relative flex items-center gap-1 whitespace-nowrap",
                  activePage === item.id ? "text-oxygen-blue" : "text-sapphire/80"
                )}
              >
                <motion.span layout>{item.name}</motion.span>
                {item.dropdown && <ChevronDown className="w-3 h-3" />}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[1px] bg-oxygen-blue transition-all duration-500",
                  activePage === item.id ? "w-full" : "group-hover:w-1/2"
                )} />
              </button>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-6 min-w-[280px]"
                    >
                      <div className="bg-deep-sea border border-sapphire/10 rounded-2xl p-2 shadow-2xl">
                        {item.dropdown.map((dropItem) => (
                          <button
                            key={dropItem.id}
                            onClick={() => handleNavClick(dropItem.id)}
                            className="w-full text-left px-4 py-3 text-[10px] font-mono tracking-[0.1em] uppercase text-sapphire/70 hover:text-oxygen-blue hover:bg-sapphire/5 rounded-xl transition-all whitespace-nowrap"
                          >
                            {dropItem.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="hidden xl:flex relative items-center bg-sapphire/5 rounded-full p-1 border border-sapphire/10 cursor-pointer"
          >
            <div className="flex relative">
              <motion.div
                className="absolute inset-y-0 bg-white rounded-full shadow-sm"
                initial={false}
                animate={{
                  left: i18n.language === 'en' ? '0%' : '50%',
                  width: '50%'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <div className={cn("px-3 py-1.5 relative z-10 font-mono text-[10px] uppercase font-bold tracking-widest transition-colors", i18n.language === 'en' ? "text-sapphire" : "text-sapphire/50")}>
                EN
              </div>
              <div className={cn("px-3 py-1.5 relative z-10 font-mono text-[10px] uppercase font-bold tracking-widest transition-colors", i18n.language === 'fr' ? "text-sapphire" : "text-sapphire/50")}>
                FR
              </div>
            </div>
          </button>
          <motion.button 
            layout
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden xl:flex justify-center items-center px-6 py-2.5 bg-oxygen-blue text-white font-mono tracking-widest uppercase text-[10px] font-bold hover:bg-blue-600 transition-colors rounded-full shadow-md whitespace-nowrap w-[160px]"
          >
            <motion.span layout>{t('nav.contactUs')}</motion.span>
          </motion.button>
          <button 
            className="xl:hidden p-2 text-sapphire"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-deep-sea flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-sapphire/10">
              <div className="flex items-center gap-3">
                <Logo className="w-10 h-10" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-logo font-extrabold tracking-widest text-lg leading-none text-[#5C9E42]">ICPAF</span>
                    <span className="font-logo font-extrabold tracking-widest text-lg leading-none text-[#2B7CBA]">WATER</span>
                  </div>
                  <span className="text-[6px] font-logo font-medium tracking-[0.3em] uppercase text-[#999999] mt-1">{t('nav.tagline')}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleLanguage}
                  className="flex relative items-center bg-sapphire/5 rounded-full p-1 border border-sapphire/10 cursor-pointer"
                >
                  <div className="flex relative">
                    <motion.div
                      className="absolute inset-y-0 bg-white rounded-full shadow-sm"
                      initial={false}
                      animate={{
                        left: i18n.language === 'en' ? '0%' : '50%',
                        width: '50%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                    <div className={cn("px-3 py-1.5 relative z-10 font-mono text-[10px] uppercase font-bold tracking-widest transition-colors", i18n.language === 'en' ? "text-sapphire" : "text-sapphire/50")}>
                      EN
                    </div>
                    <div className={cn("px-3 py-1.5 relative z-10 font-mono text-[10px] uppercase font-bold tracking-widest transition-colors", i18n.language === 'fr' ? "text-sapphire" : "text-sapphire/50")}>
                      FR
                    </div>
                  </div>
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-sapphire/60 hover:text-sapphire transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.id} className="space-y-3">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "text-sm font-mono tracking-[0.2em] uppercase transition-colors w-full text-left font-bold",
                      activePage === item.id ? "text-oxygen-blue" : "text-sapphire"
                    )}
                  >
                    {item.name}
                  </button>
                  {item.dropdown && (
                    <div className="pl-4 space-y-3 border-l border-sapphire/10">
                      {item.dropdown.map((dropItem) => (
                        <button
                          key={dropItem.id}
                          onClick={() => handleNavClick(dropItem.id)}
                          className="block text-[11px] font-mono tracking-[0.1em] uppercase text-sapphire/60 hover:text-oxygen-blue transition-colors w-full text-left"
                        >
                          {dropItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
