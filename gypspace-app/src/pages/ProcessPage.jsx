import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden bg-navy-tech">
          <div className="absolute inset-0 opacity-20 pointer-events-none technical-grid" />
          <div className="absolute inset-0 z-0" />
          <div className="relative z-10 max-w-container-max mx-auto px-lg grid md:grid-cols-2 gap-xl items-center py-2xl">
            <div>
              <span className="inline-block px-md py-xs bg-cyan-tech/20 text-cyan-tech font-mono-utility text-mono-utility rounded-full mb-md uppercase tracking-widest border border-cyan-tech/30">
                Operational Workflow
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-lg leading-tight">
                The Art of Precision: <br />
                <span className="text-cyan-tech">Our Process</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-lg mb-xl">
                At Gypspace, we bridge the gap between architectural vision and technical reality. Our systematic workflow ensures every millimetre is accounted for, from the first CAD line to the final artisan polish.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link
                  to="/works"
                  className="bg-cyan-tech text-white px-lg py-md rounded-lg font-label-md flex items-center gap-sm hover:scale-[1.02] transition-transform"
                >
                  Our Works <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/specifications"
                  className="border border-slate-600 text-white px-lg py-md rounded-lg font-label-md hover:bg-white/10 transition-colors inline-flex items-center gap-sm"
                >
                  Technical Specs <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block group">
              <div className="absolute -inset-4 border border-cyan-tech/20 rounded-xl group-hover:border-cyan-tech/40 transition-colors duration-500" />
              <div className="relative rounded-lg overflow-hidden border border-outline-variant shadow-2xl">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  src="/process_hero.jpg"
                  alt="A macro close-up of a high-precision CNC milling machine carving intricate patterns into a block of dark walnut wood"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface p-md rounded-lg border border-outline-variant shadow-lg max-w-[200px]">
                <p className="font-mono-utility text-mono-utility text-navy-tech font-bold uppercase mb-1">Tolerance Rating</p>
                <p className="font-display-lg text-headline-sm text-cyan-tech">±0.05mm</p>
                <p className="text-[10px] text-outline font-mono-utility">Verified Production Standard</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps - Alternate Layout */}
        <section id="process-steps" className="py-2xl bg-surface relative">
          <div className="max-w-container-max mx-auto px-lg">
            {/* Step 1: Technical Drafting */}
            <div className="grid md:grid-cols-2 gap-2xl items-center mb-2xl">
              <div className="order-2 md:order-1">
                <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-sm group">
                  <img
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/process_step1.jpg"
                    alt="An architect's desk featuring a high-end dual-monitor setup displaying complex 3D wireframe models"
                  />
                  <div className="absolute top-md left-md bg-navy-tech text-white px-md py-xs rounded font-mono-utility">01 / STAGE</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-headline-md text-headline-md text-navy-tech mb-md">1. Technical Drafting</h3>
                <p className="font-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Every project begins in our Engineering Suite. We transform conceptual sketches into comprehensive 3D BIM models and high-fidelity shop drawings. Our draftsmen account for structural loads, electrical pathways, and thermal expansion long before material is cut.
                </p>
                <ul className="space-y-md">
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-cyan-tech mt-1">check_circle</span>
                    <div>
                      <span className="font-bold text-navy-tech block">BIM Integration</span>
                      <p className="text-body-sm text-outline">Full structural and MEP coordination to prevent site clashes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-cyan-tech mt-1">check_circle</span>
                    <div>
                      <span className="font-bold text-navy-tech block">Shop Drawing Packages</span>
                      <p className="text-body-sm text-outline">Millimetre-accurate construction sets for municipal approval.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Material Prototyping */}
            <div className="grid md:grid-cols-2 gap-2xl items-center mb-2xl">
              <div>
                <h3 className="font-headline-md text-headline-md text-navy-tech mb-md">2. Material Prototyping</h3>
                <p className="font-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Theory meets reality in our prototyping lab. We provide physical mock-ups and material samples curated from a global network of suppliers. This phase ensures that the tactile experience aligns perfectly with the visual intent.
                </p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="bg-surface-container-low p-md border border-outline-variant rounded">
                    <span className="material-symbols-outlined text-navy-tech mb-sm">layers</span>
                    <p className="font-label-md text-navy-tech">Material Sampling</p>
                  </div>
                  <div className="bg-surface-container-low p-md border border-outline-variant rounded">
                    <span className="material-symbols-outlined text-navy-tech mb-sm">architecture</span>
                    <p className="font-label-md text-navy-tech">1:1 Mock-ups</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-sm group">
                  <img
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/process_step2.jpg"
                    alt="A clean, industrial design lab showing various material samples like brushed brass, marble slabs, and custom acoustic panels"
                  />
                  <div className="absolute top-md right-md bg-navy-tech text-white px-md py-xs rounded font-mono-utility">02 / STAGE</div>
                </div>
              </div>
            </div>

            {/* Step 3: Precision Manufacturing */}
            <div className="grid md:grid-cols-2 gap-2xl items-center mb-2xl">
              <div className="order-2 md:order-1">
                <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-sm group">
                  <img
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/process_step3.jpg"
                    alt="The interior of a high-tech manufacturing facility with multiple large-scale CNC machines in operation"
                  />
                  <div className="absolute top-md left-md bg-navy-tech text-white px-md py-xs rounded font-mono-utility">03 / STAGE</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-headline-md text-headline-md text-navy-tech mb-md">3. Precision Manufacturing</h3>
                <p className="font-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Our fabrication facility utilizes advanced 5-axis CNC machinery and robotic assembly to achieve complexities impossible with hand-tooling alone. We blend this automation with master joinery techniques for a finish that is both technically perfect and soulfully crafted.
                </p>
                <div className="space-y-md">
                  <div className="p-md border-l-4 border-cyan-tech bg-surface-container">
                    <p className="font-label-md text-navy-tech italic">"Precision is not an accident; it is the result of intelligent effort."</p>
                  </div>
                  <p className="text-body-sm text-outline">Equipped with the latest in laser-cutting, CNC routing, and automated finishing systems.</p>
                </div>
              </div>
            </div>

            {/* Step 4: Quality Assurance */}
            <div className="grid md:grid-cols-2 gap-2xl items-center">
              <div>
                <h3 className="font-headline-md text-headline-md text-navy-tech mb-md">4. Quality Assurance</h3>
                <p className="font-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Rigorous inspection is our final act. Every component undergoes a 50-point technical audit, checking for structural integrity, finish consistency, and dimensional accuracy. Nothing leaves our facility unless it meets the Gypspace Standard.
                </p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-md py-sm border-b border-outline-variant">
                    <span className="font-mono-utility text-cyan-tech">01</span>
                    <span className="font-label-md text-on-surface">Dimensional Tolerance Audit</span>
                  </li>
                  <li className="flex items-center gap-md py-sm border-b border-outline-variant">
                    <span className="font-mono-utility text-cyan-tech">02</span>
                    <span className="font-label-md text-on-surface">Material Stress Testing</span>
                  </li>
                  <li className="flex items-center gap-md py-sm border-b border-outline-variant">
                    <span className="font-mono-utility text-cyan-tech">03</span>
                    <span className="font-label-md text-on-surface">Artisan Hand-Finishing</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-sm group">
                  <img
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/process_step4.jpg"
                    alt="A close-up of a master artisan's hands wearing white gloves, using a high-precision caliper"
                  />
                  <div className="absolute top-md right-md bg-navy-tech text-white px-md py-xs rounded font-mono-utility">04 / STAGE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl bg-navy-tech text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" />
          <div className="max-w-container-max mx-auto px-lg relative z-10 text-center">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-md">
              Ready to Build with <span className="text-cyan-tech">Precision?</span>
            </h2>
            <p className="font-body-lg text-slate-300 max-w-2xl mx-auto mb-xl">
              Bring your most complex architectural challenges to our engineering team. We deliver solutions where others find impossibilities.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-md">
              <button className="bg-cyan-tech text-white px-xl py-lg rounded font-label-md hover:brightness-110 transition-all text-lg shadow-lg">
                Start Your Project
              </button>
              <button className="bg-transparent border border-white/30 text-white px-xl py-lg rounded font-label-md hover:bg-white/10 transition-all text-lg">
                Download Capabilities Deck
              </button>
            </div>
          </div>
        </section>

        {/* Technical Stats Section */}
        <section className="py-xl bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
              <div className="text-center">
                <p className="font-mono-utility text-cyan-tech uppercase text-xs mb-1">Success Rate</p>
                <p className="font-display-lg text-headline-md text-navy-tech">99.8%</p>
                <p className="text-body-sm text-outline">On-time Delivery</p>
              </div>
              <div className="text-center">
                <p className="font-mono-utility text-cyan-tech uppercase text-xs mb-1">Precision</p>
                <p className="font-display-lg text-headline-md text-navy-tech">50µm</p>
                <p className="text-body-sm text-outline">Cutting Tolerance</p>
              </div>
              <div className="text-center">
                <p className="font-mono-utility text-cyan-tech uppercase text-xs mb-1">Capacity</p>
                <p className="font-display-lg text-headline-md text-navy-tech">12k+</p>
                <p className="text-body-sm text-outline">SqFt Weekly Fab</p>
              </div>
              <div className="text-center">
                <p className="font-mono-utility text-cyan-tech uppercase text-xs mb-1">Engineers</p>
                <p className="font-display-lg text-headline-md text-navy-tech">24/7</p>
                <p className="text-body-sm text-outline">Technical Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProcessPage