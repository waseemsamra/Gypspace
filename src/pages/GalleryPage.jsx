import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'

const GalleryPage = () => {
  const { cmsData } = useAdmin()
  const gallery = cmsData.gallery || []
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(gallery.map(item => item.category))]

  const filteredGallery = filter === 'all' ? gallery : gallery.filter(item => item.category === filter)

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-2xl">
        <div className="mb-xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-sm">Photo Gallery</h1>
          <p className="text-on-surface-variant font-body-md max-w-xl">
            A visual showcase of our projects and technical expertise across MEP, Fit-out, and Civil disciplines.
          </p>
        </div>

        <div className="mb-lg flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-md py-2 rounded-lg font-label-md text-label-md border transition-colors ${
                filter === category
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-white text-primary border-outline-variant hover:border-primary'
              }`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high">
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-lg">
                  <p className="text-white font-headline-sm text-headline-sm">{item.caption}</p>
                  <p className="text-white/70 font-body-sm mt-1 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-2xl text-on-surface-variant">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryPage
