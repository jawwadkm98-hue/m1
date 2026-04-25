import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin - no navbar/footer */}
          <Route path="/admin" element={<Admin />} />

          {/* Public pages */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/partner" element={<Layout><Partner /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* 404 fallback */}
          <Route path="*" element={
            <Layout>
              <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
                <h1 style={{ fontFamily: 'Playfair Display', fontSize: '4rem', color: 'var(--gold)' }}>404</h1>
                <h2 style={{ color: 'var(--navy)' }}>Page Not Found</h2>
                <a href="/" className="btn btn--navy">Go Home</a>
              </div>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
