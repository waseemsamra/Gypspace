import React from 'react'

const clients = [
  { name: 'Abeer Alamal Technical Works', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/abeer_alamal.jpeg' },
  { name: 'Al Qabdah Global Contructions', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/al_qabdah.png' },
  { name: 'Buildmode', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/build_mode.png' },
  { name: 'Cosmo Interiors', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/cosmo-interiors.png' },
  { name: 'Echo Art Décor Cont.', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/echo-art.png' },
  { name: 'Elenora Interior Design', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/elenora.jpeg' },
  { name: 'Emaar', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/emaar.png' },
  { name: 'Fino Interiors', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/fino-international.png' },
  { name: 'Golden Square Interior Design', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/golden-square.png' },
  { name: 'Naam creations', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/Naam-creation.png' },
  { name: 'Nakheel', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/Nakheel_Properties.png' },
  { name: 'Orbis Creative Solutions', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/orbis_interiors.png' },
  { name: 'Oculus Middle East', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/Oculus.png' },
  { name: 'Pza Interiors', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/pza-interiors.png' },
  { name: 'Roche Bobois', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/roche-bobois.svg' },
  { name: 'Royat Massar Decorations LLC', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/royat-massar.png' },
  { name: 'Sharif Carpentry', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/sharif_carpentry.png' },
  { name: 'Veloche Interiors', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/veloche-global.png' },
  { name: 'Wahat Babil Electromechanical LLC', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/wahat-babil.png' },
  { name: 'Yaser Fannari', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/yaser-fanari.png' },
  { name: 'Yoshi COntruction', logo: 'https://gypspace.s3.us-east-1.amazonaws.com/yoshii.jpeg' },
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
