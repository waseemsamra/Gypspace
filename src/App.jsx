import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/AppShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import FitoutPage from './pages/FitoutPage'
import MepPage from './pages/MepPage'
import CivilPage from './pages/CivilPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import ProductionPage from './pages/ProductionPage'
import BrandStoryPage from './pages/BrandStoryPage'
import CareersPage from './pages/CareersPage'
import SustainabilityPage from './pages/SustainabilityPage'
import SpecificationsPage from './pages/SpecificationsPage'
import TermsPage from './pages/TermsPage'
import QuotePage from './pages/QuotePage'
import ClientsPage from './pages/ClientsPage'
import GalleryPage from './pages/GalleryPage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminImages from './pages/AdminImages'
import { AdminProvider } from './contexts/AdminContext'

const App = () => {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="fitout" element={<FitoutPage />} />
            <Route path="mep" element={<MepPage />} />
            <Route path="civil" element={<CivilPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<ProjectDetailPage />} />
            <Route path="production" element={<ProductionPage />} />
            <Route path="brand-story" element={<BrandStoryPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="sustainability" element={<SustainabilityPage />} />
            <Route path="specifications" element={<SpecificationsPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="quote" element={<QuotePage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
          </Route>
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App