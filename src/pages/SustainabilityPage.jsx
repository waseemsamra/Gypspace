import React, { useEffect, useRef } from 'react'

const SustainabilityPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const container = containerRef.current
    if (container) {
      container.querySelectorAll('section').forEach((section) => {
        section.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8')
        observer.observe(section)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale-[30%]"
              src="/sustainability_hero.jpg"
              alt="Sustainable engineering"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-sm mb-md">
                <span className="w-3 h-3 bg-[#06B6D4] rounded-full"></span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">ESG Engineering Strategy</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary mb-lg">Engineering for a <span className="cyan-accent">Sustainable</span> Future</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                Gypspace Technical Services LLC integrates LEED-certified standards and eco-friendly fit-out practices to deliver infrastructure that balances high-performance engineering with environmental stewardship.
              </p>
              <div className="flex gap-md">
                <button className="bg-[#0F172A] text-white px-xl py-md rounded-lg font-label-md">View Our Specs</button>
                <button className="border border-[#334155] text-[#334155] px-xl py-md rounded-lg font-label-md hover:bg-surface-container transition-colors">Project Portfolio</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Our Green Commitment</h2>
            <div className="h-1 w-20 bg-[#06B6D4]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="md:col-span-2 bg-white technical-border rounded-xl p-xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl cyan-accent mb-md">eco</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Sustainability at the Core</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Our philosophy transcends simple "green" initiatives. We employ a systematic approach to technical services where every duct, wire, and material choice is analyzed for its long-term lifecycle impact and energy footprint.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-lg mt-xl pt-xl border-t border-outline-variant">
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary">85%</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Waste Diversion</div>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary">LEED</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Platinum Specs</div>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary">Zero</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">VOC Materials</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0F172A] text-white rounded-xl p-xl flex flex-col justify-between">
              <h3 className="font-headline-sm text-headline-sm">Carbon-Neutral Execution</h3>
              <p className="font-body-sm text-body-sm text-slate-400">
                We offset our operational footprint by investing in high-fidelity engineering research that reduces site-wide energy loss by up to 40% in industrial fit-outs.
              </p>
              <div className="mt-xl h-32 w-full opacity-20 overflow-hidden relative">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-2xl">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src="/sustainability_tech.jpg"
                  alt="Energy efficient engineering"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-lg rounded-lg technical-border shadow-lg max-w-[240px]">
                <p className="font-mono-utility text-mono-utility text-on-surface-variant italic">"Technical precision is the ultimate form of environmental responsibility."</p>
              </div>
            </div>
            <div className="pl-md">
              <h2 className="font-headline-md text-headline-md text-primary mb-lg">Energy Efficient Engineering</h2>
              <ul className="space-y-lg">
                <li className="flex gap-md">
                  <span className="material-symbols-outlined cyan-accent">bolt</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary">Smart HVAC Systems</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Implementing variable speed drive systems that adapt to real-time occupancy loads.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <span className="material-symbols-outlined cyan-accent">lightbulb</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary">Advanced Luminosity Controls</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">LED arrays integrated with DALI protocols for precise environmental lighting management.</p>
                  </div>
                </li>
                <li className="flex gap-md">
                  <span className="material-symbols-outlined cyan-accent">settings_suggest</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary">BMS Integration</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Centralized Building Management Systems for granular monitoring of utility expenditure.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary">Sustainable Materials Selection</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-sm">We source materials with low embodied carbon and high recyclability ratings for all technical fit-out projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
            <div className="bg-white p-lg technical-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-soft rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined cyan-accent">architecture</span>
              </div>
              <h4 className="font-label-md text-label-md text-primary mb-xs">Recycled Alloys</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Using 100% recycled aluminum and steel for structural framing.</p>
            </div>
            <div className="bg-white p-lg technical-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-soft rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined cyan-accent">format_paint</span>
              </div>
              <h4 className="font-label-md text-label-md text-primary mb-xs">Low-VOC Sealants</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Eliminating harmful outgassing for healthier indoor air quality.</p>
            </div>
            <div className="bg-white p-lg technical-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-soft rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined cyan-accent">grid_view</span>
              </div>
              <h4 className="font-label-md text-label-md text-primary mb-xs">Bio-based Insulation</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Natural mineral wool and mycelium composites for superior thermal buffering.</p>
            </div>
            <div className="bg-white p-lg technical-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-soft rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined cyan-accent">verified</span>
              </div>
              <h4 className="font-label-md text-label-md text-primary mb-xs">FSC Timber</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Responsibly sourced wood products for decorative and functional elements.</p>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-2xl">
          <div className="bg-[#0F172A] rounded-2xl p-xl md:p-2xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-md text-headline-md text-white mb-md">Ready to build sustainably?</h2>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-xl mx-auto mb-xl">
                Connect with our technical consultants to audit your project for LEED potential and energy efficiency.
              </p>
              <button className="bg-[#06B6D4] text-white px-2xl py-md rounded-lg font-label-md hover:scale-[1.02] transition-transform">Get a Technical Audit</button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4] opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 blur-2xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SustainabilityPage
