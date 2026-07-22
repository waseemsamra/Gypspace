import React, { useEffect } from 'react'

const FitoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <header className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden bg-on-background">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url('/fitout_hero.jpg')` }}
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-xs mb-md px-sm py-1 bg-tertiary-fixed/10 border border-tertiary-fixed/20 rounded">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">verified</span>
                <span className="font-label-md text-label-md text-tertiary-fixed tracking-widest uppercase">Expert Fit-out Solutions</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-surface mb-lg">The Art of Interior Fit-out</h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-xl leading-relaxed">
                Transforming raw spaces into high-performance environments. We blend architectural precision with bespoke craftsmanship to deliver interiors that define your corporate identity.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="bg-[#06B6D4] text-white font-label-md text-label-md px-xl py-md rounded hover:brightness-110 transition-all flex items-center gap-sm">
                  View Portfolio <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="border border-white/30 text-white font-label-md text-label-md px-xl py-md rounded hover:bg-white/10 transition-all">
                  Our Process
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Services Bento Grid */}
        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">End-to-End Fit-out Services</h2>
            <p className="font-body-md text-body-md text-secondary max-w-xl">Comprehensive solutions tailored for commercial, retail, and hospitality sectors, delivered with a focus on quality and timely completion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Major Service */}
            <div className="md:col-span-2 group relative overflow-hidden bg-white border border-outline-variant rounded-xl p-lg flex flex-col justify-between min-h-[360px] hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded bg-primary-container flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-tertiary-fixed">architecture</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Turnkey Interior Fit-outs</h3>
                <p className="font-body-md text-body-md text-secondary mb-lg max-w-md">From conceptual shell and core to final handover. We manage the entire lifecycle including M.E.P integration, structural modifications, and finishing works with industrial-grade precision.</p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm text-body-sm font-body-sm text-secondary">
                    <span className="material-symbols-outlined text-[18px] text-[#06B6D4]">check_circle</span> Project Management
                  </li>
                  <li className="flex items-center gap-sm text-body-sm font-body-sm text-secondary">
                    <span className="material-symbols-outlined text-[18px] text-[#06B6D4]">check_circle</span> Statutory Approvals
                  </li>
                  <li className="flex items-center gap-sm text-body-sm font-body-sm text-secondary">
                    <span className="material-symbols-outlined text-[18px] text-[#06B6D4]">check_circle</span> Quality Assurance
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-1/3 h-full overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[300px] -mr-xl -mb-xl">foundation</span>
              </div>
            </div>

            {/* Bespoke Joinery */}
            <div className="bg-on-background p-lg rounded-xl flex flex-col border border-white/10 hover:border-[#06B6D4]/50 transition-colors">
              <div className="w-10 h-10 rounded bg-[#06B6D4]/20 flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-[#06B6D4]">carpenter</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-md">Bespoke Joinery</h3>
              <p className="font-body-sm text-body-sm text-surface-variant flex-grow">Custom millwork and wood solutions crafted in our dedicated workshop to ensure unique identity and durability.</p>
              <div className="mt-lg pt-lg border-t border-white/10">
                <span className="font-mono-utility text-mono-utility text-[#06B6D4]">02 / CRAFTSMANSHIP</span>
              </div>
            </div>

            {/* F&F */}
            <div className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-secondary">chair</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Furniture &amp; Fixtures</h3>
              <p className="font-body-sm text-body-sm text-secondary flex-grow">Strategic sourcing and installation of high-end furniture that complements the architectural intent of your space.</p>
            </div>

            {/* Partitioning */}
            <div className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-secondary">dashboard</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Partitioning Systems</h3>
              <p className="font-body-sm text-body-sm text-secondary flex-grow">Glass, gypsum, and modular demountable walls designed for flexible spatial management and privacy.</p>
            </div>

            {/* Acoustic */}
            <div className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-secondary">surround_sound</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Acoustic Solutions</h3>
              <p className="font-body-sm text-body-sm text-secondary flex-grow">High-performance sound dampening and insulation systems for optimized acoustic environments.</p>
            </div>
          </div>
        </section>

        {/* Focus Section: Craftsmanship meets Industrial */}
        <section className="bg-primary-container py-2xl overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col lg:flex-row items-center gap-xl">
              <div className="lg:w-1/2">
                <h2 className="font-display-lg text-display-lg text-white mb-lg leading-tight">Bespoke Craftsmanship meets Industrial Scale.</h2>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-xl">We operate a state-of-the-art 50,000 sq. ft. manufacturing facility. This allows us to maintain absolute control over quality and timelines, bridging the gap between delicate interior design and heavy-duty engineering.</p>
                <div className="grid grid-cols-2 gap-lg mb-xl">
                  <div className="technical-border pl-md">
                    <span className="block font-headline-md text-headline-md text-tertiary-fixed">500+</span>
                    <span className="font-label-md text-label-md text-on-primary-container">Projects Delivered</span>
                  </div>
                  <div className="technical-border pl-md">
                    <span className="block font-headline-md text-headline-md text-tertiary-fixed">24/7</span>
                    <span className="font-label-md text-label-md text-on-primary-container">Facility Operation</span>
                  </div>
                </div>
                <button className="flex items-center gap-sm font-label-md text-label-md text-white group">
                  EXPLORE OUR FACILITY
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
                </button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    className="w-full h-full object-cover"
                    src="/fitout_workshop.jpg"
                    alt="A professional photograph showing the inside of a high-tech joinery workshop"
                  />
                </div>
                <div className="absolute -bottom-xl -right-xl w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">Completed Interiors</h2>
              <p className="font-body-md text-body-md text-secondary">A curated selection of our finest work across the region.</p>
            </div>
            <div className="flex gap-sm">
              <button className="p-sm border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-sm border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md h-[800px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/fitout_gallery1.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-lg flex flex-col justify-end">
                <span className="font-label-md text-label-md text-tertiary-fixed mb-xs">RETAIL</span>
                <h4 className="font-headline-sm text-headline-sm text-white">Flagship Boutique, Dubai Mall</h4>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/fitout_gallery2.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-md flex flex-col justify-end">
                <span className="font-label-md text-label-md text-tertiary-fixed mb-xs">CORPORATE</span>
                <h4 className="font-body-lg font-bold text-white">Global Tech Headquarters</h4>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/fitout_gallery3.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-md flex flex-col justify-end">
                <span className="font-label-md text-label-md text-tertiary-fixed mb-xs">HOSPITALITY</span>
                <h4 className="font-body-lg font-bold text-white">The Azure Restaurant</h4>
              </div>
            </div>
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/fitout_gallery4.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-lg flex flex-col justify-end">
                <span className="font-label-md text-label-md text-tertiary-fixed mb-xs">CO-WORKING</span>
                <h4 className="font-headline-sm text-headline-sm text-white">Innovation Hub Fit-out</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-surface-container-highest py-2xl border-t border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">Ready to Define Your Space?</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-xl max-w-2xl mx-auto">From minor modifications to complete turnkey fit-outs, our engineering team is ready to bring your vision to life.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-md">
              <button className="w-full md:w-auto bg-primary text-white font-label-md text-label-md px-xl py-md rounded-lg shadow-xl hover:shadow-2xl transition-all">Start Your Consultation</button>
              <button className="w-full md:w-auto bg-white border border-outline-variant text-primary font-label-md text-label-md px-xl py-md rounded-lg hover:bg-surface-container transition-all">Download Brochure</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FitoutPage