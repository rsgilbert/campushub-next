import React from 'react'
import NavItem from './NavItem'
import Link from 'next/link'
export default function NavBar(props) {

    return (
        <nav className="navbar border-top fixed-bottom 
            navbar-light bg-light justify-content-center">
            <Link href="/">
                <a>
                    <NavItem title="Home" icon="fa-home"/>
                </a>
            </Link>
            { props.parkId && 
                <Link href="/map/[map]" as={`/map/${props.parkId}`}>
                    <a>
                        <NavItem title="Map" icon="fa-map" />
                    </a>
                </Link>
            }
            { !props.parkId &&
                <Link href="/settings">
                    <a>                    
                        <NavItem title="Settings" icon="fa-gear" />
                    </a>
                </Link>
            }
            
        </nav>
    )
}