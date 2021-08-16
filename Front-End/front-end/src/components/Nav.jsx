import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <NavLink className="nav_logo" to="/" style={{ textDecoration: 'none' }}>
            <img
                src="/assets/images/logo_marvel.png"
                alt="logo"
            />
            </NavLink>
            <div className="nav_links">
                <Link className="nav_links_characters" to="/" >CHARACTERS</Link>
                <Link className="nav_links_comics" to="/comics" >COMICS</Link>
                <Link className="nav_links_favorites" to="/favorites" >FAVORITES</Link>
            </div>
            <div className="nav_connection">
                <Link className="nav_connection_login">login</Link>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
