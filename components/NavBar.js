import React from 'react'
import NavItem from './NavItem'
import Item from './Item'
import Link from 'next/link'
export default function NavBar(props) {

    return (
        <nav className="nav
            bg-dark justify-content-between">
            <Link href="/">
                <a>
                    <div className="navbar text-light px-2">Easy Park</div>
                </a>
            </Link>
            <Link href="/manager">
                <a>
                    <div className="navbar text-light">Manager</div>
                </a>
            </Link>
        </nav>
    )
}
