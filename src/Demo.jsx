import { Box } from "@mui/material";
import "./Navbar.css";
import { useEffect, useState } from "react";
import logo from '../assets/Logo.png'
import { section, select } from "framer-motion/client";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const chackMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    chackMobile();

    window.addEventListener("resize", chackMobile);

    return () => {
      window.removeEventListener("resize", chackMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobile((prevState) => !prevState);
  };

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll)
    },[])

    const scrollSelection = (id) => {
      const selection  = document.getElementById(id);

      if(selection) {
        window.scrollTo({
          top: section.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }
    
  return (
    <>
    <div>
        
    </div>
      <Box bgcolor='#090d27'
     
      >
       <div className="NavStyle" >
       <nav className="navbar" 
    //    style={{position:'fixed',
    //      background:isScrolled ? "rgb(0 2 8 / 20%)" : 'rgb(255 255 255)',
    //      backdropFilter: isScrolled ? 'blur(2px)' : 'none',
    //      transition:"background 0.3 ease, backdrop-filter 0.3 ",
    //      width:'100%'}}
         >
            <div className="logo">
            <img width={100}  src={logo} alt="" />

            </div>
          <button className="nav_toggole" onClick={toggleMenu}>
            {" "}
            {isMobile ? "×" : "☰"}{" "}
          </button>
          <div className={`nav_List ${isMobile ? "active" : ""}`}>
           <ul className="nav_links">
           <li>
              <a className="" href="">About Me</a>
              <button onClick={() => scrollSelection('Projects')}>onscrool</button>
            </li>
            <li>
              <a href="#TechStack">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
           </ul>
          </div>
        </nav>
       </div>
      </Box>
    </>
  );
};
