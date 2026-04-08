import React from 'react';

export default function FiltrationSpectrumChart() {
  return (
    <section className="py-24 bg-sapphire/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-mono tracking-[0.5em] uppercase text-oxygen-blue mb-6 block font-bold">The Filtration Spectrum</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6 tracking-tight">Particle Size & Technology</h2>
          <p className="text-lg text-sapphire/70 font-light">
            Understanding the relationship between particle size and filtration technology is critical for designing effective separation systems. Our spectrum guide illustrates the precise operational range of each membrane technology.
          </p>
        </div>

        <div className="relative bg-clinical-white rounded-3xl p-8 md:p-12 shadow-xl border border-sapphire/10 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Scale Header */}
            <div className="flex justify-between text-xs font-mono text-sapphire/50 mb-4 px-4">
              <span>100 µm</span>
              <span>10 µm</span>
              <span>1 µm</span>
              <span>0.1 µm</span>
              <span>0.01 µm</span>
              <span>0.001 µm</span>
              <span>0.0001 µm</span>
            </div>

            {/* Grid Lines */}
            <div className="absolute top-[120px] bottom-12 left-8 right-8 flex justify-between pointer-events-none opacity-10">
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
              <div className="w-px h-full bg-sapphire"></div>
            </div>

            {/* Technologies */}
            <div className="space-y-6 relative z-10">
              {/* Particle Filtration */}
              <div className="flex items-center">
                <div className="w-48 shrink-0 font-sans font-bold text-sapphire">Particle Filtration</div>
                <div className="flex-1 relative h-12 bg-sapphire/5 rounded-r-full overflow-hidden">
                  <div className="absolute left-0 w-[30%] h-full bg-gray-400/80 rounded-r-full flex items-center px-4 text-xs font-bold text-white shadow-inner">
                    Sand, Hair, Pollen
                  </div>
                </div>
              </div>

              {/* Microfiltration */}
              <div className="flex items-center">
                <div className="w-48 shrink-0 font-sans font-bold text-sapphire">Microfiltration (MF)</div>
                <div className="flex-1 relative h-12 bg-sapphire/5 rounded-full overflow-hidden">
                  <div className="absolute left-[15%] w-[35%] h-full bg-oxygen-blue/60 rounded-full flex items-center px-4 text-xs font-bold text-white shadow-inner">
                    Bacteria, Suspended Solids
                  </div>
                </div>
              </div>

              {/* Ultrafiltration */}
              <div className="flex items-center">
                <div className="w-48 shrink-0 font-sans font-bold text-sapphire">Ultrafiltration (UF)</div>
                <div className="flex-1 relative h-12 bg-sapphire/5 rounded-full overflow-hidden">
                  <div className="absolute left-[40%] w-[30%] h-full bg-oxygen-blue/80 rounded-full flex items-center px-4 text-xs font-bold text-white shadow-inner">
                    Viruses, Proteins, Colloids
                  </div>
                </div>
              </div>

              {/* Nanofiltration */}
              <div className="flex items-center">
                <div className="w-48 shrink-0 font-sans font-bold text-sapphire">Nanofiltration (NF)</div>
                <div className="flex-1 relative h-12 bg-sapphire/5 rounded-full overflow-hidden">
                  <div className="absolute left-[60%] w-[25%] h-full bg-sapphire/80 rounded-full flex items-center px-4 text-xs font-bold text-white shadow-inner">
                    Pesticides, Multivalent Ions
                  </div>
                </div>
              </div>

              {/* Reverse Osmosis */}
              <div className="flex items-center">
                <div className="w-48 shrink-0 font-sans font-bold text-sapphire">Reverse Osmosis (RO)</div>
                <div className="flex-1 relative h-12 bg-sapphire/5 rounded-l-full overflow-hidden">
                  <div className="absolute left-[75%] w-[25%] h-full bg-sapphire rounded-l-full flex items-center px-4 text-xs font-bold text-white shadow-inner">
                    Metal Ions, Aqueous Salts
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scale Footer */}
            <div className="flex justify-between text-xs font-mono text-sapphire/50 mt-8 px-4">
              <span>Macroscopic</span>
              <span>Microscopic</span>
              <span>Macromolecular</span>
              <span>Molecular</span>
              <span>Ionic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
