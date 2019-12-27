import React from 'react'
import NavItem from './NavItem'
export default function NavBar(props) {

    return (
        <nav className="navbar border-top fixed-bottom 
            navbar-light bg-light justify-content-center">
            <NavItem title="Home" icon="fa-home"/>
            <NavItem title="Settings" icon="fa-camera" />
        </nav>
    )
}