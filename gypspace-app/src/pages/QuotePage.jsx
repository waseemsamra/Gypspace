import React from 'react'

const QuotePage = () => {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main className="pt-32 pb-2xl max-w-container-max mx-auto px-lg">
        <section className="mb-xl">
          <div className="flex flex-col gap-sm max-w-3xl">
            <span className="text-on-tertiary-container font-mono-utility tracking-widest uppercase">Global Engineering Support</span>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">Request a Technical Quote</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Specialized MEP, interior fit-out, and civil engineering solutions delivered with 0.05mm precision. Provide your project details below for a bespoke technical brief.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg md:p-xl shadow-sm">
            <form className="space-y-xl" id="quote-form">
              <div className="space-y-md">
                <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container">person</span>
                  <h3 className="font-headline-sm text-headline-sm">Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="e.g. John Doe" type="text" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Company Name</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="e.g. Acme Tech Solutions" type="text" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="john@acme.com" type="email" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="+971 00 000 0000" type="tel" />
                  </div>
                </div>
              </div>

              <div className="space-y-md">
                <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container">engineering</span>
                  <h3 className="font-headline-sm text-headline-sm">Project Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Project Type</label>
                    <select className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all">
                      <option>MEP Works</option>
                      <option>Interior Fit-out</option>
                      <option>Civil Works</option>
                      <option>Bespoke Joinery</option>
                      <option>Turnkey Solution</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Location</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="City / Country" type="text" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Estimated Budget (USD)</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="e.g. 250,000" type="text" />
                  </div>
                </div>
                <div className="space-y-xs pt-md">
                  <label className="font-label-md text-label-md text-on-surface-variant">Technical Scope & Requirements</label>
                  <textarea className="w-full px-md py-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" placeholder="Please describe the technical requirements, specific tolerances, and scope of work..." rows="6"></textarea>
                </div>
              </div>

              <div className="space-y-md">
                <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container">event</span>
                  <h3 className="font-headline-sm text-headline-sm">Timeline & Documentation</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Desired Start Date</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" type="date" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Estimated Completion</label>
                    <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg font-body-md focus:border-on-tertiary-container focus:ring-0 form-focus-glow transition-all" type="date" />
                  </div>
                </div>
                <div className="pt-md">
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Upload Technical Blueprints or Briefs</label>
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center gap-sm bg-surface hover:bg-surface-container transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-on-secondary-container group-hover:text-on-tertiary-container transition-colors">cloud_upload</span>
                    <p className="font-body-md text-on-surface-variant text-center">
                      <span className="text-on-tertiary-container font-bold">Click to upload</span> or drag and drop<br />
                      <span className="text-xs uppercase tracking-tighter">PDF, DWG, DXF, PNG (Max 50MB)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-end gap-md pt-lg">
                <button className="text-secondary font-label-md px-lg py-sm hover:underline" type="button">Save Draft</button>
                <button className="w-full md:w-auto bg-on-tertiary-container text-white px-2xl py-md rounded-lg font-label-md text-label-md shadow-lg shadow-on-tertiary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-lg">
            <div className="bg-primary text-white p-xl rounded-xl space-y-lg relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[160px]">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm">Why Partner with Gypspace?</h3>
              <div className="space-y-xl">
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">verified</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md">14+ Years of Expertise</h4>
                    <p className="text-primary-fixed text-sm opacity-80 mt-1">Specialized in large-scale commercial and industrial deployments since 2010.</p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md">0.05mm Precision Standard</h4>
                    <p className="text-primary-fixed text-sm opacity-80 mt-1">Our technical audits and joinery adhere to aerospace-grade tolerances.</p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">eco</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md">LEED Certified Practices</h4>
                    <p className="text-primary-fixed text-sm opacity-80 mt-1">Sustainability isn&apos;t a feature; it&apos;s our foundational construction framework.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant rounded-xl p-lg space-y-md">
              <p className="font-mono-utility text-on-surface-variant text-xs uppercase tracking-wider">Project Visual Reference</p>
              <div className="h-48 w-full bg-surface-container-highest rounded-lg relative overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/quote_reference.jpg"
                  alt="Dubai Technical Hub"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-md">
                  <span className="text-white text-xs font-label-md">Dubai Technical Hub - 2023</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col gap-sm">
              <h4 className="font-label-md text-label-md text-primary">Need Immediate Assistance?</h4>
              <p className="text-sm text-on-surface-variant">Our engineering desks are staffed 24/7 for urgent technical consultations.</p>
              <div className="flex items-center gap-sm mt-sm">
                <span className="material-symbols-outlined text-on-tertiary-container">call</span>
                <span className="font-mono-utility text-label-md font-bold text-primary">+971 (4) 222-3400</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default QuotePage
