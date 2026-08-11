import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { company } from '../data/siteData.js'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/chartering', label: 'Chartering' },
  { path: '/sale-purchase', label: 'Sale & Purchase' },
  { path: '/consultancy', label: 'Consultancy' },
  { path: '/global-reach', label: 'Global reach' },
  { path: '/contact', label: 'Contact' },
]

const footerServices = [
  { path: '/chartering', label: 'Ship Chartering' },
  { path: '/sale-purchase', label: 'Sale & Purchase' },
  { path: '/consultancy', label: 'Marine Consultancy' },
]

const footerHighlights = ['Ship SL', 'Global marine advisory', 'Commercial support']

export function SiteLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // close mobile nav when route changes
    setNavOpen(false)
  }, [location.pathname])

  return (
    <div className="page">
      <header className="topbar">
        <NavLink className="brand" to="/" aria-label={`${company.shortName} home`}>
          <img className="brand-logo" src={company.logo} alt={`${company.shortName} logo`} />
          <span>
            <strong>{company.shortName}</strong>
            <small>{company.fullName}</small>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((s) => !s)}
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <nav id="primary-navigation" className={`nav ${navOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-brand">
          <NavLink className="brand footer-brand-link" to="/" aria-label={`${company.shortName} home`}>
            <img className="brand-logo" src={company.logo} alt={`${company.shortName} logo`} />
            <span>
              <strong>{company.shortName}</strong>
              <small>{company.fullName}</small>
            </span>
          </NavLink>
          <p>
            Maritime advisory for chartering, sale and purchase, and consultancy projects with a calm, commercial focus.
          </p>
          <div className="footer-highlights">
            {footerHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick links</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <div className="footer-links">
            {footerServices.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <a href={company.phoneHref}>{company.phone}</a>
          <NavLink className="footer-cta" to="/contact">
            Send inquiry
          </NavLink>
          <small>Prompt response for chartering, vessel transactions, and marine consultancy inquiries.</small>
        </div>
      </footer>
    </div>
  )
}