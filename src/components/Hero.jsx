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
    </section>
  )
}

export default Hero
