import React from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from './EditableFields'

const MajorAreas = () => {
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const areas = cmsData?.home?.majorAreas || [
    {
      id: 'mep',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/major_mep.jpg',
      icon: 'settings_input_component',
      label: 'Technical Precision',
      title: 'M.E.P & Home Automation',
      description: 'Comprehensive Mechanical, Electrical, and Plumbing engineering. We focus on energy efficiency, system longevity, and rigorous technical compliance across all industrial and commercial sectors.',
      linkText: 'View Specialization',
      linkHref: '/mep',
    },
    {
      id: 'fitout',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/major_fitout.jpg',
      icon: 'architecture',
      label: 'Bespoke Interiors',
      title: 'Fit-out Works',
      description: 'Transforming bare shells into luxury high-performance environments. Our fit-out solutions combine architectural vision with bespoke joinery and premium material finishing.',
      linkText: 'View Specialization',
      linkHref: '/fitout',
    },
    {
      id: 'civil',
      image: 'https://gypspace.s3.us-east-1.amazonaws.com/major_civil.jpg',
      icon: 'foundation',
      label: 'Structural Integrity',
      title: 'Civil Works',
      description: 'From deep foundations to complex structural renovations. We manage large-scale civil engineering projects with a focus on safety, load-bearing precision, and architectural permanence.',
      linkText: 'View Specialization',
      linkHref: '/civil',
    },
  ]

  const updateArea = (index, field, value) => {
    const updated = [...areas]
    updated[index] = { ...updated[index], [field]: value }
    updateCmsData('home', { ...cmsData.home, majorAreas: updated })
  }

  return (
    <section className="py-2xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-xl max-w-xl">
          <EditableText
            value={cmsData?.home?.majorAreasTitle || 'Major Areas of Expertise'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, majorAreasTitle: value })}
            as="h2"
            className="font-headline-md text-headline-md text-primary mb-sm"
            editMode={isEditMode}
          />
          <EditableText
            value={cmsData?.home?.majorAreasSubtitle || 'End-to-end technical solutions across Mechanical, Electrical, Plumbing, Fit-out, and Civil disciplines.'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, majorAreasSubtitle: value })}
            as="p"
            className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md"
            editMode={isEditMode}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {areas.map((area, idx) => (
            <Link
              key={area.id}
              to={area.linkHref}
              className="group relative overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl block"
            >
              <div className="h-64 overflow-hidden relative">
                <EditableImage
                  src={area.image}
                  alt={area.title}
                  onChange={(value) => updateArea(idx, 'image', value)}
                  editMode={isEditMode}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-md left-md flex items-center gap-xs text-white">
                  <span className="material-symbols-outlined">{area.icon}</span>
                  <span className="font-label-md text-label-md">{area.label}</span>
                </div>
              </div>
              <div className="p-lg">
                <EditableText
                  value={area.title}
                  onChange={(value) => updateArea(idx, 'title', value)}
                  as="h3"
                  className="font-headline-md text-xl font-semibold text-primary mb-sm"
                  editMode={isEditMode}
                />
                <EditableText
                  value={area.description}
                  onChange={(value) => updateArea(idx, 'description', value)}
                  as="p"
                  className="font-body-md text-body-md text-secondary mb-xl line-clamp-2"
                  editMode={isEditMode}
                />
                <span className="inline-flex items-center gap-sm font-label-md text-label-md text-technical-cyan group/btn">
                  <span>{area.linkText}</span>
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MajorAreas