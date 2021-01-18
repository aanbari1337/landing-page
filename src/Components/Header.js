import React, { useState, useEffect  } from 'react';
import '../Assets/Header.css';
import {Link as Link1} from "react-scroll";
import {Link} from 'react-router-dom';
import logo_img from '../Assets/vignault.png'

function Header() {
    const [logo, setLogo] = useState(true);
    const showLogo = () =>
    {
        if(window.innerWidth <= 992)
            setLogo(true);
        else
            setLogo(false);
    }

    useEffect(() => {
        showLogo();
      });
    window.addEventListener('resize', showLogo);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {logo && <img className="navbar-brand logo-phone" src={logo_img} alt=""></img>}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="app-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to='/restaurant' className="nav-link">Restaurant</Link></li>
                            <li className="nav-item"><Link to='/patisserie' className="nav-link">Patisserie</Link></li>
                            <li className="nav-item"><Link to='/traiteur' className="nav-link">Traiteur</Link></li>
                        </ul>
                    </div>
                    {!logo && <img className="navbar-brand " src={logo_img} alt=""></img>}
                    <div className="collapse navbar-collapse" id="app-nav">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link1
                                    activeClass="active"
                                    to="menu"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={1000}
                                    className="nav-link"
                                    >Menu
                                </Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 
                                    activeClass="active"
                                    to="apropos"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    className="nav-link">
                                    A propos de nous
                                </Link1>
                            </li>
                            <li className="nav-item">
                                <Link1
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    className="nav-link">
                                    Contactez nous
                                </Link1>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Header;
