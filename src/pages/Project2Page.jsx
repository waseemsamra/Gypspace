import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Precision Lab Facility',
  description: 'State-of-the-art technical environment designed for maximum operational efficiency and clinical precision.',
  image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_2.jpg',
  heroImage: 'https://gypspace.s3.us-east-1.amazonaws.com/lab.png',
  blueprintImage: 'https://gypspace.s3.us-east-1.amazonaws.com/project_2.jpg',
  gallery1: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_case_study.jpg',
  gallery2: 'https://gypspace.s3.us-east-1.amazonaws.com/mep_fire_safety.jpg',
}

const Project2Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project2Page
