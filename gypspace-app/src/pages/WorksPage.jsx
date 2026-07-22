import React, { useEffect, useRef, useState } from 'react'

const WorksPage = () => {
  const containerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All Projects')

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

  const filters = ['All Projects', 'Corporate', 'Specialized', 'Residential', 'Hospitality']

  const projects = [
    {
      id: 1,
      title: 'Global Corporate HQ',
      subtitle: 'Minimalist Technical Integration',
      category: 'Corporate',
      image: '/work_1.jpg',
      span: 'md:col-span-8',
      height: 'h-[480px]',
      hasLink: true
    },
    {
      id: 2,
      title: 'Advanced Research Lab',
      subtitle: 'Clinical Precision & MEP',
      category: 'Specialized',
      image: '/work_2.jpg',
      span: 'md:col-span-4',
      height: 'h-[480px]',
      hasLink: false
    },
    {
      id: 3,
      title: 'Royal Hospitality Lounge',
      subtitle: 'Bespoke Joinery & Smart Systems',
      category: 'Hospitality',
      image: '/work_3.jpg',
      span: 'md:col-span-4',
      height: 'h-[400px]',
      hasLink: false
    },
    {
      id: 4,
      title: 'Modern Innovation Hub',
      subtitle: 'Collaborative Workspace Engineering',
      category: 'Commercial',
      image: '/work_4.jpg',
      span: 'md:col-span-8',
      height: 'h-[400px]',
      hasLink: false
    },
    {
      id: 5,
      title: 'Boutique Concept Store',
      subtitle: 'Brand-Centric Fit-out',
      category: 'Retail',
      image: '/work_5.jpg',
      span: 'md:col-span-6',
      height: 'h-[360px]',
      hasLink: false
    },
    {
      id: 6,
      title: 'Artisan Café',
      subtitle: 'Immersive Culinary Spaces',
      category: 'F&B',
      image: '/work_6.jpg',
      span: 'md:col-span-6',
      height: 'h-[360px]',
      hasLink: false
    }
  ]

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="pt-32 pb-xl blueprint-pattern border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-widest mb-md block">
                Our Portfolio
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-lg leading-tight">
                A Legacy of Precision: Our Portfolio
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Showcasing technical interior excellence and high-performance fit-out solutions across the UAE. We engineer spaces that blend reliability with corporate authority.
              </p>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="flex flex-wrap items-center gap-md mb-xl border-b border-outline-variant pb-md">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? 'bg-primary text-on-primary px-lg py-sm rounded-sm font-label-md'
                      : 'text-on-surface-variant hover:text-primary px-lg py-sm font-label-md transition-colors'
                  }
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="bento-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`col-span-12 ${project.span} group relative overflow-hidden bg-white border border-outline-variant rounded-xl project-card ${project.height} reveal-on-scroll`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute bottom-0 left-0 p-xl z-20 w-full">
                    <span className="bg-primary-container text-on-primary-container px-sm py-1 rounded text-[10px] uppercase font-bold tracking-widest mb-sm inline-block">
                      {project.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white mb-xs">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 font-body-md mb-md">
                      {project.subtitle}
                    </p>
                    {project.hasLink && (
                      <a className="flex items-center gap-xs text-white font-label-md group/link" href="#">
                        View Case Study
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface border-t border-outline-variant">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="text-center max-w-3xl mx-auto mb-2xl">
              <h2 className="font-display-lg text-display-lg text-primary mb-md">Expertise by Sector</h2>
              <p className="font-body-lg text-on-surface-variant">
                We deliver tailored solutions across diverse industries, combining technical rigor with aesthetic precision.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">home</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">Residential</h4>
                <p className="font-body-md text-on-surface-variant">
                  Whether modern, contemporary or classic, every build is designed uniquely to reflect your vision and lifestyle.
                </p>
              </div>
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">shopping_bag</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">Retail</h4>
                <p className="font-body-md text-on-surface-variant">
                  Custom-crafted interiors that amplify brand identity and customer engagement. Spaces that make every visit memorable.
                </p>
              </div>
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">restaurant</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">F&amp;B</h4>
                <p className="font-body-md text-on-surface-variant">
                  Bespoke joinery for restaurants that enhance the dining experience through immersive, storyteller-driven design.
                </p>
              </div>
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">hotel</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">Hospitality</h4>
                <p className="font-body-md text-on-surface-variant">
                  Thoughtfully-crafted interiors for hotels and resorts, delivering comfort, elegance, and unforgettable guest experiences.
                </p>
              </div>
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">business</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">Commercial</h4>
                <p className="font-body-md text-on-surface-variant">
                  Stylish, functional spaces designed for high-performance offices, showrooms, and corporate environments.
                </p>
              </div>
              <div className="p-xl bg-white border border-outline-variant rounded-xl hover:border-on-tertiary-container transition-colors group">
                <span className="material-symbols-outlined text-on-tertiary-container mb-md text-3xl">precision_manufacturing</span>
                <h4 className="font-headline-sm text-headline-sm mb-sm">Specialized</h4>
                <p className="font-body-md text-on-surface-variant">
                  High-performance technical fit-outs for laboratories, research facilities, and precision industrial spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-lg text-center">
            <h2 className="font-display-lg text-display-lg mb-lg">Have a vision for your next project?</h2>
            <p className="font-body-lg text-slate-300 max-w-2xl mx-auto mb-xl">
              Our expert project managers collaborate closely with clients to understand their vision and provide full transparency on design and technical execution.
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              <button className="bg-on-tertiary-container text-white px-xl py-md rounded font-label-md hover:opacity-90 transition-opacity">
                Start a Consultation
              </button>
              <button className="border border-slate-600 text-white px-xl py-md rounded font-label-md hover:bg-slate-800 transition-colors">
                View Technical Specs
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WorksPage
