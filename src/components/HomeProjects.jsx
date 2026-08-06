import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText } from './EditableFields'

const HomeProjects = ({ showMoreButton = false, initialCount = 6 }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const { cmsData, updateCmsData, isEditMode } = useAdmin()

  const projects = cmsData?.home?.projects || [
    {
      id: 1,
      title: 'Corporate Headquarters',
      category: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
      alt: 'Corporate Headquarters',
      link: '/projects/1'
    },
    {
      id: 2,
      title: 'Precision Lab Facility',
      category: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_2.jpg',
      alt: 'Precision Lab Facility',
      link: '/projects/2'
    },
    {
      id: 3,
      title: 'Executive Hospitality Suite',
      category: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_3.jpg',
      alt: 'Executive Hospitality Suite',
      link: '/projects/3'
    },
    {
      id: 4,
      title: 'MEP Advanced Installation',
      category: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_case_study.jpg',
      alt: 'MEP Advanced Installation',
      link: '/projects/1'
    },
    {
      id: 5,
      title: 'Fire Safety Systems',
      category: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_fire_safety.jpg',
      alt: 'Fire Safety Systems',
      link: '/projects/2'
    },
    {
      id: 6,
      title: 'Structural Deep Foundation',
      category: 'civil',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/civil_blueprint.jpg',
      alt: 'Structural Deep Foundation',
      link: '/projects/3'
    },
    {
      id: 7,
      title: 'HVAC Integration',
      category: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_hvac.jpg',
      alt: 'HVAC Integration',
      link: '/projects/1'
    },
    {
      id: 8,
      title: 'Bespoke Joinery',
      category: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_joinery.jpg',
      alt: 'Bespoke Joinery',
      link: '/projects/3'
    },
    {
      id: 9,
      title: 'Facility Expansion',
      category: 'civil',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_facility.jpg',
      alt: 'Facility Expansion',
      link: '/projects/2'
    },
    {
      id: 10,
      title: 'Industrial Fitout',
      category: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_workshop.jpg',
      alt: 'Industrial Fitout',
      link: '/projects/1'
    },
    {
      id: 11,
      title: 'Quality Control Lab',
      category: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_quality.jpg',
      alt: 'Quality Control Lab',
      link: '/projects/2'
    },
    {
      id: 12,
      title: 'Luxury Lobby',
      category: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/lobby.png',
      alt: 'Luxury Lobby',
      link: '/projects/3'
    }
  ]

  const updateProject = (index, field, value) => {
    const updated = [...projects]
    updated[index] = { ...updated[index], [field]: value }
    updateCmsData('home', { ...cmsData.home, projects: updated })
  }

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const visibleProjects = showMoreButton
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects

  const hasMore = showMoreButton && visibleCount < filteredProjects.length

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <section className="py-2xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-xl max-w-xl">
          <EditableText
            value={cmsData?.home?.projectsTitle || 'Our Projects'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, projectsTitle: value })}
            as="h2"
            className="font-headline-md text-headline-md text-primary mb-sm"
            editMode={isEditMode}
          />
          <EditableText
            value={cmsData?.home?.projectsSubtitle || 'A selection of our diversified portfolio across MEP, Fit-out, and Civil disciplines.'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, projectsSubtitle: value })}
            as="p"
            className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md"
            editMode={isEditMode}
          />
        </div>

        <div className="mb-lg">
          <select
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value)
              setVisibleCount(initialCount)
            }}
            className="px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-label-md text-label-md focus:outline-none focus:border-primary"
          >
            <option value="all">All Projects</option>
            <option value="mep">MEP</option>
            <option value="fitout">Fitout</option>
            <option value="civil">Civil Works</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {visibleProjects.map((project, idx) => (
            <Link key={project.id} to={project.link} className="group flex flex-col gap-md">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant">
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  src={project.image}
                />
              </div>
              <div>
                <EditableText
                  value={project.title}
                  onChange={(value) => updateProject(idx, 'title', value)}
                  as="h3"
                  className="font-headline-sm text-lg font-semibold text-primary mb-xs"
                  editMode={isEditMode}
                />
                <p className="text-on-surface-variant font-body-sm mb-md capitalize">
                  {project.category === 'mep' ? 'MEP Works' : project.category === 'fitout' ? 'Fit-out Works' : 'Civil Works'}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-xl flex justify-center">
            <button
              onClick={handleShowMore}
              className="h-12 px-8 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98]"
            >
              Show More ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {!showMoreButton && (
          <div className="mt-xl">
            <Link
              to="/projects"
              className="inline-flex items-center gap-sm font-label-md text-label-md text-primary hover:opacity-70 transition-opacity"
            >
              View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeProjects
