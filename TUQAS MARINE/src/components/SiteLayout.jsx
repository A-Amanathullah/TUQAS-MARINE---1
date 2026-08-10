import { NavLink, Outlet } from 'react-router-dom'
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

export function SiteLayout() {
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

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>{company.fullName}</p>
        <a href={company.phoneHref}>{company.phone}</a>
      </footer>
    </div>
  )
}