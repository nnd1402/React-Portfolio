import React from 'react'
import Typed from 'react-typed'
import {Link} from 'react-scroll'

const Button = Link;

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Nenad Mihajlović</h1>
                <Typed className="typed-text"
                strings={["Web Design", "Web Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Button to="contact" smooth={true} className="btn-main-offer" >Let's Talk</Button>
            </div>
        </div>
    )
}

export default Header
