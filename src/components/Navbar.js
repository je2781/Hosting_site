import logo from './images/logo.svg'
import server1 from './images/server1.svg'
import server2 from './images/server2.svg'
import server3 from './images/server3.svg'
import server4 from './images/server4.svg'
import server5 from './images/server5.svg'
import server6 from './images/server6.svg'
import lock from './images/lock.svg'
import chat from './images/chat.svg'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

        // window.addEventListener('scroll', function() {
        //     if (window.scrollY > 50) {
        //       document.getElementById('nav').classList.add('fixed-top');
        //     } else {
        //       document.getElementById('nav').classList.remove('fixed-top');
        //     } 
        // });

    return (
        <nav id="nav" className="navbar navbar-expand-lg">
            <div className="container d-none d-lg-block">
                <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>
                
                <div className="d-inline-block navbar-centered">
                    <ul className="navbar-nav centered me-auto mb-2 mb-lg-0" style={{position: `${props.navbarCenteredPos}`, top: `${props.navbarCenteredPosT}`, left: `${props.navbarCenteredPosL}`}}>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={props.direction}>{props.leadItemName}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" aria-expanded="false">
                                Hosting Services
                            </a>
                            <ul className="dropdown-menu custom-dropdown-menu"  aria-labelledby="navbarDropdown">
                                <div className="dropdown-items-holder">
                                    <div className="items-with-icons">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <Link to="/webhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server1} alt=""/></span>
                                                    <span className="text">Web Hosting</span>
                                                </Link>
                                                <Link to="/cloudhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server2} alt=""/></span>
                                                    <span className="text">Cloud Hosting</span>
                                                </Link>
                                                <Link to="/vpshosting" className="link-with-icon">
                                                    <span className="icon"><img src={server3} alt=""/></span>
                                                    <span className="text">VPS Hosting</span>
                                                </Link>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <Link to="/wordpresshosting" className="link-with-icon">
                                                    <span className="icon"><img src={server4} alt=""/></span>
                                                    <span className="text">WordPress Hosting</span>
                                                </Link>
                                                <Link to="/dedicatedhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server5} alt=""/></span>
                                                    <span className="text">Dedicated Hosting</span>
                                                </Link>
                                                <Link to="/domainnames" className="link-with-icon">
                                                    <span className="icon"><img src={server6} alt=""/></span>
                                                    <span className="text">Domain Names</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <a href="/" className="link">Hustbee Features</a>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <a href="/" className="link">Website Builder</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link' + ` ${props.activateLink}`} to="/domainnames">Domains</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Support</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" aria-expanded="false" href="/">Pages</a>
                            <div className="dropdown-menu custom-dropdown-menu2">
                                <div className="row list-style">
                                    <div className="col-12">
                                        <a href="/" className="link">About</a>
                                        <a href="/" className="link">Blog</a>
                                        <a href="/" className="link">Privacy</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right-holder d-inline-block">
                    <ul className="navbar-nav navbar-other">
                        <li className="nav-item">
                            <Link className="nav-link btn-client-area" to="/login">
                            <img src={lock} alt=""/>Client Area</Link>
                            <div className="chat-info">Chat Available</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link chat-area" href="/">
                                <img src={chat} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid d-lg-none">
                <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa-solid fa-bars"></span>
                    <span className="fa-solid fa-xmark"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={props.direction}>{props.leadItemName}</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hosting Services
                            </a>
                            <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="dropdown-items-holder">
                                    <div className="items-with-icons">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <Link to="/webhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server1} alt=""/></span>
                                                    <span className="text">Web Hosting</span>
                                                </Link>
                                                <Link to="/cloudhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server2} alt=""/></span>
                                                    <span className="text">Cloud Hosting</span>
                                                </Link>
                                                <Link to="/vpshosting" className="link-with-icon">
                                                    <span className="icon"><img src={server3} alt=""/></span>
                                                    <span className="text">VPS Hosting</span>
                                                </Link>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <Link to="/wordpresshosting" className="link-with-icon">
                                                    <span className="icon"><img src={server4} alt=""/></span>
                                                    <span className="text">WordPress Hosting</span>
                                                </Link>
                                                <Link to="/dedicatedhosting" className="link-with-icon">
                                                    <span className="icon"><img src={server5} alt=""/></span>
                                                    <span className="text">Dedicated Hosting</span>
                                                </Link>
                                                <Link to="/domainnames" className="link-with-icon">
                                                    <span className="icon"><img src={server6} alt=""/></span>
                                                    <span className="text">Domain Names</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <a href="/" className="link">Hustbee Features</a>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <a href="/" className="link">Website Builder</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/domainnames">Domains</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Support</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" aria-expanded="false"  data-bs-toggle="dropdown" href="/">Pages</a>
                            <div className="dropdown-menu custom-dropdown-menu2">
                                <div className="row list-style">
                                    <div className="col-sm-12 col-xs-12">
                                        <a href="/" className="link">About</a>
                                        <a href="/" className="link">Blog</a>
                                        <a href="/" className="link">Privacy</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-other">
                        <li className="nav-item">
                            <Link className="nav-link btn-client-area" to="/login">
                            <img src={lock} alt=""/>Client Area</Link>
                            <div className="chat-info">Chat Available</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link chat-area" href="/">
                                <img src={chat} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>     
    )
}

export default Navbar;
