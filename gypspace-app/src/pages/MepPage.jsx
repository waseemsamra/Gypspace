import React, { useEffect } from 'react'

const MepPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative bg-on-primary-fixed overflow-hidden min-h-[716px] flex items-center">
          <div className="absolute inset-0 opacity-20 blueprint-pattern pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed via-on-primary-fixed/80 to-transparent z-10" />
          <div className="relative z-20 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center py-2xl">
            <div>
              <span className="inline-flex items-center gap-2 bg-technical-cyan/10 text-technical-cyan px-3 py-1 rounded-full font-label-md text-label-md mb-md">
                <span className="w-2 h-2 rounded-full bg-technical-cyan animate-pulse" />
                Engineering Excellence
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md max-w-xl">
                Precision M.E.P Engineering
              </h1>
              <p className="font-body-lg text-body-lg text-secondary-fixed-dim mb-xl max-w-lg">
                Integrated Mechanical, Electrical, and Plumbing solutions engineered for performance, sustainability, and life-cycle efficiency in complex commercial environments.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="bg-technical-cyan text-white px-xl py-md font-label-md text-label-md rounded flex items-center gap-2 hover:brightness-110 transition-all">
                  Consult an Expert <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="border border-white/20 text-white px-xl py-md font-label-md text-label-md rounded hover:bg-white/10 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-technical-cyan/20 blur-3xl rounded-full opacity-50" />
              <div className="relative bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl aspect-[4/3] border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  src="/mep_hvac.jpg"
                  alt="A high-tech, wide-angle photograph of a massive commercial HVAC plant room"
                />
                <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md p-md border-l-4 border-technical-cyan text-white max-w-xs">
                  <p className="font-label-md text-label-md opacity-70 mb-1">CURRENT PROJECT</p>
                  <p className="font-headline-sm text-headline-sm">Data Center Delta-9 Cooling Phase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-2xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-xl max-w-2xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">Core Disciplines</h2>
              <p className="font-body-md text-body-md text-secondary">Specialized engineering services tailored to modern architectural demands and rigorous safety protocols.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
              {/* HVAC */}
              <div className="md:col-span-8 bg-white border border-outline-variant p-xl rounded-xl flex flex-col md:flex-row gap-xl hover:border-technical-cyan transition-colors group">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-technical-cyan text-4xl mb-md">hvac</span>
                  <h3 className="font-headline-sm text-headline-sm mb-md">HVAC Systems</h3>
                  <p className="font-body-md text-body-md text-secondary mb-md">Advanced climate control, VRF systems, and high-efficiency ventilation engineered for optimal air quality and thermal comfort.</p>
                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Centralized Chilled Water Plants</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Precision Cooling for IT Infrastructure</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Energy Recovery Ventilation (ERV)</li>
                  </ul>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden bg-surface-container h-64 md:h-auto border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="/mep_hvac.jpg"
                    alt="A detailed technical diagram overlaying a photo of high-performance ventilation ducting"
                  />
                </div>
              </div>

              {/* Electrical */}
              <div className="md:col-span-4 bg-white border border-outline-variant p-xl rounded-xl hover:border-technical-cyan transition-colors">
                <span className="material-symbols-outlined text-technical-cyan text-4xl mb-md">bolt</span>
                <h3 className="font-headline-sm text-headline-sm mb-md">Electrical Power</h3>
                <p className="font-body-md text-body-md text-secondary mb-md">Reliable distribution systems, backup power, and intelligent lighting control.</p>
                <div className="mt-auto pt-md border-t border-outline-variant">
                  <span className="font-mono-utility text-mono-utility text-technical-cyan">01 / LV & MV NETWORKS</span>
                </div>
              </div>

              {/* Plumbing */}
              <div className="md:col-span-4 bg-on-primary-fixed text-white p-xl rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 blueprint-pattern opacity-10" />
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-technical-cyan text-4xl mb-md">water_drop</span>
                  <h3 className="font-headline-sm text-headline-sm mb-md">Plumbing & Drainage</h3>
                  <p className="text-on-primary-container text-body-md mb-md">High-pressure water distribution and sustainable waste management systems.</p>
                  <a className="inline-flex items-center gap-2 text-technical-cyan font-label-md text-label-md" href="#">View Specs <span className="material-symbols-outlined text-sm">open_in_new</span></a>
                </div>
              </div>

              {/* Fire Safety */}
              <div className="md:col-span-8 bg-white border border-outline-variant p-xl rounded-xl flex flex-col md:flex-row gap-xl hover:border-technical-cyan transition-colors">
                <div className="flex-1 order-2 md:order-1 rounded-lg overflow-hidden bg-surface-container h-64 md:h-auto">
                  <img
                    className="w-full h-full object-cover"
                    src="/mep_fire_safety.jpg"
                    alt="A close-up shot of a professional fire suppression system control panel"
                  />
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <span className="material-symbols-outlined text-error text-4xl mb-md">fire_extinguisher</span>
                  <h3 className="font-headline-sm text-headline-sm mb-md">Life Safety</h3>
                  <p className="font-body-md text-body-md text-secondary mb-md">Comprehensive fire alarm and automatic sprinkler systems integrated with building management software for 24/7 protection.</p>
                  <div className="grid grid-cols-2 gap-sm">
                    <div className="bg-surface-container p-sm rounded border border-outline-variant text-center">
                      <span className="block font-headline-sm text-headline-sm">0.2s</span>
                      <span className="text-[10px] uppercase tracking-wider text-secondary">Response Time</span>
                    </div>
                    <div className="bg-surface-container p-sm rounded border border-outline-variant text-center">
                      <span className="block font-headline-sm text-headline-sm">100%</span>
                      <span className="text-[10px] uppercase tracking-wider text-secondary">Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages Section */}
        <section className="py-2xl bg-surface-container-low technical-grid-overlay relative">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col lg:flex-row items-center gap-2xl">
              <div className="lg:w-1/2">
                <h2 className="font-display-lg text-display-lg text-primary mb-xl">The Gypspace Advantage</h2>
                <div className="space-y-xl">
                  <div className="flex gap-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-outline-variant rounded flex items-center justify-center text-technical-cyan shadow-sm">
                      <span className="material-symbols-outlined">settings_input_component</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-sm text-primary">Total System Integration</h4>
                      <p className="font-body-md text-body-md text-secondary">We don't just install parts; we engineer ecosystems. Our BIM-led approach ensures that Mechanical, Electrical, and Plumbing systems work in perfect synchronization with the building's architecture.</p>
                    </div>
                  </div>
                  <div className="flex gap-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-outline-variant rounded flex items-center justify-center text-technical-cyan shadow-sm">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-sm text-primary">Energy Efficiency Standards</h4>
                      <p className="font-body-md text-body-md text-secondary">Every M.E.P design is optimized for LEED and regional sustainability certifications, significantly reducing operational costs and carbon footprint through smart automation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-technical-cyan/5 rounded-full blur-3xl" />
                <div className="bg-white p-gutter border border-outline-variant shadow-xl rounded-xl relative z-10">
                  <div className="mb-md flex items-center justify-between">
                    <span className="font-mono-utility text-mono-utility text-secondary">REAL-TIME PERFORMANCE MONITORING</span>
                    <span className="material-symbols-outlined text-technical-cyan">monitoring</span>
                  </div>
                  <div className="h-64 bg-surface-container rounded border border-outline-variant overflow-hidden flex items-end p-md gap-2">
                    <div className="flex-1 bg-technical-cyan/20 h-1/2 rounded-t-sm hover:h-2/3 transition-all" />
                    <div className="flex-1 bg-technical-cyan/40 h-2/3 rounded-t-sm hover:h-3/4 transition-all" />
                    <div className="flex-1 bg-technical-cyan h-3/4 rounded-t-sm hover:h-full transition-all" />
                    <div className="flex-1 bg-technical-cyan/60 h-1/2 rounded-t-sm hover:h-2/3 transition-all" />
                    <div className="flex-1 bg-technical-cyan/30 h-1/3 rounded-t-sm hover:h-1/2 transition-all" />
                    <div className="flex-1 bg-technical-cyan h-2/3 rounded-t-sm hover:h-full transition-all" />
                  </div>
                  <div className="mt-md grid grid-cols-3 gap-md">
                    <div className="text-center">
                      <span className="block font-mono-utility text-mono-utility font-bold text-primary">32%</span>
                      <span className="text-[10px] text-secondary">SAVINGS</span>
                    </div>
                    <div className="text-center border-x border-outline-variant">
                      <span className="block font-mono-utility text-mono-utility font-bold text-primary">99.9%</span>
                      <span className="text-[10px] text-secondary">UPTIME</span>
                    </div>
                    <div className="text-center">
                      <span className="block font-mono-utility text-mono-utility font-bold text-primary">Zero</span>
                      <span className="text-[10px] text-secondary">LEAKS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="py-2xl bg-on-background">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-white mb-sm">Case Study</h2>
                <p className="font-body-md text-body-md text-surface-variant">See how we solved complex engineering challenges for the Financial District HQ.</p>
              </div>
              <a className="text-technical-cyan hover:underline font-label-md text-label-md flex items-center gap-1" href="#">View Full Portfolio <span className="material-symbols-outlined">chevron_right</span></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="/mep_case_study.jpg"
                  alt="A professional architectural photograph of a sleek, glass-walled skyscraper lobby at night"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-technical-cyan text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 inline-block">COMMERCIAL</span>
                  <h4 className="text-white font-headline-sm text-headline-sm">Financial District Tower A</h4>
                </div>
              </div>
              <div className="text-white">
                <div className="mb-lg">
                  <h5 className="text-technical-cyan font-label-md text-label-md mb-2 uppercase tracking-widest">The Challenge</h5>
                  <p className="font-body-md text-body-md text-surface-variant italic">"Integrating a Tier-4 Data Center cooling system into an existing 20-year-old structural frame without disrupting tenant operations."</p>
                </div>
                <div className="grid grid-cols-2 gap-lg">
                  <div>
                    <h6 className="font-label-md text-label-md text-white mb-1">Duration</h6>
                    <p className="font-body-sm text-body-sm text-surface-variant">14 Months</p>
                  </div>
                  <div>
                    <h6 className="font-label-md text-label-md text-white mb-1">HVAC Load</h6>
                    <p className="font-body-sm text-body-sm text-surface-variant">1,200 Tons</p>
                  </div>
                  <div className="col-span-2">
                    <h6 className="font-label-md text-label-md text-white mb-2">Scope of Work</h6>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white text-[11px] rounded">Electrical Grid Redesign</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-[11px] rounded">Wet-pipe Fire Sprinklers</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-[11px] rounded">BMS Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl bg-technical-cyan relative overflow-hidden">
          <div className="absolute inset-0 blueprint-pattern opacity-10 pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-display-lg text-display-lg text-white mb-md">Ready to optimize your infrastructure?</h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-xl max-w-2xl mx-auto">Get a technical audit and a comprehensive M.E.P proposal for your next project.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <button className="bg-primary text-white px-xl py-md font-label-md text-label-md rounded-lg shadow-lg hover:-translate-y-1 transition-all">Request a Technical Audit</button>
              <button className="bg-white/10 text-white border border-white/30 backdrop-blur-sm px-xl py-md font-label-md text-label-md rounded-lg hover:bg-white/20 transition-all">Contact Engineering Team</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MepPage