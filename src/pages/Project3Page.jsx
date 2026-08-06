import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Executive Hospitality Suite',
  description: 'Luxury interior solutions featuring bespoke cabinetry and advanced smart-room technology.',
  image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_3.jpg',
  heroImage: 'https://gypspace.s3.us-east-1.amazonaws.com/lobby.png',
  blueprintImage: 'https://gypspace.s3.us-east-1.amazonaws.com/project_3.jpg',
  gallery1: 'https://gypspace.s3.us-east-1.amazonaws.com/production_gallery1.jpg',
  gallery2: 'https://gypspace.s3.us-east-1.amazonaws.com/production_gallery2.jpg',
}

const Project3Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project3Page
