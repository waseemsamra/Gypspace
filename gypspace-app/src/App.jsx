import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/AppShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'
import FitoutPage from './pages/FitoutPage'
import MepPage from './pages/MepPage'
import CivilPage from './pages/CivilPage'
import ProjectsPage from './pages/ProjectsPage'
import Project1Page from './pages/Project1Page'
import Project2Page from './pages/Project2Page'
import Project3Page from './pages/Project3Page'
import WorksPage from './pages/WorksPage'
import ProductionPage from './pages/ProductionPage'
import BrandStoryPage from './pages/BrandStoryPage'
import CareersPage from './pages/CareersPage'
import SustainabilityPage from './pages/SustainabilityPage'
import SpecificationsPage from './pages/SpecificationsPage'
import TermsPage from './pages/TermsPage'
import QuotePage from './pages/QuotePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="fitout" element={<FitoutPage />} />
          <Route path="mep" element={<MepPage />} />
          <Route path="civil" element={<CivilPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/1" element={<Project1Page />} />
          <Route path="projects/2" element={<Project2Page />} />
          <Route path="projects/3" element={<Project3Page />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="production" element={<ProductionPage />} />
          <Route path="brand-story" element={<BrandStoryPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="specifications" element={<SpecificationsPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App