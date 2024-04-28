import React, { useState } from 'react';
import'./navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/chat-box.png';
import Burger from '../../assets/burgerbtn.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState (false);
  return (
    <nav className="navbar"> {/* Navigation  Bar for website*/}
      <Link activeClass="actives"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}><img src={logo} alt="logo" className="logo"/></Link>
      <div className="desktopMenu">
      <Link 
        className="desktopMenuListItem"
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >Home</Link>
      <Link 
        className="desktopMenuListItem"
        activeClass="active"
        to="abouts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} >About</Link>
      <Link className="desktopMenuListItem"
          activeClass="active"
          to="port"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >Portfolio</Link>

      <Link className="desktopMenuListItem">Résume</Link>

      </div>
      <Link
        activeClass="actives"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>
            <button className="desktopMenuBtn">
             <img src={contactImg} alt="" className="desktopMenuIMG"/> Contact Me
            </button>    
      </Link>

      <img src={Burger} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/> {/* Navigation  Bar for smaller screen*/}
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass="active" to="abouts" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Résume</Link>
        <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass="active" to="port" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
        <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact Me</Link>
      </div>
      </nav>
  )
}

export default Navbar