import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import initialCmsData from '../data/cmsData.json'
import { uploadImage, listS3Images } from '../lib/s3'

const AdminImages = () => {
  const { cmsData, updateCmsData } = useAdmin()
  const [uploadStatus, setUploadStatus] = useState('')
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [editForm, setEditForm] = useState({ caption: '', category: 'general' })
  const gallery = cmsData.gallery || []
  const [s3Images, setS3Images] = useState([])
  const [loadingS3, setLoadingS3] = useState(false)
  const [showS3Picker, setShowS3Picker] = useState(false)
  const [s3ContinuationToken, setS3ContinuationToken] = useState(undefined)
  const [s3HasMore, setS3HasMore] = useState(false)

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadStatus('Uploading...')
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
      setUploadStatus('Upload complete')
      setTimeout(() => setUploadStatus(''), 3000)
    } catch (err) {
      setError(err.message)
      setUploadStatus('')
    }

    e.target.value = ''
  }

  const handleLoadS3Images = async () => {
    setLoadingS3(true)
    setError('')
    try {
      const result = await listS3Images(50)
      setS3Images(result.images)
      setS3ContinuationToken(result.nextContinuationToken)
      setS3HasMore(!!result.nextContinuationToken)
      setShowS3Picker(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoadingS3(false)
    }
  }

  const handleLoadMoreS3 = async () => {
    if (!s3ContinuationToken) return
    setLoadingS3(true)
    setError('')
    try {
      const result = await listS3Images(50, s3ContinuationToken)
      setS3Images(prev => [...prev, ...result.images])
      setS3ContinuationToken(result.nextContinuationToken)
      setS3HasMore(!!result.nextContinuationToken)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoadingS3(false)
    }
  }

  const handleAddFromS3 = (url) => {
    const newItem = {
      id: gallery.length > 0 ? Math.max(...gallery.map(i => i.id)) + 1 : 1,
      url,
      caption: url.split('/').pop() || 'S3 Image',
      category: 'general',
    }
    const updated = [...gallery, newItem]
    updateCmsData('gallery', updated)
  }

  const handleImageClick = (item) => {
    setSelectedImage(item)
    setEditForm({ caption: item.caption, category: item.category })
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
    setEditForm({ caption: '', category: 'general' })
  }

  const handleUpdateImage = () => {
    if (!selectedImage) return
    const updated = gallery.map(item => 
      item.id === selectedImage.id 
        ? { ...item, caption: editForm.caption, category: editForm.category }
        : item
    )
    updateCmsData('gallery', updated)
    handleCloseModal()
  }

  const handleDeleteImage = (id) => {
    const updated = gallery.filter(item => item.id !== id)
    updateCmsData('gallery', updated)
    handleCloseModal()
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-2xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-sm">Gallery Images</h1>
        <p className="text-on-surface-variant font-body-md mb-lg">Click any image to edit details. Upload images directly.</p>

        <div className="mb-6 flex items-center gap-3">
          <label className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors">
            Upload Image
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          </label>
          <button
            onClick={handleLoadS3Images}
            disabled={loadingS3}
            className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors disabled:opacity-50"
          >
            {loadingS3 ? 'Loading S3...' : 'Choose from S3'}
          </button>
          <button
            onClick={() => updateCmsData('gallery', initialCmsData.gallery || [])}
            className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
          >
            Reset
          </button>
        </div>

        {showS3Picker && (
          <div className="mb-8 p-6 bg-white rounded-xl border border-outline-variant shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-primary">S3 Images</h3>
              <button
                onClick={() => { setShowS3Picker(false); setS3Images([]); setS3ContinuationToken(undefined); setS3HasMore(false) }}
                className="text-on-surface-variant hover:text-primary text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-4">Click an image to add it to your gallery.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {s3Images.map((item) => (
                <div
                  key={item.url}
                  onClick={() => handleAddFromS3(item.url)}
                  className="aspect-square rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high cursor-pointer hover:border-primary transition-colors relative group"
                >
                  <img src={item.url} alt={item.caption || ''} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-label-md uppercase tracking-wider bg-primary/80 px-2 py-1 rounded">Add</span>
                  </div>
                </div>
              ))}
            </div>
            {s3Images.length === 0 && (
              <p className="text-center text-on-surface-variant py-8">No images found in S3 bucket.</p>
            )}
            {s3HasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleLoadMoreS3}
                  disabled={loadingS3}
                  className="h-10 px-6 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {loadingS3 ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </div>
        )}

        {uploadStatus && (
          <div className="mb-6 p-md bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-body-sm">
            {uploadStatus}
          </div>
        )}
        {error && (
          <div className="mb-6 p-md bg-red-50 border border-red-200 rounded-lg text-red-700 text-body-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {gallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleImageClick(item)}
              className="aspect-square rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high cursor-pointer hover:border-primary transition-colors"
            >
              <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline-md text-headline-md text-primary">Edit Image</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-on-surface-variant hover:text-primary text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption} 
                  className="w-full aspect-video object-cover rounded-lg border border-outline-variant"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-label-md text-label-md text-primary mb-2">Caption</label>
                  <input
                    type="text"
                    value={editForm.caption}
                    onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })}
                    className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary mb-2">Category</label>
                  <select
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                  >
                    <option value="fitout">Fitout</option>
                    <option value="mep">MEP</option>
                    <option value="civil">Civil Works</option>
                    <option value="general">General</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleUpdateImage}
                    className="h-10 px-6 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98]"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => handleDeleteImage(selectedImage.id)}
                    className="h-10 px-6 bg-red-600 text-white font-label-md uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all active:scale-[0.98]"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="h-10 px-6 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminImages
