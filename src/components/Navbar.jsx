import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../redux/slices/contentSlices";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import * as FaIcons from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import '../styles/Navbar.css'


export const Navbar = () => {

  // { "id": 3, "name": "Portfolio", "link": "portfolio", "icon": "bi bi-briefcase" },
  // { "id": 4, "name": "Blog", "link": "blog", "icon": "bi bi-journal-text" },

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handelScroll = () => {
          setIsScrolled(window.scrollY > 50);
      }
      window.addEventListener("scroll", handelScroll);
      return () => window.removeEventListener("scroll", handelScroll)
  },[])
  const dispatch = useDispatch();
  const { navbar, status, error } = useSelector((state) => state.content);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [status, dispatch]);

  // Close menu when scrolling to bottom
  useEffect(() => {
    const handleScroll = () => {
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
        {navbar && navbar.length > 0 ? (
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
       <div className=""> <ThemeToggle /></div>

        {/* Hamburger Menu Button */}
        <button className="hamburger " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </button>
      </div>

   
    </nav>
  );
};
