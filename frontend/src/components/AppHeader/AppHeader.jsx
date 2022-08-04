import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="header-content container">
                <div className="logo">APP</div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <NavLink to={'/login'}>Login</NavLink>
                            <NavLink to={'/users'}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
