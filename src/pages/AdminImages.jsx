import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import initialCmsData from '../data/cmsData.json'
import { uploadImage } from '../lib/s3'

const AdminImages = () => {
  const { cmsData, updateCmsData } = useAdmin()
  const [uploadStatus, setUploadStatus] = useState('')
  const [error, setError] = useState('')
  const gallery = cmsData.gallery || []

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
      updateCmsData('gallery', [...gallery, newItem])
      setUploadStatus('Upload complete')
      setTimeout(() => setUploadStatus(''), 3000)
    } catch (err) {
      setError(err.message)
      setUploadStatus('')
    }

    e.target.value = ''
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-2xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-sm">Gallery Images</h1>
        <p className="text-on-surface-variant font-body-md mb-lg">Upload images directly to S3.</p>

        <div className="mb-6 flex items-center gap-3">
          <label className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors">
            Upload Image
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          </label>
          <button
            onClick={() => updateCmsData('gallery', initialCmsData.gallery || [])}
            className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
          >
            Reset
          </button>
        </div>

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
            <div key={item.id} className="aspect-square rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high">
              <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminImages
