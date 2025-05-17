import  { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from "../../assets/gautamlogos.png";
import contact from "../../assets/contact.png";
import TemporaryDrawer from "./drawer";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Add an event listener to monitor screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    // Initialize the state on component mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      {isMobile ? (
        // Show the mobile drawer for smaller screens
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      ) : (
        // Show desktop menu for larger screens
        <>
          <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass="active" to="Clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
          </div>
          <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }}>
            <img src={contact} alt="" className="desktopMenuImg" />
            Contact Me
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
