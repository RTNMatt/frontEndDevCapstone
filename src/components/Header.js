import { Link, NavLink } from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <section>
                <div className="call-to-action">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button aria-label="On Click">Reserve Table</button>
                    </Link>
                </div>
                <div className='header-img'/>
            </section>
        </header>
    );
}




export default Header;