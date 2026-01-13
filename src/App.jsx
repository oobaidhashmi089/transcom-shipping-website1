import React, { Suspense } from 'react'

// Lazy load components to catch errors
const Header = React.lazy(() => import('./components/Header'))
const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const Services = React.lazy(() => import('./components/Services'))
const Stats = React.lazy(() => import('./components/Stats'))
const Trust = React.lazy(() => import('./components/Trust'))
const Map = React.lazy(() => import('./components/Map'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={
        <div style={{ 
          padding: '50px', 
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', 
          minHeight: '100vh', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Transcom International Shipping & Logistics</h1>
          <p style={{ fontSize: '20px' }}>Loading...</p>
        </div>
      }>
        <ErrorBoundary>
          <Header />
          <Hero />
          <About />
          <Services />
          <Stats />
          <Trust />
          <Map />
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '50px', 
          background: '#ef4444', 
          minHeight: '100vh', 
          color: 'white' 
        }}>
          <h1>Error Loading Component</h1>
          <p>{this.state.error?.message}</p>
          <pre style={{ background: '#000', padding: '20px', marginTop: '20px', overflow: 'auto' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default App
