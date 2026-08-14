import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailPage from '../components/ProjectDetailPage'

const Project3Page = () => {
  const { id } = useParams()
  return <ProjectDetailPage key={id} />
}

export default Project3Page
