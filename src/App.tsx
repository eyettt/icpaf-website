import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar, { PageId } from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FiltrationPage from './components/FiltrationPage';
import MicrofiltrationPage from './components/filtration/MicrofiltrationPage';
import UltraFiltrationPage from './components/filtration/UltraFiltrationPage';
import NanoFiltrationPage from './components/filtration/NanoFiltrationPage';
import ReverseOsmosisPage from './components/filtration/ReverseOsmosisPage';
import MembranesPage from './components/MembranesPage';
import TechnologyPage from './components/TechnologyPage';
import WasteWaterPage from './components/technology/WasteWaterPage';
import DrinkingWaterPage from './components/technology/DrinkingWaterPage';
import ProcessWaterPage from './components/technology/ProcessWaterPage';
import DesalinationPage from './components/technology/DesalinationPage';
import BoilerPage from './components/technology/BoilerPage';
import CoolingTowerPage from './components/technology/CoolingTowerPage';
import SolutionsPage from './components/SolutionsPage';
import MembraneCoagulationReactorPage from './components/solutions/MembraneCoagulationReactorPage';
import AcidLiquidPurificationPage from './components/solutions/AcidLiquidPurificationPage';
import SeawaterDesalinationPreTreatmentPage from './components/solutions/SeawaterDesalinationPreTreatmentPage';
import ReclaimedWaterReusedPage from './components/solutions/ReclaimedWaterReusedPage';
import OilWaterSeparationPage from './components/solutions/OilWaterSeparationPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import SeawaterDesalinationROPretreatmentPage from './components/case-studies/SeawaterDesalinationROPretreatmentPage';
import CaseAcidLiquidPurificationPage from './components/case-studies/CaseAcidLiquidPurificationPage';
import TextileDyeingPage from './components/case-studies/TextileDyeingPage';
import CosmeticIndustryPage from './components/case-studies/CosmeticIndustryPage';
import OliveMillPage from './components/case-studies/OliveMillPage';
import AcidLeadBatteriesPage from './components/case-studies/AcidLeadBatteriesPage';
import SodiumSulfatePage from './components/case-studies/SodiumSulfatePage';
import ProductsPage from './components/ProductsPage';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';
import PhilosophyPage from './components/PhilosophyPage';
import ResourcesPage from './components/ResourcesPage';
import RefractionBackground from './components/RefractionBackground';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './components/Logo';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const [activePage, setActivePage] = useState<PageId>('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={setActivePage} />;
      case 'about':
      case 'who-we-are':
        return <AboutPage />;
      case 'philosophy':
        return <PhilosophyPage />;
      case 'team':
        return <TeamPage />;
      case 'filtration':
        return <FiltrationPage />;
      case 'microfiltration':
        return <MicrofiltrationPage />;
      case 'ultra-filtration':
        return <UltraFiltrationPage />;
      case 'nano-filtration':
        return <NanoFiltrationPage />;
      case 'reverse-osmosis':
        return <ReverseOsmosisPage />;
      case 'membranes':
      case 'polymer-membranes':
      case 'ceramic-membranes':
      case 'hybrid-membranes':
        return <MembranesPage />;
      case 'technology':
        return <TechnologyPage onNavigate={setActivePage} />;
      case 'waste-water':
        return <WasteWaterPage />;
      case 'drinking-water':
        return <DrinkingWaterPage />;
      case 'process-water':
        return <ProcessWaterPage />;
      case 'desalination':
        return <DesalinationPage />;
      case 'boiler':
        return <BoilerPage />;
      case 'cooling-tower':
        return <CoolingTowerPage />;
      case 'solutions':
        return <SolutionsPage onNavigate={setActivePage} />;
      case 'membrane-coagulation-reactor':
        return <MembraneCoagulationReactorPage />;
      case 'acid-liquid-purification':
        return <AcidLiquidPurificationPage />;
      case 'seawater-desalination-pre-treatment':
        return <SeawaterDesalinationPreTreatmentPage />;
      case 'reclaimed-water-reused':
        return <ReclaimedWaterReusedPage />;
      case 'oil-water-separation':
        return <OilWaterSeparationPage />;
      case 'case-studies':
        return <CaseStudiesPage onNavigate={setActivePage} />;
      case 'seawater-desalination-ro-pretreatment':
        return <SeawaterDesalinationROPretreatmentPage />;
      case 'case-acid-liquid-purification':
        return <CaseAcidLiquidPurificationPage />;
      case 'textile-dyeing':
        return <TextileDyeingPage />;
      case 'cosmetic-industry':
        return <CosmeticIndustryPage />;
      case 'olive-mill':
        return <OliveMillPage />;
      case 'acid-lead-batteries':
        return <AcidLeadBatteriesPage />;
      case 'sodium-sulfate':
        return <SodiumSulfatePage />;
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage onNavigate={setActivePage} />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return (
          <div className="pt-48 pb-32 px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-sapphire mb-6 capitalize">{activePage.replace(/-/g, ' ')}</h1>
            <p className="text-xl text-sapphire/60 font-light">{t('general.underDevelopment')}</p>
            <button 
              onClick={() => setActivePage('home')}
              className="mt-8 px-8 py-3 bg-oxygen-blue text-white font-mono tracking-widest uppercase text-xs font-bold hover:bg-blue-600 transition-colors"
            >
              {t('general.returnHome')}
            </button>
          </div>
        );
    }
  };

  return (
    <main className="relative bg-deep-sea text-sapphire selection:bg-oxygen-blue/30 selection:text-oxygen-blue">
      <RefractionBackground />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-oxygen-blue z-[100] origin-left shadow-[0_0_10px_rgba(0,119,182,0.5)]"
        style={{ scaleX }}
      />

      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <AnimatePresence mode="wait">
        <div key={activePage}>
          {renderPage()}
        </div>
      </AnimatePresence>

      {/* Contact Section (Global) */}
      <section className="py-32 px-8 md:px-24 bg-transparent" id="contact">
        <div className="max-w-7xl mx-auto glass-panel p-12 md:p-24 overflow-hidden relative border-sapphire/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-oxygen-blue/5 blur-[120px] -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
            <div>
              <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-8 block">{t('contact.directLink')}</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none text-sapphire">{t('contact.title1')} <br /><span className="text-sapphire/20">{t('contact.title2')}</span></h2>
              <div className="space-y-10">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-sapphire group-hover:text-clinical-white transition-all duration-500 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-sapphire/40 mb-1">{t('contact.emailUs')}</p>
                    <p className="text-xl font-sans font-light text-sapphire">a.boutta@icpafwater.com</p>
                    <p className="text-xl font-sans font-light text-sapphire">khaled.taieb@icpafwater.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-sapphire group-hover:text-clinical-white transition-all duration-500 shadow-sm">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-sapphire/40 mb-1">LinkedIn</p>
                    <p className="text-2xl font-sans font-light text-sapphire">ICPAF Global</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus('sending');
                
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // FormSubmit configuration
                data._cc = "a.boutta@icpafwater.com";
                data._subject = `New Client Inquiry: ${data.inquiryType}`;
                data._template = "table";

                try {
                  const response = await fetch("https://formsubmit.co/ajax/khaled.taieb@icpafwater.com", {
                      method: "POST",
                      headers: { 
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                      },
                      body: JSON.stringify(data)
                  });
                  
                  if (response.ok) {
                    setFormStatus('success');
                    form.reset();
                    setTimeout(() => setFormStatus('idle'), 4000);
                  } else {
                    console.error("FormSubmit Error", await response.text());
                    setFormStatus('idle');
                    alert(isFr ? "L'envoi a échoué. Veuillez réessayer." : "Submission failed. Please try again later.");
                  }
                } catch (err) {
                  console.error(err);
                  setFormStatus('idle');
                  alert(isFr ? "Erreur de connexion. Veuillez réessayer." : "Submission failed to connect. Please try again later.");
                }
              }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60 ml-4">{t('contact.inquiryType')}</label>
                  <select name="inquiryType" className="w-full bg-white/50 backdrop-blur-sm border border-sapphire/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-oxygen-blue focus:ring-2 focus:ring-oxygen-blue/20 transition-all font-sans text-lg font-light text-sapphire appearance-none cursor-pointer">
                    <option value="expert">{t('contact.expert')}</option>
                    <option value="systems">{t('contact.systems')}</option>
                    <option value="chemicals">{t('contact.chemicals')}</option>
                    <option value="custom">{t('contact.custom')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60 ml-4">{t('contact.fullName')}</label>
                  <input name="name" type="text" required className="w-full bg-white/50 backdrop-blur-sm border border-sapphire/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-oxygen-blue focus:ring-2 focus:ring-oxygen-blue/20 transition-all font-sans text-lg font-light text-sapphire" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60 ml-4">{t('contact.emailAddress')}</label>
                  <input name="email" type="email" required className="w-full bg-white/50 backdrop-blur-sm border border-sapphire/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-oxygen-blue focus:ring-2 focus:ring-oxygen-blue/20 transition-all font-sans text-lg font-light text-sapphire" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60 ml-4">{isFr ? 'Numéro de Téléphone' : 'Phone Number'}</label>
                  <input name="phone" type="tel" className="w-full bg-white/50 backdrop-blur-sm border border-sapphire/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-oxygen-blue focus:ring-2 focus:ring-oxygen-blue/20 transition-all font-sans text-lg font-light text-sapphire" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60 ml-4">{isFr ? 'Détails du Projet' : 'Project Details'}</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/50 backdrop-blur-sm border border-sapphire/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-oxygen-blue focus:ring-2 focus:ring-oxygen-blue/20 transition-all font-sans text-lg font-light text-sapphire resize-none" placeholder={isFr ? "Veuillez décrire le défi de votre installation..." : "Please describe your facility's challenge..."}></textarea>
                </div>
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 mt-4 text-clinical-white font-mono tracking-[0.3em] uppercase text-xs font-bold transition-all rounded-2xl shadow-lg flex items-center justify-center gap-3 ${
                    formStatus === 'success' ? 'bg-[#5C9E42]' : 'bg-sapphire hover:bg-sapphire/90'
                  } ${formStatus === 'sending' ? 'opacity-80 cursor-wait' : ''}`}
                >
                  {formStatus === 'idle' && t('contact.send')}
                  {formStatus === 'sending' && (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                      {isFr ? 'Envoi en cours...' : 'Sending...'}
                    </>
                  )}
                  {formStatus === 'success' && (isFr ? '✓ Demande envoyée !' : '✓ Inquiry sent successfully!')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-24 border-t border-sapphire/5 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <div className="flex items-center gap-1.5">
              <span className="font-logo font-extrabold tracking-widest text-lg leading-none text-[#5C9E42]">ICPAF</span>
              <span className="font-logo font-extrabold tracking-widest text-lg leading-none text-[#2B7CBA]">WATER</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/40">
            <a href="#" className="hover:text-oxygen-blue transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-oxygen-blue transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-oxygen-blue transition-colors">{t('footer.compliance')}</a>
          </div>

          <div className="flex gap-8">
            <Twitter className="w-5 h-5 text-sapphire/40 hover:text-oxygen-blue cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-sapphire/40 hover:text-oxygen-blue cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-sapphire/40 hover:text-oxygen-blue cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="text-center mt-16 text-[10px] font-mono tracking-[0.6em] uppercase text-sapphire/20">
          {t('footer.copyright')}
        </div>
      </footer>
    </main>
  );
}


