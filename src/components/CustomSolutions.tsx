import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail } from 'lucide-react';
import PageWrapper from './PageWrapper';

export default function CustomSolutions() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block">Curated Solutions</span>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.85] tracking-tighter mb-8 text-sapphire">
            Engineered for <br />
            <span className="text-sapphire/20">your exact needs.</span>
          </h1>
          <p className="text-xl font-light text-sapphire/60 max-w-2xl leading-relaxed">
            Every water treatment challenge is unique. Provide us with your specific parameters, and our engineering team will design a customized solution utilizing our advanced ICPAF catalog.
          </p>
        </motion.div>

        {/* Detailed Requirements Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-sapphire/5 border border-sapphire/10 rounded-[2rem] p-8 md:p-12 mb-24"
        >
          <h2 className="text-2xl font-serif text-sapphire mb-8">Detailed Requirements</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Application / Industry</label>
              <input 
                type="text" 
                className="w-full bg-white/50 border border-sapphire/10 rounded-xl px-4 py-4 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire" 
                placeholder="e.g., Municipal Wastewater, Food & Beverage" 
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Flow Rate (m³/h)</label>
              <input 
                type="text" 
                className="w-full bg-white/50 border border-sapphire/10 rounded-xl px-4 py-4 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire" 
                placeholder="e.g., 500 m³/h" 
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Target Contaminants</label>
              <input 
                type="text" 
                className="w-full bg-white/50 border border-sapphire/10 rounded-xl px-4 py-4 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire" 
                placeholder="e.g., Iron, Manganese, High BOD, Silica" 
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Custom Requests / Additional Details</label>
              <textarea 
                rows={5}
                className="w-full bg-white/50 border border-sapphire/10 rounded-xl px-4 py-4 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire resize-none" 
                placeholder="Describe any specific constraints, current system setup, or desired outcomes..." 
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button className="w-full md:w-auto px-12 py-5 bg-sapphire text-clinical-white font-mono tracking-[0.4em] uppercase text-xs hover:bg-sapphire/90 transition-all rounded-xl flex items-center justify-center gap-3">
                Submit Requirements <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-sapphire/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-oxygen-blue" />
          </div>
          <h2 className="text-3xl font-serif text-sapphire mb-4">Prefer a direct approach?</h2>
          <p className="text-sapphire/60 font-light mb-10">Send us a quick message and our team will get back to you shortly.</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-sapphire/20 py-3 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire" 
                  placeholder="Your Name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-sapphire/20 py-3 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-sapphire/60">Message</label>
              <textarea 
                rows={3}
                className="w-full bg-transparent border-b border-sapphire/20 py-3 focus:outline-none focus:border-oxygen-blue transition-colors font-sans text-sapphire resize-none" 
                placeholder="How can we help you?" 
              />
            </div>
            <button className="w-full py-4 bg-transparent border border-sapphire text-sapphire font-mono tracking-[0.4em] uppercase text-xs hover:bg-sapphire hover:text-clinical-white transition-all rounded-xl">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
