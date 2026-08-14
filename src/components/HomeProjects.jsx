import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from './EditableFields'

const HomeProjects = ({ showMoreButton = false, initialCount = 20 }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const gallery = cmsData?.gallery || []

  const projects = cmsData?.home?.projects || [
    {
      id: 1,
      title: 'Luxury Residential Villa',
      category: 'residential',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
      alt: 'Luxury Residential Villa',
      link: '/projects/1'
    },
    {
      id: 2,
      title: 'Commercial Office Complex',
      category: 'commercial',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_2.jpg',
      alt: 'Commercial Office Complex',
      link: '/projects/2'
    },
    {
      id: 3,
      title: 'Hotel & Restaurant Fitout',
      category: 'f-and-b',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_3.jpg',
      alt: 'Hotel & Restaurant Fitout',
      link: '/projects/3'
    },
    {
      id: 4,
      title: 'Villa Renovation',
      category: 'renovations',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_case_study.jpg',
      alt: 'Villa Renovation',
      link: '/projects/1'
    },
    {
      id: 5,
      title: 'Custom Joinery Works',
      category: 'joinery',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_fire_safety.jpg',
      alt: 'Custom Joinery Works',
      link: '/projects/2'
    },
    {
      id: 6,
      title: 'Office Renovation',
      category: 'renovations',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/civil_blueprint.jpg',
      alt: 'Office Renovation',
      link: '/projects/3'
    },
    {
      id: 7,
      title: 'Residential Apartment',
      category: 'residential',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_hvac.jpg',
      alt: 'Residential Apartment',
      link: '/projects/1'
    },
    {
      id: 8,
      title: 'Retail Store Fitout',
      category: 'commercial',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_joinery.jpg',
      alt: 'Retail Store Fitout',
      link: '/projects/3'
    },
    {
      id: 9,
      title: 'Café Interior',
      category: 'f-and-b',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_facility.jpg',
      alt: 'Café Interior',
      link: '/projects/2'
    },
    {
      id: 10,
      title: 'Kitchen Renovation',
      category: 'renovations',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_workshop.jpg',
      alt: 'Kitchen Renovation',
      link: '/projects/1'
    },
    {
      id: 11,
      title: 'Wardrobe Joinery',
      category: 'joinery',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/spec_quality.jpg',
      alt: 'Wardrobe Joinery',
      link: '/projects/2'
    },
    {
      id: 12,
      title: 'Restaurant Renovation',
      category: 'renovations',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/lobby.png',
      alt: 'Restaurant Renovation',
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
    : filteredProjects.slice(0, initialCount)

  const hasMore = showMoreButton && visibleCount < filteredProjects.length

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 10)
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
            value={cmsData?.home?.projectsSubtitle || 'A selection of our diversified portfolio across Residential, Commercial, F & B, Renovations, and Joinery disciplines.'}
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
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="f-and-b">F & B</option>
            <option value="renovations">Renovations</option>
            <option value="joinery">Joinery Works</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {visibleProjects.map((project, idx) => (
            isEditMode ? (
              <div key={project.id} className="flex flex-col gap-md">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant">
                  <EditableImage
                    src={project.image}
                    alt={project.alt || project.title}
                    onChange={(value) => updateProject(idx, 'image', value)}
                    editMode={isEditMode}
                    galleryItems={gallery}
                    className="w-full h-full object-cover"
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
                    {project.category === 'residential' ? 'Residential' : project.category === 'commercial' ? 'Commercial' : project.category === 'f-and-b' ? 'F & B' : project.category === 'renovations' ? 'Renovations' : project.category === 'joinery' ? 'Joinery Works' : project.category}
                  </p>
                </div>
              </div>
            ) : (
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
                    {project.category === 'residential' ? 'Residential' : project.category === 'commercial' ? 'Commercial' : project.category === 'f-and-b' ? 'F & B' : project.category === 'renovations' ? 'Renovations' : project.category === 'joinery' ? 'Joinery Works' : project.category}
                  </p>
                </div>
              </Link>
            )
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
