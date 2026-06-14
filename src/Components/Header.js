import "./../Assets/CSS/Header.css";
import githubGray from "../Assets/Media/github-gray.png";
import linkedinGray from "../Assets/Media/linkedin-gray.png";
import mediumGray from "../Assets/Media/medium-gray.png";
import youtubeGray from "../Assets/Media/youtube-gray.png";
import githubWhite from "../Assets/Media/github-white.png";
import linkedinWhite from "../Assets/Media/linkedin-white.png";
import mediumWhite from "../Assets/Media/medium-white.png";
import youtubeWhite from "../Assets/Media/youtube-white.png";
import logo from "../Assets/Media/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SOCIALS = [
  { href: "https://www.github.com/niloufarmj", gray: githubGray, white: githubWhite, alt: "github" },
  { href: "https://www.linkedin.com/in/niloufar-moradi-jam/", gray: linkedinGray, white: linkedinWhite, alt: "linkedin" },
  { href: "https://medium.com/@niloufarmj", gray: mediumGray, white: mediumWhite, alt: "medium" },
  { href: "https://youtube.com/@NiloufarMJ?si=zLUjRpunvuK3EQFs", gray: youtubeGray, white: youtubeWhite, alt: "youtube" },
];

const NAV_LINKS = [
  { label: "Educational Background", path: "/education" },
  { label: "Work Experience", path: "/workexperience" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Courses", path: "/courses" },
  { label: "Art Works", path: "/artwork" },
];

function Header() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="header">
      <img className="logo" width="120px" height="120px" src={logo} alt="logo" />

      {/* Desktop social icons (hidden on mobile, moved into the hamburger) */}
      <div className="header-right">
        {SOCIALS.map((s) => (
          <a
            key={s.alt}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovered(s.alt)}
            onMouseLeave={() => setHovered(null)}
          >
            <img width="80px" height="80px" src={hovered === s.alt ? s.white : s.gray} alt={s.alt} />
          </a>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown: nav links + social links as the last row */}
      {menuOpen && <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)} />}

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          {NAV_LINKS.map((l) => (
            <button key={l.path} className="mobile-nav-link" onClick={() => go(l.path)}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="mobile-nav-socials">
          {SOCIALS.map((s) => (
            <a key={s.alt} href={s.href} target="_blank" rel="noreferrer" aria-label={s.alt}>
              <img src={s.gray} alt={s.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
