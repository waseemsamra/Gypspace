import React from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText } from './EditableFields'

const Services = () => {
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const servicesData = cmsData?.home?.services || [
    {
      id: 1,
      number: '01',
      title: 'Site Assessment & Planning',
      description: 'We assess the site requirements, review drawings and specifications, and plan the work sequence to ensure smooth and efficient execution.',
      features: ['Site inspection & measurements', 'Drawing & scope review'],
    },
    {
      id: 2,
      number: '02',
      title: 'Professional Execution',
      description: 'Our experienced team executes the works with attention to detail, proper coordination, and adherence to approved specifications.',
      features: ['Skilled workforce', 'Quality workmanship'],
    },
    {
      id: 3,
      number: '03',
      title: 'Quality & Timely Delivery',
      description: 'We maintain quality throughout the project while coordinating with other trades and working toward agreed project timelines.',
      features: ['Quality control & inspection', 'Timely project completion'],
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
            value={cmsData?.home?.servicesSubtitle || 'Professional execution, quality workmanship, and reliable project delivery tailored to your project requirements.'}
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
              <div className="text-4xl font-headline-md text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                {service.number}
              </div>
              <EditableText
                value={service.title}
                onChange={(value) => handleUpdate(idx, 'title', value)}
                as="h3"
                className="font-label-md text-label-md text-primary mb-md"
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
