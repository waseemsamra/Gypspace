import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Corporate Headquarters',
  description: 'A multi-floor executive workspace focusing on minimalist aesthetics and seamless technical integration.',
  image: '/project_1.jpg',
  heroImage: '/main-project.png',
  blueprintImage: '/project_1.jpg',
  gallery1: '/fitout_gallery1.jpg',
  gallery2: '/fitout_gallery2.jpg',
}

const Project1Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project1Page
