import React from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from './EditableFields'

const Hero = () => {
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const heroData = cmsData?.home?.hero || {}

  const handleUpdate = (field, value) => {
    const updatedHero = { ...heroData, [field]: value }
    updateCmsData('home', { ...cmsData.home, hero: updatedHero })
  }

  const handleImageUpdate = (value) => {
    handleUpdate('heroImage', value)
  }

  return (
    <section className="relative h-screen md:h-[85vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
         <EditableImage
           src={heroData.heroImage || 'https://gypspace.s3.us-east-1.amazonaws.com/logo_main_update.png'}
           alt="Hero"
           onChange={handleImageUpdate}
           editMode={isEditMode}
         />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full pb-2xl">
        <div className="max-w-3xl">
          {heroData.badge && (
            <span className="inline-block py-1 px-3 bg-primary text-on-primary font-mono-utility text-mono-utility mb-md">
              {heroData.badge}
            </span>
          )}
          <EditableText
            value={heroData.title || ''}
            onChange={(value) => handleUpdate('title', value)}
            as="h1"
            className="font-display-lg text-display-lg text-white mb-lg"
            editMode={isEditMode}
          />
          <EditableText
            value={heroData.subtitle || ''}
            onChange={(value) => handleUpdate('subtitle', value)}
            as="p"
            className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg"
            editMode={isEditMode}
          />
          {heroData.ctaText && (
            <a
              href={heroData.ctaLink || '#'}
              className="inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-lg font-label-md uppercase tracking-widest hover:bg-opacity-90 transition-all"
            >
              {heroData.ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
