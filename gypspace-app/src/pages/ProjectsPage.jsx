import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Corporate Headquarters',
      description: 'A multi-floor executive workspace focusing on minimalist aesthetics and seamless technical integration.',
      image: '/project_1.jpg',
      alt: 'Corporate Headquarters'
    },
    {
      id: 2,
      title: 'Precision Lab Facility',
      description: 'State-of-the-art technical environment designed for maximum operational efficiency and clinical precision.',
      image: '/project_2.jpg',
      alt: 'Precision Lab Facility'
    },
    {
      id: 3,
      title: 'Executive Hospitality Suite',
      description: 'Luxury interior solutions featuring bespoke cabinetry and advanced smart-room technology.',
      image: '/project_3.jpg',
      alt: 'Executive Hospitality Suite'
    }
  ]

  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 transition-all duration-700 opacity-100 translate-y-0">
          <div
            className="w-full h-full bg-cover bg-center brightness-[0.95]"
            style={{ backgroundImage: `url('/joinery.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <div className="mb-md inline-flex items-center gap-sm bg-primary/5 px-md py-1 border border-primary/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono-utility text-mono-utility uppercase tracking-widest text-primary">Projects</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg leading-tight">
              Our Projects
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
              Showcasing technical interior excellence and high-performance fit-out solutions across the UAE.
            </p>
          </div>
        </div>
      </section>
      <section className="py-2xl bg-surface" id="featured-projects">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Featured Projects</h2>
            <p className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md">
              A showcase of our most complex and high-fidelity technical interior solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-md">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant">
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    src={project.image}
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{project.title}</h3>
                  <p className="text-on-surface-variant font-body-sm mb-md">{project.description}</p>
                  <Link
                    className="inline-flex items-center gap-xs text-label-md font-label-md text-primary hover:opacity-70 transition-opacity"
                    to={`/projects/${project.id}`}
                  >
                    View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <Contact />
    </main>
  )
}

export default ProjectsPage
