import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
            <img
                src="/assets/images/logo_marvel.png"
                alt="logo"
            />
            </NavLink>
            <Link to="/" style={{ textDecoration: 'none' }}>CHARACTERS</Link>
            <Link to="/comics" style={{ textDecoration: 'none' }}>COMICS</Link>
            <Link to="/favorites" style={{ textDecoration: 'none' }}>FAVORITES</Link>
            <Link style={{ textDecoration: 'none' }}>login</Link>
            <button>Sign Up</button>
        </>
    )
}
