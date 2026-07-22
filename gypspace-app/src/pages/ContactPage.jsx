import React, { useEffect } from 'react'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center overflow-hidden technical-grid">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent z-10" />
          <div className="relative z-20 max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-2 gap-xl items-center py-2xl">
            <div className="max-w-xl">
              <div className="inline-flex items-center px-md py-xs bg-secondary-container text-on-secondary-container rounded-full mb-md">
                <span className="material-symbols-outlined text-sm mr-sm">verified</span>
                <span className="font-label-md text-label-md">ESTABLISHED 2010</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-lg">Partner with Excellence</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                Gypspace Engineering provides precision interior fit-out and technical services across the EMEA region. Connect with our experts today.
              </p>
              <div className="flex flex-col space-y-md">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase text-secondary">Headquarters</p>
                    <p className="font-body-md text-body-md">Dubai Production City, UAE</p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase text-secondary">General Inquiries</p>
                    <p className="font-body-md text-body-md">+971 4 000 0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-surface-container border border-outline-variant overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  src="/contact_hero.jpg"
                  alt="An ultra-modern, high-tech engineering office in Dubai with clean lines, polished concrete floors, and large blueprint diagrams on the walls"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* Form & Trust Section */}
        <section className="py-2xl max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest border border-outline-variant p-xl">
                <h2 className="font-headline-md text-headline-md mb-md">Request a Consultation</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Provide your project details and our engineering team will respond within 24 business hours with a preliminary assessment.</p>
                <form className="space-y-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-base">
                      <label className="font-label-md text-label-md text-secondary">FULL NAME</label>
                      <input
                        className="w-full px-md py-sm bg-surface border border-outline-variant focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-base">
                      <label className="font-label-md text-label-md text-secondary">COMPANY</label>
                      <input
                        className="w-full px-md py-sm bg-surface border border-outline-variant focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none"
                        placeholder="Enter company name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-base">
                      <label className="font-label-md text-label-md text-secondary">EMAIL ADDRESS</label>
                      <input
                        className="w-full px-md py-sm bg-surface border border-outline-variant focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none"
                        placeholder="john@company.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-base">
                      <label className="font-label-md text-label-md text-secondary">SERVICE TYPE</label>
                      <select
                        className="w-full px-md py-sm bg-surface border border-outline-variant focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none appearance-none"
                      >
                        <option>Fit-out</option>
                        <option>Joinery</option>
                        <option>Consulting</option>
                        <option>Mechanical &amp; Electrical</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-base">
                    <label className="font-label-md text-label-md text-secondary">PROJECT DESCRIPTION</label>
                    <textarea
                      className="w-full px-md py-sm bg-surface border border-outline-variant focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none"
                      placeholder="Briefly describe your requirements..."
                      rows="4"
                    />
                  </div>
                  <div className="flex items-center space-x-sm pt-md">
                    <input
                      className="w-4 h-4 text-primary border-outline-variant focus:ring-primary"
                      id="terms"
                      type="checkbox"
                    />
                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="terms">
                      I agree to the privacy policy regarding data collection.
                    </label>
                  </div>
                  <button
                    className="w-full md:w-auto bg-primary text-on-primary px-xl py-md font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-sm"
                    type="submit"
                  >
                    SUBMIT REQUEST
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Trust Signals & Info */}
            <div className="lg:col-span-5 flex flex-col gap-xl">
              {/* Trust Card */}
              <div className="bg-surface-container-high p-xl border-l-4 border-primary">
                <h3 className="font-headline-sm text-headline-sm mb-md">Our Legacy</h3>
                <p className="font-body-md text-body-md mb-lg">With 14 years of precision engineering and fit-out excellence, we ensure every project meets rigorous international standards.</p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <span className="font-label-md text-label-md">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <span className="font-label-md text-label-md">ISO 45001</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">history</span>
                    <span className="font-label-md text-label-md">14+ YEARS</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">public</span>
                    <span className="font-label-md text-label-md">PAN-EMEA</span>
                  </div>
                </div>
              </div>

              {/* Support Section */}
              <div className="space-y-lg">
                <h3 className="font-label-md text-label-md text-secondary border-b border-outline-variant pb-base">QUICK RESOURCES</h3>
                <a
                  className="group flex items-center justify-between p-md bg-surface border border-outline-variant hover:border-primary transition-all"
                  href="#"
                >
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-primary">work</span>
                    <div>
                      <p className="font-label-md text-label-md">Careers</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Join our technical team</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
                <a
                  className="group flex items-center justify-between p-md bg-surface border border-outline-variant hover:border-primary transition-all"
                  href="#"
                >
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-primary">download</span>
                    <div>
                      <p className="font-label-md text-label-md">Technical Specs</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Download capability statement</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-surface-container py-2xl">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="flex flex-col md:flex-row gap-xl">
              <div className="md:w-1/3">
                <h2 className="font-headline-md text-headline-md mb-md">Visit Our Facility</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Located in the heart of Dubai's media and production hub, our facility houses both design and high-precision production units.</p>
                <div className="space-y-lg">
                  <div>
                    <p className="font-label-md text-label-md text-secondary uppercase mb-xs">ADDRESS</p>
                    <p className="font-body-md text-body-md">
                      Building A3, Units 14-16<br />
                      Dubai Production City<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-secondary uppercase mb-xs">OFFICE HOURS</p>
                    <p className="font-body-md text-body-md">
                      Monday – Friday: 08:00 – 18:00<br />
                      Saturday: 09:00 – 13:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 h-[400px] bg-surface-container-highest border border-outline-variant relative overflow-hidden group">
                <img
                  className="w-full h-full object-cover"
                  data-location="Dubai Production City"
                  src="/contact_map.jpg"
                  alt="Dubai Production City facility location"
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                <div className="absolute bottom-md left-md bg-surface p-md border border-outline-variant shadow-xl">
                  <p className="font-label-md text-label-md flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary text-sm">navigation</span>
                    OPEN IN GOOGLE MAPS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ContactPage