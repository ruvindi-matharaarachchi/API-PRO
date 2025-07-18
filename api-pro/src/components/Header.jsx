// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Docs', to: '/docs' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header-root">
      <nav className="header-nav">
        <Link to="/" className="header-logo">API PRO</Link>
        <ul className="header-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`header-link${location.pathname === link.to ? ' active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="header-hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="header-mobile-menu">
          <ul className="header-mobile-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`header-link${location.pathname === link.to ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
