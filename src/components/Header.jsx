import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

const Header = () => {
  const headerRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isAuthenticated, isEditMode, toggleEditMode, logout, cmsData } = useAdmin()
  const gallery = cmsData?.gallery || []
  const mainLogo = gallery.find(item => {
    const caption = (item.caption || '').toLowerCase()
    const url = (item.url || '').toLowerCase()
    return /main[-\s_]?logo/.test(caption) || /main[-\s_]?logo/.test(url)
  })
  const logoSrc = mainLogo?.url || 'https://gypspace.s3.us-east-1.amazonaws.com/main-logo.png'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/brand-story', label: 'Brand Story' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const navTextClass = scrolled ? 'text-gray-900' : 'text-white'
  const navHoverClass = scrolled ? 'hover:text-gray-900' : 'hover:text-white'
  const activeBorderClass = scrolled ? 'border-gray-900' : 'border-white'

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-200 border-b border-gray-300 shadow-sm' : 'bg-black/10 border-b border-transparent'}`}
    >
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Gypspace" className="h-full max-h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={`font-label-md text-label-md transition-colors ${isActive(link.to) ? `${navTextClass} border-b-2 ${activeBorderClass} pb-1` : `${navTextClass} ${navHoverClass}`}`}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            className="bg-navy-tech text-white px-md py-sm rounded-lg font-label-md hover:bg-opacity-90 transition-all uppercase tracking-wider"
            to="/quote"
          >
            Get a Quote
          </Link>
          {isAuthenticated && (
            <>
              <button
                onClick={toggleEditMode}
                className={`px-md py-sm rounded-lg font-label-md uppercase tracking-wider transition-all ${
                  isEditMode
                    ? 'bg-green-600 text-white'
                    : 'bg-primary text-on-primary'
                }`}
              >
                {isEditMode ? 'Edit Mode On' : 'Edit Mode'}
              </button>
              {isEditMode && (
                <button
                  onClick={() => {
                    alert('Changes saved successfully!')
                  }}
                  className="px-md py-sm bg-green-600 text-white rounded-lg font-label-md uppercase tracking-wider hover:bg-green-700 transition-all"
                >
                  Save
                </button>
              )}
              <button
                onClick={logout}
                className="px-md py-sm border border-outline-variant rounded-lg font-label-md uppercase tracking-wider hover:bg-surface-container transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>
        <button
          className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className={`md:hidden border-t px-gutter py-lg transition-colors duration-300 ${scrolled ? 'bg-gray-200 border-gray-300' : 'bg-black/50 border-gray-700'}`}>
          <nav className="flex flex-col gap-md">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                className={`font-label-md text-label-md transition-colors ${isActive(link.to) ? `${navTextClass} font-bold` : `${navTextClass} ${navHoverClass}`}`}
                to={link.to}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <Link
                className="bg-navy-tech text-white px-md py-sm rounded-lg font-label-md text-center uppercase tracking-wider"
                to="/quote"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
             {isAuthenticated && (
               <>
                 <button
                   onClick={() => { toggleEditMode(); setMobileOpen(false) }}
                   className={`w-full px-md py-sm rounded-lg font-label-md text-center uppercase tracking-wider ${
                     isEditMode
                       ? 'bg-green-600 text-white'
                       : 'bg-primary text-on-primary'
                   }`}
                 >
                   {isEditMode ? 'Edit Mode On' : 'Edit Mode'}
                 </button>
                 {isEditMode && (
                   <button
                     onClick={() => { alert('Changes saved successfully!'); setMobileOpen(false) }}
                     className="w-full px-md py-sm bg-green-600 text-white rounded-lg font-label-md text-center uppercase tracking-wider"
                   >
                     Save
                   </button>
                 )}
                 <button
                   onClick={() => { logout(); setMobileOpen(false) }}
                   className="w-full px-md py-sm border border-outline-variant rounded-lg font-label-md text-center uppercase tracking-wider"
                 >
                   Logout
                 </button>
               </>
             )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header