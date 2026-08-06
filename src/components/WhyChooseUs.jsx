import React, { useEffect, useRef } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from './EditableFields'

const WhyChooseUs = () => {
  const containerRef = useRef(null)
  const { cmsData, updateCmsData, isEditMode } = useAdmin()

  const sectionData = cmsData?.home?.whyChooseUs || {
    heading: 'Engineered for Excellence',
    description: 'Gypspace Technical Services LLC operates at the intersection of traditional engineering and future-ready innovation. We build with the precision required by today\'s leading corporations.',
    features: [
      { icon: 'verified', title: 'Unmatched Reliability', description: 'Consistent delivery schedules and rigorous quality control protocols that exceed industry benchmarks.' },
      { icon: 'groups', title: 'Deep Expertise', description: 'A multi-disciplinary team of certified engineers and project managers with global field experience.' },
      { icon: 'adjust', title: 'Precision Focused', description: 'Every dimension, every material, and every line of code is optimized for peak performance.' },
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