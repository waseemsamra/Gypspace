import React, { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'
import { uploadImage } from '../lib/s3'

const EditableText = ({ value, onChange, as = 'p', className = '', editMode = false }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(value)

  const baseClass = className || 'text-on-surface-variant font-body-md'

  if (!editMode) {
    return React.createElement(as, { className: baseClass }, value)
  }

  const isBlock = ['h1','h2','h3','h4','h5','h6','p','div','li'].includes(as)

  if (isEditing) {
    return (
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => {
          onChange(draft)
          setIsEditing(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(draft)
            setIsEditing(false)
          }
        }}
        className={`border-b-2 border-primary bg-transparent text-primary px-1 py-0.5 font-body-md focus:outline-none focus:bg-white focus:px-1 focus:py-0.5 ${isBlock ? 'block w-full' : 'inline-block'}`}
        autoFocus
        style={isBlock ? {} : { minWidth: `${Math.max(value.length, 3) * 0.6}em` }}
      />
    )
  }

  return React.createElement(
    'span',
    {
      onClick: () => setIsEditing(true),
      className: `${baseClass} cursor-pointer hover:border-b-2 hover:border-primary/50 hover:pb-0.5 border-b-2 border-transparent transition-all duration-150 rounded-none`,
      title: 'Click to edit',
    },
    value
  )
}

const EditableImage = ({ src, alt, onChange, editMode = false, galleryItems = [], className = '' }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(src)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const url = await uploadImage(file)
      onChange(url)
      setDraft(url)
      setIsEditing(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
    e.target.value = ''
  }

  if (!editMode) {
    return <img src={src} alt={alt} className={className} />
  }

  if (isEditing) {
    if (galleryItems.length > 0) {
      return (
        <div className="space-y-2" onMouseDown={(e) => e.preventDefault()}>
          <p className="text-xs text-on-surface-variant font-body-sm">Choose from gallery:</p>
          <div className="grid grid-cols-4 gap-2">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onChange(item.url)
                  setDraft(item.url)
                  setIsEditing(false)
                }}
                className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all hover:border-primary ${
                  draft === item.url ? 'border-primary ring-2 ring-primary/30' : 'border-outline-variant'
                }`}
              >
                <img src={item.url} alt={item.caption || ''} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-outline-variant" onMouseDown={(e) => e.preventDefault()}>
            <label className="px-3 py-1.5 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors text-sm">
              {uploading ? 'Uploading...' : 'Upload New'}
              <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="hidden" />
            </label>
            <span className="text-xs text-on-surface-variant">or upload new image</span>
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      )
    }

    return (
      <div className="space-y-2" onMouseDown={(e) => e.preventDefault()}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            onChange(draft)
            setIsEditing(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onChange(draft)
              setIsEditing(false)
            }
          }}
          placeholder="Image URL or upload below"
          className="w-full px-2 py-1 border border-primary bg-white/90 text-primary text-sm font-body-md focus:outline-none"
          autoFocus
        />
        <div className="flex items-center gap-2">
          <label className="px-3 py-1.5 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors text-sm">
            {uploading ? 'Uploading...' : 'Upload Image'}
            <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="hidden" />
          </label>
          <span className="text-xs text-on-surface-variant">or paste URL above</span>
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    )
  }

  return (
    <div
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsEditing(true) }}
      className="cursor-pointer relative group block"
      title="Click to change image"
    >
      <img src={src} alt={alt} className={className} />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center pointer-events-none">
        <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity text-4xl drop-shadow-lg">
          edit
        </span>
      </div>
    </div>
  )
}

export { EditableText, EditableImage }
