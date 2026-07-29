import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Corporate Headquarters',
    category: 'fitout',
    image: '/project_1.jpg',
    alt: 'Corporate Headquarters',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Precision Lab Facility',
    category: 'mep',
    image: '/project_2.jpg',
    alt: 'Precision Lab Facility',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Executive Hospitality Suite',
    category: 'fitout',
    image: '/project_3.jpg',
    alt: 'Executive Hospitality Suite',
    link: '/projects/3'
  },
  {
    id: 4,
    title: 'MEP Advanced Installation',
    category: 'mep',
    image: '/mep_case_study.jpg',
    alt: 'MEP Advanced Installation',
    link: '/projects/1'
  },
  {
    id: 5,
    title: 'Fire Safety Systems',
    category: 'mep',
    image: '/mep_fire_safety.jpg',
    alt: 'Fire Safety Systems',
    link: '/projects/2'
  },
  {
    id: 6,
    title: 'Structural Deep Foundation',
    category: 'civil',
    image: '/civil_blueprint.jpg',
    alt: 'Structural Deep Foundation',
    link: '/projects/3'
  }
]

const HomeProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-2xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-xl max-w-xl">
          <h2 className="font-headline-md text-headline-md text-primary mb-sm">
            Our Projects
          </h2>
          <p className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md">
            A selection of our diversified portfolio across MEP, Fit-out, and Civil disciplines.
          </p>
        </div>

        <div className="mb-lg">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-label-md text-label-md focus:outline-none focus:border-primary"
          >
            <option value="all">All Projects</option>
            <option value="mep">MEP</option>
            <option value="fitout">Fitout</option>
            <option value="civil">Civil Works</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={project.link} className="group flex flex-col gap-md">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant">
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  src={project.image}
                />
              </div>
              <div>
                <h3 className="font-headline-sm text-lg font-semibold text-primary mb-xs">{project.title}</h3>
                <p className="text-on-surface-variant font-body-sm mb-md capitalize">
                  {project.category === 'mep' ? 'MEP Works' : project.category === 'fitout' ? 'Fit-out Works' : 'Civil Works'}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-sm font-label-md text-label-md text-primary hover:opacity-70 transition-opacity"
          >
            View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeProjects
