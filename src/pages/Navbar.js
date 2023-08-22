import React, { useState } from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import NoPage from "./NoPage";
import ScrollToTop from "../components/ScrollToTop";

export function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
            <BrowserRouter>
                
                <nav className="navbar">
                    <Link to="/" className="title">
                        <img className="logo" src="./images/logo.png" />
                    </Link>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={menuOpen ? "open" : ""}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills">Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        
    );
}