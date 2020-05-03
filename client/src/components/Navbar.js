import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Google Books</a>

                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link to="/search"
                                className={
                                    window.location.pathname === "/search" ? "nav-link active" : "nav-link"
                                } >Search
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/saved"
                                className={
                                    window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
                                } >Saved
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
