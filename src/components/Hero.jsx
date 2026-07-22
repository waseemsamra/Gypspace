import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen md:h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat md:bg-center bg-[80%_center] brightness-[0.95]"
        style={{ backgroundImage: `url('/hero-image.png')` }}
      />
    </section>
  )
}

export default Hero