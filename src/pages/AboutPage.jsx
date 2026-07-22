import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

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
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/about_hero.jpg')` }}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-md py-base bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-md">
                14+ YEARS OF EXPERTISE
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">
                We Build Better.
              </h1>
              <p className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg">
                Dedicated to excellence in fit-out and joinery, transforming visions into architectural realities across the UAE.
              </p>
              <div className="flex gap-md">
                <Link
                  to="/projects"
                  className="bg-white text-primary px-xl py-md font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors inline-flex items-center gap-sm"
                >
                  Explore Projects <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-xl py-md font-label-md text-label-md rounded hover:bg-white/10 transition-colors inline-flex items-center gap-sm"
                >
                  Contact Us <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-2xl bg-white border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
              <div className="reveal-on-scroll">
                <h2 className="font-headline-md text-headline-md text-primary mb-lg">
                  A Legacy of Precision
                </h2>
                <div className="space-y-md text-on-surface-variant font-body-md text-body-md">
                  <p>
                    We are Gypspace Technical Services LLC, a Dubai-based fit-out and joinery company established in 2012. Our journey is defined by a commitment to delivering high-quality interior solutions that transcend standard expectations.
                  </p>
                  <p>
                    With over 14 years of industry experience and a state-of-the-art manufacturing facility, we combine traditional craftsmanship with innovative technology. We specialize in tailoring spaces that perfectly align with our clients&apos; functional needs and aesthetic aspirations.
                  </p>
                </div>
                <div className="mt-xl grid grid-cols-3 gap-md">
                  <div>
                    <div className="font-display-lg text-primary text-headline-md mb-xs">
                      2012
                    </div>
                    <div className="font-label-md text-label-md text-secondary">
                      Established
                    </div>
                  </div>
                  <div>
                    <div className="font-display-lg text-primary text-headline-md mb-xs">
                      14+
                    </div>
                    <div className="font-label-md text-label-md text-secondary">
                      Years Exp.
                    </div>
                  </div>
                  <div>
                    <div className="font-display-lg text-primary text-headline-md mb-xs">
                      500+
                    </div>
                    <div className="font-label-md text-label-md text-secondary">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="/about_facility.jpg"
                    alt="A modern, high-tech manufacturing facility for high-end joinery and furniture production"
                  />
                </div>
                <div className="absolute -bottom-md -left-md bg-primary-container p-lg rounded shadow-lg hidden md:block">
                  <span className="text-white font-mono-utility text-mono-utility">
                    Precision Engineering Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-2xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-2xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">
                Our Process
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md max-w-xl mx-auto">
                A personalized and transparent approach to turning your vision into a structural reality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:border-on-primary-container transition-all group reveal-on-scroll">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
                  Joinery &amp; Bespoke Production
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Our Dubai facility provides complete joinery, furniture, and interior solutions crafted with master-level precision.
                </p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:border-on-primary-container transition-all group reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">handyman</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
                  TurnKey Fitout
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  From concept to completion, we handle every detail including MEP, finishing, and project management for a seamless transition.
                </p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:border-on-primary-container transition-all group reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
                  Renovations
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Transforming existing spaces into modern, functional environments that align with your evolving brand or lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Bento Grid */}
        <section className="py-2xl bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end mb-2xl gap-md">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">
                  Selected Work
                </h2>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Serving a wide range of residential, retail, F&amp;B, and hospitality clientele across the region.
                </p>
              </div>
              <button className="text-primary font-label-md text-label-md border-b-2 border-primary pb-base hover:opacity-70 transition-opacity">
                View Portfolio
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-[300px]">
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant reveal-on-scroll">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/portfolio_1.jpg"
                  alt="Palm Jumeirah Villa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                  <span className="text-white/70 font-label-md text-label-md uppercase mb-xs">
                    Residential
                  </span>
                  <h4 className="text-white font-headline-sm text-headline-sm">
                    Palm Jumeirah Villa
                  </h4>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/portfolio_2.jpg"
                  alt="Artisan Café"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                  <span className="text-white/70 font-label-md text-label-md uppercase mb-xs">
                    F&amp;B
                  </span>
                  <h4 className="text-white font-headline-sm text-headline-sm">
                    Artisan Café
                  </h4>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/portfolio_3.jpg"
                  alt="Boutique Concept"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                  <span className="text-white/70 font-label-md text-label-md uppercase mb-xs">
                    Retail
                  </span>
                  <h4 className="text-white font-headline-sm text-headline-sm">
                    Boutique Concept
                  </h4>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/portfolio_4.jpg"
                  alt="Luxe Hotel Suite"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                  <span className="text-white/70 font-label-md text-label-md uppercase mb-xs">
                    Hospitality
                  </span>
                  <h4 className="text-white font-headline-sm text-headline-sm">
                    Luxe Hotel Suite
                  </h4>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/portfolio_5.jpg"
                  alt="Corporate Hub"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                  <span className="text-white/70 font-label-md text-label-md uppercase mb-xs">
                    Commercial
                  </span>
                  <h4 className="text-white font-headline-sm text-headline-sm">
                    Corporate Hub
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-2xl bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
              <div>
                <h2 className="font-display-lg text-display-lg mb-xl">
                  Our Commitment to Excellence
                </h2>
                <div className="space-y-xl">
                  <div className="flex gap-lg reveal-on-scroll">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">
                        verified
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">
                        Precision Engineering
                      </h4>
                      <p className="text-white/70 font-body-sm text-body-sm">
                        Every millimeter matters. We use advanced technology to ensure our joinery meets international standards of accuracy.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-lg reveal-on-scroll"
                    style={{ transitionDelay: '100ms' }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">
                        brush
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">
                        Artisan Craftsmanship
                      </h4>
                      <p className="text-white/70 font-body-sm text-body-sm">
                        While we embrace technology, we never lose the human touch that defines high-quality, bespoke furniture and finishing.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-lg reveal-on-scroll"
                    style={{ transitionDelay: '200ms' }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">
                        lightbulb
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-xs">
                        Sustainable Innovation
                      </h4>
                      <p className="text-white/70 font-body-sm text-body-sm">
                        We constantly explore new materials and methods to deliver more efficient, durable, and eco-conscious interiors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <div className="bg-white/5 backdrop-blur-md p-2xl rounded-2xl border border-white/10">
                  <blockquote className="mb-lg">
                    <p className="text-body-lg font-body-lg italic text-white/90">
                      &quot;Design is not just what it looks like and feels like. Design is how it works. At Gypspace, we ensure the mechanism matches the aesthetic.&quot;
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-full bg-secondary-container" />
                    <div>
                      <div className="font-label-md text-label-md text-white">
                        Managing Director
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-widest font-mono-utility">
                        Gypspace Technical Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage