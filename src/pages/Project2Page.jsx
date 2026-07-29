import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Precision Lab Facility',
  description: 'State-of-the-art technical environment designed for maximum operational efficiency and clinical precision.',
  image: '/project_2.jpg',
  heroImage: '/lab.png',
  blueprintImage: '/project_2.jpg',
  gallery1: '/mep_case_study.jpg',
  gallery2: '/mep_fire_safety.jpg',
}

const Project2Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project2Page
