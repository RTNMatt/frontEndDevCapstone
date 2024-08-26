import logo from "./pictures/Logo .svg"
import menuIcon from "./pictures/🦆 icon _hamburger menu.svg"

const Nav = () =>{
    return(
        <nav>
            <img src={menuIcon} alt ="logo failed" />
            <img src={logo} alt ="logo failed" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    );
}




export default Nav;