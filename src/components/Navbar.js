import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className = "navbar-brand">
                GitHub Search
            </div>
            <ul className = "navbar-nav">
                <li className = "nav-item">
                    <NavLink exact to="/" className = "nav-link">Main</NavLink>
                </li>
                <li className = "nav-item">
                    <NavLink to="/about" className = "nav-link">Info</NavLink>
                </li>
            </ul>
        </nav>
    )
}