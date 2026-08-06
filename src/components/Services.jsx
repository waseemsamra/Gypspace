import React from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText } from './EditableFields'

const Services = () => {
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const servicesData = cmsData?.home?.services || [
    {
      id: 1,
      icon: 'architecture',
      title: 'Engineering Design',
      description: 'Comprehensive blueprinting and conceptual modeling focused on mechanical integrity and spatial efficiency for modern facilities.',
      features: ['CAD/CAM Integration', 'Structural Integrity Analysis'],
    },
    {
      id: 2,
      icon: 'account_tree',
      title: 'Project Management',
      description: 'End-to-end lifecycle oversight, ensuring critical milestones are met with precision while maintaining strict compliance with safety standards.',
      features: ['Agile Technical Delivery', 'Resource Optimization'],
    },
    {
      id: 3,
      icon: 'precision_manufacturing',
      title: 'Technical Consulting',
      description: 'Specialized advisory services for digital transformation, industrial automation, and operational performance enhancement.',
      features: ['Feasibility Studies', 'System Audits'],
    },
  ]

  const handleUpdate = (index, field, value) => {
    const updated = [...servicesData]
    updated[index] = { ...updated[index], [field]: value }
    updateCmsData('home', { ...cmsData.home, services: updated })
  }

  return (
    <section className="py-2xl bg-surface-container-low" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-xl">
          <EditableText
            value={cmsData?.home?.servicesTitle || 'Systematic approaches'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, servicesTitle: value })}
            as="h2"
            className="font-headline-md text-headline-md text-primary mb-sm"
            editMode={isEditMode}
          />
          <EditableText
            value={cmsData?.home?.servicesSubtitle || 'Systematic approaches to complex technical challenges, tailored to your industrial requirements.'}
            onChange={(value) => updateCmsData('home', { ...cmsData.home, servicesSubtitle: value })}
            as="p"
            className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md"
            editMode={isEditMode}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white border border-outline-variant p-lg rounded-xl hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <span
                  className="material-symbols-outlined text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {service.icon}
                </span>
              </div>
              <EditableText
                value={service.title}
                onChange={(value) => handleUpdate(idx, 'title', value)}
                as="h3"
                className="font-headline-sm text-headline-sm text-primary mb-md"
                editMode={isEditMode}
              />
              <EditableText
                value={service.description}
                onChange={(value) => handleUpdate(idx, 'description', value)}
                as="p"
                className="text-on-surface-variant font-body-sm mb-lg flex-grow"
                editMode={isEditMode}
              />
              <ul className="space-y-sm text-mono-utility text-primary">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
