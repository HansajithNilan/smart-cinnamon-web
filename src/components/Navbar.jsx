import React, { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, targetId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + targetId);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <Leaf className="logo-icon" size={28} />
          <span className="logo-text">SMART<span>CINNAMON</span></span>
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#components" onClick={(e) => handleNavClick(e, "#components")}>Components</a>
          <a href="#architecture" onClick={(e) => handleNavClick(e, "#architecture")}>Architecture</a>
          <a href="#gap" onClick={(e) => handleNavClick(e, "#gap")}>Research Gap</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About Us</a>
          <a href="#impact" onClick={(e) => handleNavClick(e, "#impact")}>Impact</a>
          <Link to="/documents" onClick={() => setIsOpen(false)}>Documents</Link>
          <button className="nav-cta">Get Started</button>
        </div>

        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
