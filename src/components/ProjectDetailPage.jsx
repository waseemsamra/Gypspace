import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import { EditableText, EditableImage } from '../components/EditableFields'

const ProjectDetailPage = () => {
  const containerRef = useRef(null)
  const { id } = useParams()
  const { cmsData, updateCmsData, isEditMode } = useAdmin()
  const gallery = cmsData?.gallery || []
  const projects = cmsData?.projects || []
  const project = projects.find(p => p.id === parseInt(id)) || {
    id: parseInt(id),
    title: 'The Vertex Commercial Hub',
    description: 'A multi-floor executive workspace focusing on minimalist aesthetics and seamless technical integration.',
    image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
    heroImage: 'https://gypspace.s3.us-east-1.amazonaws.com/main-project.png',
    blueprintImage: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
    gallery1: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_gallery1.jpg',
    gallery2: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_gallery2.jpg'
  }

  const updateProject = (field, value) => {
    const updated = projects.map(p => p.id === project.id ? { ...p, [field]: value } : p)
    updateCmsData('projects', updated)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const container = containerRef.current
    if (container) {
      const elements = container.querySelectorAll('.reveal-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <EditableImage
              src={project.heroImage || project.image}
              alt={project.title}
              onChange={(value) => updateProject('heroImage', value)}
              editMode={isEditMode}
              galleryItems={gallery}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full pb-2xl">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 bg-primary text-on-primary font-mono-utility text-mono-utility mb-md">FLAGSHIP PROJECT</span>
              <EditableText
                value={project.title}
                onChange={(value) => updateProject('title', value)}
                as="h1"
                className="font-display-lg text-display-lg text-white mb-lg"
                editMode={isEditMode}
              />
              <div className="flex flex-wrap gap-xl">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Scope Area</span>
                  <span className="font-headline-md text-headline-md text-white">850,000+ SQ FT</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-xl">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Project Valuation</span>
                  <span className="font-headline-md text-headline-md text-white">$145M USD</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-xl">
                  <span className="font-label-md text-label-md text-white/60 uppercase">Status</span>
                  <span className="font-headline-md text-headline-md text-white">Delivered 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="py-2xl max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
          <div className="md:col-span-7 scroll-reveal">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Engineering Scope</span>
            <EditableText
              value="Precision BIM Level 3 Integration"
              onChange={(value) => updateProject('engineeringTitle', value)}
              as="h2"
              className="font-headline-md text-headline-md text-on-surface mt-sm mb-lg"
              editMode={isEditMode}
            />
            <div className="space-y-md text-on-surface-variant">
              <EditableText
                value="The Vertex represents the pinnacle of our technical services capability. Orchestrated through full BIM Level 3 integration, the structural and MEP scope was executed with a tolerance of 0.05mm precision across all primary load-bearing elements."
                onChange={(value) => updateProject('engineeringText1', value)}
                as="p"
                className="font-body-lg text-body-lg leading-relaxed"
                editMode={isEditMode}
              />
              <EditableText
                value="Our engineering team managed over 45,000 technical clashes in the pre-construction phase using proprietary AI-driven spatial analysis, ensuring a zero-rework fabrication cycle for the primary steel framework. The MEP systems leverage a decentralized smart-grid architecture, reducing operational energy overhead by 22% compared to standard commercial benchmarks."
                onChange={(value) => updateProject('engineeringText2', value)}
                as="p"
                className="font-body-md text-body-md"
                editMode={isEditMode}
              />
            </div>
            <div className="mt-xl flex flex-wrap gap-md">
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">ISO 9001:2015</span>
              </div>
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">LEED Gold Platinum</span>
              </div>
              <div className="bg-surface-container border border-outline-variant px-md py-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-mono-utility text-mono-utility">Structural Integrity Grade A</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant">
              <EditableImage
                src={project.blueprintImage || project.image}
                alt={project.title}
                onChange={(value) => updateProject('blueprintImage', value)}
                editMode={isEditMode}
                galleryItems={gallery}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Technical Gallery */}
        <section className="py-2xl bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex justify-between items-end mb-2xl">
              <div>
                <span className="font-label-md text-label-md text-secondary uppercase">Site Documentation</span>
                <EditableText
                  value="Engineering Detail"
                  onChange={(value) => updateProject('siteDocTitle', value)}
                  as="h2"
                  className="font-headline-md text-headline-md text-on-surface"
                  editMode={isEditMode}
                />
              </div>
              <Link to="/specifications" className="hidden md:flex items-center gap-sm text-primary font-bold hover:gap-md transition-all">
                <span className="font-label-md">FULL SPECIFICATION</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg h-[600px]">
              <div className="relative overflow-hidden group border border-outline-variant bento-card">
                <EditableImage
                  src={project.gallery1 || project.image}
                  alt="Project gallery 1"
                  onChange={(value) => updateProject('gallery1', value)}
                  editMode={isEditMode}
                  galleryItems={gallery}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div className="text-white">
                    <span className="font-mono-utility text-mono-utility">MODULE 07</span>
                    <h3 className="font-headline-sm text-headline-sm">Premium Interior Fit-Out</h3>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden group border border-outline-variant bento-card">
                <EditableImage
                  src={project.gallery2 || project.image}
                  alt="Project gallery 2"
                  onChange={(value) => updateProject('gallery2', value)}
                  editMode={isEditMode}
                  galleryItems={gallery}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-xl">
                  <div className="text-white">
                    <span className="font-mono-utility text-mono-utility">MODULE 12</span>
                    <h3 className="font-headline-sm text-headline-sm">Advanced Lab Integration</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Grid */}
        <section className="py-2xl max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-2xl">
            <EditableText
              value="Project Performance"
              onChange={(value) => updateProject('performanceTitle', value)}
              as="h2"
              className="font-headline-md text-headline-md"
              editMode={isEditMode}
            />
            <div className="w-20 h-1 bg-primary mx-auto mt-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <EditableText
                value="100%"
                onChange={(value) => updateProject('stat1Value', value)}
                as="div"
                className="font-display-lg text-display-lg text-primary mb-xs"
                editMode={isEditMode}
              />
              <EditableText
                value="Safety Compliance"
                onChange={(value) => updateProject('stat1Title', value)}
                as="h3"
                className="font-headline-sm text-headline-sm mb-sm"
                editMode={isEditMode}
              />
              <EditableText
                value="Zero-incident delivery during 1.2M collective man-hours."
                onChange={(value) => updateProject('stat1Desc', value)}
                as="p"
                className="text-on-surface-variant text-body-md"
                editMode={isEditMode}
              />
            </div>
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              </div>
              <EditableText
                value="99%"
                onChange={(value) => updateProject('stat2Value', value)}
                as="div"
                className="font-display-lg text-display-lg text-primary mb-xs"
                editMode={isEditMode}
              />
              <EditableText
                value="On-time Delivery"
                onChange={(value) => updateProject('stat2Title', value)}
                as="h3"
                className="font-headline-sm text-headline-sm mb-sm"
                editMode={isEditMode}
              />
              <EditableText
                value="Handover completed 2 weeks ahead of the primary milestone."
                onChange={(value) => updateProject('stat2Desc', value)}
                as="p"
                className="text-on-surface-variant text-body-md"
                editMode={isEditMode}
              />
            </div>
            <div className="p-xl bg-white border border-outline-variant bento-card flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              </div>
              <EditableText
                value="Gold"
                onChange={(value) => updateProject('stat3Value', value)}
                as="div"
                className="font-display-lg text-display-lg text-primary mb-xs"
                editMode={isEditMode}
              />
              <EditableText
                value="Energy Efficiency"
                onChange={(value) => updateProject('stat3Title', value)}
                as="h3"
                className="font-headline-sm text-headline-sm mb-sm"
                editMode={isEditMode}
              />
              <EditableText
                value="LEED Gold Certified with optimized thermal envelope."
                onChange={(value) => updateProject('stat3Desc', value)}
                as="p"
                className="text-on-surface-variant text-body-md"
                editMode={isEditMode}
              />
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-2xl bg-tertiary-container text-white overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-xl mb-2xl">
              <EditableText
                value="Key Technical Features"
                onChange={(value) => updateProject('featuresTitle', value)}
                as="h2"
                className="font-headline-md text-headline-md mb-md"
                editMode={isEditMode}
              />
              <EditableText
                value="Our modular delivery framework allows for rapid deployment of complex industrial assets without compromising structural fidelity."
                onChange={(value) => updateProject('featuresSubtitle', value)}
                as="p"
                className="font-body-lg text-body-lg opacity-80"
                editMode={isEditMode}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">architecture</span>
                </div>
                <EditableText
                  value="Structural Engineering"
                  onChange={(value) => updateProject('feature1Title', value)}
                  as="h4"
                  className="font-headline-sm text-headline-sm"
                  editMode={isEditMode}
                />
                <EditableText
                  value="Advanced tensile steel designs integrated with seismic-responsive foundations. Every joint is ultrasonic tested for 100% structural verification."
                  onChange={(value) => updateProject('feature1Desc', value)}
                  as="p"
                  className="text-white/60 text-body-sm leading-relaxed"
                  editMode={isEditMode}
                />
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> High-Yield Steel S355
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> Non-Destructive Testing
                  </li>
                </ul>
              </div>
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">settings_input_component</span>
                </div>
                <EditableText
                  value="MEP Systems"
                  onChange={(value) => updateProject('feature2Title', value)}
                  as="h4"
                  className="font-headline-sm text-headline-sm"
                  editMode={isEditMode}
                />
                <EditableText
                  value="Tier-4 data-center grade cooling solutions and automated smart-building protocols for real-time HVAC optimization."
                  onChange={(value) => updateProject('feature2Desc', value)}
                  as="p"
                  className="text-white/60 text-body-sm leading-relaxed"
                  editMode={isEditMode}
                />
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> VRF Smart Zoning
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> 10G Fiber Backbone
                  </li>
                </ul>
              </div>
              <div className="space-y-md">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">grid_view</span>
                </div>
                <EditableText
                  value="Bespoke Joinery"
                  onChange={(value) => updateProject('feature3Title', value)}
                  as="h4"
                  className="font-headline-sm text-headline-sm"
                  editMode={isEditMode}
                />
                <EditableText
                  value="Custom laboratory furniture and high-traffic acoustic panelling manufactured in-house to millimeter-exact specifications."
                  onChange={(value) => updateProject('feature3Desc', value)}
                  as="p"
                  className="text-white/60 text-body-sm leading-relaxed"
                  editMode={isEditMode}
                />
                <ul className="space-y-xs pt-md">
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> CNC-Machined Millwork
                  </li>
                  <li className="flex items-center gap-sm text-mono-utility uppercase text-white/80">
                    <span className="material-symbols-outlined text-xs">radio_button_checked</span> Class-A Fire Rated
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl max-w-container-max mx-auto px-gutter scroll-reveal">
          <div className="bg-primary p-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-lg opacity-10">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 100" }}>precision_manufacturing</span>
            </div>
            <div className="relative z-10">
              <EditableText
                value="Ready to Scale Your Infrastructure?"
                onChange={(value) => updateProject('ctaTitle', value)}
                as="h2"
                className="font-display-lg text-white mb-lg"
                editMode={isEditMode}
              />
              <EditableText
                value="Consult with our senior engineering team to discuss your next flagship development. From BIM modelling to final handover, we deliver precision at scale."
                onChange={(value) => updateProject('ctaText', value)}
                as="p"
                className="text-white/70 max-w-2xl mx-auto mb-xl font-body-lg"
                editMode={isEditMode}
              />
              <div className="flex flex-col md:flex-row gap-lg justify-center">
                <Link to="/quote" className="bg-white text-primary px-xl py-md font-label-md uppercase tracking-widest hover:bg-opacity-90 transition-all rounded">
                  Request a Consultation
                </Link>
                <Link to="/projects" className="border border-white/40 text-white px-xl py-md font-label-md uppercase tracking-widest hover:bg-white/10 transition-all rounded">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetailPage
