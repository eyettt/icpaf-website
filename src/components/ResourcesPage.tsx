import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Download, BookOpen, Filter } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useTranslation } from 'react-i18next';

const resourcesEn = [
  {
    title: 'Advanced RO Membrane Optimization Whitepaper',
    category: 'Technical',
    date: 'Feb 2026',
    size: '4.2 MB'
  },
  {
    title: 'Industrial Water Reclamation Standards',
    category: 'Compliance',
    date: 'Jan 2026',
    size: '1.8 MB'
  },
  {
    title: 'AI Dosing Logic: Efficiency Report',
    category: 'Case Study',
    date: 'Dec 2025',
    size: '2.5 MB'
  },
  {
    title: 'Global Water Scarcity Outlook 2030',
    category: 'Research',
    date: 'Nov 2025',
    size: '5.1 MB'
  },
  {
    title: 'Sterile Systems Maintenance Guide',
    category: 'Technical',
    date: 'Oct 2025',
    size: '3.3 MB'
  }
];

const resourcesFr = [
  {
    title: "Livre Blanc sur l'Optimisation des Membranes OI",
    category: 'Technique',
    date: 'Fév 2026',
    size: '4.2 Mo'
  },
  {
    title: 'Normes de Récupération des Eaux Industrielles',
    category: 'Conformité',
    date: 'Jan 2026',
    size: '1.8 Mo'
  },
  {
    title: 'Logique de Dosage IA : Rapport d\'Efficacité',
    category: 'Étude de Cas',
    date: 'Déc 2025',
    size: '2.5 Mo'
  },
  {
    title: 'Perspectives Mondiales sur la Pénurie d\'Eau 2030',
    category: 'Recherche',
    date: 'Nov 2025',
    size: '5.1 Mo'
  },
  {
    title: 'Guide d\'Entretien des Systèmes Stériles',
    category: 'Technique',
    date: 'Oct 2025',
    size: '3.3 Mo'
  }
];

export default function ResourcesPage() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const resources = isFr ? resourcesFr : resourcesEn;
  const [search, setSearch] = useState('');

  const filtered = resources.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">{isFr ? 'Centre de Ressources' : 'Resource Center'}</span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none tracking-tighter text-sapphire">
            {isFr ? 'Bibliothèque' : 'Technical'} <br />
            <span className="text-sapphire/20">{isFr ? 'Technique.' : 'Library.'}</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-sapphire/20" />
            <input
              type="text"
              placeholder={isFr ? "Rechercher des données techniques..." : "Search technical data..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-sapphire/5 border border-sapphire/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-oxygen-blue/50 transition-all font-sans text-sapphire"
            />
          </div>
          <button className="glass px-8 py-5 rounded-2xl flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-sapphire/60 hover:text-oxygen-blue transition-colors">
            <Filter className="w-4 h-4" /> {isFr ? 'Filtrer' : 'Filter'}
          </button>
        </div>

        <div className="space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-8 flex flex-col md:flex-row md:items-center justify-between group hover:bg-sapphire/5 transition-all duration-500"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="p-4 bg-oxygen-blue/10 rounded-xl group-hover:bg-oxygen-blue group-hover:text-deep-sea transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1 text-sapphire">{item.title}</h3>
                  <div className="flex gap-4 text-[10px] font-mono tracking-widest uppercase text-sapphire/30">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-[10px] font-mono tracking-widest uppercase text-sapphire/20">{item.size}</span>
                <button className="p-4 glass rounded-xl hover:bg-oxygen-blue hover:text-deep-sea transition-all">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32 glass-panel">
            <BookOpen className="w-16 h-16 text-sapphire/10 mx-auto mb-8" />
            <p className="text-sapphire/40 font-serif italic text-2xl">{isFr ? 'Aucun document ne correspond à vos critères de recherche.' : 'No documents match your search criteria.'}</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
