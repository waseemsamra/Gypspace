import React, { useEffect, useRef } from 'react'

const BrandStoryPage = () => {
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
      const hero = container.querySelector('section')
      if (hero) {
        hero.classList.remove('opacity-0', 'translate-y-8')
        hero.classList.add('opacity-100', 'translate-y-0')
      }
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="/brand_hero.jpg"
              alt="Gypspace lobby"
            />
            <div className="absolute inset-0 bg-primary-container/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed font-mono-utility text-mono-utility mb-md rounded">EST. 2012 | DUBAI</span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">A Legacy of Precision</h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
                For 14 years, Gypspace Technical Services has been the silent engine behind Dubai's most ambitious interiors. We bridge the gap between architectural vision and technical reality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h2 className="font-headline-md text-headline-md text-primary mb-md">Our Mission</h2>
                <div className="w-12 h-1 bg-on-tertiary-container mb-lg"></div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed">
                  To deliver unmatched technical mastery through the fusion of industrial precision and master joinery. We believe that every structural detail is a testament to architectural excellence.
                </p>
                <div className="flex flex-col gap-md">
                  <div className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-on-tertiary-container mt-1">architecture</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Reliable Results</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Engineering consistency across every square millimeter of a project.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-on-tertiary-container mt-1">settings_suggest</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Technical Mastery</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Deep expertise in modern materials and advanced fabrication methods.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="absolute -right-20 -top-20 w-64 h-64 border-8 border-outline-variant/30 rounded-full"></div>
                <img
                  className="w-full aspect-video object-cover rounded-xl shadow-2xl relative z-10"
                  src="/brand_mission.jpg"
                  alt="CNC milling"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl technical-grid">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">The Gypspace Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Thirteen years of evolution from a local workshop to a regional technical powerhouse.</p>
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl relative">
              <div className="md:text-right pr-lg">
                <div className="bg-white p-lg border border-outline-variant rounded-lg inline-block shadow-sm">
                  <span className="font-mono-utility text-mono-utility text-on-tertiary-container font-bold mb-xs block">2012</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Inception</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Gypspace founded in Dubai with a core focus on advanced drywall and gypsum installations for corporate clients.</p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container"></div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl relative">
              <div></div>
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary-container"></div>
              </div>
              <div className="pl-lg">
                <div className="bg-white p-lg border border-outline-variant rounded-lg inline-block shadow-sm">
                  <span className="font-mono-utility text-mono-utility text-on-tertiary-container font-bold mb-xs block">2017</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Digital Transformation</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Integration of BIM (Building Information Modeling) and CAD-driven fabrication to enhance project accuracy.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl relative">
              <div className="md:text-right pr-lg">
                <div className="bg-white p-lg border border-outline-variant rounded-lg inline-block shadow-sm">
                  <span className="font-mono-utility text-mono-utility text-on-tertiary-container font-bold mb-xs block">2024</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Manufacturing Hub</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Transition into a state-of-the-art 50,000 sq. ft. manufacturing facility equipped with advanced robotic CNC stations.</p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-on-tertiary-container ring-4 ring-tertiary-fixed"></div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-primary-container text-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-xl text-center md:text-left">
              <h2 className="font-headline-md text-headline-md mb-xs">Craftsmanship Meets Technology</h2>
              <p className="font-body-lg text-body-lg text-surface-variant opacity-80">The synergy of human touch and machine precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-white/10 h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/brand_bento1.jpg"
                  alt="Precision joinery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg">
                  <h4 className="font-headline-sm text-headline-sm mb-xs">Precision Joinery</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant max-w-md">Our master joiners work alongside CNC systems to deliver finishes that are both architecturally stunning and structurally flawless.</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10 h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/brand_bento2.jpg"
                  alt="CNC optimization"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg">
                  <h4 className="font-headline-sm text-headline-sm mb-xs">CNC Optimization</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant">Automated milling for repeatable accuracy across large-scale projects.</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10 h-[300px]">
                <div className="absolute inset-0 bg-on-tertiary-container/10 backdrop-blur-sm p-lg flex flex-col justify-end">
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-md">inventory</span>
                  <h4 className="font-headline-sm text-headline-sm mb-xs">Material Library</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant">Sourcing globally, fabricating locally.</p>
                </div>
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-white/10 h-[300px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/brand_bento4.jpg"
                  alt="Structural integration"
                />
                <div className="absolute inset-0 bg-black/40 p-lg flex flex-col justify-end">
                  <h4 className="font-headline-sm text-headline-sm mb-xs">Structural Integration</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant">Solving complex architectural puzzles through smart engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-primary">Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="p-lg border border-outline-variant hover:border-on-tertiary-container transition-colors group">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-lg group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Precision Engineering</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">We don't settle for "close enough." Every dimension is verified against rigorous industrial standards.</p>
              </div>
              <div className="p-lg border border-outline-variant hover:border-on-tertiary-container transition-colors group">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-lg group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined text-primary">eco</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Sustainable Innovation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Minimizing waste through algorithmic nesting and ethical sourcing of construction materials.</p>
              </div>
              <div className="p-lg border border-outline-variant hover:border-on-tertiary-container transition-colors group">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-lg group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Unmatched Reliability</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Our word is our bond. We deliver complex technical scopes on schedule and with total transparency.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl relative overflow-hidden bg-surface-bright">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="bg-white p-xl border border-outline-variant shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-xl items-center">
              <div className="w-40 h-40 shrink-0 bg-surface-container-highest flex items-center justify-center overflow-hidden grayscale">
                <img
                  className="w-full h-full object-cover"
                  src="/brand_leadership.jpg"
                  alt="Managing Director"
                />
              </div>
              <div>
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl mb-md">format_quote</span>
                <p className="font-headline-sm text-headline-sm text-primary italic mb-lg leading-snug">
                  "At Gypspace, we don't just build interiors; we engineer environments that inspire confidence. Our legacy is built on the precision of our craft and the strength of our partnerships."
                </p>
                <div className="flex items-center gap-md">
                  <div className="w-10 h-1 bg-on-tertiary-container"></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary">Managing Director</h4>
                    <p className="font-mono-utility text-mono-utility text-on-surface-variant">Gypspace Technical Services LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-surface-container-high -z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}></div>
        </section>

        <section className="py-xl bg-primary">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-lg text-white">
            <div>
              <h2 className="font-headline-md text-headline-md">Ready to start your journey with us?</h2>
              <p className="font-body-md text-body-md text-surface-variant opacity-80">Explore how our technical expertise can elevate your next architectural project.</p>
            </div>
            <div className="flex gap-md">
              <button className="bg-on-tertiary-container text-white px-xl py-md rounded-lg font-label-md text-label-md hover:brightness-110 transition-all">Download Company Profile</button>
              <a href="/contact" className="border border-white/30 text-white px-xl py-md rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BrandStoryPage
