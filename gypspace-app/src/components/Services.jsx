import React from 'react'

const services = [
  {
    id: 1,
    icon: 'architecture',
    title: 'Engineering Design',
    description:
      'Comprehensive blueprinting and conceptual modeling focused on mechanical integrity and spatial efficiency for modern facilities.',
    features: ['CAD/CAM Integration', 'Structural Integrity Analysis'],
  },
  {
    id: 2,
    icon: 'account_tree',
    title: 'Project Management',
    description:
      'End-to-end lifecycle oversight, ensuring critical milestones are met with precision while maintaining strict compliance with safety standards.',
    features: ['Agile Technical Delivery', 'Resource Optimization'],
  },
  {
    id: 3,
    icon: 'precision_manufacturing',
    title: 'Technical Consulting',
    description:
      'Specialized advisory services for digital transformation, industrial automation, and operational performance enhancement.',
    features: ['Feasibility Studies', 'System Audits'],
  },
]

const Services = () => {
  return (
    <section className="py-2xl bg-surface-container-low" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-xl">
          <h2 className="font-headline-md text-headline-md text-primary mb-sm">
            Systematic approaches
          </h2>
          <p className="text-on-surface-variant font-body-md max-w-xl border-l-4 border-primary pl-md">
            Systematic approaches to complex technical challenges, tailored to
            your industrial requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-outline-variant p-lg rounded-xl hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <span
                  className="material-symbols-outlined text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
                {service.title}
              </h3>
              <p className="text-on-surface-variant font-body-sm mb-lg flex-grow">
                {service.description}
              </p>
              <ul className="space-y-sm text-mono-utility text-primary">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services