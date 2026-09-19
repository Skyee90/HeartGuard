import { useState } from "react";
import PixelHeartIcon from "../pixel-art/PixelHeartIcon";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="navbar" id="navbar">
        <a href="/" className="navbar-logo" id="navbar-logo">
          <div className="logo-icon">
            <PixelHeartIcon size={36} />
          </div>
          <div className="logo-text">
            <span className="brand-name">HeartGuard</span>
            <span className="brand-tagline">Simple Health. Happier You.</span>
          </div>
        </a>

        <div className="navbar-links" id="navbar-links">
          <a href="/" id="nav-home">
            <span className="nav-emoji">🏠</span> Home
          </a>
          <a href="/medicines" id="nav-medicines">
            <span className="nav-emoji">💊</span> Medicines
          </a>
          <a href="/about" id="nav-about">
            <span className="nav-emoji">❤️</span> About
          </a>
          <a href="/help" id="nav-help">
            <span className="nav-emoji">❓</span> Help
          </a>
        </div>

        <button className="navbar-signin" id="navbar-signin">
          Sign In
        </button>

        <button
          className="navbar-mobile-toggle"
          id="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`mobile-nav-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
          <a href="/" onClick={() => setMobileOpen(false)}>
            <span>🏠</span> Home
          </a>
          <a href="/medicines" onClick={() => setMobileOpen(false)}>
            <span>💊</span> Medicines
          </a>
          <a href="/about" onClick={() => setMobileOpen(false)}>
            <span>❤️</span> About
          </a>
          <a href="/help" onClick={() => setMobileOpen(false)}>
            <span>❓</span> Help
          </a>
          <button className="navbar-signin" onClick={() => setMobileOpen(false)}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;