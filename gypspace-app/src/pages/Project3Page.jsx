import React, { useEffect, useRef } from 'react'

const Project3Page = () => {
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
              style={{ backgroundImage: `url('/lobby.png')` }}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-md py-base bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-md">
                FEATURED PROJECT
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">
                Executive Hospitality Suite
              </h1>
              <p className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg">
                Luxury interior solutions featuring bespoke cabinetry and advanced smart-room technology.
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
                    The Executive Hospitality Suite represents the pinnacle of luxury interior solutions. This project features bespoke cabinetry seamlessly integrated with advanced smart-room technology.
                  </p>
                  <p>
                    Every detail was designed to deliver an unparalleled experience, combining aesthetic elegance with cutting-edge automation.
                  </p>
                </div>
              </div>
              <div className="relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="/project_3.jpg"
                    alt="Executive Hospitality Suite"
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

export default Project3Page
