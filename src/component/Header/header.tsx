import './header.css';
import { useState, useEffect } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // prevent body scroll when mobile menu is open
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="desktop-nav">
      <div className="logo">User Name</div>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-container ${open ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
