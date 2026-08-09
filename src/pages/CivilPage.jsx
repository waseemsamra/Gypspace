import React, { useEffect, useRef } from 'react'
import { useAdmin } from '../contexts/AdminContext'

const CivilPage = () => {
  const containerRef = useRef(null)
  const { cmsData } = useAdmin()
  const gallery = cmsData?.gallery || []
  const civilHeroImage = gallery.find(item => {
    const caption = (item.caption || '').toLowerCase()
    const url = (item.url || '').toLowerCase()
    return caption.includes('civil') || url.includes('civil')
  }) || gallery[0]

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
      const elements = container.querySelectorAll('section')
      elements.forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden scroll-smooth" ref={containerRef}>
      <main>
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent z-10" />
            <img
              className="w-full h-full object-cover"
              src={civilHeroImage?.url || 'https://gypspace.s3.us-east-1.amazonaws.com/civil_hero.jpg'}
              alt="Technical and industrial environment"
            />
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative z-20 w-full">
            <div className="max-w-2xl text-surface">
              <div className="inline-flex items-center gap-xs bg-white/10 backdrop-blur-md px-sm py-xs rounded mb-md border border-white/20">
                <span className="material-symbols-outlined text-[18px]">architecture</span>
                <span className="font-label-md text-label-md tracking-widest uppercase">Expertise &amp; Precision</span>
              </div>
              <h1 className="font-display-lg text-display-lg mb-md leading-tight">Civil Works &amp; Construction Services</h1>
              <p className="font-headline-sm text-headline-sm text-surface-variant max-w-lg mb-sm opacity-95">Building strong foundations for lasting spaces.</p>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-lg mb-xl opacity-90">
                From structural modifications and blockwork to plastering, tiling and concrete works, we deliver reliable civil solutions with quality workmanship and professional site execution.
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

        {/* Services Grid Section */}
        <section className="py-2xl bg-background transition-all duration-700 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">Specialized Civil &amp; Technical Works</h2>
                <p className="font-body-md text-body-md text-secondary">Our civil division specializes in delivering precision and technical mastery across all aspects of construction, ensuring quality from start to finish.</p>
              </div>
              <div className="flex gap-sm">
                <div className="w-12 h-1 bg-primary" />
                <div className="w-12 h-1 bg-outline-variant" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">view_module</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Block Work</h3>
                <p className="font-body-sm text-body-sm text-secondary">Precision block laying for structurally sound and aligned walls.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">format_paint</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Plastering Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Smooth and durable plastering for internal and external surfaces.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">layers</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Concrete Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">High-strength casting and finishing for foundations and elements.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">grid_on</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Tiling Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Expert installation of ceramic, porcelain, and stone tiles.</p>
              </div>
              <div className="bg-primary text-on-primary rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-on-primary mb-md">water_damage</span>
                <h3 className="font-headline-sm text-headline-sm mb-xs">Waterproofing</h3>
                <p className="font-body-sm text-body-sm opacity-80">Comprehensive moisture protection for basements and roofs.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">construction</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Demolition &amp; Dismantling</h3>
                <p className="font-body-sm text-body-sm text-secondary">Safe and controlled structural removal and site clearing.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">architecture</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Masonry Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Expert stone and brickwork for aesthetic and structural finishes.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">dashboard</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Flooring Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Durable screed and industrial flooring solutions.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card">
                <span className="material-symbols-outlined text-primary mb-md">park</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">External Works</h3>
                <p className="font-body-sm text-body-sm text-secondary">Hard landscaping, drainage, and paving for site developments.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg bento-card sm:col-span-2 lg:col-span-3">
                <span className="material-symbols-outlined text-primary mb-md">build</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Repair &amp; Maintenance</h3>
                <p className="font-body-sm text-body-sm text-secondary">Ongoing structural repairs and preventative civil maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-surface-container py-2xl relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">Our Execution Process</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">A systematic approach to guarantee precision, safety, and quality at every stage of the project lifecycle.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 z-0" />
              {[
                { num: '1', title: 'Site Inspection', desc: 'Thorough site assessment.' },
                { num: '2', title: 'Planning', desc: 'Detailed execution strategy.' },
                { num: '3', title: 'Quotation', desc: 'Transparent cost breakdown.' },
                { num: '4', title: 'Execution', desc: 'Professional implementation.' },
                { num: '5', title: 'Quality Inspection', desc: 'Rigorous standards check.' },
                { num: '6', title: 'Handover', desc: 'Final project delivery.' },
              ].map((step) => (
                <div key={step.num} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md text-center relative z-10 flex flex-col items-center bento-card">
                  <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline-sm mb-sm shadow-md">{step.num}</div>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">{step.title}</h4>
                  <p className="font-body-sm text-body-sm text-secondary text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="py-2xl bg-surface transition-all duration-700 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">Project Gallery</h2>
              <p className="font-body-md text-body-md text-secondary">A selection of our recent technical civil works.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden bento-card">
                <div className="h-48 w-full bg-surface-container">
                  <img className="w-full h-full object-cover" src="https://gypspace.s3.us-east-1.amazonaws.com/civil_blueprint.jpg" alt="Corporate Plaza Expansion" />
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-[18px] text-primary mb-xs">Corporate Plaza Expansion</h4>
                  <p className="font-label-md text-label-md text-secondary mb-xs">Dubai, UAE</p>
                  <p className="font-body-sm text-body-sm text-surface-tint">Scope: Structural modifications, Blockwork, and External Paving.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden bento-card">
                <div className="h-48 w-full bg-surface-container">
                  <img className="w-full h-full object-cover" src="https://gypspace.s3.us-east-1.amazonaws.com/civil_blueprint.jpg" alt="Industrial Facility Upgrade" />
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-[18px] text-primary mb-xs">Industrial Facility Upgrade</h4>
                  <p className="font-label-md text-label-md text-secondary mb-xs">Sharjah, UAE</p>
                  <p className="font-body-sm text-body-sm text-surface-tint">Scope: Heavy-duty concrete flooring, Demolition, and Waterproofing.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden bento-card">
                <div className="h-48 w-full bg-surface-container">
                  <img className="w-full h-full object-cover" src="https://gypspace.s3.us-east-1.amazonaws.com/civil_blueprint.jpg" alt="Luxury Villa Renovation" />
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-[18px] text-primary mb-xs">Luxury Villa Renovation</h4>
                  <p className="font-label-md text-label-md text-secondary mb-xs">Abu Dhabi, UAE</p>
                  <p className="font-body-sm text-body-sm text-surface-tint">Scope: Masonry works, Premium Tiling, and Plastering finishes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-2xl pt-xl transition-all duration-700 opacity-100 translate-y-0">
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
