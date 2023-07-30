import { NavLink } from "react-router-dom";
import React from "react";
import ceika_logo from "../../../assets/ceika_logo.png"

export default function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg rounded-bottom">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>
                        <img src={ceika_logo} alt="Logo" className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-item" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active text-primary" : "nav-link text-primary"}>Follow</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active text-primary" : "nav-link text-primary"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active text-primary" : "nav-link text-primary"}>Sponsors</NavLink>
                            </li>
                        </ul>
                        <span className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle bi bi-person-circle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> </span>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><NavLink to={"/"} className={"dropdown-item text-primary bg-light"}>Login</NavLink></li>
                                <li><NavLink to={"/"} className={"dropdown-item text-primary bg-light"}>Sign up</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}