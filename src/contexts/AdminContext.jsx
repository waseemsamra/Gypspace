import React, { createContext, useContext, useState, useEffect } from 'react'
import initialCmsData from '../data/cmsData.json'

const AdminContext = createContext(null)

const ADMIN_CREDENTIALS = {
  username: 'adminn',
  password: 'admin123'
}

  const loadCmsData = () => {
    try {
      const stored = localStorage.getItem('gypspace_cms_data')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.version !== initialCmsData.version) {
          localStorage.removeItem('gypspace_cms_data')
          return initialCmsData
        }
        
        const merged = { ...initialCmsData, ...parsed }
        
        if (!merged.gallery || !Array.isArray(merged.gallery)) {
          merged.gallery = initialCmsData.gallery
        } else {
          merged.gallery = merged.gallery.filter(item => {
            return item && typeof item === 'object' && item.id && item.url
          })
        }
        
        if (!Array.isArray(merged.projects) || merged.projects.length < initialCmsData.projects.length) {
          merged.projects = initialCmsData.projects
        }
        
        return merged
      }
    } catch (e) {
      console.error('Failed to load CMS data', e)
    }
    return initialCmsData
  }

const saveCmsData = (data) => {
  try {
    const serialized = JSON.stringify(data, null, 2)
    const sizeInMB = (serialized.length / (1024 * 1024)).toFixed(2)
    if (sizeInMB > 4.5) {
      console.warn(`CMS data size (${sizeInMB}MB) is approaching localStorage limit (~5MB). Images may not persist. Consider using S3 URLs instead of data uploads.`)
    }
    localStorage.setItem('gypspace_cms_data', serialized)
  } catch (e) {
    console.error('Failed to save CMS data. localStorage may be full. Try removing some images or use S3 URLs.', e)
  }
}

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cmsData, setCmsData] = useState(loadCmsData)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    const session = localStorage.getItem('gypspace_admin_session')
    if (session) {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('gypspace_admin_session', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setIsEditMode(false)
    localStorage.removeItem('gypspace_admin_session')
  }

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev)
  }

  const updateCmsData = (section, data) => {
    const newData = { ...cmsData, [section]: data }
    setCmsData(newData)
    saveCmsData(newData)
  }

  const resetCmsData = () => {
    setCmsData(initialCmsData)
    saveCmsData(initialCmsData)
  }

  const exportData = () => {
    const blob = new Blob([JSON.stringify(cmsData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cms-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          setCmsData(data)
          saveCmsData(data)
          resolve(data)
        } catch (err) {
          reject(err)
        }
      }
      reader.onerror = reject
      reader.readAsText(file)
    })
  }

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, cmsData, updateCmsData, resetCmsData, exportData, importData, isEditMode, toggleEditMode }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
