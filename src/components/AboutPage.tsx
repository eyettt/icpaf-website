import React from 'react';
import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';
import { Target, Lightbulb, ShieldCheck, Factory, Beaker, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import missionVisionImg from '../../images/About us/mission and vision.png';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/About us/mission and vision.png" 
            alt="Modern Research Lab" 
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
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{t('about.hero.subtitle')}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-clinical-white mb-8 leading-[1.1] tracking-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-sapphire/80 font-light leading-relaxed">
              {t('about.hero.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-8 tracking-tight">{t('about.missionVision.title')}</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-oxygen-blue/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-oxygen-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-sapphire mb-3">{t('about.mission.title')}</h3>
                    <p className="text-sapphire/80 leading-relaxed font-light">
                      {t('about.mission.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-oxygen-blue/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-oxygen-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-sapphire mb-3">{t('about.vision.title')}</h3>
                    <p className="text-sapphire/80 leading-relaxed font-light">
                      {t('about.vision.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={missionVisionImg} 
                alt="Mission and Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-deep-sea/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-sapphire/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">{t('about.expertise.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">{t('about.expertise.title')}</h2>
            <p className="text-lg text-sapphire/70 font-light">
              {t('about.expertise.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Beaker className="w-8 h-8 text-oxygen-blue" />,
                title: t('about.expertise.chemical.title'),
                desc: t('about.expertise.chemical.desc')
              },
              {
                icon: <Factory className="w-8 h-8 text-oxygen-blue" />,
                title: t('about.expertise.process.title'),
                desc: t('about.expertise.process.desc')
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-oxygen-blue" />,
                title: t('about.expertise.quality.title'),
                desc: t('about.expertise.quality.desc')
              },
              {
                icon: <Leaf className="w-8 h-8 text-oxygen-blue" />,
                title: t('about.expertise.sustainable.title'),
                desc: t('about.expertise.sustainable.desc')
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-clinical-white p-10 rounded-3xl shadow-sm border border-sapphire/5 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-sapphire/5 flex items-center justify-center mb-8 group-hover:bg-oxygen-blue/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-sans font-bold text-sapphire mb-4">{item.title}</h3>
                <p className="text-sapphire/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
