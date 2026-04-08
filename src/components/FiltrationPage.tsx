import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';
import FiltrationSpectrumChart from './FiltrationSpectrumChart';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadButton from './DownloadButton';

export default function FiltrationPage() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Filtration/nano filtration.jpg" 
            alt="Advanced Filtration Systems" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{t('filtration.hero.subtitle')}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {t('filtration.hero.title')}
            </h1>
            <p className="text-xl text-clinical-white/80 font-light leading-relaxed">
              {t('filtration.hero.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      <FiltrationSpectrumChart />

      {/* Content Section */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{t('filtration.micro.title')}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{t('filtration.micro.subtitle')}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {t('filtration.micro.desc')}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{t('filtration.keyApplications')}</h4>
              <ul className="space-y-3 mb-10">
                {[
                  t('filtration.micro.app1'),
                  t('filtration.micro.app2'),
                  t('filtration.micro.app3'),
                  t('filtration.micro.app4'),
                  t('filtration.micro.app5')
                ].map((item, i) => (
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
                src="/images/Filtration/micro filtration.jpg" 
                alt="Microfiltration Systems" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxygen-blue/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <img 
                src="/images/Filtration/nano filtration.jpg" 
                alt="Ultrafiltration Plant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-deep-sea/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{t('filtration.ultra.title')}</h2>
              <h3 className="text-xl font-sans font-bold text-oxygen-blue mb-6">{t('filtration.ultra.subtitle')}</h3>
              <p className="text-lg text-sapphire/80 leading-relaxed font-light mb-8">
                {t('filtration.ultra.desc')}
              </p>
              
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-sapphire mb-4 font-bold">{t('filtration.keyApplications')}</h4>
              <ul className="space-y-3 mb-10">
                {[
                  t('filtration.ultra.app1'),
                  t('filtration.ultra.app2'),
                  t('filtration.ultra.app3'),
                  t('filtration.ultra.app4'),
                  t('filtration.ultra.app5')
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-oxygen-blue shrink-0 mt-0.5" />
                    <span className="text-sapphire/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
