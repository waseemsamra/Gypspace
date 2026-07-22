import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const TermsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = containerRef.current?.querySelectorAll('section')
      const navLinks = containerRef.current?.querySelectorAll('aside nav a')
      if (!sections || !navLinks) return

      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute('id')
        }
      })

      navLinks.forEach((link) => {
        link.classList.remove('text-primary', 'font-bold')
        link.classList.add('text-secondary')
        if (link.getAttribute('href')?.includes(current || '')) {
          link.classList.add('text-primary', 'font-bold')
          link.classList.remove('text-secondary')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main className="pt-2xl pb-2xl max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-xl">
        <aside className="md:col-span-3 hidden md:block">
          <div className="sticky top-2xl pt-xl space-y-md">
            <p className="font-label-md text-label-md text-outline uppercase tracking-widest mb-md">Contents</p>
            <nav className="space-y-sm">
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#general-terms">01. General Terms</Link>
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#sla">02. Service Level Agreements</Link>
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#compliance">03. Compliance & Safety (HSE)</Link>
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#ip">04. Intellectual Property</Link>
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#governing-law">05. Governing Law (UAE)</Link>
              <Link className="block font-label-md text-label-md text-secondary hover:text-primary transition-colors py-xs" to="#contact">06. Legal Contact</Link>
            </nav>
          </div>
        </aside>

        <div className="md:col-span-9 pt-xl">
          <header className="mb-2xl">
            <h1 className="font-display-lg text-display-lg text-primary mb-md">Terms of Service</h1>
            <div className="flex flex-wrap gap-md items-center text-on-surface-variant font-mono-utility">
              <span className="bg-surface-container px-sm py-xs border border-outline-variant">VERSION: 2024.1.2</span>
              <span className="bg-surface-container px-sm py-xs border border-outline-variant">LAST UPDATED: OCTOBER 24, 2024</span>
              <span className="text-secondary">●</span>
              <span>GYPSPACE TECHNICAL SERVICES LLC</span>
            </div>
          </header>

          <section className="border-l-2 border-outline-variant pl-lg mb-xl hover:border-primary transition-colors duration-300" id="general-terms">
            <h2 className="font-headline-md text-headline-md text-primary mb-lg">01. General Terms</h2>
            <div className="space-y-md text-body-md text-on-surface-variant leading-relaxed">
              <p>These Terms of Service ("Terms") govern the professional relationship between Gypspace Technical Services LLC ("Gypspace") and its clients. By engaging our services, you agree to comply with and be bound by these Terms, which constitute a legally binding agreement.</p>
              <p>Gypspace reserves the right to modify these terms at any time. Notice of significant changes will be communicated via the official corporate channel or email designated in the service agreement.</p>
              <ul className="list-disc ml-gutter space-y-sm marker:text-primary">
                <li>Engagement begins only upon a signed Statement of Work (SOW).</li>
                <li>Payments are due within 30 days of invoice issuance unless otherwise specified.</li>
                <li>All technical consultations are based on provided site data accuracy.</li>
              </ul>
            </div>
          </section>

          <section className="border-l-2 border-outline-variant pl-lg mb-xl hover:border-primary transition-colors duration-300" id="sla">
            <h2 className="font-headline-md text-headline-md text-primary mb-lg">02. Service Level Agreements</h2>
            <div className="space-y-md text-body-md text-on-surface-variant leading-relaxed">
              <p>Our commitment to technical precision is backed by rigorous Service Level Agreements (SLAs). We prioritize operational continuity and high-fidelity output across all project phases.</p>
              <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden my-lg">
                <table className="w-full text-left font-mono-utility">
                  <thead className="bg-surface-container-highest border-b border-outline-variant">
                    <tr>
                      <th className="p-md text-primary font-bold">Priority Level</th>
                      <th className="p-md text-primary font-bold">Response Time</th>
                      <th className="p-md text-primary font-bold">Technical Resolution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    <tr>
                      <td className="p-md">P1 - Critical Failure</td>
                      <td className="p-md">4 Hours</td>
                      <td className="p-md">24/7 Deployment</td>
                    </tr>
                    <tr className="bg-surface-bright">
                      <td className="p-md">P2 - Major Impairment</td>
                      <td className="p-md">12 Hours</td>
                      <td className="p-md">Standard Business Day</td>
                    </tr>
                    <tr>
                      <td className="p-md">P3 - Technical Inquiry</td>
                      <td className="p-md">48 Hours</td>
                      <td className="p-md">Scheduled Consultation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="border-l-2 border-outline-variant pl-lg mb-xl hover:border-primary transition-colors duration-300" id="compliance">
            <div className="flex items-center gap-md mb-lg">
              <h2 className="font-headline-md text-headline-md text-primary">03. Compliance & Safety (HSE)</h2>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed font-mono-utility px-sm py-1 border border-outline-variant rounded">MANDATORY</span>
            </div>
            <div className="space-y-md text-body-md text-on-surface-variant leading-relaxed">
              <p>Gypspace Technical Services LLC adheres to the highest Health, Safety, and Environmental (HSE) standards. Our operations comply with ISO 45001 and local Dubai Municipality safety regulations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-lg">
                <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-sm">security</span>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">Operational Safety</h4>
                  <p className="text-body-sm">Zero-accident policy enforced through rigorous PPE mandates and continuous site monitoring.</p>
                </div>
                <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-sm">eco</span>
                  <h4 className="font-label-md text-label-md text-primary mb-xs">Sustainability Compliance</h4>
                  <p className="text-body-sm">Adherence to LEED standards and green building protocols in all technical executions.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-l-2 border-outline-variant pl-lg mb-xl hover:border-primary transition-colors duration-300" id="ip">
            <h2 className="font-headline-md text-headline-md text-primary mb-lg">04. Intellectual Property</h2>
            <div className="space-y-md text-body-md text-on-surface-variant leading-relaxed">
              <p>All proprietary methodologies, engineering software scripts, and technical blueprints developed by Gypspace remain the sole property of Gypspace Technical Services LLC until final settlement is received.</p>
              <p>The client is granted a non-exclusive, non-transferable license to use the final deliverables for the specific project site identified in the SOW. Reverse engineering of our technical solutions is strictly prohibited.</p>
            </div>
          </section>

          <section className="border-l-2 border-outline-variant pl-lg mb-xl hover:border-primary transition-colors duration-300" id="governing-law">
            <h2 className="font-headline-md text-headline-md text-primary mb-lg">05. Governing Law (UAE)</h2>
            <div className="space-y-md text-body-md text-on-surface-variant leading-relaxed">
              <p>These Terms and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of the <strong>United Arab Emirates (UAE)</strong> as applied in the <strong>Emirate of Dubai</strong>.</p>
              <p>The Dubai Courts shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms.</p>
            </div>
          </section>

          <section className="mt-2xl p-xl bg-primary text-on-primary rounded-xl" id="contact">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-xl">
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-sm">Legal Inquiry?</h3>
                <p className="font-body-md opacity-80">Direct all legal communications and compliance verification requests to our legal department.</p>
              </div>
              <a className="inline-flex items-center gap-sm bg-on-primary text-primary px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors" href="mailto:legal@gypspace.ae">
                <span className="material-symbols-outlined">mail</span>
                Email Legal Dept
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default TermsPage
