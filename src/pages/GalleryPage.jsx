import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { uploadImage } from '../lib/s3'

const AdminGalleryUpload = ({ onClose, onUploaded }) => {
  const { cmsData, updateCmsData } = useAdmin()
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const gallery = cmsData.gallery || []

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const url = await uploadImage(file)
      const newItem = {
        id: gallery.length > 0 ? Math.max(...gallery.map(i => i.id)) + 1 : 1,
        url,
        caption: file.name,
        category: 'general',
      }
      const updated = [...gallery, newItem]
      updateCmsData('gallery', updated)
      onUploaded?.(newItem)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }

    e.target.value = ''
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline-md text-headline-md text-primary">Upload Image</h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-primary text-2xl">×</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-label-md text-label-md text-primary mb-2">Select Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
            />
          </div>

          {uploading && (
            <div className="p-md bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-body-sm">
              Uploading...
            </div>
          )}
          {error && (
            <div className="p-md bg-red-50 border border-red-200 rounded-lg text-red-700 text-body-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const GalleryPage = () => {
  const { cmsData, isAuthenticated } = useAdmin()
  const gallery = cmsData.gallery || []
  const [filter, setFilter] = useState('all')
  const [showUpload, setShowUpload] = useState(false)

  const categories = ['all', ...new Set(gallery.map(item => item.category))]

  const filteredGallery = filter === 'all' ? gallery : gallery.filter(item => item.category === filter)

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-2xl">
        <div className="mb-xl flex items-start justify-between">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary mb-sm">Photo Gallery</h1>
            <p className="text-on-surface-variant font-body-md max-w-xl">
              A visual showcase of our projects and technical expertise across MEP, Fit-out, and Civil disciplines.
            </p>
          </div>
          {isAuthenticated && (
            <button
              onClick={() => setShowUpload(true)}
              className="h-10 px-6 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98]"
            >
              Upload Image
            </button>
          )}
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

        {showUpload && (
          <AdminGalleryUpload
            onClose={() => setShowUpload(false)}
            onUploaded={(item) => {
              if (filter !== 'all' && item.category !== filter) {
                setFilter('all')
              }
            }}
          />
        )}
      </div>
    </div>
  )
}

export default GalleryPage
