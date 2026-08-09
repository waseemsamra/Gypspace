import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

const AboutPage = () => {
  const containerRef = useRef(null)
  const { cmsData } = useAdmin()
  const gallery = cmsData?.gallery || []
  const aboutHeroImage = gallery.find(item => {
    const caption = (item.caption || '').toLowerCase()
    const url = (item.url || '').toLowerCase()
    return caption.includes('about') || url.includes('about')
  }) || gallery[0]

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
    <div className="font-body-md text-body-md overflow-x-hidden scroll-smooth" ref={containerRef}>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden py-2xl">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] z-10" />
            <img
              className="w-full h-full object-cover"
              src={aboutHeroImage?.url || 'https://gypspace.s3.us-east-1.amazonaws.com/about_hero.jpg'}
              alt="Technical and industrial environment"
            />
          </div>
          <div className="max-w-container-max mx-auto px-gutter relative z-20 w-full">
            <div className="max-w-3xl">
              <h1 className="font-display-lg text-display-lg text-white mb-lg">We Build Better.</h1>
              <p className="text-white/90 text-body-lg font-body-lg max-w-lg">Dedicated to excellence in fit-out and joinery, transforming visions into architectural realities across the UAE.</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-2xl bg-white border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-3xl mx-auto text-center reveal-on-scroll active">
              <h2 className="font-headline-md text-headline-md text-primary mb-lg">A Legacy of Precision</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-4">Gypspace Technical Services LLC is a UAE-based technical services, fit-out and renovation company delivering comprehensive solutions for commercial and residential spaces. Our expertise includes gypsum and ceiling works, partitions, tiling, painting, plastering, block and concrete works, interior fit-out, renovation, and smart home automation, supported by professional project execution and quality workmanship.</p>
              <p className="text-on-surface-variant font-body-lg text-body-lg">We work with contractors, consultants, businesses, property owners and homeowners to deliver practical, reliable and high-quality solutions tailored to the requirements of every project. From individual technical works to complete renovation and fit-out packages, our team focuses on delivering each stage with attention to detail, coordination and efficiency.</p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-2xl bg-white border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-3xl mx-auto text-center reveal-on-scroll active">
              <h2 className="font-headline-md text-headline-md text-primary mb-lg">A Legacy of Precision</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-4">At Gypspace, we believe that successful projects are built on more than just materials and workmanship. They require proper planning, technical knowledge, skilled people, coordination and attention to detail.</p>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-4">Our team brings hands-on experience across civil, interior finishing, fit-out, renovation and automation works, allowing us to support projects from initial preparation through to final completion.</p>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Whether it is a commercial space, office, retail environment, villa or residential property, we aim to provide solutions that are functional, aesthetically refined and built to last.</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-2xl bg-surface-container-low border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-2xl reveal-on-scroll active">
              <h2 className="font-headline-md text-headline-md text-primary">What We Do</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">foundation</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Technical &amp; Civil Works</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Block work, plastering, concrete works, demolition, masonry, repairs and other civil requirements.</p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active" style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Gypsum &amp; Ceiling Works</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Gypsum ceilings, partitions, feature walls, bulkheads, decorative elements and specialized ceiling solutions.</p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">grid_on</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Tiling &amp; Flooring</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Ceramic and porcelain tile installation, wall and floor tiling, flooring solutions, grouting and finishing works.</p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">design_services</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Fit-Out &amp; Interior Works</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Interior fit-out works, partitions, ceilings, finishes and coordinated technical works for commercial and residential spaces.</p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active" style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">home_repair_service</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Renovation &amp; Refurbishment</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Renovation, remodeling, upgrades and refurbishment works to transform existing spaces into functional and modern environments.</p>
              </div>
              <div className="bg-white p-xl rounded-xl border border-outline-variant hover:shadow-lg transition-shadow reveal-on-scroll active" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Home Automation &amp; Smart Solutions</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Smart lighting, smart controls, automated curtains, climate control, security integration, entertainment systems and other smart-home solutions designed for connected living.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-2xl bg-white border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-2xl reveal-on-scroll active">
              <h2 className="font-headline-md text-headline-md text-primary">Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-md relative">
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-outline-variant z-0" />
              {[
                { num: '1', title: 'Understand', desc: 'We begin by understanding the client\'s requirements, project scope, site conditions and expectations.' },
                { num: '2', title: 'Plan', desc: 'Our team coordinates the work, materials, manpower and execution requirements to establish a clear approach before starting.' },
                { num: '3', title: 'Execute', desc: 'Our skilled workforce carries out the works with attention to quality, safety, coordination and finishing details.' },
                { num: '4', title: 'Inspect', desc: 'We review completed works to ensure they meet the required specifications and expected standards.' },
                { num: '5', title: 'Deliver', desc: 'Our goal is to complete every project professionally, efficiently and to the client\'s satisfaction.' },
              ].map((step) => (
                <div key={step.num} className="relative z-10 bg-white p-md text-center reveal-on-scroll active">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-md font-headline-sm text-headline-sm shadow-md">{step.num}</div>
                  <h4 className="font-label-md text-label-md text-primary mb-sm">{step.title}</h4>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Gypspace & Mission/Vision */}
        <section className="py-2xl bg-surface-container-low border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
              <div className="reveal-on-scroll active">
                <h2 className="font-headline-md text-headline-md text-primary mb-xl">Why Choose Gypspace?</h2>
                <ul className="space-y-md">
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Skilled &amp; Experienced Workforce</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">Our team consists of experienced tradesmen and technical personnel capable of handling different project requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Multi-Disciplinary Expertise</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">From civil and gypsum works to fit-out, renovation and home automation, we provide multiple technical solutions under one roof.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Quality-Focused Execution</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">We pay close attention to workmanship, finishing quality and project requirements at every stage.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Professional Coordination</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">We understand the importance of coordination with clients, consultants, contractors and other trades on active construction sites.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Flexible Solutions</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">Every project is different. We adapt our execution approach according to the site conditions, design requirements and client's expectations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">Commitment to Delivery</h4>
                      <p className="text-on-surface-variant font-body-sm text-body-sm mt-xs">We focus on completing our scope efficiently while maintaining quality and professional standards.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-xl reveal-on-scroll active" style={{ transitionDelay: '200ms' }}>
                <div className="bg-white p-xl rounded-xl border border-outline-variant shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary-fixed-dim">flag</span> Mission
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">To deliver reliable technical, fit-out, renovation and smart-space solutions through skilled workmanship, professional execution and a commitment to quality.</p>
                </div>
                <div className="bg-white p-xl rounded-xl border border-outline-variant shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary-fixed-dim">visibility</span> Vision
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">To become a trusted and preferred technical services partner in the UAE, delivering innovative, dependable and integrated solutions for modern commercial and residential spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values & Services at a Glance */}
        <section className="py-2xl bg-white border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-2xl reveal-on-scroll active">
              <h2 className="font-headline-md text-headline-md text-primary text-center mb-xl">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md text-center">
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">workspace_premium</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Quality</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">We believe quality workmanship creates lasting value.</p>
                </div>
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">handshake</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Integrity</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">We build relationships through transparency, professionalism and trust.</p>
                </div>
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">shield</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Reliability</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">We take responsibility for our commitments and strive to deliver as agreed.</p>
                </div>
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">health_and_safety</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Safety</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">We promote safe and responsible working practices across our projects.</p>
                </div>
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">lightbulb</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Innovation</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">We embrace modern technologies and smarter solutions, particularly in fit-out, renovation and home automation.</p>
                </div>
                <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-sm block">support_agent</span>
                  <span className="font-label-md text-label-md text-primary mb-sm">Customer Satisfaction</span>
                  <p className="text-on-surface-variant font-body-sm text-body-sm">Our success is measured by the quality of our work and the satisfaction of our clients.</p>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll active">
              <h3 className="font-headline-sm text-headline-sm text-primary text-center mb-lg">Our Services at a Glance</h3>
              <div className="flex flex-wrap justify-center gap-md">
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Civil Works</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Gypsum &amp; Ceilings</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Tiling &amp; Flooring</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Painting &amp; Finishing</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Partitions &amp; Wall Systems</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Fit-Out Works</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Renovation &amp; Refurbishment</span>
                <span className="px-md py-sm bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">Home Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2xl bg-primary text-white text-center">
          <div className="max-w-container-max mx-auto px-gutter reveal-on-scroll active">
            <h2 className="font-display-lg text-display-lg mb-md">Let's Build Better Spaces Together</h2>
            <p className="text-white/90 font-body-lg text-body-lg max-w-3xl mx-auto mb-xl">Whether you are developing a new commercial space, renovating an existing property, completing an interior fit-out or looking to transform your home into a smart and connected environment, Gypspace Technical Services LLC is ready to support your project with professional expertise, skilled workmanship and reliable execution.</p>
            <Link to="/contact" className="bg-white text-primary px-xl py-md font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors shadow-lg inline-block">Connect With Us</Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full pt-2xl pb-lg bg-[#0f172a] text-white font-body-md">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-2xl">
            <div className="flex flex-col gap-lg">
              <div className="flex items-center gap-md">
                <img alt="Gypspace" className="h-10 object-contain object-left brightness-0 invert" src={aboutHeroImage?.url || 'https://gypspace.s3.us-east-1.amazonaws.com/main-logo.png'} />
              </div>
              <p className="font-body-sm text-white/70 max-w-xs">
                14+ years of technical excellence in fit-out and joinery. Turning visions into structural realities across the UAE.
              </p>
              <div className="flex gap-md">
                <a className="text-white/50 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                <a className="text-white/50 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
                <a className="text-white/50 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-lg">
              <h5 className="font-label-md text-label-md text-white uppercase tracking-widest">Services</h5>
              <nav className="flex flex-col gap-md">
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/mep">M.E.P Works</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/fitout">Fit-out Works</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/civil">Civil Works</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/production">Bespoke Production</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-lg">
              <h5 className="font-label-md text-label-md text-white uppercase tracking-widest">Company</h5>
              <nav className="flex flex-col gap-md">
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/about">About Us</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/process">Our Process</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/careers">Careers</Link>
                <Link className="text-white/70 hover:text-white font-body-sm transition-colors" to="/brand-story">Brand Story</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-lg">
              <h5 className="font-label-md text-label-md text-white uppercase tracking-widest">Contact Us</h5>
              <div className="flex flex-col gap-md">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-white/50 text-[20px]">location_on</span>
                  <p className="text-white/70 font-body-sm">Dubai Industrial City, UAE</p>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-white/50 text-[20px]">mail</span>
                  <p className="text-white/70 font-body-sm">info@gypspace.com</p>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-white/50 text-[20px]">call</span>
                  <p className="text-white/70 font-body-sm">+971 4 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-gutter mt-2xl pt-lg border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-md">
            <p className="font-body-sm text-white/50">© 2024 Gypspace Technical Services LLC. All rights reserved.</p>
            <div className="flex gap-xl">
              <Link className="text-white/50 hover:text-white font-body-sm transition-colors" to="/terms">Privacy Policy</Link>
              <Link className="text-white/50 hover:text-white font-body-sm transition-colors" to="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default AboutPage
