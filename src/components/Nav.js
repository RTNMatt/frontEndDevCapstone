import { useState } from "react";
import logo from "../pictures/Logo .svg";
import hamburg from "../pictures/icon _hamburger menu.svg";


const Nav = () =>{
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () =>{
        setMobileMenu(!mobileMenu);
    }


    return(
        <nav className={`navbar ${mobileMenu ? "open" : ""}`}>
            <>
            <img className="logo" src={logo} alt ="logo" />
            </>
            <div className="mobile-nav-icon" onClick={toggleMenu}> {/*Responsive mobile menu*/}
                <a href="#"><img src={hamburg} alt="menu icon"></img></a>
            </div>
             {/*Nav links*/}
            <ul className={`nav-links ${mobileMenu ? "visible" : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}




export default Nav;