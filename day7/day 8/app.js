import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <a href="/" className="logo-link" aria-label="Amazon home">
            {/* Inline SVG mark resembling an e‑commerce mark (text + smile) */}
            <svg
              className="logo-mark"
              width="110"
              height="28"
              viewBox="0 0 110 28"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <title>Amazon</title>
              <g fill="none" fillRule="evenodd">
                <text x="0" y="18" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700" fill="#ffffff">amazon</text>
                <path d="M10 22c10 6 40 8 70-2" stroke="#f3a847" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>
            </svg>
            <span className="visually-hidden">Amazon</span>
          </a>
        </div>

        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search products, brands and more"
            aria-label="Search"
          />
          <button className="search-button" aria-label="Search button">Search</button>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Card</button>
          <button className="nav-btn cart">About</button>
        </nav>
      </div>

      {/* Row of 4 brand images placed under the navbar */}
      <div className="brand-row" aria-label="Featured brands">
        <div className="brand-inner">
          {[0,1,2,3].map((i) => (
            <div className="brand-item" key={i}>
              {/* simple inline SVG placeholder for brand image */}
              <svg className="brand-img" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <rect width="200" height="60" rx="6" fill="#ffffff" stroke="#ddd" />
                <text x="14" y="36" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="700" fill="#111">amazon</text>
                <path d="M30 46c12 6 48 8 120-6" stroke="#f3a847" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
