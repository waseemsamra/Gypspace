import React from 'react'
import Hero from '../components/Hero'
import ClientLogoMarquee from '../components/ClientLogoMarquee'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import MajorAreas from '../components/MajorAreas'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ClientLogoMarquee />
      <Services />
      <WhyChooseUs />
      <MajorAreas />
      <Contact />
    </main>
  )
}

export default HomePage