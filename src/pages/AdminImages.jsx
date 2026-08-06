import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { resolveImageUrl, getImageStorage } from '../config'

const AdminImages = () => {
  const { cmsData, updateCmsData } = useAdmin()
  const [selectedIds, setSelectedIds] = useState([])
  const [urlInput, setUrlInput] = useState('')
  const [storage, setStorage] = useState('local')
  const [uploadStatus, setUploadStatus] = useState('')
  const gallery = cmsData.gallery || []

  const toggleSelect = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const handleDeleteSelected = () => {
    if (!selectedIds.length) return
    const updated = gallery.filter(item => !selectedIds.includes(item.id))
    updateCmsData('gallery', updated)
    setSelectedIds([])
  }

  const handleAddByUrl = () => {
    if (!urlInput.trim()) return
    const resolved = resolveImageUrl(urlInput.trim(), storage)
    const newItem = {
      id: gallery.length > 0 ? Math.max(...gallery.map(i => i.id)) + 1 : 1,
      url: resolved,
      caption: '',
      category: 'general'
    }
    updateCmsData('gallery', [...gallery, newItem])
    setUrlInput('')
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const newItem = {
        id: gallery.length > 0 ? Math.max(...gallery.map(i => i.id)) + 1 : 1,
        url: event.target.result,
        caption: file.name.replace(/\.[^/.]+$/, ''),
        category: 'general'
      }
      updateCmsData('gallery', [...gallery, newItem])
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const handleDirectoryUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    
    if (imageFiles.length === 0) {
      setUploadStatus('No image files found in directory')
      return
    }

    setUploadStatus(`Uploading ${imageFiles.length} images...`)

    let processed = 0
    const newGallery = [...gallery]
    const maxId = gallery.length > 0 ? Math.max(...gallery.map(i => i.id)) : 0

    imageFiles.forEach((file, index) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const newItem = {
          id: maxId + index + 1,
          url: event.target.result,
          caption: file.name.replace(/\.[^/.]+$/, ''),
          category: 'general'
        }
        newGallery.push(newItem)
        processed++

        if (processed === imageFiles.length) {
          updateCmsData('gallery', newGallery)
          setUploadStatus(`Successfully uploaded ${imageFiles.length} images`)
          setTimeout(() => setUploadStatus(''), 3000)
        }
      }
      reader.readAsDataURL(file)
    })

    e.target.value = ''
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-2xl">
        <div className="mb-xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-sm">Gallery Images</h1>
          <p className="text-on-surface-variant font-body-md max-w-xl">
            Select images to use on the website. Click images to select/deselect.
          </p>
        </div>

        <div className="mb-6 p-4 bg-white border border-outline-variant rounded-xl space-y-4">
          <h3 className="font-headline-sm text-headline-sm text-primary">Add New Image</h3>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
              className="px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
            >
              <option value="local">Local/Upload</option>
              <option value="s3">S3 URL</option>
            </select>
            {storage === 's3' ? (
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://gypspace.s3.us-east-1.amazonaws.com/image.jpg"
                className="flex-1 min-w-[200px] px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
              />
            ) : (
              <>
                <label className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors">
                  Upload Image
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
                <label className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors">
                  Upload Directory
                  <input 
                    type="file" 
                    webkitdirectory="true" 
                    directory="true" 
                    onChange={handleDirectoryUpload} 
                    className="hidden" 
                  />
                </label>
              </>
            )}
            <button
              onClick={handleAddByUrl}
              disabled={storage === 's3' && !urlInput.trim()}
              className="h-10 px-6 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>
        </div>

        {uploadStatus && (
          <div className="mb-6 p-md bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-body-sm">
            {uploadStatus}
          </div>
        )}

        {selectedIds.length > 0 && (
          <div className="mb-6 flex items-center gap-4">
            <span className="font-label-md text-label-md text-primary">
              {selectedIds.length} selected
            </span>
            <button
              onClick={handleDeleteSelected}
              className="px-md py-2 bg-red-600 text-white rounded-lg font-label-md text-label-md hover:bg-red-700 transition-colors"
            >
              Delete Selected
            </button>
            <button
              onClick={() => setSelectedIds([])}
              className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
            >
              Clear Selection
            </button>
          </div>
        )}

        {gallery.length === 0 ? (
          <div className="text-center py-2xl text-on-surface-variant">
            No images in gallery. Add images from the Gallery section.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleSelect(item.id)}
                className={`relative aspect-square cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                  selectedIds.includes(item.id)
                    ? 'border-primary shadow-lg'
                    : 'border-outline-variant hover:border-primary/50'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {selectedIds.includes(item.id) && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminImages
