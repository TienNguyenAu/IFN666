import React from 'react';
import'./navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/chat-box.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}><img src={logo} alt="logo" className="logo"/></Link>
      
      <div className="desktopMenu">
      <Link 
        className="destopMenuListItem"
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Home</Link>
      <Link 
        className="destopMenuListItem"
        activeClass="active"
        to="abouts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} >About</Link>
      <Link className="destopMenuListItem">Résume</Link>
      <Link className="destopMenuListItem"
          activeClass="active"
          to="port"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >Portfolio</Link>
      </div>
      <Link
      activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
            <button className="destopMenuBtn">
             <img src={contactImg} alt="" className="destopMenuIMG"/> Contact Me
            </button>    
      </Link>
    </nav>
  )
}

export default Navbar