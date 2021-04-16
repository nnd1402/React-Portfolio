import React from 'react'
import logo from '../NM-logos.png'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href='#'><h1 className="text-warning">Portfolio</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link smooth={true}  to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} offset={-80} to="about" className="nav-link" href="#">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} offset={-80} to="services" className="nav-link" href="#">Services</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} offset={-80} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} offset={-80} to="contact" className="nav-link" href="#">Contact</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
