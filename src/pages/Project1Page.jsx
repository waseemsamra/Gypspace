import React from 'react'
import ProjectDetailPage from '../components/ProjectDetailPage'

const project = {
  title: 'Corporate Headquarters',
  description: 'A multi-floor executive workspace focusing on minimalist aesthetics and seamless technical integration.',
  image: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
  heroImage: 'https://gypspace.s3.us-east-1.amazonaws.com/main-project.png',
  blueprintImage: 'https://gypspace.s3.us-east-1.amazonaws.com/project_1.jpg',
  gallery1: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_gallery1.jpg',
  gallery2: 'https://gypspace.s3.us-east-1.amazonaws.com/fitout_gallery2.jpg',
}

const Project1Page = () => {
  return <ProjectDetailPage project={project} />
}

export default Project1Page
