import './Navbar.css';
import {NavLink, useNavigate} from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <section className="inner-container">
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                 to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/posts">Alle
                            posts</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/newpost">Nieuwe
                            post</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;