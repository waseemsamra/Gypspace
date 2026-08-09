import React, { useEffect, useRef } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from './EditableFields'

const WhyChooseUs = () => {
  const containerRef = useRef(null)
  const { cmsData, updateCmsData, isEditMode } = useAdmin()

  const sectionData = cmsData?.home?.whyChooseUs || {
    heading: 'Built on Quality & Craftsmanship',
    description: 'Gypspace Technical Services LLC delivers professional civil and interior finishing works with a strong focus on quality, precision, and reliable project execution. Our experienced team works closely with clients, consultants, and main contractors to deliver projects to the required standards and timelines.',
    features: [
      { icon: 'verified', title: 'Reliable Execution', description: 'We understand the importance of completing work on schedule while maintaining consistent quality and proper coordination with other trades.' },
      { icon: 'groups', title: 'Skilled & Experienced Team', description: 'Our skilled workforce has hands-on experience across gypsum, civil, tiling, plastering, painting, demolition, and renovation works.' },
      { icon: 'adjust', title: 'Quality Focused', description: 'From material selection and preparation to final finishing, we pay close attention to workmanship and project specifications.' },
    ]
  }

  const gallery = cmsData?.gallery || []

  const updateField = (field, value) => {
    updateCmsData('home', { ...cmsData.home, whyChooseUs: { ...sectionData, [field]: value } })
  }

  const updateFeature = (index, field, value) => {
    const updated = [...sectionData.features]
    updated[index] = { ...updated[index], [field]: value }
    updateField('features', updated)
  }

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
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
              <EditableImage
                src={sectionData.image || 'https://gypspace.s3.us-east-1.amazonaws.com/why_choose_us.jpg'}
                onChange={(value) => updateField('image', value)}
                alt="Why choose us"
                editMode={isEditMode}
                galleryItems={gallery}
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
              <EditableText
                value={sectionData.heading}
                onChange={(value) => updateField('heading', value)}
                as="h2"
                className="font-headline-md text-headline-md text-primary mb-md"
                editMode={isEditMode}
              />
              <EditableText
                value={sectionData.description}
                onChange={(value) => updateField('description', value)}
                as="p"
                className="text-on-surface-variant font-body-md mb-lg"
                editMode={isEditMode}
              />
            </div>
            <div className="space-y-lg">
              {sectionData.features.map((feature, idx) => (
                <div key={idx} className="flex gap-md">
                  <div className="shrink-0 w-10 h-10 border border-primary flex items-center justify-center rounded">
                    <span className="material-symbols-outlined text-primary">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <EditableText
                      value={feature.title}
                      onChange={(value) => updateFeature(idx, 'title', value)}
                      as="h4"
                      className="font-label-md text-label-md text-primary mb-xs"
                      editMode={isEditMode}
                    />
                    <EditableText
                      value={feature.description}
                      onChange={(value) => updateFeature(idx, 'description', value)}
                      as="p"
                      className="text-body-sm text-on-surface-variant"
                      editMode={isEditMode}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs