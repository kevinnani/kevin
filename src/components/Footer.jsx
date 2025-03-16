import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../redux/slices/contentSlices";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import logo from '../assets/logo.png'
export const Footer = () => {
  const dispatch = useDispatch();
  const { navbar, status, error } = useSelector((state) => state.content);

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
    <>
    <div className="ft_container">
          <div className="container">
        <div className="footer_sec row">
            <div className="col-12 col-md-3 col-md- kevin_contant">
                <h2>Naveen Kumar Sarilla</h2>
            </div>
          <div className="col-12 col-md-4 ">
           <ul className="footer_nav">
           {navbar && navbar.length > 0 ? (
              navbar.map((item) => (
                <li key={item.id} onClick={() => setMenuOpen(false)}>
                  <Link to={item.link} duration={500} smooth={true}>
                     {item.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No navbar data available</p>
            )}
           </ul>
          </div>

          <div className="col-12 col-md-3">
            <div className="md_links">
            <FaLinkedin />
            <FaXTwitter />
            <FaYoutube />
            <FaFacebookSquare />

            </div>
          </div>

    

        </div>
      </div>
    </div>
    
    </>
  );
};
