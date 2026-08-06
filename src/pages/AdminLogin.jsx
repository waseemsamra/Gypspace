import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAdmin()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const success = login(username, password)
    if (success) {
      navigate('/admin')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white rounded-xl border border-outline-variant p-8 shadow-sm">
          <h1 className="font-headline-md text-headline-md text-primary mb-2 text-center">Admin CMS</h1>
          <p className="text-on-surface-variant text-body-md text-center mb-8">Sign in to manage content</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-label-md text-label-md text-primary mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block font-label-md text-label-md text-primary mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-md py-2 border border-outline-variant rounded-lg bg-white text-primary font-body-md focus:outline-none focus:border-primary"
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && (
              <div className="p-md bg-red-50 border border-red-200 rounded-lg text-red-700 text-body-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full h-12 bg-primary text-on-primary font-label-md uppercase tracking-widest rounded-lg hover:opacity-80 transition-all active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-surface-container rounded-lg border border-outline-variant">
            <p className="text-xs text-on-surface-variant text-center">
              Demo credentials: <span className="font-mono-utility">adminn</span> / <span className="font-mono-utility">admin123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
