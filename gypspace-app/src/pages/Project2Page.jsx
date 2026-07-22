import React, { useEffect, useRef } from 'react'

const Project2Page = () => {
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
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/lab.png')` }}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-md py-base bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-md">
                FEATURED PROJECT
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">
                Precision Lab Facility
              </h1>
              <p className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg">
                State-of-the-art technical environment designed for maximum operational efficiency and clinical precision.
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
                  <p>
                    The Precision Lab Facility stands as a testament to advanced technical engineering. This state-of-the-art environment was designed to support maximum operational efficiency in demanding clinical and research settings.
                  </p>
                  <p>
                    From controlled atmospheres to precision HVAC systems, every specification was executed with clinical exactitude.
                  </p>
                </div>
              </div>
              <div className="relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="/project_2.jpg"
                    alt="Precision Lab Facility"
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

export default Project2Page
