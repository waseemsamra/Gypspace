import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const headerRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm')
      } else {
        header.classList.remove('shadow-sm')
      }
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
    { to: '/process', label: 'Process' },
    { to: '/works', label: 'Works' },
    { to: '/brand-story', label: 'Brand Story' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      ref={headerRef}
      className="w-full sticky top-0 z-50 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline"
    >
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <Link to="/">
          <span className="text-headline-md font-headline-md font-bold tracking-tighter text-primary dark:text-primary-fixed">
            GYPSPACE
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={`font-label-md text-label-md transition-colors ${isActive(link.to) ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed'}`}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            className="bg-navy-tech text-white px-md py-sm rounded-lg font-label-md hover:bg-opacity-90 transition-all uppercase tracking-wider"
            to="/quote"
          >
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-gutter py-lg">
          <nav className="flex flex-col gap-md">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                className={`font-label-md text-label-md transition-colors ${isActive(link.to) ? 'text-primary dark:text-primary-fixed font-bold' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed'}`}
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
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header