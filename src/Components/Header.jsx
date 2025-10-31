import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

function Header() {
    const pathName = useLocation().pathname;
    return (
        <div className="header">
            <nav className="nav-header">
                <div className="title-header">
                    <Link to="/">
                        Océance
                    </Link>
                </div>
                <ul className="ul-header">
                    <li className={pathName === "/"? "li-header active" : "li-header"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={pathName === "/profil"? "li-header active" : "li-header"}>
                        <Link to="/profil">Profil</Link>
                    </li>
                    <li className={pathName === "/about"? "li-header active" : "li-header"}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={pathName === "/Contact"? "li-header active" : "li-header"}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;