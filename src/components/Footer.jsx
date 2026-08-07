import React from 'react'
import { useAdmin } from '../contexts/AdminContext'

const Footer = () => {
  const { cmsData } = useAdmin()
  const gallery = cmsData?.gallery || []
  const mainLogo = gallery.find(item => {
    const caption = (item.caption || '').toLowerCase()
    const url = (item.url || '').toLowerCase()
    return /main[-\s_]?logo/.test(caption) || /main[-\s_]?logo/.test(url) || /logo/.test(caption) || /logo/.test(url)
  })
  const logoSrc = mainLogo?.url || 'https://gypspace.s3.us-east-1.amazonaws.com/gallery/1786124797730-main-logo.png'
  return (
    <footer className="w-full py-xl px-lg border-t border-outline-variant bg-surface-container-highest">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-md">
          <img src={logoSrc} alt="Gypspace" className="h-[6.5rem] w-auto object-contain" />
          <div className="font-headline-sm text-headline-sm font-bold text-primary">Gypspace</div>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Advanced technical services, engineering, and interior fit-out solutions for high-performance architectural environments.
        </p>
      </div>
      <div>
        <h4 className="font-label-md text-label-md mb-md uppercase">QUICK LINKS</h4>
        <ul className="space-y-sm">
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/process">
              Our Process
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/works">
              Work
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/fitout">
              Fit-out Works
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/mep">
              M.E.P Works
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/civil">
              Civil Works
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/clients">
              Clients
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-label-md text-label-md mb-md uppercase">RESOURCES</h4>
        <ul className="space-y-sm">
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/careers">
              Careers
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/specifications">
              Technical Specs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-label-md text-label-md mb-md uppercase">LEGAL</h4>
        <ul className="space-y-sm">
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/sustainability">
              Sustainability
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/production">
              Production
            </a>
          </li>
          <li>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/terms">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-4 border-t border-outline-variant pt-lg mt-xl">
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-90">
          &copy; 2024 Gypspace Engineering &amp; Interior Fit-out. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer