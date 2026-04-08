import React, { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface DownloadButtonProps {
  isFr: boolean;
  textEn?: string;
  textFr?: string;
}

export default function DownloadButton({ isFr, textEn = 'Download Full Report', textFr = 'Télécharger le Rapport Complet' }: DownloadButtonProps) {
  const [status, setStatus] = useState<'idle' | 'error'>('idle');

  const handleClick = () => {
    setStatus('error');
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <button 
      onClick={handleClick}
      disabled={status === 'error'}
      className={`px-8 py-4 font-mono tracking-widest uppercase text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 rounded-full shadow-lg ${
        status === 'error' 
          ? 'bg-red-500/90 text-white cursor-not-allowed scale-[0.98]' 
          : 'bg-sapphire text-white hover:bg-oxygen-blue'
      }`}
    >
      {status === 'idle' ? (
        <>
          {isFr ? textFr : textEn} <ArrowRight className="w-4 h-4" />
        </>
      ) : (
        <motion.div
          initial={{ x: -5 }}
          animate={{ x: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4" />
          {isFr ? 'Fichier Indisponible' : 'File Unavailable'}
        </motion.div>
      )}
    </button>
  );
}
