import React from 'react'

const clients = [
  { name: 'Abeer Alamal Technical Works', logo: '/abeer_alamal.jpeg' },
  { name: 'Al Qabdah Global Contructions', logo: '/al_qabdah.png' },
  { name: 'Buildmode', logo: '/build_mode.png' },
  { name: 'Cosmo Interiors', logo: '/cosmo-interiors.png' },
  { name: 'Echo Art Décor Cont.', logo: '/echo-art.png' },
  { name: 'Elenora Interior Design', logo: '/elenora.jpeg' },
  { name: 'Emaar', logo: '/emaar.png' },
  { name: 'Fino Interiors', logo: '/fino-international.png' },
  { name: 'Golden Square Interior Design', logo: '/golden-square.png' },
  { name: 'Naam creations', logo: '/Naam-creation.png' },
  { name: 'Nakheel', logo: '/Nakheel_Properties.png' },
  { name: 'Orbis Creative Solutions', logo: '/orbis_interiors.png' },
  { name: 'Oculus Middle East', logo: '/Oculus.png' },
  { name: 'Pza Interiors', logo: '/pza-interiors.png' },
  { name: 'Roche Bobois', logo: '/roche-bobois.svg' },
  { name: 'Royat Massar Decorations LLC', logo: '/royat-massar.png' },
  { name: 'Sharif Carpentry', logo: '/sharif_carpentry.png' },
  { name: 'Veloche Interiors', logo: '/veloche-global.png' },
  { name: 'Wahat Babil Electromechanical LLC', logo: '/wahat-babil.png' },
  { name: 'Yaser Fannari', logo: '/yaser-fanari.png' },
  { name: 'Yoshi COntruction', logo: '/yoshii.jpeg' },
]

const ClientLogoMarquee = () => {
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="w-full bg-gray-100 py-10 overflow-hidden">
      <div className="flex gap-10 overflow-hidden">
        <div className="flex gap-10 animate-marquee">
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center min-w-[160px] h-20 shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogoMarquee
