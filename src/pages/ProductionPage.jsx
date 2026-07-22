import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ProductionPage = () => {
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

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
            <Link to="/" className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
              Gypspace
            </Link>
            <div className="hidden md:flex items-center gap-xl">
              <Link to="/services" className="font-body-md text-secondary hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/works" className="font-body-md text-secondary hover:text-primary transition-colors">
                Work
              </Link>
              <Link to="/about" className="font-body-md text-secondary hover:text-primary transition-colors">
                About
              </Link>
              <span className="font-body-md text-on-tertiary-container border-b-2 border-on-tertiary-container pb-1">
                Production
              </span>
            </div>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-lg py-3 rounded-lg font-label-md active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <header className="relative pt-32 pb-2xl px-gutter max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
            <div className="md:col-span-7 z-10">
              <div className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-md text-xs mb-md">
                DUBAI MANUFACTURING HUB
              </div>
              <h1 className="font-display-lg text-display-lg text-primary mb-lg leading-[1.1]">
                The Art of Precision:<br />
                <span className="text-tertiary">Bespoke Production</span>
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                Blending traditional craftsmanship with advanced CNC technology to deliver architectural joinery and custom furniture that transcends standard manufacturing boundaries.
              </p>
              <div className="mt-xl flex items-center gap-lg">
                <button className="bg-primary text-on-primary px-xl py-4 rounded-lg font-label-md hover:shadow-lg transition-all">
                  View Facilities
                </button>
                <div className="flex items-center gap-sm font-mono-utility text-secondary">
                  <span className="material-symbols-outlined text-tertiary">verified_user</span>
                  <span>ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"></div>
              <div className="border border-outline-variant/30 bg-surface-container p-sm rounded-xl overflow-hidden shadow-2xl relative z-10">
                <img
                  alt="Gypspace facility overview"
                  className="w-full h-auto object-cover rounded-lg"
                  src="/production_hero.jpg"
                />
              </div>
              <div className="absolute bottom-[-20px] left-[-20px] bg-white p-lg border border-outline-variant/30 rounded-xl shadow-xl z-20">
                <div className="text-headline-md font-bold text-primary">14+</div>
                <div className="text-body-sm text-secondary uppercase tracking-widest font-semibold">Years of Expertise</div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary-container text-on-primary py-2xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="space-y-md">
                <div className="text-tertiary font-mono-utility">01. SCALE</div>
                <h3 className="font-headline-sm text-headline-sm text-white">Advanced Dubai Facility</h3>
                <p className="text-on-primary-container font-body-md">
                  Our state-of-the-art facility spans over 45,000 sq. ft., housing climate-controlled workshops designed for the most delicate material handling and large-scale assembly.
                </p>
              </div>
              <div className="space-y-md">
                <div className="text-tertiary font-mono-utility">02. TECHNOLOGY</div>
                <h3 className="font-headline-sm text-headline-sm text-white">Digital-First Workflow</h3>
                <p className="text-on-primary-container font-body-md">
                  From 5-axis CNC machining to laser-guided material optimization, we leverage the latest Industry 4.0 standards to ensure zero-tolerance accuracy on every component.
                </p>
              </div>
              <div className="space-y-md">
                <div className="text-tertiary font-mono-utility">03. SUSTAINABILITY</div>
                <h3 className="font-headline-sm text-headline-sm text-white">Responsible Craft</h3>
                <p className="text-on-primary-container font-body-md">
                  We prioritize ethically sourced timber and zero-waste production methods, ensuring that our bespoke creations contribute to a sustainable architectural future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl px-gutter max-w-container-max mx-auto">
          <div className="mb-xl text-center">
            <h2 className="font-display-lg text-headline-md text-primary mb-md">Our Specialized Capabilities</h2>
            <div className="w-16 h-1 bg-tertiary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-lg h-auto md:h-[700px]">
            <div className="md:col-span-2 md:row-span-1 bg-white border border-outline-variant p-xl flex flex-col justify-between group hover:border-tertiary transition-colors">
              <div className="space-y-md">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary transition-colors">precision_manufacturing</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">CNC Precision Machining</h3>
                <p className="text-secondary font-body-md">Advanced routing, milling, and cutting for complex architectural geometries that require micron-level accuracy.</p>
              </div>
              <ul className="mt-lg space-y-sm font-mono-utility text-sm text-on-surface-variant">
                <li className="flex items-center gap-sm">
                  <span className="w-1 h-1 bg-tertiary rounded-full"></span> 5-Axis Simultaneous Milling
                </li>
                <li className="flex items-center gap-sm">
                  <span className="w-1 h-1 bg-tertiary rounded-full"></span> Sub-Millimeter Tolerance
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('/production_gallery1.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-xl z-20 w-full">
                <h3 className="font-headline-sm text-headline-sm text-white mb-sm">Master Joinery</h3>
                <p className="text-white/80 font-body-md max-w-sm mb-lg">Where heritage craftsmanship meets modern design. Our joiners are masters of rare woods and traditional joinery techniques.</p>
                <button className="flex items-center gap-md text-tertiary font-label-md">
                  Explore Craft <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-low border border-outline-variant p-lg hover:bg-white transition-all">
              <span className="material-symbols-outlined text-3xl text-primary mb-md">chair_alt</span>
              <h3 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Custom Furniture</h3>
              <p className="text-body-sm text-secondary">Large-scale commercial production for luxury hospitality and corporate headquarters.</p>
            </div>
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-low border border-outline-variant p-lg hover:bg-white transition-all">
              <span className="material-symbols-outlined text-3xl text-primary mb-md">layers</span>
              <h3 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Material Sourcing</h3>
              <p className="text-body-sm text-secondary">Global sourcing of premium veneers, exotic hardwoods, composites, and structural metals.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-2xl border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end mb-2xl gap-lg">
              <div className="max-w-xl">
                <h2 className="font-display-lg text-headline-md text-primary mb-md">Our Production Process</h2>
                <p className="text-secondary font-body-md">A systematic approach from concept to final assembly, ensuring every detail is captured and executed with precision.</p>
              </div>
              <div className="font-mono-utility text-tertiary border-b border-tertiary pb-sm">INTEGRATED WORKFLOW</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-xl relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
              <div className="relative z-10 group">
                <div className="w-24 h-24 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-lg group-hover:border-tertiary transition-colors shadow-sm">
                  <span className="font-headline-md text-primary group-hover:text-tertiary">01</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Technical Drafting</h4>
                <p className="text-body-sm text-secondary">Full 3D modeling and shop drawings translated into machine-readable BIM protocols.</p>
              </div>
              <div className="relative z-10 group">
                <div className="w-24 h-24 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-lg group-hover:border-tertiary transition-colors shadow-sm">
                  <span className="font-headline-md text-primary group-hover:text-tertiary">02</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Material Prototyping</h4>
                <p className="text-body-sm text-secondary">Physical mock-ups and material samples tested for structural integrity and aesthetic finish.</p>
              </div>
              <div className="relative z-10 group">
                <div className="w-24 h-24 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-lg group-hover:border-tertiary transition-colors shadow-sm">
                  <span className="font-headline-md text-primary group-hover:text-tertiary">03</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Precision Manufacturing</h4>
                <p className="text-body-sm text-secondary">Primary production using state-of-the-art CNC equipment and artisan hand-tooling.</p>
              </div>
              <div className="relative z-10 group">
                <div className="w-24 h-24 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-lg group-hover:border-tertiary transition-colors shadow-sm">
                  <span className="font-headline-md text-primary group-hover:text-tertiary">04</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-primary mb-sm">Quality Assurance</h4>
                <p className="text-body-sm text-secondary">Rigorous 50-point inspection and final hand-finishing before protective crating.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="font-display-lg text-headline-md text-primary mb-xl">Bespoke Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/30">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('/production_gallery1.jpg')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div>
                    <p className="text-tertiary font-mono-utility mb-xs">FEATURE</p>
                    <h4 className="text-white font-headline-sm">Helical Staircase</h4>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/30">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('/production_gallery2.jpg')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div>
                    <p className="text-tertiary font-mono-utility mb-xs">ARCHITECTURAL</p>
                    <h4 className="text-white font-headline-sm">Walnut Paneling</h4>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/30">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('/production_gallery3.jpg')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div>
                    <p className="text-tertiary font-mono-utility mb-xs">FURNITURE</p>
                    <h4 className="text-white font-headline-sm">Executive Suite</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-slate opacity-10 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-display-lg text-white mb-lg">Engineered to your exact specifications.</h2>
            <p className="text-on-primary-container font-body-lg max-w-2xl mx-auto mb-xl">
              Ready to bring your architectural vision to life? Contact our production team in Dubai for a technical consultation or a tour of our manufacturing facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-lg justify-center">
              <Link
                to="/contact"
                className="bg-tertiary text-white px-2xl py-4 rounded-lg font-label-md hover:brightness-110 transition-all active:scale-95 inline-block"
              >
                Contact Our Team
              </Link>
              <button className="border border-white/20 text-white px-2xl py-4 rounded-lg font-label-md hover:bg-white/10 transition-all">
                Request Catalog
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProductionPage
