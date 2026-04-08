
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';
import khaledImg from '../../images/About us/team/khaled.jpeg';
import azedineImg from '../../images/About us/team/azedine boutta.jpeg';

const leadersEn = [
  {
    name: 'Khaled Taieb',
    role: 'CEO & Chief Molecular Architect',
    bio: 'Pioneering in Water treatment and filtration for over 35 years.',
    image: khaledImg,
    linkedin: 'https://www.linkedin.com/in/khaled-taieb/',
    email: 'khaled.taieb@icpafwater.com'
  },
  {
    name: 'Azzedine Boutta',
    role: 'CEO & Founder of ICPAF',
    bio: 'Guiding ICPAF into the future of sustainable water treatment logistics and global deployment.',
    image: azedineImg,
    linkedin: 'https://www.linkedin.com/in/azzedine-boutta-636155237/',
    email: 'a.boutta@icpafwater.com'
  }
];

const leadersFr = [
  {
    name: 'Khaled Taieb',
    role: 'Architecte Moléculaire en Chef',
    bio: 'Pionnier dans le traitement et la filtration de l\'eau depuis plus de 35 ans.',
    image: khaledImg,
    linkedin: 'https://www.linkedin.com/in/khaled-taieb/',
    email: 'khaled.taieb@icpafwater.com'
  },
  {
    name: 'Azzedine Boutta',
    role: 'CEO & Fondateur de ICPAF',
    bio: 'Guidant ICPAF vers l\'avenir de la logistique du traitement durable de l\'eau et du déploiement mondial.',
    image: azedineImg,
    linkedin: 'https://www.linkedin.com/in/azzedine-boutta-636155237/',
    email: 'a.boutta@icpafwater.com'
  }
];

export default function TeamPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const leaders = isFr ? leadersFr : leadersEn;

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">{isFr ? 'L\'Équipe' : 'The Team'}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter text-sapphire">
            {isFr ? 'Les' : 'The'} <br />
            <span className="text-sapphire/20">{isFr ? 'Architectes.' : 'Architects.'}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden glass-panel border-none shadow-lg"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea via-deep-sea/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif mb-2 text-sapphire">{person.name}</h3>
                <p className="text-oxygen-blue text-xs font-mono tracking-widest uppercase mb-4">{person.role}</p>
                <p className="text-sapphire/60 text-sm font-light leading-relaxed mb-6">
                  {person.bio}
                </p>
                <div className="flex gap-4">
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noreferrer" className="relative z-20 hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-sapphire/60 hover:text-oxygen-blue cursor-pointer transition-colors" />
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="relative z-20 hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-sapphire/60 hover:text-oxygen-blue cursor-pointer transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              {/* Default Info */}
              <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <h3 className="text-xl font-serif text-sapphire">{person.name}</h3>
                <p className="text-oxygen-blue/60 text-[10px] font-mono tracking-widest uppercase">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
