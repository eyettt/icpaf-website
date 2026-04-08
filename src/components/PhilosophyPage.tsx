import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Shield, Zap, Globe } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';

export default function PhilosophyPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">{isFr ? 'La Méthode ICPAF' : 'The ICPAF Method'}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.85] tracking-tighter mb-12 text-sapphire">
            {isFr ? 'Le Luxe de' : 'The Luxury of'} <br />
            <span className="text-sapphire/20">{isFr ? "l'Eau Pure." : 'Pure Water.'}</span>
          </h1>
          <p className="text-2xl font-light text-sapphire/80 max-w-3xl leading-relaxed">
            {isFr ? 'Nous croyons que l\'eau n\'est pas seulement une commodité, mais un chef-d\'œuvre d\'ingénierie moléculaire. Notre philosophie est centrée sur l\'intersection de la pureté absolue et de l\'efficacité industrielle.' : 'We believe that water is not just a utility, but a masterpiece of molecular engineering. Our philosophy centers on the intersection of absolute purity and industrial efficiency.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(isFr ? [
            {
              title: 'Intégrité Moléculaire',
              desc: 'Nous traitons chaque goutte comme une signature chimique unique, garantissant que le résultat final dépasse les normes de sécurité mondiales.',
              icon: Droplets
            },
            {
              title: 'Précision Stérile',
              desc: 'Nos environnements de qualité laboratoire garantissent qu\'aucun contaminant externe ne compromette jamais le cycle de purification.',
              icon: Shield
            },
            {
              title: 'Efficacité Cinétique',
              desc: 'En optimisant le flux d\'énergie, nous réduisons l\'empreinte carbone du traitement de l\'eau à grand volume de 40 %.',
              icon: Zap
            },
            {
              title: 'Gérance Mondiale',
              desc: 'ICPAF s\'engage à restaurer le cycle naturel de l\'eau grâce à des technologies avancées de récupération et de réutilisation.',
              icon: Globe
            }
          ] : [
            {
              title: 'Molecular Integrity',
              desc: 'We treat every drop as a unique chemical signature, ensuring that the final output exceeds global safety standards.',
              icon: Droplets
            },
            {
              title: 'Sterile Precision',
              desc: 'Our laboratory-grade environments ensure that no external contaminants ever compromise the purification cycle.',
              icon: Shield
            },
            {
              title: 'Kinetic Efficiency',
              desc: 'By optimizing the flow of energy, we reduce the carbon footprint of high-volume water treatment by 40%.',
              icon: Zap
            },
            {
              title: 'Global Stewardship',
              desc: 'ICPAF is committed to restoring the natural water cycle through advanced reclamation and reuse technologies.',
              icon: Globe
            }
          ]).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-12 group hover:bg-sapphire/5 transition-all duration-700 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-oxygen-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-oxygen-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-oxygen-blue group-hover:text-deep-sea transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-oxygen-blue transition-colors text-sapphire">{item.title}</h3>
                <p className="text-sapphire/60 leading-relaxed font-light text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 glass-panel p-12 md:p-24 relative overflow-hidden border-sapphire/10">
          <div className="absolute inset-0 caustic-layer opacity-10" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 text-sapphire">{isFr ? 'Concevoir un monde où l\'eau n\'est jamais une contrainte.' : 'Engineering a world where water is never a constraint.'}</h2>
            <p className="text-sapphire/40 font-mono tracking-widest uppercase text-xs">{isFr ? 'Établi en 2024 • ICPAF Global' : 'Established 2024 • ICPAF Global'}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
