import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../redux/slices/contentSlices";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { navbar, status, error } = useSelector((state) => state.content);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close menu when scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (status === "loading") return <p>Loading navbar...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""} ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <img src={logo} alt="Kevin Img" className="logo" />

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navbar?.length > 0 ? (
            navbar.map((item) => (
              <li key={item.id} onClick={() => setMenuOpen(false)}>
                <Link to={item.link} duration={500} smooth={true}>
                  <i className={`nav_icon ${item.icon}`}></i> {item.name}
                </Link>
              </li>
            ))
          ) : (
            <p>No navbar data available</p>
          )}
        </ul>

        <ThemeToggle />

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </button>
      </div>
    </nav>
  );
};
