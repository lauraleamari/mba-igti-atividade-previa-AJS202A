import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/"><strong>Home</strong></Link></li>
                    <li><Link to="/list"><strong>Products</strong></Link></li>
                    <li><Link to="/login"><strong>Sigin</strong></Link></li>
                    <li><Link to="/register"><strong>SiginUp</strong></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar