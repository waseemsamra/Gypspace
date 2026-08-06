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
      return { ...initialCmsData, ...parsed }
    }
  } catch (e) {
    console.error('Failed to load CMS data', e)
  }
  return initialCmsData
}

const saveCmsData = (data) => {
  try {
    localStorage.setItem('gypspace_cms_data', JSON.stringify(data, null, 2))
  } catch (e) {
    console.error('Failed to save CMS data', e)
  }
}

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cmsData, setCmsData] = useState(loadCmsData)

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
    localStorage.removeItem('gypspace_admin_session')
  }

  const updateCmsData = (section, data) => {
    const newData = { ...cmsData, [section]: data }
    setCmsData(newData)
    saveCmsData(newData)
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
    <AdminContext.Provider value={{ isAuthenticated, login, logout, cmsData, updateCmsData, exportData, importData }}>
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
