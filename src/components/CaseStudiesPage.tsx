import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/case studies/olive mill.jpeg" 
            alt="Industrial Case Studies" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">Proven Results</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              Engineering in Action
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              Explore our portfolio of successful deployments. From massive desalination plants to complex textile dyeing wastewater recovery, our case studies demonstrate the tangible economic and environmental impact of ICPAF technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Case 1: Seawater Desalination */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Seawater Desalination RO Pretreatment</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Middle East Facility - 50,000 m³/day</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A major desalination plant in the Middle East was experiencing severe biofouling and rapid membrane degradation due to high levels of suspended solids and organics in the raw seawater intake. ICPAF engineered a comprehensive ultrafiltration (UF) pretreatment skid combined with a proprietary antiscalant dosing regimen.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Reduced Silt Density Index (SDI) from >5.0 to consistently <2.5",
                  "Extended RO membrane lifespan by 40%",
                  "Decreased chemical cleaning frequency (CIP) by 60%",
                  "Achieved a 15% reduction in overall energy consumption",
                  "Ensured uninterrupted plant operation during algal blooms"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('seawater-desalination-ro-pretreatment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/Sub main menu/sea water desalination.png" 
                alt="Desalination Plant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Case 2: Acid Liquid Purification */}
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Acid Liquid Purification</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">European Steel Manufacturing Plant</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A major European steel producer was facing escalating costs for the neutralization and disposal of spent pickling liquor (hydrochloric acid contaminated with iron salts). ICPAF designed a custom diffusion dialysis and nanofiltration system to separate the free acid from the metal salts.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Recovered up to 85% of free hydrochloric acid for reuse",
                  "Reduced hazardous waste disposal volumes by 75%",
                  "Lowered fresh acid purchasing costs significantly",
                  "Achieved ROI (Return on Investment) in under 18 months",
                  "Improved overall pickling process consistency"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('case-acid-liquid-purification');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Case 3: Textile Dyeing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Textile Dyeing Wastewater Treatment</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Southeast Asia Facility - Zero Liquid Discharge</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A large-scale textile manufacturer faced strict new environmental regulations regarding the discharge of highly colored, high-salinity dye wastewater. Traditional biological treatment was failing to meet color and COD limits. ICPAF implemented a multi-stage process utilizing advanced coagulation, ceramic ultrafiltration, and high-recovery nanofiltration.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Achieved 95% recovery of high-quality process water",
                  "Successfully separated and recovered brine for reuse in dyeing",
                  "Completely eliminated color discharge to the local river system",
                  "Reduced fresh water intake costs by over $1.2M annually",
                  "Ensured full compliance with Zero Liquid Discharge (ZLD) mandates"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('textile-dyeing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/Sub main menu/textile dyeing.webp" 
                alt="Textile Dyeing Facility" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Case 4: Cosmetic Industry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <img 
                src="/images/solutions/cosmetic water treatment.avif" 
                alt="Cosmetic Industry Wastewater" 
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Cosmetic Industry Wastewater Treatment</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Global Cosmetics Brand - France</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A leading cosmetics manufacturer in France was struggling with wastewater containing high concentrations of oils, surfactants, and complex emulsions. This effluent was overwhelming their local municipal treatment plant. ICPAF deployed a specialized Membrane Bioreactor (MBR) coupled with an advanced oxidation process (AOP).
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Achieved 99% emulsion breaking and oil removal",
                  "Reduced Chemical Oxygen Demand (COD) by over 95%",
                  "Eliminated municipal surcharges for high-strength waste",
                  "Automated system reduced operator intervention by 80%",
                  "Enabled partial reuse of treated water for cooling towers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('cosmetic-industry');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Case 5: Olive-mill */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Olive-mill Wastewater Treatment</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Mediterranean Olive Oil Producer</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A large cooperative in the Mediterranean region needed a solution for Olive Mill Wastewater (OMW), which is notoriously difficult to treat due to its high organic load and phytotoxic polyphenols. ICPAF designed an integrated membrane system utilizing ceramic ultrafiltration followed by polymeric reverse osmosis.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Successfully recovered valuable polyphenols for the cosmetics industry",
                  "Reduced wastewater volume by 80%, minimizing disposal costs",
                  "Produced clean water suitable for agricultural irrigation",
                  "Eliminated the environmental hazard of raw OMW discharge",
                  "Created a new revenue stream from recovered byproducts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('olive-mill');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/case studies/olive mill.jpeg" 
                alt="Olive-mill Wastewater" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Case 6: Acid-Lead Batteries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <img 
                src="/images/Main Menu/industrial purity.jpg" 
                alt="Acid-Lead Batteries Wastewater" 
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
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Acid-Lead Batteries</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Battery Recycling Facility - North America</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A major lead-acid battery recycling plant faced regulatory pressure due to trace lead and acid levels in their effluent. Their conventional precipitation system was inconsistent. ICPAF installed a robust Membrane Coagulation-Reactor (MCR) utilizing chemical-resistant tubular membranes.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Consistently reduced effluent lead concentrations to < 0.1 ppm",
                  "Recovered sulfuric acid for internal process reuse",
                  "Eliminated the risk of regulatory fines and plant shutdowns",
                  "Reduced sludge generation by 40% compared to previous methods",
                  "Provided a fully automated, operator-friendly system"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('acid-lead-batteries');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Case 7: Sodium Sulfate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Sodium Sulfate Water Treatment</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">Chemical Processing Plant</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                A chemical manufacturing facility was producing a high-volume effluent stream saturated with sodium sulfate. To meet environmental targets, they needed a ZLD solution. ICPAF designed a high-pressure reverse osmosis (High-Recovery RO) system coupled with an evaporator/crystallizer.
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">The Results</h4>
              <ul className="space-y-3 mb-10">
                {[
                  "Achieved true Zero Liquid Discharge (ZLD) status for the facility",
                  "Recovered 90% of the water as high-purity permeate for boiler feed",
                  "Crystallized high-purity sodium sulfate salt for commercial resale",
                  "Reduced thermal evaporation energy costs by pre-concentrating with RO",
                  "Future-proofed the plant against tightening environmental regulations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  onNavigate('sodium-sulfate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg"
              >
                Request Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/Main Menu/industrial purity.jpg" 
                alt="Sodium Sulfate Water Treatment" 
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
