import React from 'react'
import Link from 'next/link'


export default function NavBar(props) {
    return (
        <nav className="nav
            bg-dark justify-content-between">
            <Link href="/">
                <a>
                    <div className="navbar text-light px-2">
                        CampusHub
                    </div>
                </a>
            </Link>
            <Link href="/login">
                <a>
                    <div className="navbar text-light">
                        Login
                    </div>
                </a>
            </Link>
        </nav>
    )
}
