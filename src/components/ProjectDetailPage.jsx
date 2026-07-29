import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ProjectDetailPage = ({ project }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const container = containerRef.current
    if (container) {
      const elements = container.querySelectorAll('.reveal-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
        <main>
          <section className="relative h-[80vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/main-project.png')` }}
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
            </div>
            <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-md py-base bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-md">
                  FEATURED PROJECT
                </span>
                <h1 className="font-display-lg text-display-lg text-white mb-lg">
                  {project.title}
                </h1>
                <p className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </section>

          <section className="py-2xl bg-white border-b border-outline-variant">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
                <div className="reveal-on-scroll">
                  <h2 className="font-headline-md text-headline-md text-primary mb-lg">
                    Project Overview
                  </h2>
                  <div className="space-y-md text-on-surface-variant font-body-md text-body-md">
                    <p>The Vertex represents the pinnacle of our technical services capability. Every element was meticulously planned to support high-performance workflows while maintaining an atmosphere of refined sophistication.</p>
                  </div>
                </div>
                <div className="relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                    <img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative w-full h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt={project.alt || project.title}
              className="w-full h-full object-cover"
              src={project.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full pb-2xl">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 bg-primary text-on-primary font-mono-utility text-mono-utility mb-md">FLAGSHIP PROJECT</span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">{project.title}</h1>
              <div className="flex flex-wrap gap-xl">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Scope Area</span>
                  <span className="font-headline-md text-headline-md text-white">850,000+ SQ FT</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-xl">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Project Valuation</span>
                  <span className="font-headline-md text-headline-md text-white">$145M USD</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-xl">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Status</span>
                  <span className="font-headline-md text-headline-md text-white">Delivered 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
          <div className="md:col-span-7 scroll-reveal">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Engineering Scope</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-sm mb-lg">Precision BIM Level 3 Integration</h2>
            <div className="space-y-md text-on-surface-variant">
              <p className="font-body-lg text-body-lg leading-relaxed">
                The Vertex represents the pinnacle of our technical services capability. Orchestrated through full BIM Level 3 integration, the structural and MEP scope was executed with a tolerance of <span className="font-bold text-primary">0.05mm precision</span> across all primary load-bearing elements.
              </p>
              <p className="font-body-md text-body-md">
                Our engineering team managed over 45,000 technical clashes in the pre-construction phase using proprietary AI-driven spatial analysis, ensuring a zero-rework fabrication cycle for the primary steel framework. The MEP systems leverage a decentralized smart-grid architecture, reducing operational energy overhead by 22% compared to standard commercial benchmarks.
              </p>
            </div>
            <div className="mt-xl flex flex-wrap gap-md">
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">ISO 9001:2015</span>
              </div>
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">LEED Gold Platinum</span>
              </div>
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">Structural Integrity Grade A</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative scroll-reveal">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant">
              <img className="w-full h-full object-cover" data-alt="Technical blueprint" src={project.blueprintImage} />
            </div>
            <div className="absolute -bottom-lg -right-lg bg-primary text-on-primary p-lg shadow-xl max-w-[200px]">
              <div className="font-display-lg text-display-lg-mobile leading-none">15+</div>
              <div className="font-label-md text-label-md uppercase mt-xs">Years of Operational Excellence</div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex justify-between items-end mb-2xl">
              <div>
                <span className="font-label-md text-label-md text-secondary uppercase">Site Documentation</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Engineering Detail</h2>
              </div>
              <Link to="/specifications" className="hidden md:flex items-center gap-sm text-primary font-bold hover:gap-md transition-all">
                <span className="font-label-md">FULL SPECIFICATION</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg h-[600px]">
              <div className="relative overflow-hidden group border border-outline-variant bento-card">
                <img alt="Interior fit-out showcasing high-end joinery and glass partitions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.gallery1} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div className="text-white">
                    <span className="font-mono-utility text-mono-utility">MODULE 07</span>
                    <h3 className="font-headline-sm text-headline-sm">Premium Interior Fit-Out</h3>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden group border border-outline-variant bento-card">
                <img alt="Cleanroom facility with robotic engineering arms" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.gallery2} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div className="text-white">
                    <span className="font-mono-utility text-mono-utility">MODULE 12</span>
                    <h3 className="font-headline-sm text-headline-sm">Advanced Lab Integration</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-2xl">
            <h2 className="font-headline-md text-headline-md">Project Performance</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <div className="font-display-lg text-display-lg text-primary mb-xs">100%</div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Safety Compliance</h3>
              <p className="text-on-surface-variant text-body-md">Zero-incident delivery during 1.2M collective man-hours.</p>
            </div>
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <div className="font-display-lg text-display-lg text-primary mb-xs">99%</div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">On-time Delivery</h3>
              <p className="text-on-surface-variant text-body-md">Handover completed 2 weeks ahead of the primary milestone.</p>
            </div>
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              </div>
              <div className="font-display-lg text-display-lg text-primary mb-xs">Gold</div>
              <h3 className="font-headline-sm text-headline-sm mb-sm">Energy Efficiency</h3>
              <p className="text-on-surface-variant text-body-md">LEED Gold Certified with optimized thermal envelope.</p>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-tertiary-container text-white overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-xl mb-2xl">
              <h2 className="font-headline-md text-headline-md mb-md">Key Technical Features</h2>
              <p className="font-body-lg text-body-lg opacity-80">Our modular delivery framework allows for rapid deployment of complex industrial assets without compromising structural fidelity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">architecture</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm">Structural Engineering</h4>
                <p className="text-white/60 text-body-sm leading-relaxed">Advanced tensile steel designs integrated with seismic-responsive foundations. Every joint is ultrasonic tested for 100% structural verification.</p>
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> High-Yield Steel S355
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> Non-Destructive Testing
                  </li>
                </ul>
              </div>
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">settings_input_component</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm">MEP Systems</h4>
                <p className="text-white/60 text-body-sm leading-relaxed">Tier-4 data-center grade cooling solutions and automated smart-building protocols for real-time HVAC optimization.</p>
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> VRF Smart Zoning
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> 10G Fiber Backbone
                  </li>
                </ul>
              </div>
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">grid_view</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm">Bespoke Joinery</h4>
                <p className="text-white/60 text-body-sm leading-relaxed">Custom laboratory furniture and high-traffic acoustic panelling manufactured in-house to millimeter-exact specifications.</p>
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> CNC-Machined Millwork
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> Class-A Fire Rated
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl max-w-container-max mx-auto px-gutter scroll-reveal">
          <div className="bg-primary p-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-lg opacity-10">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 100" }}>precision_manufacturing</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-display-lg text-white mb-lg">Ready to Scale Your Infrastructure?</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-xl font-body-lg">
                Consult with our senior engineering team to discuss your next flagship development. From BIM modelling to final handover, we deliver precision at scale.
              </p>
              <div className="flex flex-col md:flex-row gap-lg justify-center">
                <Link to="/quote" className="bg-white text-primary px-xl py-md font-label-md uppercase tracking-widest hover:bg-opacity-90 transition-all rounded">
                  Request a Consultation
                </Link>
                <Link to="/projects" className="border border-white/40 text-white px-xl py-md font-label-md uppercase tracking-widest hover:bg-white/10 transition-all rounded">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetailPage
