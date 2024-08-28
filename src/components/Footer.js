import footPic from "../pictures/restaurant.jpg";

const Footer = () =>{
    return(
        <footer>
                <>
                <img src={footPic} alt ="logo failed" />
                </>
                <>
                    <ul>
                        <h4>Doormat Navigation</h4>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </>
                <>
                    <ul>
                        <h4>Contact US</h4>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone Number</a></li>
                        <li><a href="">email</a></li>
                    </ul>
                </>
                <>
                    <ul>
                        <h4>Social Media Links</h4>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">X</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </>
        </footer>
    );
}




export default Footer;