import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from '../components/EditableFields'

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const gallery = cmsData?.gallery || []
  const projects = cmsData?.projects || [
    {
      id: 1,
      title: 'Corporate Headquarters',
      description: 'A multi-floor executive workspace focusing on minimalist aesthetics and seamless technical integration.',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
      alt: 'Corporate Headquarters'
    },
    {
      id: 2,
      title: 'Precision Lab Facility',
      description: 'State-of-the-art technical environment designed for maximum operational efficiency and clinical precision.',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_2.jpg',
      alt: 'Precision Lab Facility'
    },
    {
      id: 3,
      title: 'Executive Hospitality Suite',
      description: 'Luxury interior solutions featuring bespoke cabinetry and advanced smart-room technology.',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_3.jpg',
      alt: 'Executive Hospitality Suite'
    }
  ]

  const updateProject = (index, field, value) => {
    const updated = [...projects]
    updated[index] = { ...updated[index], [field]: value }
    updateCmsData('projects', updated)
  }

  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 transition-all duration-700 opacity-100 translate-y-0">
          <EditableImage
            src={cmsData?.projectsPage?.heroImage || 'https://gypspace.s3.us-east-1.amazonaws.com/joinery.png'}
            onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, heroImage: value })}
            alt="Projects hero"
            editMode={isEditMode}
            galleryItems={gallery}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <div className="mb-md inline-flex items-center gap-sm bg-primary/5 px-md py-1 border border-primary/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <EditableText
                value={cmsData?.projectsPage?.badge || 'Projects'}
                onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, badge: value })}
                as="span"
                className="font-mono-utility text-mono-utility uppercase tracking-widest text-primary"
                editMode={isEditMode}
              />
            </div>
            <EditableText
              value={cmsData?.projectsPage?.title || 'Our Projects'}
              onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, title: value })}
              as="h1"
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg leading-tight"
              editMode={isEditMode}
            />
            <EditableText
              value={cmsData?.projectsPage?.subtitle || 'Showcasing technical interior excellence and high-performance fit-out solutions across the UAE.'}
              onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, subtitle: value })}
              as="p"
              className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg"
              editMode={isEditMode}
            />
          </div>
        </div>
      </section>
      <section className="py-2xl bg-surface" id="featured-projects">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-xl">
            <EditableText
              value={cmsData?.projectsPage?.featuredTitle || 'Featured Projects'}
              onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, featuredTitle: value })}
              as="h2"
              className="font-headline-md text-headline-md text-primary mb-sm"
              editMode={isEditMode}
            />
            <EditableText
              value={cmsData?.projectsPage?.featuredSubtitle || 'A showcase of our most complex and high-fidelity technical interior solutions.'}
              onChange={(value) => updateCmsData('projectsPage', { ...cmsData?.projectsPage, featuredSubtitle: value })}
              as="p"
              className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md"
              editMode={isEditMode}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
            {projects.map((project, idx) => (
              <div key={project.id} className="group flex flex-col gap-md">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant">
                  <EditableImage
                    src={project.image}
                    alt={project.alt || project.title}
                    onChange={(value) => updateProject(idx, 'image', value)}
                    editMode={isEditMode}
                    galleryItems={gallery}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <EditableText
                    value={project.title}
                    onChange={(value) => updateProject(idx, 'title', value)}
                    as="h3"
                    className="font-headline-sm text-headline-sm text-primary mb-xs"
                    editMode={isEditMode}
                  />
                  <EditableText
                    value={project.description}
                    onChange={(value) => updateProject(idx, 'description', value)}
                    as="p"
                    className="text-on-surface-variant font-body-sm mb-md"
                    editMode={isEditMode}
                  />
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
    </main>
  )
}

export default ProjectsPage
