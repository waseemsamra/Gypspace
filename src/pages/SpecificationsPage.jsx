import React, { useEffect, useRef } from 'react'

const SpecificationsPage = () => {
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
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)

    const container = containerRef.current
    if (container) {
      container.querySelectorAll('section').forEach((section) => {
        section.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10')
        observer.observe(section)
      })
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('shadow-md')
          header.classList.remove('border-b')
        } else {
          header.classList.remove('shadow-md')
          header.classList.add('border-b')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative overflow-hidden bg-white border-b border-outline-variant px-gutter py-2xl blueprint-grid">
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <div>
                <div className="inline-flex items-center gap-xs mb-md px-sm py-xs bg-secondary-container text-on-secondary-container rounded-lg">
                  <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                  <span className="font-mono-utility text-mono-utility uppercase tracking-widest">Facility Specifications v2.4</span>
                </div>
                <h1 className="font-display-lg text-display-lg mb-lg text-primary">Dubai Technical Production Hub</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-xl">
                  Our Dubai-based manufacturing facility integrates aerospace-grade precision with traditional joinery craftsmanship. We operate at a 0.05mm tolerance standard across all MEP and Fit-out production lines.
                </p>
                <div className="flex flex-wrap gap-md">
                  <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl technical-border">
                    <span className="block font-headline-sm text-headline-sm text-primary mb-xs">45,000</span>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase">Sq. Ft. Facility</span>
                  </div>
                  <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl technical-border">
                    <span className="block font-headline-sm text-headline-sm text-primary mb-xs">0.05mm</span>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase">Tolerance Standard</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-tertiary-container/5 rounded-xl transition-all group-hover:scale-105"></div>
                <img
                  className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl border border-outline-variant"
                  src="/spec_facility.jpg"
                  alt="Dubai technical production hub"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl px-gutter max-w-container-max mx-auto">
          <div className="flex items-end justify-between mb-xl">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">CNC &amp; Joinery Infrastructure</h2>
              <div className="w-16 h-1 bg-on-tertiary-container"></div>
            </div>
            <div className="hidden md:block font-mono-utility text-mono-utility text-on-surface-variant">SPEC_DOC: JOINERY_001</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-lg">
            <div className="md:col-span-2 p-xl bg-white border border-outline-variant rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-sm mb-lg">
                  <span className="material-symbols-outlined text-primary p-sm bg-surface-container rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
                  <h3 className="font-headline-sm text-headline-sm">5-Axis CNC Machining</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-outline-variant font-label-md text-label-md text-on-surface-variant">
                      <tr>
                        <th className="py-sm pr-lg uppercase">Parameter</th>
                        <th className="py-sm uppercase">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="font-body-sm text-body-sm divide-y divide-surface-container">
                      <tr>
                        <td className="py-md pr-lg font-bold">X/Y/Z Working Area</td>
                        <td className="py-md font-mono-utility">4200mm x 2100mm x 400mm</td>
                      </tr>
                      <tr>
                        <td className="py-md pr-lg font-bold">Spindle Speed</td>
                        <td className="py-md font-mono-utility">24,000 RPM (Variable)</td>
                      </tr>
                      <tr>
                        <td className="py-md pr-lg font-bold">Repeatability</td>
                        <td className="py-md font-mono-utility">± 0.015mm</td>
                      </tr>
                      <tr>
                        <td className="py-md pr-lg font-bold">Material Versatility</td>
                        <td className="py-md">Solid Wood, MDF, Corian, Aluminum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1 bg-surface-container-high rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/spec_joinery.jpg"
                alt="Joinery detail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                <span className="font-label-md text-label-md text-white/70 uppercase">Joinery Detail</span>
                <p className="font-headline-sm text-headline-sm text-white">Bespoke Fit-out Precision</p>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1 p-lg bg-primary-container text-on-primary-fixed border border-outline rounded-xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-tertiary-fixed mb-lg text-[40px]">settings_input_component</span>
                <h3 className="font-headline-sm text-headline-sm mb-md">MEP Tooling</h3>
                <ul className="space-y-sm font-body-sm">
                  <li className="flex items-start gap-xs">
                    <span className="material-symbols-outlined text-[14px] mt-1">check_circle</span>
                    High-Pressure Duct Testing
                  </li>
                  <li className="flex items-start gap-xs">
                    <span className="material-symbols-outlined text-[14px] mt-1">check_circle</span>
                    Ultrasonic Leak Detection
                  </li>
                  <li className="flex items-start gap-xs">
                    <span className="material-symbols-outlined text-[14px] mt-1">check_circle</span>
                    Laser-Guided Alignment
                  </li>
                </ul>
              </div>
              <div className="mt-xl pt-lg border-t border-on-primary-container">
                <span className="font-mono-utility text-tertiary-fixed">ISO 9001:2015 CERTIFIED</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-2xl border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
              <div className="order-2 lg:order-1">
                <img
                  className="w-full h-[600px] object-cover rounded-xl shadow-lg border border-outline-variant"
                  src="/spec_quality.jpg"
                  alt="Quality control framework"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-widest mb-md block">Quality Control Framework</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xl">The Gold Standard of Engineering Integrity</h2>
                <div className="space-y-lg">
                  <div className="flex gap-lg">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-outline-variant rounded-lg">
                      <span className="material-symbols-outlined text-primary">microwave</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">Micro-Alignment Verification</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Every structural joint undergoes 3D laser scanning to ensure 100% adherence to digital blueprints before site delivery.</p>
                    </div>
                  </div>
                  <div className="flex gap-lg">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-outline-variant rounded-lg">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">Materials Stress Analysis</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Acoustic and thermal resistance testing conducted in-house for all gypsum and joinery components for maximum longevity.</p>
                    </div>
                  </div>
                  <div className="flex gap-lg">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-outline-variant rounded-lg">
                      <span className="material-symbols-outlined text-primary">verified</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">Dubai Municipality Compliance</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Fully integrated MEP systems meeting and exceeding DCD and DM regulations for commercial and residential safety.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl px-gutter max-w-container-max mx-auto">
          <h3 className="font-headline-md text-headline-md text-center mb-2xl">Manufacturing Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            <div className="text-center p-xl bg-white rounded-xl border border-surface-container shadow-sm hover:border-tertiary-fixed transition-colors">
              <span className="material-symbols-outlined text-[48px] text-tertiary-fixed-dim mb-md">speed</span>
              <h5 className="font-label-md text-label-md text-on-surface-variant uppercase mb-sm">Lead Time</h5>
              <p className="font-headline-sm text-headline-sm text-primary">14-21 Days</p>
              <p className="font-body-sm text-body-sm mt-xs text-on-surface-variant">Prototyping to delivery</p>
            </div>
            <div className="text-center p-xl bg-white rounded-xl border border-surface-container shadow-sm hover:border-tertiary-fixed transition-colors">
              <span className="material-symbols-outlined text-[48px] text-tertiary-fixed-dim mb-md">construction</span>
              <h5 className="font-label-md text-label-md text-on-surface-variant uppercase mb-sm">Assembly Capacity</h5>
              <p className="font-headline-sm text-headline-sm text-primary">200+ Units/Mo</p>
              <p className="font-body-sm text-body-sm mt-xs text-on-surface-variant">Custom joinery components</p>
            </div>
            <div className="text-center p-xl bg-white rounded-xl border border-surface-container shadow-sm hover:border-tertiary-fixed transition-colors">
              <span className="material-symbols-outlined text-[48px] text-tertiary-fixed-dim mb-md">inventory</span>
              <h5 className="font-label-md text-label-md text-on-surface-variant uppercase mb-sm">Stock Availability</h5>
              <p className="font-headline-sm text-headline-sm text-primary">98% In-Stock</p>
              <p className="font-body-sm text-body-sm mt-xs text-on-surface-variant">Core structural materials</p>
            </div>
            <div className="text-center p-xl bg-white rounded-xl border border-surface-container shadow-sm hover:border-tertiary-fixed transition-colors">
              <span className="material-symbols-outlined text-[48px] text-tertiary-fixed-dim mb-md">energy_savings_leaf</span>
              <h5 className="font-label-md text-label-md text-on-surface-variant uppercase mb-sm">Sustainability</h5>
              <p className="font-headline-sm text-headline-sm text-primary">Net-Zero Target</p>
              <p className="font-body-sm text-body-sm mt-xs text-on-surface-variant">By 2030 (Waste reduction)</p>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter mb-2xl">
          <div className="bg-primary text-on-primary rounded-xl p-2xl flex flex-col items-center text-center">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-lg">Ready for a Technical Deep Dive?</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mb-xl">Download our full 140-page technical specifications catalog including CAD details and material datasheets.</p>
            <div className="flex flex-col md:flex-row gap-lg">
              <button className="bg-tertiary-fixed text-on-tertiary-fixed px-xl py-lg font-label-md text-label-md rounded-lg flex items-center gap-sm transition-transform active:scale-95">
                <span className="material-symbols-outlined">download</span>
                Download Full Specs (PDF)
              </button>
              <button className="bg-transparent border border-on-primary-container text-on-primary px-xl py-lg font-label-md text-label-md rounded-lg hover:bg-on-primary/10 transition-colors">
                Request a Facility Tour
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SpecificationsPage
