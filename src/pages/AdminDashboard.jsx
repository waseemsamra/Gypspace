import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import initialCmsData from '../data/cmsData.json'
import AdminImages from './AdminImages'

const AdminDashboard = () => {
  const { isAuthenticated, logout, cmsData, updateCmsData, exportData, importData } = useAdmin()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
  const [activeSubSection, setActiveSubSection] = useState(null)
  const [editData, setEditData] = useState(null)
  const [message, setMessage] = useState('')
  const [uploadStatus, setUploadStatus] = useState('')

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  const handleEdit = (section) => {
    const sectionData = cmsData[section]
    const fallback = initialCmsData[section]
    const dataToEdit = sectionData !== undefined ? sectionData : fallback
    setEditData(JSON.parse(JSON.stringify(dataToEdit)))
    setActiveSection(section)
    setActiveSubSection(null)
    setMessage('')
  }

  const handleSubEdit = (subSection) => {
    setActiveSubSection(subSection)
    setActiveSection('gallery')
    setMessage('')
  }

  const handleSave = () => {
    updateCmsData(activeSection, editData)
    setMessage('Changes saved successfully')
    setTimeout(() => setMessage(''), 3000)
  }

  const handleImport = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      await importData(file)
      setMessage('Data imported successfully')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage('Failed to import data')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'clients', label: 'Clients' },
    { id: 'gallery', label: 'Gallery' }
  ]

  return (
    <div className="min-h-screen bg-surface">
      <div className="flex">
        <aside className="w-64 bg-white border-r border-outline-variant min-h-screen">
          <div className="p-6 border-b border-outline-variant">
            <h1 className="font-headline-sm text-headline-sm text-primary">CMS Dashboard</h1>
            <p className="text-on-surface-variant text-body-sm mt-1">Manage your content</p>
          </div>
          <nav className="p-4 space-y-2">
            {sections.map((section) => (
              <div key={section.id}>
                {section.id === 'gallery' ? (
                  <div>
                    <button
                      onClick={() => handleEdit(section.id)}
                      className={`w-full text-left px-md py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center justify-between ${
                        activeSection === section.id && !activeSubSection
                          ? 'bg-primary text-on-primary'
                          : 'text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      <span>{section.label}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {activeSection === section.id && !activeSubSection ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {(activeSection === section.id || activeSubSection) && (
                      <div className="ml-4 mt-1 space-y-1">
                        <button
                          onClick={() => handleSubEdit('images')}
                          className={`w-full text-left px-md py-2 rounded-lg font-label-md text-label-md transition-colors ${
                            activeSubSection === 'images'
                              ? 'bg-primary text-on-primary'
                              : 'text-on-surface-variant hover:bg-surface-container'
                          }`}
                        >
                          Images
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={section.id}
                    onClick={() => handleEdit(section.id)}
                    className={`w-full text-left px-md py-2 rounded-lg font-label-md text-label-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-on-primary'
                        : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {section.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-outline-variant">
            <button
              onClick={handleLogout}
              className="w-full px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {activeSubSection === 'images' || activeSection === 'gallery' ? (
            <AdminImages />
          ) : (
            <>
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary capitalize">
                      {activeSection}
                    </h2>
                    <p className="text-on-surface-variant text-body-md mt-1">
                      Edit {activeSection} content
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <label className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary cursor-pointer hover:bg-surface-container transition-colors">
                      Import JSON
                      <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                    </label>
                    <button
                      onClick={exportData}
                      className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
                    >
                      Export JSON
                    </button>
                  </div>
                </div>

                {message && (
                  <div className="mb-6 p-md bg-green-50 border border-green-200 rounded-lg text-green-700 text-body-sm">
                    {message}
                  </div>
                )}

                <div className="bg-white rounded-xl border border-outline-variant p-6 shadow-sm">
                  {activeSection === 'home' && editData && (
                    <div className="space-y-6">
                      <div>
                        <label className="block font-label-md text-label-md text-primary mb-2">Hero Title</label>
                        <textarea
                          value={editData.hero.title}
                          onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, title: e.target.value } })}
                          className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                          rows="2"
                        />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-primary mb-2">Hero Subtitle</label>
                        <textarea
                          value={editData.hero.subtitle}
                          onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, subtitle: e.target.value } })}
                          className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                          rows="3"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-md text-label-md text-primary mb-2">CTA Text</label>
                          <input
                            type="text"
                            value={editData.hero.ctaText}
                            onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, ctaText: e.target.value } })}
                            className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md text-primary mb-2">CTA Link</label>
                          <input
                            type="text"
                            value={editData.hero.ctaLink}
                            onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, ctaLink: e.target.value } })}
                            className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSave}
                    className="h-12 px-8 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98]"
                  >
                    Save Changes
                  </button>
                </div>

                <div className="mt-8 bg-white rounded-xl border border-outline-variant p-6 shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Raw JSON Data</h3>
                  <pre className="p-4 bg-surface-container rounded-lg text-body-sm text-on-surface-variant overflow-auto max-h-96 border border-outline-variant">
                    {JSON.stringify(cmsData[activeSection], null, 2)}
                  </pre>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
