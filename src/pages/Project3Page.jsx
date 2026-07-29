import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Executive Hospitality Suite',
  description: 'Luxury interior solutions featuring bespoke cabinetry and advanced smart-room technology.',
  image: '/project_3.jpg',
  heroImage: '/lobby.png',
  blueprintImage: '/project_3.jpg',
  gallery1: '/production_gallery1.jpg',
  gallery2: '/production_gallery2.jpg',
}

const Project3Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project3Page
