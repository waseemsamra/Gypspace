import React, { useEffect, useRef } from 'react'

const CareersPage = () => {
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
      container.querySelectorAll('.job-item, .benefit-card').forEach((el) => {
        el.classList.add('transition-all', 'duration-700')
        el.classList.add('opacity-0', 'translate-y-10')
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay"
              style={{ backgroundImage: `url('/careers_hero.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-md py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded mb-md uppercase tracking-wider">
                Join Our Technical Team
              </span>
              <h1 className="font-display-lg text-display-lg text-on-primary mb-md leading-tight">
                Shape the Future of <br />
                <span className="text-tertiary-fixed-dim">Technical Excellence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-xl max-w-xl">
                Join a 14-year legacy of precision engineering and master craftsmanship in Dubai. We build the infrastructure of tomorrow with today's best minds.
              </p>
              <div className="flex flex-wrap gap-md">
                <a
                  href="#positions"
                  className="bg-tertiary-fixed text-on-tertiary-fixed px-xl py-md font-label-md rounded flex items-center gap-sm hover:brightness-110 transition-all"
                >
                  View Openings <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <button className="border border-on-primary text-on-primary px-xl py-md font-label-md rounded hover:bg-white/10 transition-all">
                  Our Process
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-xl hidden lg:block opacity-30">
            <div className="font-mono-utility text-mono-utility text-on-primary-fixed-variant flex flex-col items-end">
              <span>COORD_SYS: 25.2048° N, 55.2708° E</span>
              <span>PRECISION_TOLERANCE: 0.001MM</span>
              <span>VERSION: 14.0.2024</span>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container-lowest overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="/careers_culture.jpg"
                    alt="Gypspace technical team culture"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-tertiary-fixed-dim/20 rounded-full -z-10 animate-pulse"></div>
              </div>
              <div className="space-y-lg">
                <h2 className="font-headline-md text-headline-md text-primary">The Gypspace Way</h2>
                <div className="w-20 h-1 bg-tertiary-fixed-dim mb-lg"></div>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  At Gypspace, we don't just execute projects; we engineer perfection. Our culture is built on the intersection of high-fidelity innovation and deep-rooted technical mastery.
                </p>
                <div className="space-y-md pt-md">
                  <div className="flex gap-md items-start">
                    <div className="w-12 h-12 rounded bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary-fixed">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Absolute Precision</h4>
                      <p className="font-body-sm text-body-sm text-secondary">Every millimeter matters. We utilize aerospace-grade tolerance across all interior technical deployments.</p>
                    </div>
                  </div>
                  <div className="flex gap-md items-start">
                    <div className="w-12 h-12 rounded bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary-fixed">model_training</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Innovation-First</h4>
                      <p className="font-body-sm text-body-sm text-secondary">We invest heavily in the latest CNC technology and generative design tools to stay ahead of the curve.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-background technical-grid">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-2xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Why Join Our Mission?</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Operating at the peak of the technical services industry requires the best environment.</p>
          </div>
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="benefit-card bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-tertiary-fixed-dim transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-lg group-hover:scale-110 transition-transform">factory</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">State-of-the-Art Facility</h3>
              <p className="font-body-sm text-body-sm text-secondary mb-lg">Access the region's most advanced CNC machinery and digital fabrication labs in our 50,000 sq. ft. Dubai HQ.</p>
              <ul className="space-y-base text-secondary font-mono-utility text-xs">
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> 5-Axis CNC Integration</li>
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Robotic Fabrication Arm</li>
              </ul>
            </div>
            <div className="benefit-card bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-tertiary-fixed-dim transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-lg group-hover:scale-110 transition-transform">apartment</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">High-End Projects</h3>
              <p className="font-body-sm text-body-sm text-secondary mb-lg">Contribute to Dubai's most iconic interior environments, from luxury hospitality to government headquarters.</p>
              <ul className="space-y-base text-secondary font-mono-utility text-xs">
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Tier-1 Iconic Landmarks</li>
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Global Brand Collaborations</li>
              </ul>
            </div>
            <div className="benefit-card bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-tertiary-fixed-dim transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-lg group-hover:scale-110 transition-transform">school</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Growth &amp; Mastery</h3>
              <p className="font-body-sm text-body-sm text-secondary mb-lg">We prioritize continuous skill development with certified training and internal mentorship programs.</p>
              <ul className="space-y-base text-secondary font-mono-utility text-xs">
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Skill Certification Tracks</li>
                <li className="flex items-center gap-base"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Fast-Track Leadership Path</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container" id="positions">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end mb-2xl gap-md">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary">Open Positions</h2>
                <p className="font-body-md text-body-md text-secondary">Join our team of technical experts in Dubai.</p>
              </div>
              <div className="flex bg-surface-container-lowest rounded-lg border border-outline-variant p-1">
                <button className="px-md py-sm bg-primary text-on-primary rounded font-label-md text-sm">All Roles</button>
                <button className="px-md py-sm text-secondary hover:text-primary transition-colors font-label-md text-sm">Technical</button>
                <button className="px-md py-sm text-secondary hover:text-primary transition-colors font-label-md text-sm">Management</button>
              </div>
            </div>
            <div className="space-y-md">
              <div className="job-item bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-lg hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-center gap-lg">
                  <div className="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">Senior Project Manager</h4>
                    <div className="flex items-center gap-md font-mono-utility text-xs text-secondary mt-base">
                      <span>FULL-TIME</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>DUBAI, UAE</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>REF: GYP-992</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <span className="hidden lg:block px-md py-1 bg-surface-container rounded-full text-xs font-label-md text-secondary">Planning &amp; Strategy</span>
                  <button className="px-xl py-sm border border-primary text-primary rounded font-label-md hover:bg-primary hover:text-on-primary transition-all">View Details</button>
                </div>
              </div>
              <div className="job-item bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-lg hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-center gap-lg">
                  <div className="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">settings_suggest</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">CNC Machine Specialist</h4>
                    <div className="flex items-center gap-md font-mono-utility text-xs text-secondary mt-base">
                      <span>FULL-TIME</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>DUBAI, UAE</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>REF: GYP-844</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <span className="hidden lg:block px-md py-1 bg-surface-container rounded-full text-xs font-label-md text-secondary">Operations</span>
                  <button className="px-xl py-sm border border-primary text-primary rounded font-label-md hover:bg-primary hover:text-on-primary transition-all">View Details</button>
                </div>
              </div>
              <div className="job-item bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-lg hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-center gap-lg">
                  <div className="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">handyman</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">Master Joiner</h4>
                    <div className="flex items-center gap-md font-mono-utility text-xs text-secondary mt-base">
                      <span>FULL-TIME</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>DUBAI, UAE</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>REF: GYP-312</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <span className="hidden lg:block px-md py-1 bg-surface-container rounded-full text-xs font-label-md text-secondary">Technical Craft</span>
                  <button className="px-xl py-sm border border-primary text-primary rounded font-label-md hover:bg-primary hover:text-on-primary transition-all">View Details</button>
                </div>
              </div>
              <div className="job-item bg-surface-container-lowest p-lg rounded-lg border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-lg hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-center gap-lg">
                  <div className="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">draw</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">Interior Technical Drafter</h4>
                    <div className="flex items-center gap-md font-mono-utility text-xs text-secondary mt-base">
                      <span>FULL-TIME</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>DUBAI, UAE</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span>REF: GYP-105</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <span className="hidden lg:block px-md py-1 bg-surface-container rounded-full text-xs font-label-md text-secondary">Engineering</span>
                  <button className="px-xl py-sm border border-primary text-primary rounded font-label-md hover:bg-primary hover:text-on-primary transition-all">View Details</button>
                </div>
              </div>
            </div>
            <div className="mt-2xl text-center">
              <p className="font-body-md text-body-md text-secondary mb-md">Don't see a matching role?</p>
              <button className="bg-primary text-on-primary px-2xl py-md rounded-lg font-label-md hover:brightness-125 transition-all shadow-lg shadow-primary/20">Submit General Application</button>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
              <div className="col-span-1 lg:col-span-1">
                <h2 className="font-headline-md text-headline-md text-primary mb-md">Our Benefits</h2>
                <p className="font-body-md text-body-md text-secondary">A premium working environment designed for long-term career fulfillment.</p>
              </div>
              <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="benefit-card p-lg border border-outline-variant rounded-lg flex items-start gap-md">
                  <div className="p-base bg-secondary-container text-on-secondary-container rounded">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h5 className="font-label-md text-label-md text-primary">Competitive Compensation</h5>
                    <p className="font-body-sm text-body-sm text-secondary">Top-tier market salaries with annual performance-based technical bonuses.</p>
                  </div>
                </div>
                <div className="benefit-card p-lg border border-outline-variant rounded-lg flex items-start gap-md">
                  <div className="p-base bg-secondary-container text-on-secondary-container rounded">
                    <span className="material-symbols-outlined">health_and_safety</span>
                  </div>
                  <div>
                    <h5 className="font-label-md text-label-md text-primary">Health Insurance</h5>
                    <p className="font-body-sm text-body-sm text-secondary">Comprehensive premium health coverage for you and your direct dependents.</p>
                  </div>
                </div>
                <div className="benefit-card p-lg border border-outline-variant rounded-lg flex items-start gap-md">
                  <div className="p-base bg-secondary-container text-on-secondary-container rounded">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h5 className="font-label-md text-label-md text-primary">Professional Training</h5>
                    <p className="font-body-sm text-body-sm text-secondary">Regular workshops on latest software and machinery with certified industry bodies.</p>
                  </div>
                </div>
                <div className="benefit-card p-lg border border-outline-variant rounded-lg flex items-start gap-md">
                  <div className="p-base bg-secondary-container text-on-secondary-container rounded">
                    <span className="material-symbols-outlined">self_improvement</span>
                  </div>
                  <div>
                    <h5 className="font-label-md text-label-md text-primary">Work-Life Balance</h5>
                    <p className="font-body-sm text-body-sm text-secondary">Creative environment with flexible scheduling to maintain peak performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-primary-container relative overflow-hidden">
          <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
            <h2 className="font-display-lg text-display-lg text-on-primary mb-lg">Ready to Build Better?</h2>
            <p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-xl max-w-2xl mx-auto">
              Take the first step toward a career defined by technical precision and engineering mastery in the heart of Dubai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <button className="bg-tertiary-fixed text-on-tertiary-fixed px-2xl py-md font-label-md rounded shadow-lg hover:scale-105 transition-all">
                Submit a General Application
              </button>
              <a href="/contact" className="bg-transparent border border-on-primary text-on-primary px-2xl py-md font-label-md rounded hover:bg-white/10 transition-all">
                Contact HR Team
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CareersPage
