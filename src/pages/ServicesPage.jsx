import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const processSteps = [
    { num: '01', title: 'Consultation', description: 'Deep dive into technical requirements, feasibility analysis, and scope definition.' },
    { num: '02', title: 'Design', description: 'Engineering detailed blueprints, 3D visualizations, and material selection.' },
    { num: '03', title: 'Execution', description: 'On-site implementation and factory production under strict quality control.' },
    { num: '04', title: 'Handover', description: 'Final inspection, technical documentation, and post-project support.' },
  ]

  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center overflow-hidden bg-navy-primary">
          <div className="absolute inset-0 opacity-40">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/service_hero.jpg')` }}
            />
          </div>
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          <div className="relative max-w-container-max mx-auto px-lg w-full">
            <div className="max-w-3xl">
              <span className="inline-block text-technical-cyan font-label-md mb-md tracking-widest uppercase">
                Expertise &amp; Innovation
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">
                Technical Interior Solutions &amp; Precision Engineering
              </h1>
              <p className="text-white/80 text-body-lg mb-xl max-w-xl">
                We engineer environments that blend aesthetic excellence with operational precision. From bespoke joinery to complex technical consulting, we are your expert partner in Dubai.
              </p>
              <div className="flex gap-md">
                <Link
                  to="/projects"
                  className="bg-technical-cyan text-white px-xl py-md rounded-lg font-label-md hover:brightness-110 transition-all inline-flex items-center gap-sm"
                >
                  Explore Projects
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/process"
                  className="border border-white/20 text-white px-xl py-md rounded-lg font-label-md hover:bg-white/10 transition-all inline-flex items-center gap-sm"
                >
                  Our Process
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-2xl max-w-container-max mx-auto px-lg">
          {/* Joinery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl mb-2xl items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-technical-cyan">precision_manufacturing</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-wider">Production</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-md">Joinery &amp; Bespoke Production</h2>
              <p className="text-on-surface-variant text-body-md mb-lg">
                Our state-of-the-art facility in Dubai serves as the heart of our craftsmanship. We specialize in master-level joinery, delivering custom furniture and architectural elements that meet the most demanding technical specifications.
              </p>
              <ul className="space-y-sm mb-xl">
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Master-level Woodworking &amp; Finishes
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  CNC Precision Component Manufacturing
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  High-end Commercial Furniture Sets
                </li>
              </ul>
              <a className="inline-flex items-center gap-sm text-primary font-bold hover:gap-md transition-all" href="#">
                View Gallery <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  src="/service_hero.jpg"
                  alt="Inside a high-tech Dubai joinery facility, featuring advanced CNC machinery and master craftsmen working on bespoke luxury wood panels. The workshop is pristine, well-lit with industrial LED strips, and showcases a blend of traditional craftsmanship and modern robotics. The color palette is dominated by warm wood tones against cool grey concrete and metallic machinery."
                />
              </div>
            </div>
          </div>

          {/* Fitout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl mb-2xl items-center">
            <div className="md:col-span-7">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  src="/service_fitout.jpg"
                  alt="A professional turnkey fit-out project in a luxury corporate office. The image shows the transition from raw architectural space to finished interior, featuring complex MEP installations, acoustic ceiling panels, and sleek marble flooring. The scene is bright and airy, with a focus on clean lines and technical execution. Lighting is warm and integrated into the architecture."
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-technical-cyan">architecture</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-wider">Implementation</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-md">TurnKey Fitout Solutions</h2>
              <p className="text-on-surface-variant text-body-md mb-lg">
                Gypspace provides full lifecycle management from initial concept to final handover. We integrate MEP, civil works, and finishing into a seamless, coordinated project delivery.
              </p>
              <ul className="space-y-sm mb-xl">
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Comprehensive MEP Engineering &amp; Integration
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Civil Works &amp; Structural Modifications
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  High-density Space Optimization
                </li>
              </ul>
              <a className="inline-flex items-center gap-sm text-primary font-bold hover:gap-md transition-all" href="#">
                Process Detail <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Consulting */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-technical-cyan">biotech</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-wider">Advisory</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-md">Technical Consulting</h2>
              <p className="text-on-surface-variant text-body-md mb-lg">
                Our specialized advisory services focus on the intersection of technology and space. We design and consult for technical facilities, advanced laboratories, and smart room ecosystems.
              </p>
              <ul className="space-y-sm mb-xl">
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Laboratory Design &amp; Technical Requirements
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Smart Room Automation &amp; AV Infrastructure
                </li>
                <li className="flex items-center gap-md text-body-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-technical-cyan" />
                  Acoustic &amp; Thermal Performance Audits
                </li>
              </ul>
              <a className="inline-flex items-center gap-sm text-primary font-bold hover:gap-md transition-all" href="#">
                Speak to an Expert <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  src="/service_consulting.jpg"
                  alt="A clean, modern technical consulting environment featuring high-fidelity 3D blueprints on digital displays. The setting is a minimalist studio with glass walls and professional lighting. Consultants are seen in the background discussing technical drawings of a complex laboratory facility. The aesthetic is extremely clean, using a palette of whites, cool greys, and technical blue accents."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-surface-container py-2xl">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="text-center mb-2xl">
              <h2 className="font-headline-md text-headline-md mb-md">Our Systematic Approach</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Engineering excellence through a rigorous, four-stage process designed to guarantee project accuracy and quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant relative overflow-hidden group"
                >
                  <div className="text-technical-cyan font-mono-utility text-4xl font-bold mb-md opacity-20">
                    {step.num}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-sm">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-technical-cyan group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl">
          <div className="bg-navy-primary text-center relative overflow-hidden">
            <div className="max-w-container-max mx-auto px-lg py-2xl relative z-10">
              <h2 className="text-6xl font-display-lg text-white mb-lg leading-tight">
                Ready to engineer your next space?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-xl text-body-lg">
                Contact our technical team today for a comprehensive consultation and bespoke project quotation.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <button className="bg-technical-cyan text-white px-2xl py-md rounded-lg font-label-md hover:brightness-110 transition-all shadow-lg shadow-technical-cyan/20">
                  Request a Quote
                </button>
                <button className="border border-white/20 text-white px-2xl py-md rounded-lg font-label-md hover:bg-white/10 transition-all">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ServicesPage