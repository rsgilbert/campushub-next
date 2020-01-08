import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { hasToken, removeToken } from './utils'


export default function NavBar(props) {
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
         setIsLoggedIn(hasToken())
    })

    const handleLogout = e => {
        removeToken()
    }
    return (
        <nav className="nav navbar
            bg-dark justify-content-between">
            <Link href="/">
                <a>
                    <div className="navbar text-light px-2">
                        CampusHub
                    </div>
                </a>
            </Link>
            { isLoggedIn 
                ? <div className="d-flex">
                    <Link href="/stock">
                        <a
                            className="navbar text-light"
                            >
                            Stock
                        </a>
                    </Link>    
                    <Link href="/login">
                        <a 
                            onClick={handleLogout} 
                            className="navbar text-warning"
                            >
                            Logout
                        </a>
                    </Link>
                </div>        
                : (
                    <Link href="/login">
                        <a>
                            <div className="navbar text-light">
                                Login
                            </div>
                        </a>
                    </Link>
                )
            }

        </nav>
    )
}
