import React, { useEffect, useRef } from 'react'

const WhyChooseUs = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const section = containerRef.current
    if (section) {
      const target = section.firstElementChild
      if (target) {
        target.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8')
        observer.observe(target)
      }
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-2xl bg-white overflow-hidden" id="why-choose-us">
      <div ref={containerRef} className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row gap-2xl items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl" />
            <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-sm">
              <img
                className="w-full h-auto object-cover"
                src="/why_choose_us.jpg"
                alt="High-precision metallic gears and technical components"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-lg rounded-lg text-white shadow-xl max-w-[240px]">
              <p className="font-headline-sm text-headline-sm mb-xs">15+</p>
              <p className="font-body-sm text-body-sm opacity-80">
                Years of Technical Mastery in the Region
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-xl">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">
                Engineered for Excellence
              </h2>
              <p className="text-on-surface-variant font-body-md mb-lg">
                Gypspace Technical Services LLC operates at the intersection of
                traditional engineering and future-ready innovation. We build
                with the precision required by today&apos;s leading
                corporations.
              </p>
            </div>
            <div className="space-y-lg">
              <div className="flex gap-md">
                <div className="shrink-0 w-10 h-10 border border-primary flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">
                    Unmatched Reliability
                  </h4>
                  <p className="text-body-sm text-on-surface-variant">
                    Consistent delivery schedules and rigorous quality control
                    protocols that exceed industry benchmarks.
                  </p>
                </div>
              </div>
              <div className="flex gap-md">
                <div className="shrink-0 w-10 h-10 border border-primary flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">
                    Deep Expertise
                  </h4>
                  <p className="text-body-sm text-on-surface-variant">
                    A multi-disciplinary team of certified engineers and project
                    managers with global field experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-md">
                <div className="shrink-0 w-10 h-10 border border-primary flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">
                    adjust
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">
                    Precision Focused
                  </h4>
                  <p className="text-body-sm text-on-surface-variant">
                    Every dimension, every material, and every line of code is
                    optimized for peak performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs