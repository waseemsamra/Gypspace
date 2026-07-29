import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const ClientsPage = () => {
  const containerRef = useRef(null)
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [activeSection, setActiveSection] = useState('')

  const clients = [
    { name: 'Abeer Alamal Technical Works', project: 'Technical Works', location: 'Dubai, UAE', logo: '/abeer_alamal.jpeg' },
    { name: 'Al Qabdah Global Contructions', project: 'Construction', location: 'Dubai, UAE', logo: '/al_qabdah.png' },
    { name: 'Buildmode', project: 'Industrial Fit-out', location: 'Dubai, UAE', logo: '/build_mode.png' },
    { name: 'Cosmo Interiors', project: 'Interior Design', location: 'Dubai, UAE', logo: '/cosmo-interiors.png' },
    { name: 'Echo Art Décor Cont.', project: 'Decor & Fit-out', location: 'Dubai, UAE', logo: '/echo-art.png' },
    { name: 'Elenora Interior Design', project: 'Interior Design', location: 'Dubai, UAE', logo: '/elenora.jpeg' },
    { name: 'Emaar', project: 'Commercial Fit-out', location: 'Dubai, UAE', logo: '/emaar.png' },
    { name: 'Fino Interiors', project: 'Interior Fit-out', location: 'Dubai, UAE', logo: '/fino-international.png' },
    { name: 'Golden Square Interior Design', project: 'Interior Design', location: 'Dubai, UAE', logo: '/golden-square.png' },
    { name: 'Naam creations', project: 'Creative Solutions', location: 'Dubai, UAE', logo: '/Naam-creation.png' },
    { name: 'Nakheel', project: 'Civil & Fit-out', location: 'Dubai, UAE', logo: '/Nakheel_Properties.png' },
    { name: 'Orbis Creative Solutions', project: 'Creative Solutions', location: 'Dubai, UAE', logo: '/orbis_interiors.png' },
    { name: 'Oculus Middle East', project: 'Technical Services', location: 'Dubai, UAE', logo: '/Oculus.png' },
    { name: 'Pza Interiors', project: 'Interior Fit-out', location: 'Dubai, UAE', logo: '/pza-interiors.png' },
    { name: 'Roche Bobois', project: 'Luxury Furniture', location: 'Dubai, UAE', logo: '/roche-bobois.svg' },
    { name: 'Riwaq Decorations', project: 'Decorations', location: 'Dubai, UAE' },
    { name: 'Royat Massar Decorations LLC', project: 'Decorations', location: 'Dubai, UAE', logo: '/royat-massar.png' },
    { name: 'Sharif Carpentry', project: 'Carpentry & Joinery', location: 'Dubai, UAE', logo: '/sharif_carpentry.png' },
    { name: 'Veloche Interiors', project: 'Interior Fit-out', location: 'Dubai, UAE', logo: '/veloche-global.png' },
    { name: 'Wahat Babil Electromechanical LLC', project: 'MEP Works', location: 'Dubai, UAE', logo: '/wahat-babil.png' },
    { name: 'Yaser Fannari', project: 'Technical Works', location: 'Dubai, UAE', logo: '/yaser-fanari.png' },
    { name: 'Yoshi COntruction', project: 'Construction', location: 'Dubai, UAE' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      observerOptions
    )

    const container = containerRef.current
    if (container) {
      const elements = container.querySelectorAll('.reveal-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = containerRef.current?.querySelectorAll('[data-letter-section]')
      if (!sections) return

      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('data-letter-section')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const availableLetters = useMemo(
    () => [...new Set(clients.map((c) => c.name[0].toUpperCase()))].sort(),
    [clients]
  )

  const groupedClients = useMemo(() => {
    const groups = {}
    clients.forEach((client) => {
      const letter = client.name[0].toUpperCase()
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(client)
    })
    return groups
  }, [clients])

  const displayLetters = selectedLetter
    ? [selectedLetter]
    : availableLetters

  const scrollToLetter = (letter) => {
    setSelectedLetter(letter)
  }

  return (
    <div className="font-body-md text-body-md overflow-x-hidden" ref={containerRef}>
      <main>
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-md py-base bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-md">
                TRUSTED PARTNERS
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-lg">
                Our Clients
              </h1>
              <p className="text-white/90 text-body-lg font-body-lg mb-xl max-w-lg">
                We are proud to collaborate with leading organizations across the UAE, delivering technical excellence and precision craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <section className="py-2xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-xl reveal-on-scroll">
              <h2 className="font-headline-md text-headline-md text-primary mb-sm">
                Client Directory
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-xl">
                A selection of our valued clients, listed alphabetically.
              </p>
            </div>

            <div className="mb-xl reveal-on-scroll">
              <div className="sticky top-20 z-30 bg-surface/95 backdrop-blur-sm border border-outline-variant rounded-xl p-2">
                <div className="flex flex-nowrap gap-1 overflow-x-auto alphabet-nav">
                  <button
                    onClick={() => setSelectedLetter(null)}
                    className={`flex h-10 px-4 shrink-0 items-center justify-center rounded-lg font-label-md text-label-md border transition-all ${
                      selectedLetter === null
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-primary border-outline-variant hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    All
                  </button>
                  {alphabet.map((letter) => {
                    const isAvailable = availableLetters.includes(letter)
                    const isActive = activeSection === letter || selectedLetter === letter
                    return (
                      <button
                        key={letter}
                        onClick={() => isAvailable && scrollToLetter(letter)}
                        disabled={!isAvailable}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-label-md text-label-md border transition-all ${
                          isActive
                            ? 'bg-primary text-white border-primary'
                            : isAvailable
                            ? 'bg-white text-primary border-outline-variant hover:border-primary hover:bg-primary/5'
                            : 'bg-surface-container-low text-outline border-outline-variant cursor-not-allowed opacity-40'
                        }`}
                      >
                        {letter}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              {displayLetters.map((letter) => (
                <div
                  key={letter}
                  id={`section-${letter}`}
                  data-letter-section={letter}
                  className="scroll-mt-40"
                >
                  <h3 className="text-[32px] font-bold leading-tight tracking-[-0.015em] text-primary border-b border-outline-variant pb-4 mb-8">
                    {letter}
                  </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedClients[letter]?.map((client, idx) => (
                        <div
                          key={client.name}
                          className="group flex flex-col gap-3 reveal-on-scroll items-start"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {client.logo ? (
                           <div className="p-2 rounded-lg bg-surface-container-high/60 border border-outline/50">
                            <img src={client.logo} alt={client.name} className="max-h-16 object-contain drop-shadow-md" />
                           </div>
                          ) : (
                           <div className="flex items-center gap-2 text-outline">
                             <span className="material-symbols-outlined text-primary text-[32px]">
                               business
                             </span>
                             <span className="font-label-md text-label-md uppercase tracking-widest">
                               Logo
                             </span>
                           </div>
                          )}
                        <div>
                          <p className="text-primary text-lg font-bold leading-normal">
                            {client.name}
                          </p>
                          <p className="text-on-surface-variant text-sm font-medium mt-1">
                            Project: {client.project}
                          </p>
                          <p className="text-on-surface-variant text-sm font-normal">
                            Location: {client.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {displayLetters.length === 0 && (
              <div className="text-center py-2xl text-on-surface-variant">
                No clients found for this letter.
              </div>
            )}

            <div className="mt-20 p-8 lg:p-16 bg-primary text-on-primary rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-4 max-w-xl">
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  Ready to join our network of partners?
                </h3>
                <p className="text-lg text-neutral-300">
                  We provide high-precision technical services for the most demanding projects in the UAE. Let's build something exceptional together.
                </p>
              </div>
              <div className="relative z-10 flex gap-4 w-full lg:w-auto">
                <Link
                  to="/quote"
                  className="flex-1 lg:flex-none h-14 px-8 bg-neutral-50 text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors text-center"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/projects"
                  className="flex-1 lg:flex-none h-14 px-8 border border-neutral-600 text-neutral-50 font-bold rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ClientsPage
