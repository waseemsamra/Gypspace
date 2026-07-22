import React, { useEffect } from 'react'

const CivilPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent z-10" />
            <img
              className="w-full h-full object-cover"
              src="/civil_hero.jpg"
              alt="A large scale construction site at dusk showing the massive steel reinforcement grid for a foundational structural base"
            />
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative z-20 w-full">
            <div className="max-w-2xl text-surface">
              <div className="inline-flex items-center gap-xs bg-white/10 backdrop-blur-md px-sm py-xs rounded mb-md border border-white/20">
                <span className="material-symbols-outlined text-[18px]">architecture</span>
                <span className="font-label-md text-label-md tracking-widest uppercase">Expertise & Precision</span>
              </div>
              <h1 className="font-display-lg text-display-lg mb-md leading-tight">Structural Engineering & Civil Excellence</h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-lg mb-xl opacity-90">
                Foundation-level integrity for modern landscapes. We provide technical depth and professional execution in complex civil infrastructures.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="bg-surface text-primary px-lg py-md rounded-lg font-label-md text-label-md flex items-center gap-sm hover:bg-white transition-all shadow-lg">
                  Download Capabilities
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="border border-surface text-surface px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-2xl bg-background">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">Core Disciplines</h2>
                <p className="font-body-md text-body-md text-secondary">Our civil division specializes in the structural backbone of construction, ensuring every project is built on a foundation of safety and technical mastery.</p>
              </div>
              <div className="flex gap-sm">
                <div className="w-12 h-1 bg-primary" />
                <div className="w-12 h-1 bg-outline-variant" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
              {/* Large Main Card */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between bento-card relative overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary mb-md scale-150">foundation</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Structural Modifications</h3>
                  <p className="font-body-md text-body-md text-secondary max-w-md">Precision engineering for existing structures, including load-bearing alterations, seismic retrofitting, and core strengthening.</p>
                </div>
                <div className="mt-lg relative z-10">
                  <ul className="grid grid-cols-2 gap-sm text-body-sm text-secondary">
                    <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Load Calculation</li>
                    <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Reinforcement</li>
                    <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Steel Fabrication</li>
                    <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Dynamic Testing</li>
                  </ul>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
                  <img
                    className="w-full h-full object-cover grayscale"
                    src="/civil_blueprint.jpg"
                    alt="Technical blueprint overlay of structural beams and pillars"
                  />
                </div>
              </div>

              {/* Side Card 1 */}
              <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between bento-card">
                <div>
                  <span className="material-symbols-outlined mb-md">water_damage</span>
                  <h3 className="font-headline-sm text-headline-sm mb-xs">Waterproofing</h3>
                  <p className="font-body-sm text-body-sm opacity-80">Comprehensive moisture protection systems for basements, roofs, and sub-structures using advanced membrane technologies.</p>
                </div>
                <a className="mt-xl inline-flex items-center gap-xs font-label-md text-label-md group" href="#">
                  Technical Specs <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>

              {/* Bottom Card 1 */}
              <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-secondary mb-md">layers</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Concrete Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Formwork, casting, and finishing for industrial-grade concrete foundations and structural elements.</p>
              </div>

              {/* Bottom Card 2 */}
              <div className="md:col-span-4 bg-surface-container-high border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-secondary mb-md">elevation</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Renovations & Extensions</h3>
                <p className="font-body-sm text-body-sm text-secondary">Expanding operational capacity through seamless structural extensions and modernized renovations.</p>
              </div>

              {/* Bottom Card 3 */}
              <div className="md:col-span-4 bg-surface-container-highest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-secondary mb-md">park</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">External Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Hard landscaping, drainage systems, and civil infrastructure for external site developments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-on-background py-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-gutter opacity-10">
            <span className="material-symbols-outlined text-[300px] text-surface">shield_with_heart</span>
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-xl">
              <div className="md:w-1/2">
                <h2 className="font-headline-md text-headline-md text-surface mb-md">Safety, Compliance, and Structural Integrity.</h2>
                <p className="font-body-lg text-body-lg text-surface-variant mb-xl opacity-80">
                  Our "Expert Partner" philosophy means zero compromise on the fundamentals. Every civil project is vetted against rigorous structural standards to ensure long-term stability and safety.
                </p>
                <div className="space-y-md">
                  <div className="flex items-start gap-md">
                    <div className="bg-primary-container p-sm rounded border border-outline-variant">
                      <span className="material-symbols-outlined text-tertiary-fixed">verified</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-[18px] text-surface mb-base">Rigorous Compliance</h4>
                      <p className="font-body-sm text-body-sm text-surface-variant">Adherence to all local and international building codes with complete documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <div className="bg-primary-container p-sm rounded border border-outline-variant">
                      <span className="material-symbols-outlined text-tertiary-fixed">health_and_safety</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-[18px] text-surface mb-base">HSE Leadership</h4>
                      <p className="font-body-sm text-body-sm text-surface-variant">Zero-incident goal through continuous training and strict site safety management protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-md">
                <div className="bg-white/5 border border-white/10 p-lg rounded-xl backdrop-blur-sm">
                  <div className="font-mono-utility text-mono-utility text-tertiary-fixed mb-xs">ISO 9001:2015</div>
                  <div className="text-[36px] font-bold text-surface mb-xs">100%</div>
                  <div className="font-label-md text-label-md text-surface-variant">Quality Compliance</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-lg rounded-xl backdrop-blur-sm">
                  <div className="font-mono-utility text-mono-utility text-tertiary-fixed mb-xs">Safety Rating</div>
                  <div className="text-[36px] font-bold text-surface mb-xs">A+</div>
                  <div className="font-label-md text-label-md text-surface-variant">HSE Excellence</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-lg rounded-xl backdrop-blur-sm">
                  <div className="font-mono-utility text-mono-utility text-tertiary-fixed mb-xs">Experience</div>
                  <div className="text-[36px] font-bold text-surface mb-xs">15+</div>
                  <div className="font-label-md text-label-md text-surface-variant">Years Industry Depth</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-lg rounded-xl backdrop-blur-sm">
                  <div className="font-mono-utility text-mono-utility text-tertiary-fixed mb-xs">Liability</div>
                  <div className="text-[36px] font-bold text-surface mb-xs">$10M</div>
                  <div className="font-label-md text-label-md text-surface-variant">Insurance Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Table */}
        <section className="py-2xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">Technical Specifications</h2>
              <p className="font-body-md text-body-md text-secondary">Precision metrics and standardized excellence across our operations.</p>
            </div>
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-lg py-md font-label-md text-label-md text-primary uppercase">Parameter</th>
                    <th className="px-lg py-md font-label-md text-label-md text-primary uppercase">Standard Requirement</th>
                    <th className="px-lg py-md font-label-md text-label-md text-primary uppercase">Gypspace Benchmark</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md">
                  <tr className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                    <td className="px-lg py-md font-semibold text-primary">Concrete Compressive Strength</td>
                    <td className="px-lg py-md font-mono-utility text-mono-utility">C30/37 BS EN 206</td>
                    <td className="px-lg py-md text-on-tertiary-container font-semibold">Exceeds +15% Variance</td>
                  </tr>
                  <tr className="bg-surface-container-low border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                    <td className="px-lg py-md font-semibold text-primary">Waterproofing Membrane</td>
                    <td className="px-lg py-md font-mono-utility text-mono-utility">ASTM D412 / D4541</td>
                    <td className="px-lg py-md text-on-tertiary-container font-semibold">Dual-Layer Multi-Stage</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                    <td className="px-lg py-md font-semibold text-primary">Steel Reinforcement Grade</td>
                    <td className="px-lg py-md font-mono-utility text-mono-utility">Grade 500B / BS 4449</td>
                    <td className="px-lg py-md text-on-tertiary-container font-semibold">High-Ductility Certified</td>
                  </tr>
                  <tr className="bg-surface-container-low border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                    <td className="px-lg py-md font-semibold text-primary">HSE Site Protocols</td>
                    <td className="px-lg py-md font-mono-utility text-mono-utility">ISO 45001:2018</td>
                    <td className="px-lg py-md text-on-tertiary-container font-semibold">Full Internal Audit Weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-2xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-secondary-container rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-on-secondary-fixed mb-sm">Ready to begin your structural journey?</h2>
                <p className="font-body-md text-body-md text-on-secondary-fixed-variant">Consult with our civil engineering experts for a technical assessment of your upcoming project.</p>
              </div>
              <div className="flex gap-md">
                <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md">Book a Consultation</button>
                <button className="bg-surface text-primary border border-outline-variant px-lg py-md rounded-lg font-label-md text-label-md hover:bg-white transition-all">Download Portfolio</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CivilPage