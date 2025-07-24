import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-4 bgc-primary z-1">
            <div className="container-sm">
                <NavLink className="navbar-brand fw-bolder fs-2" to="/">
                    START FRAMEWORK
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item mt-3 mt-md-0">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="about"
                            >
                                <span className="p-2 rounded">ABOUT</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mt-3 mt-md-0">
                            <NavLink className="nav-link" to="portfolio">
                                <span className="p-2 rounded">PORTFOLIO</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mt-3 mt-md-0">
                            <NavLink className="nav-link" to="contact">
                                <span className="p-2 rounded">CONTACT</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
